import React from 'react';
import { Box, Button, ButtonGroup, createTheme, FormControl, MenuItem, Select, ThemeProvider } from '@mui/material';
import { CiMail } from 'react-icons/ci';
import { FaRegTrashAlt } from 'react-icons/fa';

interface SearchResult {
	suffix: string;
	name: string;
	buy_price: number;
	renew_price: number;
}

interface MailItemProps {
	handleToggleMailItem: () => void;
}

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

const MailItem: React.FC<MailItemProps> = ({ handleToggleMailItem }) => {
	const [invisible, setInvisible] = React.useState(false);
	const handleRemoveItemClick = () => {
		handleToggleMailItem();
	};

	const handleBadgeVisibility = () => {
		setInvisible(!invisible);
	};
	return (
		<ThemeProvider theme={theme}>
			<div className='cart-item-detail items-center w-full rounded-md bg-white'>
				<div className='flex items-center justify-between mt-4'>
					<div className='flex items-center gap-4'>
						<CiMail className='size-10' />
						<span className='uppercase text-lg font-semibold'>Email</span>
					</div>
				</div>
				<div className='flex items-center gap-2 text-xl'>
					<div className='flex justify-between w-full py-2'>
						<Box sx={{ minWidth: 250 }}>
							<FormControl fullWidth>
								<Select
									inputProps={{
										name: 'months',
										id: `uncontrolled-native`,
										defaultValue: 1,
									}}
									sx={{
										fontSize: '1.8rem',
									}}
								>
									{[...Array(10)].map((_, i) => (
										<MenuItem key={i + 1} value={i + 1} sx={{ fontSize: '1.6rem' }}>{`${
											i + 1
										} tháng`}</MenuItem>
									))}
								</Select>
							</FormControl>
						</Box>

						<div className='text-right gap-4 flex-col flex items-end'>
							<div className='flex flex-col'>
								<span className='font-semibold text-3xl text-[#1ec0f2]'>2,000,000đ</span>
								<span className='font-semibold text-3xl line-through'>3,000,000đ</span>
							</div>
							<button onClick={handleRemoveItemClick} className='remove-item-btn'>
								<FaRegTrashAlt className='text-2xl' />
							</button>
						</div>
					</div>
				</div>
			</div>
		</ThemeProvider>
	);
};

export default MailItem;
