import React from 'react';
import Image from 'next/image';
import './Partner.scss';
import { InfiniteImageAnim } from './InfiniteImageAnim';

const imageInfinite = [
	{ img: '/home/partner-kimthanh.png' },
	{ img: '/home/partner-coca.png' },
	{ img: '/home/partner-songtra.png' },
	{ img: '/home/partner-yihetang.png' },
	{ img: '/home/dongnai.png' },
	{ img: '/home/tourist.png' },
	{ img: '/home/toyota.png' },
	{ img: '/home/pureit.png' },
];
const imageInfiniteRight = [
	{ img: '/home/partner-levents.png' },
	{ img: '/home/partner-loreal.png' },
	{ img: '/home/partner-taf.png' },
	{ img: '/home/truemilk.png' },
	{ img: '/home/partner-ninja.png' },
	{ img: '/home/matviet.png' },
	{ img: '/home/jangin.png' },
	{ img: '/home/saigon.png' },
];

export const Partner = () => {
	return (
		<section className='sec-com sec-partner'>
			<div className='container'>
				<div className='mx-auto'>
					<div className='sec-com-tt-sub text-center'>
						<h2 className='font-bold'>Nhà cung cấp hạ tầng đáng tin cậy cho</h2>
					</div>
					<div
						className='md:mt-8 mt-4 relative w-full h-fit mx-auto overflow-hidden'
					>
						<div className='mover-slider-01 mx-auto gap-12 flex overflow-hidden mb-8'>
							<InfiniteImageAnim items={imageInfinite} speed='normal' pauseOnHover={false} />
						</div>
						<div className='mover-slider-02 mx-auto gap-12 flex overflow-hidden'>
							<InfiniteImageAnim items={imageInfiniteRight} direction='right' speed='normal' pauseOnHover={false} />
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};
