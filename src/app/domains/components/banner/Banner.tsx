'use client';
import { Alert, Box, Button, CircularProgress, Snackbar, TextField, TextareaAutosize } from '@mui/material';
import Image from 'next/image';
import React, { useState, ChangeEvent, useEffect, useRef } from 'react';
import { IoSearch } from 'react-icons/io5';
import { TextareaAutosize as BaseTextareaAutosize } from '@mui/base/TextareaAutosize';
import { styled } from '@mui/system';

import './banner.scss';
import ResultSearch from '@/app/domains/components/result-search/ResultSearch';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import { postApiResponse } from '@/app/api/searchApi';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { ModeToggle } from '@/components/toggle-mode';
import { searchAI } from '@/app/api/searchAI';

const blue = {
	100: '#DAECFF',
	200: '#b6daff',
	400: '#3399FF',
	500: '#007FFF',
	600: '#0072E5',
	900: '#003A75',
};

const grey = {
	50: '#F3F6F9',
	100: '#E5EAF2',
	200: '#DAE2ED',
	300: '#C7D0DD',
	400: '#B0B8C4',
	500: '#9DA8B7',
	600: '#6B7A90',
	700: '#434D5B',
	800: '#303740',
	900: '#1C2025',
};

const Textarea = styled(BaseTextareaAutosize)(
	({ theme }) => `
    box-sizing: border-box;
    width: 320px;
    font-family: 'IBM Plex Sans', sans-serif;
    font-size: 0.875rem;
    font-weight: 400;
    line-height: 1.5;
    padding: 8px 12px;
    border-radius: 8px;
    color: ${theme.palette.mode === 'dark' ? grey[300] : grey[900]};
    background: ${theme.palette.mode === 'dark' ? grey[900] : '#fff'};
    border: 1px solid ${theme.palette.mode === 'dark' ? grey[700] : grey[200]};
    box-shadow: 0px 2px 2px ${theme.palette.mode === 'dark' ? grey[900] : grey[50]};

    &:hover {
      border-color: ${blue[400]};
    }

    &:focus {
      border-color: ${blue[400]};
      box-shadow: 0 0 0 3px ${theme.palette.mode === 'dark' ? blue[600] : blue[200]};
    }

    // firefox
    &:focus-visible {
      outline: 0;
    }
  `
);

interface BannerProps {
	suffixFocus: string;
	setSuffixFocus: any;
	textFieldRef: React.RefObject<HTMLInputElement>;
}

const Banner: React.FC<BannerProps> = ({ suffixFocus, setSuffixFocus, textFieldRef }) => {
	const [isAiSearch, setIsAiSearch] = useState<boolean>(false);
	const [domain, setDomain] = useState<string>('');
	const [prompt, setPrompt] = useState<string>('');
	const [searchButtonText, setSearchButtonText] = useState<string>('Kiểm tra tên miền');
	const searchDomainRef = useRef<HTMLDivElement>(null);
	const [previousSuffix, setPreviousSuffix] = useState<string | null>(null);
	const [openNoti, setOpenNoti] = useState<boolean>(false);
	const router = useRouter();
	const [searchParam, setSearchParam] = useState<string>('');
	const searchParams = useSearchParams();

	const search = searchParams.get('keyword');

	const { data, error, isLoading, refetch } = useQuery({
		queryKey: [isAiSearch ? 'prompt' : 'keyword'],
		queryFn: () =>
			isAiSearch ? searchAI({ prompt: prompt }, 20) : postApiResponse({ keyword: domain || search }, 20),
		enabled: !!(isAiSearch ? prompt : search),
	});

	const results = { data };
	const searchResult = results?.data?.results;

	const handleKeyDown = (event: React.KeyboardEvent<HTMLTextAreaElement | HTMLInputElement>): void => {
		if (event.key === 'Enter') {
			handleSearch();
		}
	};

	useEffect(() => {
		if (searchResult && searchDomainRef.current) {
			searchDomainRef.current.scrollIntoView({ behavior: 'smooth' });
		}
		if (suffixFocus && textFieldRef.current) {
			textFieldRef.current.focus();
		}
		if (search) {
			setDomain(search);
		}
	}, [search, searchResult, textFieldRef, suffixFocus]);

	const handleSearch = () => {
		if (!domain && !suffixFocus && !search) {
			setOpenNoti(true);
			return;
		}
		if (domain || suffixFocus || search) {
			if (domain.split('.')[0].length < 3) {
				setOpenNoti(true);
				return;
			}
			let updatedDomain = domain;
			if (suffixFocus) {
				updatedDomain += suffixFocus;
			}
			setDomain(updatedDomain);
			refetch();
			if (searchDomainRef.current) {
				searchDomainRef.current.scrollIntoView({ behavior: 'smooth' });
			}

			setSearchParam(updatedDomain);
			router.push(`/domains/?keyword=${encodeURIComponent(updatedDomain)}`);
		}
	};

	const handleCloseNoti = (event?: React.SyntheticEvent | Event, reason?: string) => {
		if (reason === 'clickaway') {
			return;
		}

		setOpenNoti(false);
	};

	const handleToggle = (mode: boolean): void => {
		setIsAiSearch(mode);
		setDomain('');
		setSearchButtonText(mode ? 'Tạo tên miền' : 'Kiểm tra tên miền');
	};

	const handleInputChange = (event: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>): void => {
		const inputValue = event.target.value;
		if (isAiSearch) {
			setPrompt(inputValue);
		} else {
			setDomain(inputValue);
		}
		if (inputValue === '') {
			setSuffixFocus(null);
		} else {
			if (inputValue.slice(0, -1) !== previousSuffix) {
				setSuffixFocus(null);
			}
		}
		setPreviousSuffix(inputValue);
	};

	return (
		<>
			<div className='relative pt-2 pb-2 overflow-hidden isolate bg-gray-50 md:pt-10 md:pb-10'>
				<Snackbar
					open={openNoti}
					autoHideDuration={2000}
					onClose={handleCloseNoti}
					className='absolute left-[42%] -top-[70%] z-50'
				>
					<Alert onClose={handleCloseNoti} severity='error' variant='filled'>
						Tên miền phải có ít nhất 3 ký tự
					</Alert>
				</Snackbar>
				<Image
					src='/domains/decor-panda.png'
					width={300}
					height={300}
					fetchPriority='high'
					decoding='async'
					alt='decor-banner'
					className='absolute bottom-0 w-72 h-72 left-0 hidden md:block xl:left-[15%]'
				/>
				<div className='absolute inset-0 -z-10'>
					<div className='absolute -top-8 right-1/2 sm:top-5 aspect-[969/887] w-[969px]'>
						<Image
							src='/domains/background-banner.webp'
							alt='background-banner'
							width={1938}
							height={1774}
							fetchPriority='high'
							decoding='async'
							className='absolute inset-0 size-full'
							style={{ color: 'transparent' }}
						/>
						<div className='absolute inset-0'>
							<canvas
								className='absolute inset-0 w-full h-full'
								aria-hidden='true'
								width='403'
								height='363'
								style={{
									left: 'calc(31.5rem)',
									top: 'calc(1.5625rem)',
									width: 'calc(25.1875rem)',
									height: 'calc(22.6875rem)',
								}}
							></canvas>
							<svg width='0' height='0' aria-hidden='true'>
								<path d='M296 224V187.314C296 185.192 296.843 183.157 298.343 181.657L352.657 127.343C354.157 125.843 356.192 125 358.314 125H383'></path>
							</svg>
							<svg width='0' height='0' aria-hidden='true'>
								<path d='M294 226H209.314C207.192 226 205.157 226.843 203.657 228.343L86.8431 345.157C85.3428 346.657 83.308 347.5 81.1863 347.5H20'></path>
							</svg>
							<svg width='0' height='0' aria-hidden='true'>
								<path d='M54 290V133.657C54 132.596 54.4214 131.579 55.1716 130.828L89.8284 96.1716C90.5786 95.4214 91 94.404 91 93.3431V16'></path>
							</svg>
							<svg width='0' height='0' aria-hidden='true'>
								<path d='M287 89V70.5L314.157 43.3431C315.657 41.8429 316.5 39.808 316.5 37.6863V21'></path>
							</svg>
						</div>
						<Image
							src='/domains/decor-background.webp'
							width={1938}
							height={1774}
							alt='decor-background'
							fetchPriority='high'
							decoding='async'
							className='absolute inset-0 size-full'
							style={{ color: 'transparent' }}
						/>
						<div className='absolute inset-0 banner-mask'>
							<div className='square'></div>
						</div>
					</div>
					<div className='absolute -top-8 right-1/2 origin-right -scale-x-100 sm:top-5 aspect-[969/887] w-[969px]'>
						<Image
							src='/domains/background-banner.webp'
							alt='background-banner'
							width={1938}
							height={1774}
							fetchPriority='high'
							decoding='async'
							className='absolute inset-0 size-full'
							style={{ color: 'transparent' }}
						/>
						<div className='absolute inset-0'>
							<canvas
								className='absolute inset-0 w-full h-full'
								aria-hidden='true'
								width='403'
								height='363'
								style={{
									left: 'calc(31.5rem)',
									top: 'calc(1.5625rem)',
									width: 'calc(25.1875rem)',
									height: 'calc(22.6875rem)',
								}}
							></canvas>
							<svg width='0' height='0' aria-hidden='true'>
								<path d='M296 224V187.314C296 185.192 296.843 183.157 298.343 181.657L352.657 127.343C354.157 125.843 356.192 125 358.314 125H383'></path>
							</svg>
							<svg width='0' height='0' aria-hidden='true'>
								<path d='M294 226H209.314C207.192 226 205.157 226.843 203.657 228.343L86.8431 345.157C85.3428 346.657 83.308 347.5 81.1863 347.5H20'></path>
							</svg>
							<svg width='0' height='0' aria-hidden='true'>
								<path d='M54 290V133.657C54 132.596 54.4214 131.579 55.1716 130.828L89.8284 96.1716C90.5786 95.4214 91 94.404 91 93.3431V16'></path>
							</svg>
							<svg width='0' height='0' aria-hidden='true'>
								<path d='M287 89V70.5L314.157 43.3431C315.657 41.8429 316.5 39.808 316.5 37.6863V21'></path>
							</svg>
						</div>
						<Image
							src='/domains/decor-background.webp'
							width={1938}
							height={1774}
							alt='decor-background'
							fetchPriority='high'
							decoding='async'
							className='absolute inset-0 size-full'
							style={{ color: 'transparent' }}
						/>
						<div className='absolute inset-0 z-10 banner-mask'>
							<div className='square'></div>
						</div>
					</div>
				</div>
				<div className='absolute -z-10 inset-x-0 bottom-[calc(-702/16*1rem)] top-0 bg-[radial-gradient(154.86%_76.83%_at_50%_22.26%,theme(colors.gray.50/0.4)_8.98%,theme(colors.gray.50)_45.99%)]'></div>
				<svg
					viewBox='-1000 0 3504 918'
					aria-hidden='true'
					className='absolute -top-6 left-1/2 -z-10 ml-[calc(-3504/2/16*1rem)] w-[calc(3504/16*1rem)] mix-blend-color-burn'
				>
					<path fill='url(#hero-gradient)' d='M3504 918H-1000V0h3504v918Z'></path>
					<defs>
						<radialGradient
							id='hero-gradient'
							cx='0'
							cy='0'
							r='1'
							gradientTransform='matrix(0 707.279 -1739.2 0 741 159.991)'
							gradientUnits='userSpaceOnUse'
						>
							<stop stop-color='#6C47FF' stop-opacity='0.6'></stop>
							<stop offset='.412' stop-color='#FFF963' stop-opacity='.8'></stop>
							<stop offset='.623' stop-color='#38DAFD' stop-opacity='.6'></stop>
							<stop offset='.919' stop-color='#6248F6' stop-opacity='0'></stop>
						</radialGradient>
					</defs>
				</svg>
				<div className='mx-auto w-full px-6 sm:max-w-[40rem] md:max-w-[48rem] md:px-8 lg:max-w-[64rem] xl:max-w-[80rem]'>
					<div className='relative pt-12 pb-12 ml-auto md:pt-36 md:pb-36'>
						<div className='mx-auto text-center lg:w-full'>
							<h1 className='mt-8 uppercase text-wrap text-4xl md:text-5xl font-semibold text-gray-950 xl:text-5xl xl:[line-height:1.125]'>
								Tìm kiếm - mua tên miền
							</h1>
							<h3 className='uppercase text-wrap text-xl md:text-2xl font-semibold text-gray-950 xl:text-2xl xl:[line-height:1.125]'>
								Chỉ trong <span className='font-bold'>3 giây</span>
							</h3>
							<p className='hidden max-w-2xl mx-auto mt-8 text-lg text-gray-700 text-wrap sm:block'>
								Sở hữu tên miền phù hợp và độc đáo cho doanh nghiệp của bạn
								<br className='hidden sm:block' />
								với Domain Sugestion by MONA AI
							</p>
							<div>
								<div className='w-[100%] mx-auto mt-6 xl:w-[37%] lg:w-[60%] sm:w-[70%]'>
									<Box className='toggle-container'>
										<div
											className={`toggle-option ${!isAiSearch ? 'active' : ''}`}
											onClick={() => handleToggle(false)}
										>
											<span className='text-xs text-gray-700 text-wrap xl:text-sm'>
												Tìm tên miền mới
											</span>
										</div>
										<div
											className={`toggle-option ${isAiSearch ? 'active' : ''}`}
											onClick={() => handleToggle(true)}
										>
											<svg
												xmlns='http://www.w3.org/2000/svg'
												xmlnsXlink='http://www.w3.org/1999/xlink'
												aria-hidden='true'
												role='img'
												className='component-iconify MuiBox-root css-1wit1pw iconify iconify--heroicons'
												width='1em'
												height='1em'
												viewBox='0 0 24 24'
											>
												<path
													fill='#3a3a3a'
													fill-rule='evenodd'
													d='M9 4.5a.75.75 0 0 1 .721.544l.813 2.846a3.75 3.75 0 0 0 2.576 2.576l2.846.813a.75.75 0 0 1 0 1.442l-2.846.813a3.75 3.75 0 0 0-2.576 2.576l-.813 2.846a.75.75 0 0 1-1.442 0l-.813-2.846a3.75 3.75 0 0 0-2.576-2.576l-2.846-.813a.75.75 0 0 1 0-1.442l2.846-.813A3.75 3.75 0 0 0 7.466 7.89l.813-2.846A.75.75 0 0 1 9 4.5m9-3a.75.75 0 0 1 .728.568l.258 1.036a2.63 2.63 0 0 0 1.91 1.91l1.036.258a.75.75 0 0 1 0 1.456l-1.036.258a2.63 2.63 0 0 0-1.91 1.91l-.258 1.036a.75.75 0 0 1-1.456 0l-.258-1.036a2.63 2.63 0 0 0-1.91-1.91l-1.036-.258a.75.75 0 0 1 0-1.456l1.036-.258a2.63 2.63 0 0 0 1.91-1.91l.258-1.036A.75.75 0 0 1 18 1.5M16.5 15a.75.75 0 0 1 .712.513l.394 1.183c.15.447.5.799.948.948l1.183.395a.75.75 0 0 1 0 1.422l-1.183.395a1.5 1.5 0 0 0-.948.948l-.395 1.183a.75.75 0 0 1-1.422 0l-.395-1.183a1.5 1.5 0 0 0-.948-.948l-1.183-.395a.75.75 0 0 1 0-1.422l1.183-.395a1.5 1.5 0 0 0 .948-.948l.395-1.183A.75.75 0 0 1 16.5 15'
													clip-rule='evenodd'
												></path>
											</svg>
											<span className='text-sm text-gray-700 text-wrap '>
												Tạo tên miền bằng AI
											</span>
										</div>
										<div
											className='toggle-background'
											style={{
												transform: isAiSearch ? 'translateX(100%)' : 'translateX(0%)',
											}}
										></div>
									</Box>
								</div>

								<Box
									display='flex'
									justifyContent='center'
									mt={4}
									position='relative'
									sx={{
										width: '100%',
										flexDirection: { xs: 'column', md: 'row' },
										alignItems: 'center',
									}}
								>
									<Box
										width={{ xs: '100%', md: '66%' }}
										sx={{
											'& textarea, & input': {
												width: '100%',
											},
										}}
									>
										{isAiSearch ? (
											<Textarea
												className='w-full px-2 pb-8 border rounded-md border-slate-300 focus:ring-1 focus:ring-[#3399FF] focus:border-[#3399FF]'
												placeholder='Viết mô tả về dự án của bạn, ví dụ: "Tổ chức phi lợi nhuận giúp trồng cây..."'
												value={prompt}
												onChange={handleInputChange}
												minRows={3}
												maxRows={6}
											/>
										) : (
											<TextField
												className='bg-white rounded-md focus:border-slate-100'
												fullWidth
												variant='outlined'
												placeholder='Nhập tên miền của bạn...'
												value={suffixFocus ? suffixFocus : domain}
												ref={textFieldRef}
												sx={{
													'& .MuiOutlinedInput-root': {
														'&.Mui-focused fieldset': {
															borderColor: '#3399FF',
														},
														'&:hover fieldset': {
															borderColor: '#3399FF',
														},
													},
												}}
												onKeyDown={(event: React.KeyboardEvent<HTMLDivElement>) =>
													handleKeyDown(event as React.KeyboardEvent<HTMLInputElement>)
												}
												onChange={handleInputChange}
											/>
										)}
									</Box>
								</Box>

								<Box display='flex' justifyContent='center' mt={2} position='relative'>
									<Button
										variant='contained'
										onClick={handleSearch}
										disabled={isLoading}
										color='primary'
										style={{
											display: 'flex',
											alignItems: 'center',
											gap: '6px',
											backgroundColor: '#1ec0f2',
											color: 'white',
											padding: '10px 20px',
											borderRadius: '20px',
											boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
											transition: 'all 0.3s ease',
										}}
										onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#1ec0f2')}
										onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#1ec0f2')}
									>
										{isAiSearch ? (
											<svg
												xmlns='http://www.w3.org/2000/svg'
												xmlnsXlink='http://www.w3.org/1999/xlink'
												aria-hidden='true'
												role='img'
												className='component-iconify MuiBox-root css-1wit1pw iconify iconify--heroicons'
												width='1em'
												height='1em'
												viewBox='0 0 24 24'
											>
												<path
													fill='currentColor'
													fill-rule='evenodd'
													d='M9 4.5a.75.75 0 0 1 .721.544l.813 2.846a3.75 3.75 0 0 0 2.576 2.576l2.846.813a.75.75 0 0 1 0 1.442l-2.846.813a3.75 3.75 0 0 0-2.576 2.576l-.813 2.846a.75.75 0 0 1-1.442 0l-.813-2.846a3.75 3.75 0 0 0-2.576-2.576l-2.846-.813a.75.75 0 0 1 0-1.442l2.846-.813A3.75 3.75 0 0 0 7.466 7.89l.813-2.846A.75.75 0 0 1 9 4.5m9-3a.75.75 0 0 1 .728.568l.258 1.036a2.63 2.63 0 0 0 1.91 1.91l1.036.258a.75.75 0 0 1 0 1.456l-1.036.258a2.63 2.63 0 0 0-1.91 1.91l-.258 1.036a.75.75 0 0 1-1.456 0l-.258-1.036a2.63 2.63 0 0 0-1.91-1.91l-1.036-.258a.75.75 0 0 1 0-1.456l1.036-.258a2.63 2.63 0 0 0 1.91-1.91l.258-1.036A.75.75 0 0 1 18 1.5M16.5 15a.75.75 0 0 1 .712.513l.394 1.183c.15.447.5.799.948.948l1.183.395a.75.75 0 0 1 0 1.422l-1.183.395a1.5 1.5 0 0 0-.948.948l-.395 1.183a.75.75 0 0 1-1.422 0l-.395-1.183a1.5 1.5 0 0 0-.948-.948l-1.183-.395a.75.75 0 0 1 0-1.422l1.183-.395a1.5 1.5 0 0 0 .948-.948l.395-1.183A.75.75 0 0 1 16.5 15'
													clip-rule='evenodd'
												></path>
											</svg>
										) : (
											<IoSearch fill='white' />
										)}
										<span style={{ fontSize: '14px', fontWeight: 'bold' }}>{searchButtonText}</span>
									</Button>
								</Box>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div ref={searchDomainRef}>
				{error && <div className='text-red-500'>Đã xảy ra lỗi. Vui lòng thử lại.</div>}
				{searchResult && <ResultSearch searchResult={searchResult} />}
			</div>
		</>
	);
};

export default Banner;
