import { Cart } from '@/components/MiniCart/Cart';
import { CartItem } from '@/components/MiniCart/CartItem';
import Link from 'next/link';
import { useState } from 'react';
// import { CartItem } from '@/components/MiniCart/CartItem'

interface SearchResult {
	suffix: string;
	name: string;
	buy_price: number;
	renew_price: number;
}

interface Step1Props {
	onNextStep: () => void;
	handleNextStep: () => void;
}

const StepOne: React.FC<Step1Props> = ({ onNextStep, handleNextStep }) => {
	return (
		<div className='flex'>
			<Cart onNextStep={handleNextStep} handleNextStep={handleNextStep} />
			{/* <div className='cart-list w-full'>
				<div className='cart-mini-wrap flex flex-col w-full bg-white p-4 h-full rounded-lg'>
					<div className='cart-mini-list h-full'>
					</div>
				</div>
			</div> */}
		</div>
	);
};

export default StepOne;
