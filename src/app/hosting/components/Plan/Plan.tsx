import React, { useEffect, useState } from 'react';
import { Button } from '@mui/material';
import { useQuery } from '@tanstack/react-query';
import PlanCard from '@/app/hosting/components/PlanCard/PlanCard';
import { getProductOption } from '@/app/api/hostings/getProductOption';
import { PlanDetails } from '@/types/PlanCardDetail';

const Plan = () => {
	const [selectedDuration, setSelectedDuration] = useState(12);
	const [priceLoading, setPriceLoading] = useState(true);

	const { data, isLoading } = useQuery<PlanDetails[]>({
		queryKey: ['listProductOption'],
		queryFn: ({ signal }) => getProductOption({ signal }),
	});

	const handleDurationChange = (duration: number): void => {
		setSelectedDuration(duration);
	};

	useEffect(() => {
		if (priceLoading) {
			setPriceLoading(false);
		}
	}, [priceLoading]);

	const filteredData = data ? data.filter((option) => option.period === selectedDuration) : [];

	return (
		<div className='pt-12'>
			<div className='flex items-center justify-center gap-6 py-12'>
				<Button
					variant={selectedDuration === 60 ? 'contained' : 'text'}
					size='large'
					onClick={() => handleDurationChange(60)}
				>
					60 Tháng
				</Button>
				<Button
					variant={selectedDuration === 36 ? 'contained' : 'text'}
					size='large'
					onClick={() => handleDurationChange(36)}
				>
					36 Tháng
				</Button>
				<Button
					variant={selectedDuration === 24 ? 'contained' : 'text'}
					size='large'
					onClick={() => handleDurationChange(24)}
				>
					24 Tháng
				</Button>
				<Button
					variant={selectedDuration === 12 ? 'contained' : 'text'}
					size='large'
					onClick={() => handleDurationChange(12)}
				>
					12 Tháng
				</Button>
			</div>
			<div className='flex gap-3'>
				{isLoading ? (
					<div className='flex flex-wrap justify-between gap-8 w-full'>
						{[...Array(6)].map((_, index) => (
							<PlanCard key={index} isLoading={true} priceLoading={false} />
						))}
					</div>
				) : (
					filteredData.map((planDetails) => (
						<PlanCard
							key={planDetails.id}
							planDetails={planDetails}
							isLoading={false}
							duration={selectedDuration}
							priceLoading={priceLoading}
						/>
					))
				)}
			</div>
		</div>
	);
};

export default Plan;
