// import { CartItem } from '@/components/MiniCart/CartItem';
// import Link from 'next/link';

// import React from 'react';
// import { FormControl } from '@mui/material';
// import Radio from '@mui/material/Radio';
// import RadioGroup from '@mui/material/RadioGroup';
// import FormControlLabel from '@mui/material/FormControlLabel';
// import { Controller, useFormContext } from 'react-hook-form';

// import Sheet from '@mui/joy/Sheet';
// import Typography from '@mui/joy/Typography';
// import Avatar from '@mui/joy/Avatar';
// import Image from 'next/image';

// interface Step3Props {
// 	onComplete: () => void;
// }

// function ACBIcon() {
// 	return <Image width={64} height={36} src='/cart/acb.webp' alt='acb' />;
// }

// function VnPayIcon() {
// 	return <Image width={120} height={36} src='/cart/VNPAY-QR.webp' alt='VNPAY QR' />;
// }

// const StepThree: React.FC<Step3Props> = ({ onComplete }) => {
// 	const handleComplete = () => {
// 		// Perform any final processing or submission
// 		// Once completed, mark the process as finished
// 		onComplete();
// 	};

// 	const [paymentMethod, setPaymentMethod] = React.useState('acb');

// 	const handlePaymentMethod = (event: React.ChangeEvent<HTMLInputElement>) => {
// 		setPaymentMethod(event.target.value);
// 	};

// 	const { register, control } = useFormContext();

// 	return (
// 		<div className='flex gap-8 p-8 items-start'>
// 			<div className='w-2/3 sticky top-28'>
// 				<div className='flex flex-col w-128 bg-white p-4 h-full rounded-lg border'>
// 					<div className='flex gap-3 justify-between items-center mb-2'>
// 						<span className='font-bold flex-1 text-xl'>Thông tin thanh toán</span>
// 					</div>
// 					<div className='info-payment p-4 border rounded-lg bg-slate-100 mb-4'>
// 						<div className='list flex flex-wrap'>
// 							<div className='item text-sm w-1/2'>
// 								<span>Tên khách hàng: </span>
// 								<span className='font-semibold text-sm'>CongPhan</span>
// 							</div>
// 							<div className='item text-sm w-1/2'>
// 								<span>CMT/CCCD: </span>
// 								<span className='font-semibold'>23</span>
// 							</div>
// 							<div className='item text-sm w-1/2'>
// 								<span>Số điện thoại: </span>
// 								<span className='font-semibold'>0374570287</span>
// 							</div>
// 							<div className='item text-sm w-1/2'>
// 								<span>Email: </span>
// 								<span className='font-semibold'>pvcong1504@gmail.com</span>
// 							</div>
// 							<div className='item text-sm'>
// 								<span>Địa chỉ: </span>
// 								<span className='font-semibold'>
// 									Tổ 11, Xã Phước Thái, Huyện Long Thành, Tỉnh Đồng Nai
// 								</span>
// 							</div>
// 						</div>
// 					</div>
// 					<div className='flex gap-3 justify-between items-center mb-2'>
// 						<span className='font-bold flex-1 text-xl'>Phương thức thanh toán</span>
// 					</div>
// 					<div className='info-payment'>
// 						<FormControl fullWidth>
// 							<Controller
// 								name='payment_method'
// 								control={control}
// 								render={({ field: { onChange, value }, fieldState: { error }, formState }) => (
// 									<RadioGroup
// 										aria-labelledby='demo-controlled-radio-buttons-group'
// 										name='payment_method'
// 										value={value}
// 										defaultValue='Chuyển khoản ACB'
// 										onChange={onChange}
// 									>
// 										<div className='flex flex-col gap-4'>
// 											<Sheet
// 												component='label'
// 												variant='outlined'
// 												sx={{
// 													p: 1,
// 													border: 'border',
// 													borderRadius: 'md',
// 													display: 'flex',
// 													gap: '8px',
// 													alignItems: 'center',
// 													cursor: 'pointer',
// 												}}
// 											>
// 												<Radio value='Chuyển khoản ACB' />
// 												<ACBIcon />
// 												<Typography
// 													sx={{
// 														fontFamily: 'Inter',
// 														fontSize: 'md',
// 														fontWeight: '400',
// 													}}
// 												>
// 													Chuyển khoản
// 												</Typography>
// 											</Sheet>
// 											<Sheet
// 												component='label'
// 												variant='outlined'
// 												sx={{
// 													p: 1,
// 													border: 'border',
// 													borderRadius: 'md',
// 													display: 'flex',
// 													gap: '8px',
// 													alignItems: 'center',
// 													cursor: 'pointer',
// 												}}
// 											>
// 												<Radio value='Thanh toán qua VNPAY-QR' />
// 												<VnPayIcon />
// 												<Typography
// 													sx={{
// 														fontFamily: 'Inter',
// 														fontSize: 'md',
// 														fontWeight: '400',
// 													}}
// 												>
// 													Thanh toán qua VNPAY-QR
// 												</Typography>
// 											</Sheet>
// 											<Sheet
// 												component='label'
// 												variant='outlined'
// 												sx={{
// 													p: 1,
// 													border: 'border',
// 													borderRadius: 'md',
// 													display: 'flex',
// 													gap: '8px',
// 													alignItems: 'center',
// 													cursor: 'pointer',
// 												}}
// 											>
// 												<Radio value='Thanh toán sau' />
// 												<Typography
// 													sx={{
// 														fontFamily: 'Inter',
// 														fontSize: 'md',
// 														fontWeight: '400',
// 													}}
// 												>
// 													Thanh toán sau
// 												</Typography>
// 											</Sheet>
// 											{/* <FormControlLabel className='flex items-center gap-2 border rounded-lg m-0' value="Chuyển khoản ACB" control={<Radio />} label="Chuyển khoản" />
//                   <FormControlLabel className='flex items-center gap-2 border rounded-lg m-0' value="Thanh toán qua VNPAY-QR" control={<Radio />} label="Thanh toán qua VNPAY-QR" />
//                   <FormControlLabel className='flex items-center gap-2 border rounded-lg m-0' value="Thanh toán sau" control={<Radio />} label="Thanh toán sau" /> */}
// 										</div>
// 									</RadioGroup>
// 								)}
// 							/>
// 						</FormControl>
// 					</div>
// 				</div>
// 			</div>
// 			<div className='cart-payment w-1/3'>
// 				<div className='bg-white p-4 rounded-lg border'>
// 					<div className='cart-payment-header flex gap-3 justify-between items-center mb-4'>
// 						<span className='font-bold flex-1 text-xl'>Chi tiết đơn hàng</span>
// 					</div>

// 					<div className='cart-mini-header flex gap-3 justify-between items-center mb-2'>
// 						<span className='flex-1 text-md mb-2'>3 sản phẩm</span>
// 					</div>
// 					<div className='cart-mini-list max-h-96 overflow-y-auto -mt-4'>
// 						<CartItem />
// 						<CartItem />
// 					</div>

// 					<div className='cart-payment-body flex flex-col gap-1 mt-4 pt-4 border-t-[1px] border-dashed'>
// 						<div className='item flex gap-1 justify-between items-center'>
// 							<p className='label text-sm'>Tổng tiền (chưa bao gồm VAT)</p>
// 							<p className='detail text-xl font-bebas'>500,000đ</p>
// 						</div>
// 						<div className='item flex gap-1 justify-between items-center'>
// 							<p className='label text-sm'>Giá giảm</p>
// 							<p className='detail text-xl font-bebas'>-</p>
// 						</div>
// 						<div className='item flex gap-1 justify-between items-center'>
// 							<p className='label text-sm'>VAT (10%)</p>
// 							<p className='detail text-xl font-bebas'>50,000đ</p>
// 						</div>
// 					</div>
// 					<div className='cart-payment-footer mt-4 pt-4 border-t-[1px] border-dashed'>
// 						<div className='item flex gap-1 justify-between items-center'>
// 							<p className='label text-sm'>
// 								Thành tiền
// 								<br />
// 								<span className='text-xs italic'>(Đã bao gồm VAT)</span>
// 							</p>
// 							<p className='detail text-3xl font-bebas text-orange-500'>550,000đ</p>
// 						</div>
// 					</div>
// 				</div>
// 				<div className='cart-payment-btn w-full my-4 p-1 rounded-[calc(var(--btn-border-radius)+4px)] bg-gray-950/5 border dark:border-white/10 dark:bg-white/5'>
// 					<button
// 						type='submit'
// 						className='w-full *:select-none dark:shadow-primary-500/10 *:disabled:opacity-20 disabled:*:text-gray-300 disabled:dark:*:text-gray-700 dark:*:disabled:!text-white group relative z-[1] flex h-11 items-center justify-center gap-1.5 rounded-[--btn-border-radius] border border-primary-600 bg-primary-500 px-4 text-base text-white shadow-md shadow-primary-200 before:absolute before:inset-0 before:rounded-[calc(var(--btn-border-radius)-1px)] before:border before:border-primary-500 before:bg-gradient-to-b before:from-primary-600 hover:bg-primary-600 active:bg-primary-700 disabled:border-gray-200 disabled:bg-gray-100 disabled:text-gray-950/40 disabled:before:border-transparent disabled:before:bg-gray-100 disabled:before:from-transparent dark:border-0 dark:bg-primary-600 dark:before:border-0 dark:before:border-t dark:before:border-primary-400 dark:before:shadow-inner dark:before:shadow-white/10 dark:hover:bg-primary-700 dark:active:bg-primary-800 dark:active:before:from-primary-700 dark:disabled:border dark:disabled:border-gray-800/50 disabled:dark:bg-gray-900 dark:disabled:before:bg-gray-900 dark:disabled:before:from-gray-900 dark:disabled:before:shadow-none [&>*:not(.sr-only)]:relative'
// 					>
// 						<span className='text-nowrap'>Tiếp tục thanh toán</span>
// 					</button>
// 				</div>
// 				<div className='cart-payment-note text-center text-sm'>
// 					Nếu bạn có bất kỳ thắc mắc về giao dịch của mình, hãy liên hệ ngay đến nhân viên hỗ trợ của
// 					MONA.Host thông qua hotline:
// 					<Link href='tel:1900636648' className='font-bebas text-xl'>
// 						<span className='text-media'>1900 </span>
// 						<span className='text-edutech'>636 </span>
// 						<span className='text-nhtq'>648</span>
// 					</Link>
// 				</div>
// 			</div>
// 		</div>
// 	);
// };

// export default StepThree;
