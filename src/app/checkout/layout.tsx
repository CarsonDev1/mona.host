'use client';

import * as React from 'react';
import { useForm, FormProvider, SubmitHandler } from 'react-hook-form';

import StepCheckout from './step';
import './checkout.scss';

import validationSchema from './FormModel/validationSchema';
import checkoutFormModel from './FormModel/checkoutFormModel';

import StepOne from './StepOne/StepOne';
import StepTwo from './StepTwo/StepTwo';
// import StepThree from './StepThree/StepThree';

import { useState } from 'react';
import Login from '../(auth)/login/page';

const steps = ['Step One', 'Step Two', 'Step Three'];
const { formId, formField } = checkoutFormModel;

import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import StepQRCODE from './StepQRCODE/StepQRCODE';
// import axios from 'axios';

interface Props {
	onAccountClick: () => void;
}

interface IFormInput {
	address: string;
	city: string;
	useFor?: string;
	fullname: string;
	id_number: string;
	email: string;
	phone_number: string;
	birthday?: string;
	national?: string;
	gender?: string;
	district: string;
	ward: string;
	password: string;
	confirmPassword: string;
	payment_method?: string; // Thêm tùy chọn cho bước 3
}

// Schema validation using Yup
const schema = yup.object().shape({
	// useFor: yup.string().required('Use for is required'),
	fullname: yup.string().required('Vui lòng nhập tên đầy đủ'),
	id_number: yup.string().required('Vui lòng nhập CMT/CCCD/Hộ chiếu'),
	email: yup.string().email('Email không đúng định dạng').required('Vui lòng nhập email'),
	phone_number: yup.string().required('Vui lòng nhập đúng định dạng'),
	// birthday: yup.string().nullable().required('Birthday is required'), // Adjusted validation for birthday
	// national: yup.string().required('National is required'),
	city: yup.string().required('Vui lòng chọn Tỉnh/Thành phố'),
	district: yup.string().required('Vui lòng chọn Quận/Huyện'),
	ward: yup.string().required('Vui lòng chọn Xã/Phường'),
	address: yup.string().required('Vui lòng nhập địa chỉ cụ thể'),
	password: yup.string().min(6, 'Mật khẩu phải có ít nhất 6 ký tự').required('Vui lòng nhập mật khẩu'),
	confirmPassword: yup
		.string()
		.oneOf([yup.ref('password'), undefined], 'Nhập lại mật khẩu không chính xác')
		.required('Vui lòng nhập lại mật khẩu'),
});

const personalSchema = yup.object().shape({
	// useFor: yup.string().required('Use for is required'),
	fullname: yup.string().required('Vui lòng nhập tên đầy đủ'),
	id_number: yup.string().required('Vui lòng nhập CMT/CCCD/Hộ chiếu'),
	email: yup.string().email('Email không đúng định dạng').required('Vui lòng nhập email'),
	phone_number: yup.string().required('Vui lòng nhập đúng định dạng'),
	// birthday: yup.string().nullable().required('Birthday is required'), // Adjusted validation for birthday
	// national: yup.string().required('National is required'),
	city: yup.string().required('Vui lòng chọn Tỉnh/Thành phố'),
	district: yup.string().required('Vui lòng chọn Quận/Huyện'),
	ward: yup.string().required('Vui lòng chọn Xã/Phường'),
	address: yup.string().required('Vui lòng nhập địa chỉ cụ thể'),
	password: yup.string().min(6, 'Mật khẩu phải có ít nhất 6 ký tự').required('Vui lòng nhập mật khẩu'),
	confirmPassword: yup
		.string()
		.oneOf([yup.ref('password'), undefined], 'Nhập lại mật khẩu không chính xác')
		.required('Vui lòng nhập lại mật khẩu'),
});

const businessSchema = yup.object().shape({
	tax_id: yup.string().required('Vui lòng nhập mã số thuế doanh nghiệp'),
	company_name: yup.string().email('Email không đúng định dạng').required('Vui lòng nhập email'),
	company_email: yup.string().required('Vui lòng nhập email doanh nghiệp'),
	company_phone_number: yup.string().required('Vui lòng nhập đúng định dạng'),
});

const defaultValues: IFormInput = {
	address: '',
	city: '',
	useFor: 'personal',
	fullname: '',
	id_number: '',
	email: '',
	phone_number: '',
	birthday: '',
	national: 'Việt Nam',
	gender: 'Nam',
	district: '',
	ward: '',
	password: '',
	confirmPassword: '',
	payment_method: 'Chuyển khoản ACB',
};

export default function Layout(props: { children: React.ReactNode }) {
	function _renderStepContent(step: any) {
		// switch (step) {
		//   case 0:
		//     return <StepOne submitOne={_handleSubmit} />;
		//   case 1:
		//     return <StepTwo />;
		//   // case 2:
		//   //   return <ReviewOrder />;
		//   default:
		//     return <div>Not Found</div>;
		// }
	}

	const [activeStep, setActiveStep] = useState(0);
	const currentValidationSchema = validationSchema[activeStep];
	const isLastStep = activeStep === steps.length - 1;

	function _sleep(ms: any) {
		return new Promise((resolve) => setTimeout(resolve, ms));
	}

	async function _submitForm(values: any, actions: any) {
		await _sleep(1000);
		alert(JSON.stringify(values, null, 2));
		actions.setSubmitting(false);

		setActiveStep(activeStep + 1);
	}

	const _handleSubmit = (values: any, actions: any) => {
		console.log('clickkkkkkkkkkk');

		if (isLastStep) {
			_submitForm(values, actions);
		} else {
			setActiveStep(activeStep + 1);
			actions.setTouched({});
			actions.setSubmitting(false);
		}
	};

	function _handleBack() {
		setActiveStep(activeStep - 1);
	}

	const [open, setOpen] = React.useState(false);

	const handleAcountClick = () => {
		setOpen(true);
	};

	const handleCloseAcountClick = () => {
		setOpen(false);
	};

	const methods = useForm<IFormInput>({ resolver: yupResolver(schema), defaultValues });
	const {
		handleSubmit,
		formState: { errors },
	} = methods;

	const onNextStep = async (data: IFormInput) => {
		console.log('step', step);

		if (step < 2) {
			setStep(step + 1);
		} else {
			// Call API when at the final step
			try {
				await submitData(data);
				// setStep(prevStep => prevStep + 1); // Move to ConfirmationStep
			} catch (error) {
				console.error('Error submitting data', error);
			}
		}
	};

	// const onSubmit = (data: IFormInput) => {
	// 	alert(JSON.stringify(data));
	// 	handleNextStep(data);
	// };

	const [step, setStep] = useState<number>(0);

	const handleNextStep = () => {
		setStep(step + 1);
	};

	// const handleNextStep = () => {
	//   onNextStep(data)
	// };

	const submitData = async (data: IFormInput) => {
		// Thay đổi URL và logic API call phù hợp với yêu cầu của bạn
		console.log('data', data);

		// const response = await axios.post('https://yourapi.com/submit', data);
		// return response.data;
		renderQrCode();
	};

	const [openQr, setOpenQr] = React.useState(false);

	const renderQrCode = () => {
		setOpenQr(true);
		console.log('openQr', openQr);
	};

	const handleCloseQrClick = () => {
		setOpenQr(false);
	};

	const handleCompletePurchase = () => {
		// Handle completion logic here
		console.log('Purchase completed!');
	};

	return (
		<>
			<div className='sec-com'>
				<div className='container'>
					<div className='checkout-step mb-8'>
						<StepCheckout activeStep={step}></StepCheckout>
					</div>
					<div className='checkout-main'>
						<div className='checkout-step'>
							<div className='checkout-step-item'>
								{/* <FormProvider {...methods}> */}
								{/* <form onSubmit={methods.handleSubmit(handleNextStep)} className='form'> */}
								{/* {_renderStepContent(activeStep)} */}
								{step === 0 && <StepOne onNextStep={handleNextStep} handleNextStep={handleNextStep} />}
								{step === 1 && <StepTwo />}
								{/* {step === 2 && <StepThree onComplete={handleCompletePurchase} />} */}
								{/* </form> */}
								{/* </FormProvider> */}
								<StepQRCODE isOpen={openQr} onCloseQrClick={handleCloseQrClick} />
							</div>
						</div>
						{/* {props.children} */}
					</div>
				</div>
			</div>
		</>
	);
}
