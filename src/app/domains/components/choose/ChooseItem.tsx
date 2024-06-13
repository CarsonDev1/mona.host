import Image from 'next/image';
import React from 'react';

interface ChooseItemProps {
	image: string;
	title: string;
	description: string;
	background: string;
}

const ChooseItem: React.FC<ChooseItemProps> = ({ image, title, description, background }) => {
	return (
		<div className='relative group overflow-hidden p-[--card-padding] rounded-[--card-border-radius] bg-white border border-[--ui-light-border-color] shadow-lg'>
			<div
				aria-hidden='true'
				className={`absolute inset-0 duration-300 -translate-y-1/2 border rounded-full opacity-25 aspect-video `}
			></div>
			<div className='relative'>
				<Image src={image} width={400} height={400} alt='choose-01' className='mb-2 max-h-56' />
				<h2 className='mb-4 text-2xl font-semibold text-center text-gray-950 '>{title}</h2>

				<div className='mt-4 pb-6 rounded-b-[--card-border-radius]'>
					<p className='text-gray-700 '>{description}</p>
				</div>
			</div>
		</div>
	);
};

export default ChooseItem;
