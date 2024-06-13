import Image from 'next/image';
import React from 'react';
import demoImg from '../../../../public/home/demo-img.png';
import avatar from '../../../../public/home/avatar.png';
import arrowRight from '../../../../public/home/arrow-right-color.png';
import Link from 'next/link';
import './Knowledge.scss';

type Card = {
	date: string;
	title: string;
	desc: string;
	avatarImg: string;
	name: string;
	key?: number;
};

type Props = {
	data: Card;
};

const KnowledgeItem: React.FC<Props> = ({ data }) => {
	return (
		<div style={{ borderStyle: 'solid' }} className='contain-all w-full h-full'>
			<div className="bgBox"></div>
			<div className='content-inside flex flex-col dark:#fff h-full'>
				<div className='img-quality'>
					<Image width={450} height={300} src={demoImg} alt='error' />
				</div>
				<div className='knowledge-content lg:p-6 md:p-3 sm:p-2 p-4 flex-1 flex flex-col'>
					<div className='text-date mb-4 max-[1200px]:mb-2'>{data?.date}</div>
					<div className='font-semibold mb-2'>
						<span className='line-clamp-2 block pb-[2px]'>{data?.title}</span>
					</div>
					<div className='lg:mb-4 md:mb-2 mb-1'>
						<span className='pb-[1px] line-clamp-3'>{data?.desc}</span>
					</div>
					<div className='mt-auto sec-knowledge-footer'>
						<div className='flex flex-row gap-2 max-[1200px]:mb-4 max-[576px]:mb-3 items-center'>
							<Image
								width={32}
								height={32}
								src={avatar}
								alt='error'
								className='rounded-full know-avt'
							></Image>
							<p className='font-semibold'>{data?.name}</p>
						</div>
						<div className='sec-knowledge-link'>
							<Link href='' className='view-more'>
								<span className='txt'>Xem thêm</span>
								<span className='icon'>
									<svg
										viewBox="0 0 21 21"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											d="M11.75 4.25L18 10.5M18 10.5L11.75 16.75M18 10.5H3"
											stroke="#011737"
											strokeWidth="1.5"
											strokeLinecap="round"
											strokeLinejoin="round"
										/>
									</svg>
								</span>
							</Link>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default KnowledgeItem;
