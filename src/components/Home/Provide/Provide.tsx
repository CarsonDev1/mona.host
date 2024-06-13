'use client';
import React from 'react';
import { ThemeProvider, createTheme, styled } from '@mui/material/styles';
import { AppBar, Box, Tab, Tabs } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
import './Provide.scss';

interface TabPanelProps {
	children?: React.ReactNode;
	index: number;
	value: number;
}

function TabPanel(props: TabPanelProps) {
	const { children, value, index, ...other } = props;

	return (
		<div
			role='tabpanel'
			hidden={value !== index}
			id={`full-width-tabpanel-${index}`}
			aria-labelledby={`full-width-tab-${index}`}
			{...other}
			className={value === index ? 'zoom-in' : ''}
		>
			{value === index && (
				<Box sx={{ p: 3 }}>
					<div>{children}</div>
				</Box>
			)}
		</div>
	);
}

function a11yProps(index: number) {
	return {
		id: `full-width-tab-${index}`,
		'aria-controls': `full-width-tabpanel-${index}`,
	};
}

const StyledTabs = styled(Tabs)({
	width: '100%',
	margin: '0 auto',
	borderRadius: '99rem',
	color: '#011737',
	'& .MuiTab-root': {
		fontWeight: 600,
		fontSize: '1.4rem',
		textTransform: 'none',
		'&:hover': {
			color: '#40a9ff',
			opacity: 1,
		},
		'&.Mui-selected': {
			color: '#fff',
			background: 'transparent',
			borderRadius: '99rem',
		},
		'&.Mui-focusVisible': {
			backgroundColor: 'rgba(100, 95, 228, 0.32)',
		},
	},
});

const theme = createTheme({
	components: {
		MuiTabs: {
			styleOverrides: {
				root: {
					width: '70%',
					margin: '0 auto',
					borderRadius: '8px',
				},
			},
		},
		MuiTab: {
			styleOverrides: {
				root: {
					fontWeight: 600,
					fontSize: '1.6rem',
					textTransform: 'none',
					'&:hover': {
						color: '#40a9ff',
						opacity: 1,
					},
					'&.Mui-selected': {
						color: '#1890ff',
					},
					'&.Mui-focusVisible': {
						backgroundColor: 'rgba(100, 95, 228, 0.32)',
					},
				},
			},
		},
	},
});

const Provide = () => {
	const [value, setValue] = React.useState(0);

	const handleChange = (event: React.SyntheticEvent, newValue: number) => {
		setValue(newValue);
	};

	return (
		<ThemeProvider theme={theme}>
			<section className='sec-com provide'>
				<div className="sec-com-separator">
					<div className="section-separator gap-24 flex items-center mx-autos is-visible">
						<div className="flex-1 neutral-opaque bg-gradient-to-r from-transparent to-neutral-opaque-10"></div>
						<div className="section-separator-ani left">
							<Image
								src='/separator/section-separator-ani.png'
								width={173}
								height={14}
								alt='separator'
								className='separator-img'
							/>
						</div>
						<div className="neutral-opaque bg-neutral-opaque-6 flex-1"></div>
						<div className="moving-arrows-item relative moving-arrows-item-undefined rotate-90">
							<div></div>
							<div></div>
							<div></div>
							<div></div>
							<div></div>
							<div></div>
							<div></div>
							<div></div>
							<div></div>
							<div></div>
						</div>
						<div className="neutral-opaque bg-neutral-opaque-6 flex-1"></div>
						<div className="section-separator-ani">
							<Image
								src='/separator/section-separator-ani.png'
								width={173}
								height={14}
								alt='separator'
								className='separator-img'
							/>
						</div>
						<div className="flex-1 neutral-opaque bg-gradient-to-l from-transparent to-neutral-opaque-10"></div>
					</div>
				</div>

				<div className='container'>
					<div className='sec-com-header provide-header text-center'>
						<div className="sec-com-frame active">
							<div className="line mid top"></div>
							<div className="line mid bottom"></div>
							<div className="line side left"></div>
							<div className="line side right"></div>
							<div className="dot top left"></div>
							<div className="dot top right"></div>
							<div className="dot bottom left"></div>
							<div className="dot bottom right"></div>
						</div>

						{/* <div className='sec-com-tt-tag'></div> */}
						<h2 className='sec-com-tt provide-title'>
							Các<span className="txt-hl"> dịch vụ </span> 
							MONA.Host cung cấp
							</h2>
						<p className='sec-com-desc provide-desc'>phục vụ cho sự phát triển mạnh mẽ của quý khách hàng</p>
					</div>

					<div className="sec-com-content">
						<Box sx={{ bgcolor: 'background.paper', borderRadius: '8px', boxShadow: 'unset' }}>
							<AppBar position='static' sx={{ borderRadius: '8px 8px 0 0' }}>
								<StyledTabs
									value={value}
									onChange={handleChange}
									indicatorColor='secondary'
									textColor='primary'
									// aria-label='full width tabs example'
									allowScrollButtonsMobile
									className='tab-provide'
									variant='scrollable'
									scrollButtons='auto'
									aria-label='scrollable auto tabs example'
								>
									<Tab label='Premium Cloud Hosting' {...a11yProps(0)} />
									<Tab label='Premium Cloud VPS' {...a11yProps(1)} />
									<Tab label='Tên miền' {...a11yProps(2)} />
									<Tab label='Email doanh nghiệp' {...a11yProps(3)} />
									<Tab label='SSL' {...a11yProps(4)} />
								</StyledTabs>
							</AppBar>
							<TabPanel value={value} index={0}>
								<div className='provide-item col-10 mg-auto'>
									<div className="bgBox"></div>
									<div className='provide-item-content'>
										<h5 className='content-item-tt'>Ngôi nhà cho website của bạn</h5>
										<div className='content-list'>
											{[
												'Xoá bỏ hạn chế về kỹ thuật trong việc chuyển đổi số cho doanh nghiệp',
												'Xoá bỏ ma trận giá phức tạp, được chăm sóc và tư vấn toàn diện từ chuyên gia',
												'Ngôi nhà thực sự của website, bảo vệ doanh nghiệp khỏi mọi yếu tố gây hại trong môi trường Internet',
											].map((text, idx) => (
												<div className='content-item' key={idx}>
													<Image
														src='/home/check-provide.svg'
														width={50}
														height={50}
														alt='check-provide'
														className='check-provide'
													/>
													<span className='content-text'>{text}</span>
												</div>
											))}
										</div>
										<Link
											href='#'
											className='btn btn-pri banner-link'
										>
											<span className='txt'>Tìm hiểu thêm về Premium Cloud Hosting</span>
											<svg
												className="HoverArrow"
												width={10}
												height={10}
												viewBox="0 0 10 10"
												aria-hidden="true"
											>
												<g fillRule="evenodd">
													<path className="HoverArrow__linePath" d="M0 5h7" />
													<path className="HoverArrow__tipPath" d="M1 1l4 4-4 4" />
												</g>
											</svg>
										</Link>
									</div>
									<div className='provide-item-image'>
										<Image
											src='/home/provide-item-01.svg'
											width={500}
											height={400}
											alt='provide-item-01'
											className='provide-image'
											loading='lazy'
										/>
									</div>
								</div>
							</TabPanel>
							<TabPanel value={value} index={1}>
								<div className='provide-item col-10 mg-auto'>
									<div className="bgBox"></div>
									<div className='provide-item-content'>
										<h5 className='content-item-tt'>Dành cho hệ thống lớn và phức tạp</h5>
										<div className='content-list'>
											{[
												'Toàn quyền kiểm soát hệ thống, hiệu năng mạnh mẽ và linh hoạt',
												'Đường truyền, phần cứng, bảo mật đều là hàng đầu thị trường',
												'Đáp ứng mọi loại hệ thống mà bạn có, hỗ trợ set up miễn phí từ chuyên gia',
											].map((text, idx) => (
												<div className='content-item' key={idx}>
													<Image
														src='/home/check-provide.svg'
														width={50}
														height={50}
														alt='check-provide'
														className='check-provide'
													/>
													<span className='content-text'>{text}</span>
												</div>
											))}
										</div>
										<Link
											href='#'
											className='btn btn-pri banner-link'
										>
											<span className='txt'>Tìm hiểu thêm về Premium Cloud VPS</span>
											<svg
												className="HoverArrow"
												width={10}
												height={10}
												viewBox="0 0 10 10"
												aria-hidden="true"
											>
												<g fillRule="evenodd">
													<path className="HoverArrow__linePath" d="M0 5h7" />
													<path className="HoverArrow__tipPath" d="M1 1l4 4-4 4" />
												</g>
											</svg>
										</Link>
									</div>
									<div className='provide-item-image'>
										<Image
											src='/home/provide-item-02.svg'
											width={500}
											height={400}
											alt='provide-item-02'
											className='provide-image'
											loading='lazy'
										/>
									</div>
								</div>
							</TabPanel>
							<TabPanel value={value} index={2}>
								<div className='provide-item col-10 mg-auto'>
									<div className="bgBox"></div>
									<div className='provide-item-content'>
										<h5 className='content-item-tt'>Định danh trên không gian mạng</h5>
										<div className='content-list'>
											{[
												'MONA.Host cung cấp nhiều đuôi tên miền độc lạ, đa dạng, gợi ý từ AI giúp bạn dễ dàng lựa chọn',
												'Hệ thống quản lý tinh gọn, dễ dàng thao tác sử dụng, được phát triển từ chuyên gia của MONA',
											].map((text, idx) => (
												<div className='content-item' key={idx}>
													<Image
														src='/home/check-provide.svg'
														width={50}
														height={50}
														alt='check-provide'
														className='check-provide'
													/>
													<span className='content-text'>{text}</span>
												</div>
											))}
										</div>
										<Link
											href='#'
											className='btn btn-pri banner-link'
										>
											<span className='txt'>Lựa chọn tên miền đúng ý ngay</span>
											<svg
												className="HoverArrow"
												width={10}
												height={10}
												viewBox="0 0 10 10"
												aria-hidden="true"
											>
												<g fillRule="evenodd">
													<path className="HoverArrow__linePath" d="M0 5h7" />
													<path className="HoverArrow__tipPath" d="M1 1l4 4-4 4" />
												</g>
											</svg>
										</Link>
									</div>
									<div className='provide-item-image'>
										<Image
											src='/home/provide-item-03.svg'
											width={550}
											height={400}
											alt='provide-item-03'
											className='provide-image'
											loading='lazy'
										/>
									</div>
								</div>
							</TabPanel>
							<TabPanel value={value} index={3}>
								<div className='provide-item col-10 mg-auto'>
									<div className="bgBox"></div>
									<div className='provide-item-content'>
										<h5 className='content-item-tt'>Từ đại lý cao cấp của Google ở Việt Nam</h5>
										<div className='content-list'>
											{[
												'Gia tăng sự tin tưởng, quảng bá thương hiệu của doanh nghiệp',
												'Quản lý nội dung email, chống spam vô cùng hiệu quả',
												'Hỗ trợ bởi MONA.Host - đại lý cao cấp của Google ở Việt Nam',
											].map((text, idx) => (
												<div className='content-item' key={idx}>
													<Image
														src='/home/check-provide.svg'
														width={50}
														height={50}
														alt='check-provide'
														className='check-provide'
													/>
													<span className='content-text'>{text}</span>
												</div>
											))}
										</div>
										<Link
											href='#'
											className='btn btn-pri banner-link'
										>
											<span className='txt'>Tìm hiểu thêm về Email doanh nghiệp ngay</span>
											<svg
												className="HoverArrow"
												width={10}
												height={10}
												viewBox="0 0 10 10"
												aria-hidden="true"
											>
												<g fillRule="evenodd">
													<path className="HoverArrow__linePath" d="M0 5h7" />
													<path className="HoverArrow__tipPath" d="M1 1l4 4-4 4" />
												</g>
											</svg>
										</Link>
									</div>
									<div className='provide-item-image'>
										<Image
											src='/home/provide-item-04.svg'
											width={550}
											height={400}
											alt='provide-item-04'
											className='provide-image'
											loading='lazy'
										/>
									</div>
								</div>
							</TabPanel>
							<TabPanel value={value} index={4}>
								<div className='provide-item col-10 mg-auto'>
									<div className="bgBox"></div>
									<div className='provide-item-content'>
										<h5 className='content-item-tt'>Bảo mật thông tin</h5>
										<div className='content-list'>
											{[
												'Bảo vệ thông tin của bạn và khách hàng trên không gian mạng',
												'Tuân thủ các quy định an ninh mạng',
												'Giúp cải thiện uy tín doanh nghiệp, cải thiện SEO',
												'Nếu website của bạn là thương mại điện tử thì SSL là bắt buộc',
											].map((text, idx) => (
												<div className='content-item' key={idx}>
													<Image
														src='/home/check-provide.svg'
														width={50}
														height={50}
														alt='check-provide'
														className='check-provide'
													/>
													<span className='content-text'>{text}</span>
												</div>
											))}
										</div>
										<Link
											href='#'
											className='btn btn-pri banner-link'
										>
											<span className='txt'>Tìm hiểu thêm về Premium Cloud Hosting</span>
											<svg
												className="HoverArrow"
												width={10}
												height={10}
												viewBox="0 0 10 10"
												aria-hidden="true"
											>
												<g fillRule="evenodd">
													<path className="HoverArrow__linePath" d="M0 5h7" />
													<path className="HoverArrow__tipPath" d="M1 1l4 4-4 4" />
												</g>
											</svg>
										</Link>
									</div>
									<div className='provide-item-image'>
										<Image
											src='/home/provide-item-05.svg'
											width={550}
											height={400}
											alt='provide-item-05'
											className='provide-image'
											loading='lazy'
										/>
									</div>
								</div>
							</TabPanel>
						</Box>
					</div>
				</div>
			</section>
		</ThemeProvider>
	);
};

export default Provide;
