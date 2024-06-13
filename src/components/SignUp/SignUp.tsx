import React, { useState } from 'react';
import { Button, Typography, TextField, Box, IconButton, InputAdornment, CircularProgress } from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import ReCAPTCHA from 'react-google-recaptcha';
import { RegisterBody, RegisterBodyType } from '@/schemaValidations/auth.schema';
import { toast } from 'react-toastify';
import envConfig from '@/config';

interface LoginProps {
	switchForm: () => void;
}

const SignUp = ({ switchForm }: LoginProps) => {
	const [showPassword, setShowPassword] = useState(false);
	const [isCaptchaVerified, setIsCaptchaVerified] = useState(false);
	const [recaptchaValue, setRecaptchaValue] = useState('');
	const [loading, setLoading] = useState(false);

	const notifySuccess = () => toast.success('Registration successful! Redirecting to login...');
	const notifyError = (message: string) => toast.error(message);

	const handleCaptchaChange = (value: any) => {
		if (value) {
			setRecaptchaValue('mona');
			setIsCaptchaVerified(true);
		}
	};

	const handleClickShowPassword = () => setShowPassword(!showPassword);

	const form = useForm<RegisterBodyType>({
		resolver: zodResolver(RegisterBody),
		defaultValues: {
			fullname: '',
			email: '',
			password: '',
		},
	});

	async function onSubmit(data: RegisterBodyType) {
		try {
			setLoading(true);
			const requestBody = {
				...data,
				g_recaptcha_response: recaptchaValue,
			};

			const result = await fetch(`${envConfig.NEXT_PUBLIC_API_ENDPOINT}/users/register`, {
				body: JSON.stringify(requestBody),
				headers: {
					'Content-Type': 'application/json',
				},
				method: 'POST',
			});

			if (!result.ok) {
				const errorResponse = await result.json();
				console.error('Server error response:', errorResponse);
				throw new Error('Failed to register user');
			}

			const responseData = await result.json();
			notifySuccess();
			switchForm();
		} catch (error) {
			console.error('Error occurred while registering user:', error);
			notifyError('Registration failed. Redirecting to login...');
			switchForm();
		} finally {
			setLoading(false);
		}
	}

	return (
		<Box component='form' onSubmit={form.handleSubmit(onSubmit)} sx={{ mt: 1 }}>
			<Typography variant='h4' color='#1ec0f2' textAlign='center' fontWeight='bold' marginBottom={1}>
				Chào mừng bạn quay trở lại
			</Typography>

			<TextField
				margin='dense'
				fullWidth
				label='Họ và tên'
				{...form.register('fullname')}
				error={!!form.formState.errors.fullname}
				helperText={form.formState.errors.fullname?.message}
				FormHelperTextProps={{
					style: { fontSize: '1.2rem' },
				}}
				InputLabelProps={{
					style: { color: '#011737', fontSize: '1.4rem' },
				}}
				InputProps={{
					style: { fontSize: '1.4rem' },
				}}
			/>

			<TextField
				margin='dense'
				fullWidth
				label='Email'
				{...form.register('email')}
				error={!!form.formState.errors.email}
				helperText={form.formState.errors.email?.message}
				FormHelperTextProps={{
					style: { fontSize: '1.2rem' },
				}}
				InputLabelProps={{
					style: { color: '#011737', fontSize: '1.4rem' },
				}}
				InputProps={{
					style: { fontSize: '1.4rem' },
				}}
			/>

			<TextField
				margin='dense'
				fullWidth
				label='Mật khẩu'
				type={showPassword ? 'text' : 'password'}
				{...form.register('password')}
				error={!!form.formState.errors.password}
				helperText={form.formState.errors.password?.message}
				FormHelperTextProps={{
					style: { fontSize: '1.2rem' },
				}}
				InputLabelProps={{
					style: { color: '#011737', fontSize: '1.4rem' },
				}}
				InputProps={{
					style: { fontSize: '1.4rem' },
					endAdornment: (
						<InputAdornment position='end'>
							<IconButton
								aria-label='toggle password visibility'
								onClick={handleClickShowPassword}
								edge='end'
							>
								{showPassword ? <VisibilityOff /> : <Visibility />}
							</IconButton>
						</InputAdornment>
					),
				}}
			/>

			{process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY && (
				<ReCAPTCHA
					sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}
					onChange={handleCaptchaChange}
					style={{ marginTop: '15px', width: '100%' }}
					className='w-full'
				/>
			)}

			<Button type='submit' fullWidth variant='contained' sx={{ mt: 2, p: 2 }}>
				<span className='text-lg font-semibold'>
					{loading ? <CircularProgress color='inherit' /> : 'Đăng ký'}
				</span>
			</Button>
			<Box display='flex' flexDirection='column' alignItems='center' mt={3}>
				<Typography variant='h6'>Bạn đã có tài khoản?</Typography>
				<Typography
					variant='h6'
					color='#1ec0f2'
					sx={{ textDecoration: 'underline', cursor: 'pointer' }}
					onClick={switchForm}
				>
					Đăng nhập
				</Typography>
			</Box>
		</Box>
	);
};

export default SignUp;
