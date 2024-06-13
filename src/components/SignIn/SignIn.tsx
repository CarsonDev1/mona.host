import React, { useReducer, useRef, useCallback, useMemo } from 'react';
import {
	Button,
	Typography,
	TextField,
	Box,
	IconButton,
	InputAdornment,
	FormControlLabel,
	Checkbox,
	CircularProgress,
} from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { useForm, SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { LoginBody, LoginBodyType } from '@/schemaValidations/auth.schema';
import ReCAPTCHA from 'react-google-recaptcha';
import { toast } from 'react-toastify';
import { useRouter } from 'next/navigation';
import { axiosInstance, setTokenInLocalStorage } from '@/libs/axiosInstance';
import { getMe } from '@/app/api/auth/user';
import { jwtDecode } from 'jwt-decode';
import { useAppContext } from '@/context/authProvider';
import './sign-in.scss';
import LoadingComponent from '@/components/loading';

interface LoginProps {
	switchForm: () => void;
	closeModal: () => void;
}

type State = {
	showPassword: boolean;
	isCaptchaVerified: boolean;
	recaptchaValue: string;
	loading: boolean;
};

type Action =
	| { type: 'TOGGLE_PASSWORD' }
	| { type: 'SET_CAPTCHA_VERIFIED'; payload: boolean }
	| { type: 'SET_RECAPTCHA_VALUE'; payload: string }
	| { type: 'SET_LOADING'; payload: boolean };

const initialState: State = {
	showPassword: false,
	isCaptchaVerified: false,
	recaptchaValue: '',
	loading: false,
};

function reducer(state: State, action: Action): State {
	switch (action.type) {
		case 'TOGGLE_PASSWORD':
			return { ...state, showPassword: !state.showPassword };
		case 'SET_CAPTCHA_VERIFIED':
			return { ...state, isCaptchaVerified: action.payload };
		case 'SET_RECAPTCHA_VALUE':
			return { ...state, recaptchaValue: action.payload };
		case 'SET_LOADING':
			return { ...state, loading: action.payload };
		default:
			return state;
	}
}

const SignIn = ({ switchForm, closeModal }: LoginProps) => {
	const [state, dispatch] = useReducer(reducer, initialState);
	const router = useRouter();
	const { setSessionToken } = useAppContext();
	const recaptchaRef = useRef<ReCAPTCHA>(null);

	const notifySuccess = useCallback(
		() =>
			toast.success('Login successfully!', {
				position: 'top-center',
				autoClose: 3000,
			}),
		[]
	);

	const notifyError = useCallback((message: string) => toast.error(message), []);

	const handleCaptchaChange = useCallback((value: any) => {
		if (value) {
			dispatch({ type: 'SET_RECAPTCHA_VALUE', payload: 'mona' });
			dispatch({ type: 'SET_CAPTCHA_VERIFIED', payload: true });
		}
	}, []);

	const handleClickShowPassword = useCallback(() => {
		dispatch({ type: 'TOGGLE_PASSWORD' });
	}, []);

	const form = useForm<LoginBodyType>({
		resolver: zodResolver(LoginBody),
		defaultValues: useMemo(
			() => ({
				username: '',
				password: '',
			}),
			[]
		),
	});

	const onSubmit: SubmitHandler<LoginBodyType> = useCallback(
		async (data) => {
			try {
				dispatch({ type: 'SET_LOADING', payload: true });
				const recaptchaValue = recaptchaRef.current ? await recaptchaRef.current.executeAsync() : '';
				if (recaptchaRef.current) {
					recaptchaRef.current.reset();
				}
				const requestBody = {
					...data,
					g_recaptcha_response: recaptchaValue,
				};

				const response = await axiosInstance.post('/users/login', requestBody);

				if (!response.data.access_token) {
					throw new Error('Failed to log in');
				}

				const token = response.data.access_token;
				const decodedToken = jwtDecode(token);
				setTokenInLocalStorage(token);

				if (token) {
					const userDataResponse = await getMe();
					const userData = userDataResponse.data;
					localStorage.setItem('userData', JSON.stringify(userData));
				}
				notifySuccess();
				const resultFormNextServer = await fetch('/api/auth', {
					method: 'POST',
					body: JSON.stringify({ sessionToken: response }),
					headers: {
						'Content-Type': 'application/json',
					},
				}).then(async (res) => {
					const payload = await res.json();
					const data = {
						status: res.status,
						payload,
					};
					if (!res.ok) {
						throw data;
					}
					return data;
				});
				closeModal();
				setSessionToken(resultFormNextServer.payload.res?.sessionToken?.data?.access_token);
			} catch (error) {
				console.error('Error occurred while logging in:', error);
				notifyError('Login failed. Please check your credentials.');
			} finally {
				dispatch({ type: 'SET_LOADING', payload: false });
			}
		},
		[notifyError, notifySuccess, closeModal, setSessionToken]
	);

	return (
		<form onSubmit={form.handleSubmit(onSubmit)} style={{ marginTop: '1rem' }}>
			<Typography variant='h4' color='#1ec0f2' textAlign='center' fontWeight='bold' marginBottom={1}>
				Chào mừng bạn quay trở lại
			</Typography>

			<TextField
				margin='dense'
				fullWidth
				label='Tài khoản'
				{...form.register('username')}
				error={!!form.formState.errors.username}
				helperText={form.formState.errors.username?.message}
				FormHelperTextProps={{
					style: { fontSize: '1rem' },
				}}
				InputLabelProps={{
					style: { color: '#011737', fontSize: '1.4rem' },
				}}
				InputProps={{
					style: { fontSize: '1.4rem' },
					inputProps: {
						className: 'no-autofill-bg',
					},
				}}
			/>

			<TextField
				margin='dense'
				fullWidth
				label='Mật khẩu'
				type={state.showPassword ? 'text' : 'password'}
				{...form.register('password')}
				error={!!form.formState.errors.password}
				helperText={form.formState.errors.password?.message}
				FormHelperTextProps={{
					style: { fontSize: '1rem' },
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
								{state.showPassword ? <VisibilityOff /> : <Visibility />}
							</IconButton>
						</InputAdornment>
					),
				}}
			/>

			<FormControlLabel
				control={<Checkbox {...form.register('remember_me')} color='primary' />}
				label={
					<Typography sx={{ fontSize: '1rem' }} className='text-primary'>
						Ghi nhớ đăng nhập
					</Typography>
				}
			/>

			{process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY && (
				<ReCAPTCHA
					sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}
					onChange={handleCaptchaChange}
					className='recaptcha'
					size='invisible'
					badge='bottomright'
					ref={recaptchaRef}
				/>
			)}

			<Button type='submit' fullWidth variant='contained' className='bg-[#1ec0f2]' sx={{ mt: 2, p: 2 }}>
				<span className='text-lg font-semibold'>
					{state.loading ? (
						<CircularProgress color='inherit' style={{ height: '1em', width: '1em' }} />
					) : (
						'Đăng nhập'
					)}
				</span>
			</Button>
			<Box display='flex' flexDirection='column' alignItems='center' mt={3}>
				<Typography variant='h6' className='text-primary'>
					Bạn chưa có tài khoản?
				</Typography>
				<Typography
					variant='h6'
					color='#1ec0f2'
					sx={{ textDecoration: 'underline', cursor: 'pointer' }}
					onClick={switchForm}
				>
					Đăng ký
				</Typography>
			</Box>
		</form>
	);
};

export default SignIn;
