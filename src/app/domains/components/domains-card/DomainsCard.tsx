import React from 'react';

interface DomainsCardProps {
	title: string;
	content: string;
	background: string;
}

const DomainsCard: React.FC<DomainsCardProps> = ({ title, content, background }) => {
	return (
		<div className='shadow-lg border-sky-300 relative group overflow-hidden p-[--card-padding] rounded-[--card-border-radius] bg-white border border-[--ui-light-border-color]'>
			<div
				aria-hidden='true'
				className={`absolute inset-0 duration-300 -translate-y-1/2 border rounded-full opacity-25 aspect-video ${background} `}
			></div>
			<div className='relative'>
				<div className='flex items-center justify-center'>
					<div className='text-3xl font-semibold text-indigo-900'>{title}</div>
				</div>

				<div className='mt-6 pb-6 rounded-b-[--card-border-radius]'>
					<p className='text-gray-700'>{content}</p>
				</div>
			</div>
		</div>
	);
};

export default DomainsCard;
