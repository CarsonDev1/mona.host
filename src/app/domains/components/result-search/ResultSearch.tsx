import React, { useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { CircularProgress } from '@mui/material';
import { MdAddShoppingCart } from 'react-icons/md';
import { FaSearch } from 'react-icons/fa';
import { getCheckAvailable } from '@/app/api/checkAvailable';
import { useQuery } from '@tanstack/react-query';
import InfoDomain from '@/app/domains/components/info-domain/InfoDomain';
import { getCheckWhoIS } from '@/app/api/checkWhois';
import { Slide, toast } from 'react-toastify';
import './result-search.scss';

interface SearchResult {
	suffix: string;
	name: string;
	buy_price: number;
	renew_price: number;
}

interface ResultSearchProps {
	searchResult: SearchResult[];
}

const removeFromChar = (inputString: string, char: string) => {
	const index = inputString?.indexOf(char);
	if (index === -1) {
		return inputString;
	}
	return inputString?.slice(0, index);
};

const ResultSearch: React.FC<ResultSearchProps> = ({ searchResult }) => {
	const [open, setOpen] = useState(false);
	const [selectedDomain, setSelectedDomain] = useState<SearchResult | null>(null);
	const [selectedDomainInfo, setSelectedDomainInfo] = useState<any | null>(null);
	const [loadingWhois, setLoadingWhois] = useState(false);
	const [isButtonDisabled, setIsButtonDisabled] = useState(false);

	const notifySuccess = (names: string[]) =>
		toast.success(`Đã thêm tên miền ${names.join(', ')} vào giỏ hàng`, {
			position: 'top-center',
			autoClose: 4000,
			pauseOnHover: false,
			className: 'custom-toast',
			transition: Slide,
		});

	const handleOpenInfo = async (domain: SearchResult) => {
		setSelectedDomain(domain);
		setOpen(true);
		setLoadingWhois(true);
		try {
			const response = await getCheckWhoIS(domain.name);
			setSelectedDomainInfo(response);
		} catch (error) {
			console.error('Error fetching WHOIS data:', error);
		} finally {
			setLoadingWhois(false);
		}
	};

	const handleCloseInfo = () => {
		setOpen(false);
		setSelectedDomain(null);
		setSelectedDomainInfo(null);
	};

	const addToCart = (domain: SearchResult) => {
		setIsButtonDisabled(true);
		setTimeout(() => setIsButtonDisabled(false), 4000);

		const cart = JSON.parse(localStorage.getItem('cart') || '[]');

		const isDomainExist = cart.some((item: SearchResult) => item.name === domain.name);

		if (isDomainExist) {
			toast.warning(`Tên miền đã tồn tại trong giỏ hàng`, {
				position: 'top-center',
				autoClose: 4000,
				pauseOnHover: false,
				className: 'custom-toast',
				transition: Slide,
			});
			return;
		}
		cart.push({ ...domain, type: 'domain' });
		localStorage.setItem('cart', JSON.stringify(cart));
		window.dispatchEvent(new Event('cartUpdated'));
		notifySuccess([domain.name]);
	};

	const names = searchResult?.map((result) => result.name);

	const fetchCheckAvailable = async () => {
		const results = await Promise.all(
			names.map(async (name) => {
				try {
					const response = await getCheckAvailable(name);
					return response;
				} catch (error) {
					console.error('Error fetching data:', error);
					return null;
				}
			})
		);

		return results;
	};

	const { data, error, isLoading } = useQuery({
		queryKey: ['checkAvailable', names],
		queryFn: fetchCheckAvailable,
		enabled: searchResult?.length > 0,
	});
	const checkResults = data;

	return (
		<div className='px-4 py-24 mx-auto max-w-7xl sm:px-6 lg:px-8'>
			<Card className=''>
				<Typography
					gutterBottom
					variant='h5'
					component='div'
					className='p-5 text-3xl font-semibold text-center text-white  bg-[#1ec0f2]'
				>
					Kết quả tìm kiếm
				</Typography>
				<CardContent className='flex flex-col gap-2'>
					<div className='flex items-center justify-center'>{isLoading && <CircularProgress />}</div>
					{checkResults?.map((result, index) => (
						<div
							key={index}
							className={`flex flex-col md:flex-row items-center justify-between p-4 border rounded-md shadow-sm border-slate-300 ${
								result?.status === 'available' ? 'bg-white' : 'bg-slate-300'
							}`}
						>
							<Typography
								variant='h4'
								color='text.secondary'
								className={`${
									result?.status === 'available'
										? 'font-semibold'
										: 'text-slate-400 opacity-55 font-semibold'
								}`}
							>
								{removeFromChar(result?.domain, '.')}
								<span
									className={`${
										result?.status === 'available' ? 'text-orange-500' : 'text-slate-400'
									}`}
								>
									{result?.suffix}
								</span>
							</Typography>
							<div className='flex flex-col items-center gap-4 mt-4 md:flex-row md:mt-0'>
								{result?.status === 'available' ? (
									<div className='inline-flex flex-col items-center md:items-end'>
										<span className='text-xl text-[#1ec0f2] font-semibold'>
											{result?.buy_price.toLocaleString()}đ
										</span>
										<span>
											Gia hạn:{' '}
											<span className='font-semibold'>
												{result?.renew_price.toLocaleString()}đ/năm
											</span>
										</span>
									</div>
								) : (
									<span className='text-lg text-slate-400'>Tên miền đã có người đăng ký</span>
								)}
								<div className='inline-flex flex-col items-center justify-center gap-4'>
									{result?.status === 'available' ? (
										<div
											className={`p-2 rounded-md bg-[#1ec0f2] hover:bg-[#5180e5] cursor-pointer ${
												isButtonDisabled ? 'opacity-50 cursor-not-allowed' : ''
											}`}
											onClick={() => !isButtonDisabled && addToCart(searchResult[index])}
										>
											<div className='flex items-center gap-2'>
												<MdAddShoppingCart fill='white' />
												<span className='text-lg text-white text-nowrap'>
													Thêm vào giỏ hàng
												</span>
											</div>
										</div>
									) : (
										<div
											className='p-2 bg-white rounded-md hover:bg-[#eeee] cursor-pointer'
											onClick={() => handleOpenInfo(searchResult[index])}
										>
											<div className='flex items-center gap-2'>
												<FaSearch />
												<span className='text-lg text-nowrap'>Xem thông tin</span>
											</div>
										</div>
									)}
								</div>
							</div>
						</div>
					))}
				</CardContent>
			</Card>
			<InfoDomain
				open={open}
				handleClose={handleCloseInfo}
				searchResult={selectedDomain}
				domainInfo={selectedDomainInfo}
				loadingWhois={loadingWhois}
			/>
		</div>
	);
};

export default ResultSearch;
