import React, { useEffect, useState } from 'react';
import { CartItem } from './CartItem';
import { Button } from '@mui/material';
import Link from 'next/link';
import MailItem from '@/components/MiniCart/MailItem';
import './CartMini.scss';
import { InformationProps, PlanDetails } from '@/types/PlanCardDetail';
import AddedCartItems from '@/components/MiniCart/AddedCartItem';
import SecurityItem from '@/components/MiniCart/SecurityItem';

interface SearchResult {
	suffix: string;
	name: string;
	buy_price: number;
	renew_price: number;
	id: string;
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

interface Step1Props {
	onNextStep: () => void;
	handleNextStep: () => void;
}

export const Cart: React.FC<Step1Props> = ({ onNextStep, handleNextStep }) => {
	const [cartItems, setCartItems] = useState<SearchResult[]>([]);
	const [totalPrice, setTotalPrice] = useState<number>(0);
	const [showMailItem, setShowMailItem] = useState<boolean>(false);
	const [securityItemVisible, setSecurityItemVisible] = useState<boolean>(false);

	useEffect(() => {
		const loadCartItems = () => {
			const storedCartItems = JSON.parse(localStorage.getItem('cart') || '[]');
			setCartItems(storedCartItems);
			updateTotalPrice(storedCartItems);
		};

		loadCartItems();

		const handleCartUpdate = () => {
			loadCartItems();
		};

		window.addEventListener('cartUpdated', handleCartUpdate);
		return () => {
			window.removeEventListener('cartUpdated', handleCartUpdate);
		};
	}, []);

	const updateTotalPrice = (items: SearchResult[]) => {
		const newTotalPrice = items.reduce((total, item) => {
			const savedYears = localStorage.getItem(`selectedYears_${item.name}`);
			const years = savedYears ? parseInt(savedYears, 10) : 1;
			const price = item.salePrice ? item.salePrice : item.buy_price;
			if (years === 1) {
				return total + price;
			} else if (years === 2) {
				return total + item.renew_price;
			} else {
				return total + item.renew_price * years;
			}
		}, 0);
		setTotalPrice(newTotalPrice);
	};

	const handleClearCart = () => {
		localStorage.removeItem('cart');
		setCartItems([]);
		setTotalPrice(0);
		window.dispatchEvent(new Event('cartUpdated'));
	};

	const handleRemoveItemHosting = (optionName: string) => {
		const updatedCartItems = cartItems.filter((item) => item.name !== optionName);
		setCartItems(updatedCartItems);
		localStorage.setItem('cart', JSON.stringify(updatedCartItems));
		updateTotalPrice(updatedCartItems);
		window.dispatchEvent(new Event('cartUpdated'));
	};

	const handleRemoveItem = (name: string) => {
		const updatedCartItems = cartItems.filter((item) => item.name !== name);
		setCartItems(updatedCartItems);
		localStorage.setItem('cart', JSON.stringify(updatedCartItems));
		updateTotalPrice(updatedCartItems);
		window.dispatchEvent(new Event('cartUpdated'));
	};

	const handlePriceChange = (name: string, newPrice: number) => {
		updateTotalPrice(cartItems);
	};

	const handleShowMailItem = () => {
		setShowMailItem((prevShowMailItem) => !prevShowMailItem);
	};

	const handleToggleSecurityItem = () => {
		setSecurityItemVisible(!securityItemVisible);
	};

	const handleSSLPriceChange = (name: string, isChecked: boolean) => {
		const sslPrice = isChecked ? 2000000 : 0;
		const updatedCartItems = cartItems.map((item) => {
			if (item.name === name) {
				return { ...item, sslPrice };
			}
			return item;
		});
		setCartItems(updatedCartItems);
		updateTotalPrice(updatedCartItems);
	};

	return (
		<div className='cart-mini-wrap top-0 right-0 bottom-0 flex flex-col w-full z-50 bg-white p-4 h-full relative items-start'>
			<div className='d-flex f-ctn justify-between relative items-start'>
				<div className='col col-7'>
					<div className='flex gap-3 items-center mb-0 justify-between'>
						<span className='font-bold'>
							Giỏ hàng <span className='text-pri'>({cartItems.length} sản phẩm)</span>
						</span>
					</div>
					<div className='cart-mini-list items-start'>
						{cartItems.map(
							(result) =>
								result.type === 'domain' && (
									<div key={result.name} className='cart-item flex justify-between items-center mb-4'>
										<CartItem
											searchResult={result}
											onPriceChange={handlePriceChange}
											handleRemoveItem={handleRemoveItem}
											handleToggleMailItem={handleShowMailItem}
											handleSSLPriceChange={handleSSLPriceChange}
										/>
									</div>
								)
						)}
						{cartItems.map(
							(cartItem) =>
								cartItem.type === 'hosting' && (
									<div
										key={cartItem.name}
										className='cart-item flex justify-between items-center mb-4'
									>
										<AddedCartItems
											cartItem={cartItem}
											updateTotalPrice={updateTotalPrice}
											handleRemoveItemHosting={handleRemoveItemHosting}
											handlePriceChange={handlePriceChange}
											handleToggleSecurityItem={handleToggleSecurityItem}
											securityItemVisible={securityItemVisible}
										/>
									</div>
								)
						)}
						{securityItemVisible && <SecurityItem handleToggleSecurityItem={handleToggleSecurityItem} />}
					</div>
					{showMailItem && (
						<div className='mail-item'>
							<MailItem handleToggleMailItem={handleShowMailItem} />
						</div>
					)}
				</div>
				<div className='col col-4 h-fit sticky top-[20rem] right-0'>
					<div className='cart-payment p-4 bg-[#f5f7f8] rounded-md'>
						<div className='rounded-lg'>
							<div className='cart-payment-header flex gap-3 justify-between items-center mb-4'>
								<span className='font-bold flex-1'>Chi tiết đơn hàng</span>
							</div>
							<div className='cart-payment-body flex flex-col gap-1 mt-4 pt-4 border-t-[1px] border-dashed'>
								<div className='item flex gap-1 justify-between items-center'>
									<p className='label text-xl'>Tổng tiền (chưa bao gồm VAT)</p>
									<p className='detail text-3xl font-bebas'>{totalPrice.toLocaleString()}đ</p>
								</div>
								<div className='item flex gap-1 justify-between items-center'>
									<p className='label text-xl'>Giá giảm</p>
									<p className='detail text-xl font-bebas'>-</p>
								</div>
								<div className='item flex gap-1 justify-between items-center'>
									<p className='label text-xl'>VAT (10%)</p>
									<p className='detail text-2xl font-bebas'>{(totalPrice * 0.1).toLocaleString()}đ</p>
								</div>
							</div>
							<div className='cart-payment-footer mt-4 pt-4 border-t-[1px] border-dashed'>
								<div className='item flex gap-1 justify-between items-center'>
									<p className='label text-xl'>
										Thành tiền
										<br />
										<span className='text-xl italic'>(Đã bao gồm VAT)</span>
									</p>
									<p className='detail text-4xl font-bebas text-orange-500'>
										{(totalPrice + totalPrice * 0.1).toLocaleString()}
									</p>
								</div>
							</div>
						</div>
					</div>
					<Button
						onClick={handleNextStep}
						variant='contained'
						className='my-6 p-6 bg-nhtq hover:bg-[#e2894d]'
						fullWidth
					>
						<span className='text-xl'>Tiếp tục thanh toán</span>
					</Button>
					<div className='cart-payment-note text-center text-xl'>
						Nếu bạn có bất kỳ thắc mắc về giao dịch của mình, hãy liên hệ ngay đến nhân viên hỗ trợ của
						MONA.Host thông qua hotline:{' '}
						<Link href='tel:1900636648' className='font-semibold text-2xl'>
							<span className='text-media'>1900 </span>
							<span className='text-edutech'>636 </span>
							<span className='text-nhtq'>648</span>
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
};
