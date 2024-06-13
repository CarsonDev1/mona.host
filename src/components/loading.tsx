import React, { useEffect, useState } from 'react';
import Lottie from 'lottie-react';
import Loading from '../Loading.json';
import Image from 'next/image';

const LoadingComponent = () => {
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const fetchData = async () => {
			await new Promise((resolve) => setTimeout(resolve, 50));
			setLoading(false);
		};

		fetchData();
	}, []);
	return (
		<div>
			{loading && (
				<div className='fixed inset-0 flex items-center justify-center bg-white z-50'>
					<Image
						src='/loading.gif'
						alt='loading'
						width={300}
						height={300}
						unoptimized
						className='w-[300px] h-[200px]'
					/>
				</div>
			)}
		</div>
	);
};

export default LoadingComponent;
