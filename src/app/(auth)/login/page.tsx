import * as React from 'react';
// import { Modal, Backdrop, Box, Fade, TextField, FormControl } from '@mui/material';
// import { useForm, Controller } from 'react-hook-form';
// import Link from 'next/link';
// import Image from 'next/image';
// import { styled } from '@mui/system';

// const style = {
// 	position: 'absolute' as 'absolute',
// 	top: '50%',
// 	left: '50%',
// 	transform: 'translate(-50%, -50%)',
// 	width: 600,
// 	maxWidth: 'calc(100% - 32px)',
// 	bgcolor: 'background.paper',
// 	borderRadius: 4,
// 	p: 4,
// 	OutlinedInput: 0,
// };

// interface IFormInput {
// 	usename: string;
// 	password: string;
// }

// interface Props {
// 	isOpen: boolean;
// 	onCloseAccountClick: () => void;
// }

// const onSubmit = (data: IFormInput) => {
// 	alert(JSON.stringify(data));
// };

function Login() {
	// const { control, handleSubmit } = useForm<IFormInput>({ defaultValues: { usename: '', password: '' } });

	return (
		<div className=''></div>
		// <Modal
		// 	aria-labelledby='transition-modal-title'
		// 	aria-describedby='transition-modal-description'
		// 	open={isOpen}
		// 	onClose={onCloseAccountClick}
		// 	closeAfterTransition
		// 	BackdropComponent={Backdrop}
		// 	BackdropProps={{
		// 		timeout: 500,
		// 	}}
		// >
		// 	<Fade in={isOpen}>
		// 		<Box sx={style}>
		// 			<div className='pop-auth'>
		// 				<div className='logo flex justify-center mb-4'>
		// 					<Link href='/'>
		// 						<Image src='./header/logo.svg' width={240} height={48} alt='logo host' />
		// 					</Link>
		// 				</div>
		// 				<div className='title text-center text-pri text-2xl font-bold mb-2'>
		// 					Chào mừng bạn quay trở lại
		// 				</div>
		// 				<div className='desc text-center mb-4'>Nhập thông tin xác thực của bạn để tiếp tục</div>
		// 				<div className='pop-auth-form'>
		// 					<form onSubmit={handleSubmit(onSubmit)} className='form'>
		// 						<div className='input-flex flex flex-wrap mb-4'>
		// 							<div className='input-item w-full'>
		// 								<FormControl component='fieldset' fullWidth>
		// 									<Controller
		// 										name='usename'
		// 										control={control}
		// 										render={({ field }) => (
		// 											<TextField
		// 												{...field}
		// 												label='Tài khoản'
		// 												type='text'
		// 												fullWidth
		// 												sx={{ borderRadius: 16 }}
		// 											/>
		// 										)}
		// 									/>
		// 								</FormControl>
		// 							</div>
		// 						</div>
		// 						<div className='input-flex flex flex-wrap'>
		// 							<div className='input-item w-full'>
		// 								<Controller
		// 									name='password'
		// 									control={control}
		// 									render={({ field }) => (
		// 										<TextField
		// 											{...field}
		// 											label='Mật khẩu'
		// 											type='password'
		// 											fullWidth
		// 											className='rounded-2xl'
		// 										/>
		// 									)}
		// 								/>
		// 							</div>
		// 						</div>
		// 						<div className='mt-4 w-full cart-payment-btn p-1 rounded-[calc(var(--btn-border-radius)+4px)] bg-gray-950/5 border '>
		// 							<button
		// 								type='submit'
		// 								className='w-full *:select-none *:disabled:opacity-20 disabled:*:text-gray-300  group relative z-[1] flex h-11 items-center justify-center gap-1.5 rounded-[--btn-border-radius] border border-primary-600 bg-primary-500 px-4 text-base text-white shadow-md shadow-primary-200 before:absolute before:inset-0 before:rounded-[calc(var(--btn-border-radius)-1px)] before:border before:border-primary-500 before:bg-gradient-to-b before:from-primary-600 hover:bg-primary-600 active:bg-primary-700 disabled:border-gray-200 disabled:bg-gray-100 disabled:text-gray-950/40 disabled:before:border-transparent disabled:before:bg-gray-100 disabled:before:from-transparent'
		// 							>
		// 								<span className='text-nowrap'>Đăng nhập</span>
		// 							</button>
		// 						</div>
		// 					</form>
		// 				</div>
		// 			</div>
		// 		</Box>
		// 	</Fade>
		// </Modal>
	);
}

export default Login;
