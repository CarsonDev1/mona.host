/* eslint-disable react-hooks/exhaustive-deps */
import CartItemDetail from '@/components/MiniCart/DomainItem';
import React, { useState, useEffect } from 'react';
import { toast, Slide } from 'react-toastify';

interface SearchResult {
	suffix: string;
	name: string;
	buy_price: number;
	renew_price: number;
}

interface CartItemProps {
	searchResult: SearchResult;
	onPriceChange: (name: string, newPrice: number) => void;
	handleRemoveItem: (name: string) => void;
	handleToggleMailItem: () => void;
	handleSSLPriceChange: any;
	priceMail: any;
	setPriceMail: any;
}

export const CartItem: React.FC<CartItemProps> = ({
	searchResult,
	onPriceChange,
	handleRemoveItem,
	handleToggleMailItem,
	handleSSLPriceChange,
	priceMail,
	setPriceMail,
}) => {
	const notifySuccess = () =>
		toast.info(`Đã cập nhật thời hạn tên miền`, {
			position: 'top-center',
			autoClose: 3000,
			pauseOnHover: false,
			className: 'custom-toast',
			transition: Slide,
		});

	const itemKey = `selectedYears_${searchResult?.name}`;

	const [selectedYears, setSelectedYears] = useState<number>(() => {
		const savedYears = localStorage.getItem(itemKey);
		return savedYears ? parseInt(savedYears, 10) : 1;
	});
	const [showMailItem, setShowMailItem] = useState(false);

	useEffect(() => {
		const newTotalPrice = calculatePrice(selectedYears);
		localStorage.setItem(itemKey, selectedYears.toString());
		onPriceChange(searchResult?.name, newTotalPrice);
	}, [selectedYears]);

	const handleYearsChange = (event: any) => {
		setSelectedYears(parseInt(event.target.value, 10));
		notifySuccess();
	};

	const calculatePrice = (years: number) => {
		if (years === 1) {
			return searchResult?.buy_price;
		} else if (years === 2) {
			return searchResult?.renew_price;
		} else {
			return searchResult?.renew_price * years;
		}
	};

	const handleRemoveItemClick = () => {
		handleRemoveItem(searchResult.name);
	};

	const toggleMailItem = () => {
		setShowMailItem((prev) => !prev);
	};

	return (
		<div className='w-full'>
			<CartItemDetail
				searchResult={searchResult}
				selectedYears={selectedYears}
				handleYearsChange={handleYearsChange}
				calculatePrice={calculatePrice}
				handleRemoveItemClick={handleRemoveItemClick}
				showMailItem={showMailItem}
				toggleMailItem={toggleMailItem}
				priceMail={priceMail}
				handleSSLPriceChange={handleSSLPriceChange}
				setPriceMail={setPriceMail}
			/>
		</div>
	);
};
