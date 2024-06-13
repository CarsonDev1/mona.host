import React, { useState } from 'react';
import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import { styled, createTheme, ThemeProvider } from '@mui/material/styles';
import Switch, { SwitchProps } from '@mui/material/Switch';
import FormControlLabel from '@mui/material/FormControlLabel';
import { FaRegTrashAlt } from 'react-icons/fa';
import { CiMail } from 'react-icons/ci';
import { Button } from '@mui/material';
import MailItem from './MailItem';

interface SearchResult {
	suffix: string;
	name: string;
	buy_price: number;
	renew_price: number;
}

const IOSSwitch = styled((props: SwitchProps) => (
	<Switch focusVisibleClassName='.Mui-focusVisible' disableRipple {...props} />
))(({ theme }) => ({
	width: 45,
	height: 26,
	padding: 0,
	'& .MuiSwitch-switchBase': {
		padding: 0,
		margin: 2,
		transitionDuration: '300ms',
		'&.Mui-checked': {
			transform: 'translateX(16px)',
			color: '#fff',
			'& + .MuiSwitch-track': {
				backgroundColor: theme.palette.mode === 'dark' ? '#1ec0f2' : '#1ec0f2',
				opacity: 1,
				border: 0,
			},
			'&.Mui-disabled + .MuiSwitch-track': {
				opacity: 0.5,
			},
		},
		'&.Mui-focusVisible .MuiSwitch-thumb': {
			color: '#1ec0f2',
			border: '6px solid #fff',
		},
		'&.Mui-disabled .MuiSwitch-thumb': {
			color: theme.palette.mode === 'light' ? theme.palette.grey[100] : theme.palette.grey[600],
		},
		'&.Mui-disabled + .MuiSwitch-track': {
			opacity: theme.palette.mode === 'light' ? 0.7 : 0.3,
		},
	},
	'& .MuiSwitch-thumb': {
		boxSizing: 'border-box',
		width: 22,
		height: 22,
	},
	'& .MuiSwitch-track': {
		borderRadius: 26 / 2,
		backgroundColor: theme.palette.mode === 'light' ? '#E9E9EA' : '#39393D',
		opacity: 1,
		transition: theme.transitions.create(['background-color'], {
			duration: 500,
		}),
	},
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

const CartItemDetail = ({
	searchResult,
	selectedYears,
	handleYearsChange,
	calculatePrice,
	handleRemoveItemClick,
	showMailItem,
	toggleMailItem,
	priceMail,
	handleSSLPriceChange,
}: {
	searchResult: SearchResult;
	selectedYears: number;
	handleYearsChange: (event: any) => void;
	calculatePrice: (years: number) => number | undefined;
	handleRemoveItemClick: () => void;
	showMailItem: boolean;
	toggleMailItem: () => void;
	priceMail: number;
	handleSSLPriceChange: (isChecked: boolean) => void;
}) => {
	return (
		<ThemeProvider theme={theme}>
			<div
				style={{ borderStyle: 'solid' }}
				className='cart-item-detail items-center w-full rounded-md p-4 bg-white border border-[#e0e0e0]'
			>
				<div className='flex flex-col'>
					<h3 className='font-semibold text-3xl'>{searchResult?.name}</h3>
					<p className='text-2xl text-gray-600'>
						Đăng ký tên miền <span className='txt-nhtq'>{searchResult?.suffix}</span>
					</p>
					<div
						style={{ borderStyle: 'solid' }}
						className='flex justify-between border-b border-gray-300 py-2'
					>
						<Box sx={{ minWidth: 250 }}>
							<FormControl fullWidth>
								<Select
									value={selectedYears}
									onChange={handleYearsChange}
									inputProps={{
										name: 'years',
										id: `uncontrolled-native-${searchResult?.name}`,
									}}
									sx={{
										fontSize: '1.8rem',
									}}
								>
									{[...Array(10)].map((_, i) => (
										<MenuItem key={i + 1} value={i + 1} sx={{ fontSize: '1.6rem' }}>{`${
											i + 1
										} năm`}</MenuItem>
									))}
								</Select>
							</FormControl>
						</Box>

						<div className='text-right'>
							<span className='font-semibold text-3xl text-[#1ec0f2]'>
								{calculatePrice(selectedYears)?.toLocaleString()}đ
							</span>
							<div className='text-xl'>Gia hạn: {searchResult?.renew_price?.toLocaleString()}đ/năm</div>
							<button onClick={handleRemoveItemClick} className='remove-item-btn'>
								<FaRegTrashAlt className='text-2xl' />
							</button>
						</div>
					</div>
					<div style={{ borderStyle: 'solid' }} className='relative border-b border-gray-300 pb-6'>
						<div className='flex items-center justify-between mt-4'>
							<div className='flex items-center'>
								<FormControlLabel
									control={<IOSSwitch sx={{ m: 1 }} />}
									label='Bảo vệ tên miền với SSL'
									sx={{ fontSize: '1.8rem', fontWeight: 'bold' }}
								/>
								<span className='uppercase text-lg bg-sky-400 p-1 rounded-md ml-2'>
									ĐƯỢC KHUYÊN DÙNG
								</span>
							</div>
							<span className='text-2xl text-sky-400 font-semibold'>
								{priceMail.toLocaleString()}đ/năm
							</span>
						</div>
						<ul className='pl-12 list-disc text-xl'>
							<li>Domain SSL là xác minh quyền sở hữu Domain Name.</li>
							<li>Wildcard SSL là chứng chỉ SSL có thể dùng trên tên miền chính và các tên miền phụ.</li>
						</ul>
					</div>
					{showMailItem ? (
						<MailItem handleToggleMailItem={toggleMailItem} />
					) : (
						<div className='relative'>
							<div className='flex items-center justify-between mt-4'>
								<div className='flex items-center gap-4'>
									<CiMail className='size-10' />
									<span className='uppercase text-lg font-semibold'>Email</span>
								</div>
								<Button
									variant='outlined'
									style={{ borderStyle: 'solid' }}
									className='border border-black'
									onClick={toggleMailItem}
								>
									<span className='text-black font-bold'>Chọn ngay</span>
								</Button>
							</div>
							<div className='flex items-center gap-2 pl-12 text-xl'>
								<p className='text-xl text-sky-400'>
									{(searchResult?.renew_price - 100000)?.toLocaleString()}đ/tháng
								</p>
								<p className='text-xl line-through'>
									{searchResult?.renew_price?.toLocaleString()}đ/tháng
								</p>
								<p>Với kỳ hạn hàng năm (tiết kiệm 60%)</p>
							</div>
						</div>
					)}
				</div>
			</div>
		</ThemeProvider>
	);
};

export default CartItemDetail;
