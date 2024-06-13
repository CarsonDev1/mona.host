import React, { useState, useReducer, useRef } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import axios from 'axios';
import Cookies from 'js-cookie';
import Router from 'next/router';
import ReCAPTCHA from 'react-google-recaptcha';
import {
	Button,
	FormControl,
	FormControlLabel,
	Grid,
	InputLabel,
	NativeSelect,
	Radio,
	TextField,
	IconButton,
	InputAdornment,
	Autocomplete,
	Modal,
	Box,
} from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import Image from 'next/image';
import SignIn from '@/components/SignIn/SignIn';

interface IFormInput {
	address: string;
	city: string;
	fullname: string;
	id_number: string;
	email: string;
	phone_number: string;
	birthday?: Date | null;
	national?: string;
	gender?: string;
	district: string;
	ward: string;
	password: string;
	confirmPassword: string;
	payment_method?: string;
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

const countries = ['Vietnam', 'United States', 'China', 'Japan'];

const StepTwo: React.FC = () => {
	const [tab, setTab] = useState('login');
	const [state, dispatch] = useReducer(reducer, initialState);
	const recaptchaRef = useRef<ReCAPTCHA | null>(null);
	const { showPassword, isCaptchaVerified, recaptchaValue, loading } = state;
	const [generatedPassword, setGeneratedPassword] = useState<string>('');
	const [signInModalOpen, setSignInModalOpen] = useState(false);

	const {
		register,
		handleSubmit,
		watch,
		formState: { errors },
	} = useForm<IFormInput>();

	const handleCaptchaChange = (value: string | null) => {
		dispatch({ type: 'SET_RECAPTCHA_VALUE', payload: value || '' });
		dispatch({ type: 'SET_CAPTCHA_VERIFIED', payload: !!value });
	};

	const generatePassword = () => {
		const newPassword = Math.random().toString(36).slice(-8);
		return newPassword;
	};

	const handleGeneratePassword = () => {
		const newPassword = generatePassword();
		setGeneratedPassword(newPassword);
	};

	const handleSignInModalOpen = () => {
		setSignInModalOpen(true);
	};

	const onSubmit: SubmitHandler<IFormInput> = async (data) => {
		dispatch({ type: 'SET_LOADING', payload: true });
		const recaptchaValue = recaptchaRef.current ? await (recaptchaRef.current as any).executeAsync() : '';
		if (recaptchaRef.current) {
			(recaptchaRef.current as any).reset();
		}
		const requestBody = {
			...data,
			g_recaptcha_response: recaptchaValue,
		};

		try {
			const response = await axios.post('/api/register', { ...data, recaptchaValue });
			const { token, user } = response.data;

			Cookies.set('token', token);

			Router.push('/');
		} catch (error) {
			console.error(error);
			alert('Registration failed');
		} finally {
			dispatch({ type: 'SET_LOADING', payload: false });
		}
	};

	const textFieldStyle = {
		input: { color: 'black' },
		label: { color: 'black' },
		'& .MuiInputBase-root': {
			'& .MuiIconButton-root': {
				color: 'black',
			},
		},
	};

	return (
		<div className='create-account p-5 bg-gray-100'>
			<div className='tab flex justify-center gap-4 font-semibold mb-5'>
				<div className='item'>
					<FormControlLabel
						className='flex items-center gap-2 bg-white p-5 rounded-lg border cursor-pointer'
						value='login'
						control={<Radio checked={tab === 'login'} onChange={() => setTab('login')} />}
						label='Đăng nhập (Đã có tài khoản)'
						onClick={handleSignInModalOpen}
					/>
				</div>
				<Modal open={signInModalOpen} onClose={() => setSignInModalOpen(false)}>
					<Box
						sx={{
							position: 'absolute',
							top: '50%',
							left: '50%',
							transform: 'translate(-50%, -50%)',
							width: 500,
							bgcolor: 'background.paper',
							boxShadow: 24,
							p: 4,
							borderRadius: 2,
						}}
					>
						<Image
							src='/home/logo-banner.png'
							width={150}
							height={48}
							alt='logo-host'
							className='w-[194px] mx-auto'
							priority
						/>
						<SignIn
							closeModal={() => setSignInModalOpen(false)}
							switchForm={function (): void {
								throw new Error('Function not implemented.');
							}}
						/>
					</Box>
				</Modal>
				<div className='item'>
					<FormControlLabel
						className='flex items-center gap-2 bg-white p-5 rounded-lg border cursor-pointer'
						value='register'
						control={<Radio checked={tab === 'register'} onChange={() => setTab('register')} />}
						label='Tạo tài khoản (Thành viên mới)'
					/>
				</div>
			</div>

			{tab === 'login' && ''}

			{tab === 'register' && (
				<form onSubmit={handleSubmit(onSubmit)} className='space-y-4'>
					<Grid container spacing={2}>
						<Grid item xs={12} sm={6}>
							<TextField
								fullWidth
								label='Full Name'
								variant='standard'
								{...register('fullname', { required: true })}
								error={!!errors.fullname}
								helperText={errors.fullname ? 'This field is required' : ''}
								sx={textFieldStyle}
							/>
						</Grid>
						<Grid item xs={12} sm={6}>
							<TextField
								fullWidth
								label='ID Number'
								variant='standard'
								{...register('id_number', { required: true })}
								error={!!errors.id_number}
								helperText={errors.id_number ? 'This field is required' : ''}
								sx={textFieldStyle}
							/>
						</Grid>
						<Grid item xs={12} sm={6}>
							<TextField
								fullWidth
								label='Email'
								type='email'
								variant='standard'
								{...register('email', { required: true })}
								error={!!errors.email}
								helperText={errors.email ? 'This field is required' : ''}
								sx={textFieldStyle}
							/>
						</Grid>
						<Grid item xs={12} sm={6}>
							<TextField
								fullWidth
								label='Phone Number'
								variant='standard'
								{...register('phone_number', { required: true })}
								error={!!errors.phone_number}
								helperText={errors.phone_number ? 'This field is required' : ''}
								sx={textFieldStyle}
							/>
						</Grid>
						<Grid item xs={12} sm={6}>
							<TextField
								fullWidth
								label='Birthday'
								type='date'
								InputLabelProps={{ shrink: true }}
								variant='standard'
								{...register('birthday')}
								sx={textFieldStyle}
							/>
						</Grid>
						<Grid item xs={12} sm={6}>
							<FormControl fullWidth>
								<InputLabel variant='standard' htmlFor='uncontrolled-native' sx={textFieldStyle.label}>
									Gender
								</InputLabel>
								<NativeSelect
									defaultValue='Nam'
									inputProps={{
										id: 'uncontrolled-native',
										...register('gender'),
									}}
									sx={textFieldStyle.input}
								>
									<option value='Nam'>Nam</option>
									<option value='Nữ'>Nữ</option>
								</NativeSelect>
							</FormControl>
						</Grid>
						<Grid item xs={12} sm={6}>
							<Autocomplete
								fullWidth
								options={countries}
								defaultValue='Vietnam'
								renderInput={(params) => (
									<TextField
										{...params}
										label='National'
										variant='standard'
										sx={textFieldStyle}
										{...register('national')}
									/>
								)}
							/>
						</Grid>
						<Grid item xs={12} sm={6}>
							<TextField
								fullWidth
								label='City'
								variant='standard'
								{...register('city', { required: true })}
								error={!!errors.city}
								helperText={errors.city ? 'This field is required' : ''}
								sx={textFieldStyle}
							/>
						</Grid>
						<Grid item xs={12} sm={6}>
							<TextField
								fullWidth
								label='District'
								variant='standard'
								{...register('district', { required: true })}
								error={!!errors.district}
								helperText={errors.district ? 'This field is required' : ''}
								sx={textFieldStyle}
							/>
						</Grid>
						<Grid item xs={12} sm={6}>
							<TextField
								fullWidth
								label='Ward'
								variant='standard'
								{...register('ward', { required: true })}
								error={!!errors.ward}
								helperText={errors.ward ? 'This field is required' : ''}
								sx={textFieldStyle}
							/>
						</Grid>
						<Grid item xs={12} sm={12}>
							<TextField
								fullWidth
								label='Address'
								variant='standard'
								{...register('address', { required: true })}
								error={!!errors.address}
								helperText={errors.address ? 'This field is required' : ''}
								sx={textFieldStyle}
							/>
						</Grid>
						<Grid item xs={12} sm={6}>
							<TextField
								fullWidth
								label='Password'
								type={showPassword ? 'text' : 'password'}
								variant='standard'
								{...register('password', { required: true })}
								error={!!errors.password}
								helperText={errors.password ? 'This field is required' : ''}
								value={generatedPassword}
								onChange={(e) => setGeneratedPassword(e.target.value)}
								sx={textFieldStyle}
								InputProps={{
									endAdornment: (
										<InputAdornment position='end'>
											<IconButton
												aria-label='toggle password visibility'
												onClick={() => dispatch({ type: 'TOGGLE_PASSWORD' })}
											>
												{showPassword ? <VisibilityOff /> : <Visibility />}
											</IconButton>
										</InputAdornment>
									),
								}}
							/>
						</Grid>
						<Grid item xs={12} sm={6}>
							<TextField
								fullWidth
								label='Confirm Password'
								type={showPassword ? 'text' : 'password'}
								variant='standard'
								{...register('confirmPassword', {
									validate: (value) => value === watch('password') || 'The passwords do not match',
								})}
								error={!!errors.confirmPassword}
								helperText={errors.confirmPassword ? errors.confirmPassword.message : ''}
								value={generatedPassword}
								onChange={(e) => setGeneratedPassword(e.target.value)}
								sx={textFieldStyle}
								InputProps={{
									endAdornment: (
										<InputAdornment position='end'>
											<IconButton
												aria-label='toggle password visibility'
												onClick={() => dispatch({ type: 'TOGGLE_PASSWORD' })}
											>
												{showPassword ? <VisibilityOff /> : <Visibility />}
											</IconButton>
										</InputAdornment>
									),
								}}
							/>
						</Grid>
						<Grid item xs={12} sm={6}>
							<Button variant='contained' onClick={handleGeneratePassword}>
								Generate passwords
							</Button>
						</Grid>
					</Grid>
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
					<Button type='submit' fullWidth variant='contained' color='primary' disabled={loading}>
						Sign Up
					</Button>
				</form>
			)}
		</div>
	);
};

export default StepTwo;
