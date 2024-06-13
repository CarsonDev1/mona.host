import React, { useState } from 'react';
import { styled } from '@mui/material/styles';
import Zoom from '@mui/material/Zoom';
import Tooltip, { TooltipProps, tooltipClasses } from '@mui/material/Tooltip';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import { Typography, Skeleton, Button } from '@mui/material';
import { PlanDetails } from '@/types/PlanCardDetail';
import { Slide, toast } from 'react-toastify';

interface PlanCardProps {
	planDetails?: PlanDetails;
	isLoading: boolean;
	duration?: number;
	priceLoading: boolean;
}

const CustomWidthTooltip = styled(({ className, ...props }: TooltipProps) => (
	<Tooltip {...props} classes={{ popper: className }} />
))({
	[`& .${tooltipClasses.tooltip}`]: {
		maxWidth: 200,
	},
});

const PlanCard: React.FC<PlanCardProps> = ({ planDetails, isLoading, priceLoading }) => {
	const [showTechnicalDetails, setShowTechnicalDetails] = useState(false);

	const price = planDetails?.salePrice || planDetails?.basePrice;

	const notifySuccess = (name: string[]) =>
		toast.success(`Đã thêm hosting ${name.join(', ')} vào giỏ hàng`, {
			position: 'top-center',
			autoClose: 4000,
			pauseOnHover: false,
			className: 'custom-toast',
			transition: Slide,
		});

	const toggleTechnicalDetails = () => {
		setShowTechnicalDetails((prev) => !prev);
	};

	const addToCart = (plan: PlanDetails) => {
		const cartHosting = JSON.parse(localStorage.getItem('cart') || '[]');

		cartHosting.push({ ...plan, type: 'hosting' });
		localStorage.setItem('cart', JSON.stringify(cartHosting));
		window.dispatchEvent(new Event('cartUpdated'));
		notifySuccess([plan.name]);
	};

	return (
		<div style={{ borderStyle: 'solid' }} className='p-4 border border-[#3333] shadow-md'>
			{isLoading ? <Skeleton width={180} height={30} /> : <h2>{planDetails?.name}</h2>}
			{isLoading || priceLoading ? (
				<Skeleton width={120} height={32} />
			) : (
				<span className='text-2xl font-bold'>{price?.toLocaleString()} VNĐ/Tháng</span>
			)}

			<Button variant='contained' className='text-white' onClick={() => addToCart(planDetails!)}>
				Thêm vào giỏ hàng
			</Button>

			<div className='flex justify-between items-center'>
				{isLoading ? <Skeleton width={80} height={24} /> : <h3>Features</h3>}
				{isLoading ? (
					<Skeleton width={24} height={24} />
				) : (
					<CustomWidthTooltip
						title={<Typography variant='h5'>{planDetails?.information.feature_tooltip}</Typography>}
						TransitionComponent={Zoom}
						placement='bottom-end'
						arrow
						PopperProps={{
							style: { maxWidth: 'none', fontSize: '20px' },
						}}
						className='cursor-pointer'
					>
						<HelpOutlineIcon className='bg-white cursor-pointer' />
					</CustomWidthTooltip>
				)}
			</div>

			<ul>
				{isLoading ? (
					<>
						<Skeleton width='100%' height={20} />
						<Skeleton width='100%' height={20} />
						<Skeleton width='100%' height={20} />
					</>
				) : (
					planDetails?.information.features.map((feature, index) => (
						<li key={index} className='flex items-center'>
							{feature.description}
							{feature.tooltip && (
								<CustomWidthTooltip
									TransitionComponent={Zoom}
									arrow
									placement='bottom-end'
									title={<Typography variant='h5'>{feature.tooltip}</Typography>}
								>
									<HelpOutlineIcon className='cursor-pointer' />
								</CustomWidthTooltip>
							)}
						</li>
					))
				)}
			</ul>

			<div className='flex justify-between items-center'>
				{isLoading ? <Skeleton width={80} height={24} /> : <h3>Security</h3>}
				{isLoading && <Skeleton width={24} height={24} />}
			</div>
			<ul>
				{isLoading ? (
					<>
						<Skeleton width='100%' height={20} />
						<Skeleton width='100%' height={20} />
						<Skeleton width='100%' height={20} />
					</>
				) : (
					planDetails?.information.securities.map((securitie, index) => (
						<li key={index} className='flex items-center'>
							{securitie.description}
							{securitie.tooltip && (
								<CustomWidthTooltip
									TransitionComponent={Zoom}
									arrow
									placement='bottom-end'
									title={<Typography variant='h5'>{securitie.tooltip}</Typography>}
								>
									<HelpOutlineIcon />
								</CustomWidthTooltip>
							)}
						</li>
					))
				)}
			</ul>

			<div className='flex justify-between items-center'>
				{isLoading ? <Skeleton width={80} height={24} /> : <h3>Services</h3>}
				{isLoading && <Skeleton width={24} height={24} />}
			</div>
			<ul>
				{isLoading ? (
					<>
						<Skeleton width='100%' height={20} />
						<Skeleton width='100%' height={20} />
						<Skeleton width='100%' height={20} />
					</>
				) : (
					planDetails?.information.services.map((service, index) => (
						<li key={index} className='flex items-center'>
							{service.description}
							{service.tooltip && (
								<CustomWidthTooltip
									TransitionComponent={Zoom}
									arrow
									placement='bottom-end'
									title={<Typography variant='h5'>{service.tooltip}</Typography>}
								>
									<HelpOutlineIcon />
								</CustomWidthTooltip>
							)}
						</li>
					))
				)}
			</ul>

			{showTechnicalDetails && (
				<div>
					<h3>Technical Description</h3>
					<ul>
						{isLoading ? (
							<>
								<Skeleton width='100%' height={20} />
								<Skeleton width='100%' height={20} />
								<Skeleton width='100%' height={20} />
							</>
						) : (
							planDetails?.information.specifications.map((specification, index) => (
								<li key={index} className='flex items-center'>
									{specification.description}
									{specification.tooltip && (
										<CustomWidthTooltip
											TransitionComponent={Zoom}
											arrow
											placement='bottom-end'
											title={<Typography variant='h5'>{specification.tooltip}</Typography>}
										>
											<HelpOutlineIcon />
										</CustomWidthTooltip>
									)}
								</li>
							))
						)}
					</ul>
				</div>
			)}

			<button onClick={toggleTechnicalDetails}>
				{showTechnicalDetails ? (
					<span className='text-sky-400'>Xem ít tính năng hơn</span>
				) : (
					<span className='text-sky-400'>Xem tất cả tính năng</span>
				)}
			</button>
		</div>
	);
};

export default PlanCard;
