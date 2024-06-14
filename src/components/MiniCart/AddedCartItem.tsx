import React, { useEffect, useState } from 'react';
import { FaRegTrashAlt } from 'react-icons/fa';
import { styled, createTheme, ThemeProvider } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion, { AccordionProps } from '@mui/material/Accordion';
import MuiAccordionSummary, { AccordionSummaryProps } from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import { Box, Button, FormControl, MenuItem, Select } from '@mui/material';
import { InformationProps, PlanDetails } from '@/types/PlanCardDetail';
import { useQuery } from '@tanstack/react-query';
import { getUpSell } from '@/app/api/hostings/getUpSell';

interface SearchResult {
	suffix: string;
	name: string;
	buy_price: number;
	renew_price: number;
	_id: string;
	product: string;
	salePrice: number;
	basePrice: number;
	period: number;
	discount: number;
	upSell: boolean;
	information: InformationProps;
	createdAt: string;
	type: 'domain' | 'hosting';
}

interface AddedCartItemsProps {
	cartItem: SearchResult;
	updateTotalPrice: (items: SearchResult[]) => void;
	handleRemoveItemHosting: (_id: string) => void; // Update prop to accept _id
	handlePriceChange: (name: string, newPrice: number) => void;
	handleToggleSecurityItem: () => void;
	securityItemVisible: boolean;
}

const Accordion = styled((props: AccordionProps) => <MuiAccordion disableGutters elevation={0} square {...props} />)(
	({ theme }) => ({
		border: `1px solid ${theme.palette.divider}`,
		'&:not(:last-child)': {
			borderBottom: 0,
		},
		'&::before': {
			display: 'none',
		},
	})
);

const AccordionSummary = styled((props: AccordionSummaryProps) => (
	<MuiAccordionSummary expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem' }} />} {...props} />
))(({ theme }) => ({
	backgroundColor: theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, .05)' : 'rgba(0, 0, 0, .03)',
	'& .MuiAccordionSummary-expandIconWrapper': {
		transform: 'rotate(90deg)',
	},
	'& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
		transform: 'rotate(270deg)',
	},
	'& .MuiAccordionSummary-content': {
		marginLeft: theme.spacing(1),
		flexGrow: 1,
	},
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
	padding: theme.spacing(2),
	borderTop: '1px solid rgba(0, 0, 0, .125)',
}));

const theme = createTheme({
	components: {
		MuiSelect: {
			styleOverrides: {
				root: {
					padding: '0.1rem',
				},
			},
		},
		MuiMenuItem: {
			styleOverrides: {
				root: {
					fontSize: '1.6rem',
				},
			},
		},
	},
});

const AddedCartItems: React.FC<AddedCartItemsProps> = ({
	cartItem,
	updateTotalPrice,
	handleRemoveItemHosting,
	handlePriceChange,
	handleToggleSecurityItem,
	securityItemVisible,
}) => {
	const [optionID, setOptionID] = useState<string>('');

	useEffect(() => {
		setOptionID(cartItem._id);
	}, [cartItem._id]);

	const { data, isLoading } = useQuery<PlanDetails[]>({
		queryKey: ['optionID'],
		queryFn: () => getUpSell(optionID),
	});

	const itemKey = `selectedMonths_${cartItem?.name}`;

	const [expanded, setExpanded] = useState<string | false>('panel1');
	const [selectedPeriod, setSelectedPeriod] = useState<number>(() => {
		const savedMonths = localStorage.getItem(itemKey);
		return savedMonths ? parseInt(savedMonths, 10) : cartItem.period;
	});
	const [selectedPrice, setSelectedPrice] = useState<number>(cartItem.salePrice);

	useEffect(() => {
		if (data && !isLoading) {
			const defaultOption = data.find((option) => option.period === selectedPeriod);
			if (defaultOption) {
				setSelectedPrice(defaultOption.salePrice);
			}
		}
	}, [data, isLoading, selectedPeriod]);

	const handlePeriodChange = (event: any) => {
		const period = parseInt(event.target.value, 10);
		setSelectedPeriod(period);
		localStorage.setItem(itemKey, event.target.value);

		const selectedOption = data?.find((option) => option.period === period);
		if (selectedOption) {
			setSelectedPrice(selectedOption.salePrice);
			handlePriceChange(cartItem.name, selectedOption.salePrice);
		}
	};

	const handleRemoveItemClick = () => {
		handleRemoveItemHosting(cartItem._id);

		if (securityItemVisible) {
			handleToggleSecurityItem();
		}
	};

	const handleChooseClick = () => {
		handleToggleSecurityItem();
	};

	return (
		<ThemeProvider theme={theme}>
			<div
				style={{ borderStyle: 'solid' }}
				className='cart-item-detail items-center w-full rounded-md bg-white border border-[#e0e0e0]'
			>
				<h4 className='p-4 font-semibold text-3xl'>{cartItem.name}</h4>
				<div className='flex justify-between items-center px-4 pt-0 pb-4'>
					<Box sx={{ minWidth: 250 }}>
						<FormControl fullWidth>
							<Select
								value={selectedPeriod}
								onChange={handlePeriodChange}
								inputProps={{
									name: 'periods',
									id: `uncontrolled-native-${cartItem?.name}`,
								}}
								sx={{
									fontSize: '1.8rem',
								}}
							>
								{data?.map((option) => (
									<MenuItem key={option._id} value={option.period} sx={{ fontSize: '1.6rem' }}>
										{option.period} tháng
									</MenuItem>
								))}
							</Select>
						</FormControl>
					</Box>
					<div className='flex flex-col gap-4 items-end'>
						<span className='text-sky-400 font-semibold'>{selectedPrice?.toLocaleString()}đ/năm</span>
						<button onClick={handleRemoveItemClick} className='remove-item-btn'>
							<FaRegTrashAlt className='text-2xl' />
						</button>
					</div>
				</div>

				<Accordion
					expanded={expanded === 'panel1'}
					onChange={(_, newExpanded) => setExpanded(newExpanded ? 'panel1' : false)}
				>
					<AccordionSummary aria-controls='panel1d-content' id='panel1d-header'>
						<Typography>Gợi ý dành cho bạn</Typography>
					</AccordionSummary>
					{!securityItemVisible && (
						<AccordionDetails className='flex justify-between'>
							<div className='flex flex-col'>
								<div className='mb-2'>
									<h4 className='text-3xl font-semibold'>Chuẩn bảo mật web</h4>
									<span className='text-2xl text-sky-400'>1.000.000đ/tháng</span>
								</div>
								<ul className='list-disc pl-10 text-xl'>
									<li>Chứng chỉ SSL tích hợp cung cấp mã hóa HTTPS và tăng thứ hạng của Google.</li>
									<li>Tường lửa ứng dụng web (WAF) ngăn chặn tin tặc và chặn các cuộc tấn công.</li>
									<li>
										Quét và cảnh báo phần mềm độc hại bằng cách dọn dẹp và khắc phục trang web hàng
										năm.
									</li>
								</ul>
							</div>
							<div>
								<Button
									variant='outlined'
									style={{ borderStyle: 'solid' }}
									className='border border-black'
									onClick={handleChooseClick}
								>
									<span className='text-black font-bold'>Chọn ngay</span>
								</Button>
							</div>
						</AccordionDetails>
					)}
					<AccordionDetails className='flex justify-between'>
						<div className='flex flex-col'>
							<div className='mb-2'>
								<h4 className='text-3xl font-semibold'>Dịch vụ cài đặt SSL - 1 trang web</h4>
								<span className='text-2xl text-sky-400'>2.000.000đ</span>
							</div>
							<ul className='list-disc pl-10 text-xl'>
								<li>Cài đặt, định cấu hình SSL của bạn và chuyển hướng đến https.</li>
								<li>Update mixed content errors, sitemap, and firewall settings.</li>
							</ul>
						</div>
						<div>
							<Button variant='outlined' style={{ borderStyle: 'solid' }} className='border border-black'>
								<span className='text-black font-bold'>Chọn ngay</span>
							</Button>
						</div>
					</AccordionDetails>
				</Accordion>
			</div>
		</ThemeProvider>
	);
};

export default AddedCartItems;
