import React from 'react';

interface DomainsCardNameProps {
	buy_price: number;
	description: string;
	suffix: string;
	background: string;
	onRegister: (suffix: string) => void;
}

const removeDot = (suffix: string) => {
	if (suffix.startsWith('.')) {
		return suffix.substring(1);
	}
	return suffix;
};

const DomainCardName: React.FC<DomainsCardNameProps> = ({ buy_price, description, suffix, background, onRegister }) => {
	const domainSuffix = removeDot(suffix);

	return (
		<div className='xl:w-[300px]'>
			<div className='shadow-lg border-sky-300 relative group overflow-hidden p-[--card-padding] rounded-[--card-border-radius] bg-white border border-[--ui-light-border-color] '>
				<div
					aria-hidden='true'
					className={`absolute inset-0 duration-300 -translate-y-1/2 border rounded-full opacity-25 aspect-video group-hover:-translate-y-1/4 bg-gradient-to-b ${background} to-white `}
				></div>
				<div className='relative'>
					<div className='flex items-center justify-center'>
						<div className='flex text-3xl text-orange-500'>.</div>
						<div className='text-3xl font-semibold text-indigo-900'>{domainSuffix}</div>{' '}
					</div>

					<div className='mt-6 pb-6 rounded-b-[--card-border-radius]'>
						<p className='text-gray-700 '>{description}</p>
					</div>

					<h3 className='mb-4 mr-1 text-3xl font-semibold text-indigo-900'>
						{buy_price.toLocaleString()}/năm
					</h3>

					<button
						className='p-3 bg-[#1ec0f2] hover:bg-[#5180e5] rounded-lg'
						onClick={() => onRegister(suffix)}
					>
						<span className='text-white'>Đăng ký</span>
					</button>
				</div>
			</div>
		</div>
	);
};

export default DomainCardName;
