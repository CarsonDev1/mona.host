'use client';
import React from 'react';
import Image from 'next/image';
import KnowledgeItem from './KnowledgeItem';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

type Card = {
	date: string;
	title: string;
	desc: string;
	avatarImg: string;
	name: string;
};

const dummyData: Card[] = [
	{
		date: 'Apr 08, 2024',
		title: 'Lorem Ipsum is simply dummy text',
		desc: 'Local brand hàng đầu Việt Nam giải quyết nguy cơ mất doanh thu Online',
		avatarImg: '',
		name: 'Lorem Ipsum',
	},
	{
		date: 'Apr 08, 2024',
		title: 'Lorem Ipsum is simply dummy text of the printing and typesetting',
		desc: 'Local brand hàng đầu Việt Nam giải quyết nguy cơ mất doanh thu Online vì đối mặt với tình trạng quá tải máy chủ do lượng khách áp đảo hạ tầng máy chủ khi và chỉ khi',
		avatarImg: '',
		name: 'Lorem Ipsum',
	},
	{
		date: 'Apr 08, 2024',
		title: 'Lorem Ipsum is simply dummy text of the printing and typesetting',
		desc: 'Local brand hàng đầu Việt Nam giải quyết nguy cơ mất doanh thu Online vì đối mặt với tình trạng quá tải máy chủ do lượng khách áp đảo hạ tầng máy chủ khi và chỉ khi',
		avatarImg: '',
		name: 'Lorem Ipsum',
	},
	{
		date: 'Apr 08, 2024',
		title: 'Lorem Ipsum is simply dummy text of the printing and typesetting',
		desc: 'Local brand hàng đầu Việt Nam giải quyết nguy cơ mất doanh thu Online vì đối mặt với tình trạng quá tải máy chủ do lượng khách áp đảo hạ tầng máy chủ khi và chỉ khi',
		avatarImg: '',
		name: 'Lorem Ipsum',
	},
];

const Knowledge = () => {
	return (
		<section className='sec-knowledge sec-com'>
			<div className="sec-com-separator">
				<div className="section-separator gap-24 flex items-center mx-autos is-visible">
					<div className="flex-1 neutral-opaque bg-gradient-to-r from-transparent to-neutral-opaque-10"></div>
					<div className="section-separator-ani left">
						<Image
							src='/separator/section-separator-ani.png'
							width={173}
							height={14}
							alt='separator'
							className='separator-img'
						/>
					</div>
					<div className="neutral-opaque bg-neutral-opaque-6 flex-1"></div>
					<div className="moving-arrows-item relative moving-arrows-item-undefined rotate-90">
						<div></div>
						<div></div>
						<div></div>
						<div></div>
						<div></div>
						<div></div>
						<div></div>
						<div></div>
						<div></div>
						<div></div>
					</div>
					<div className="neutral-opaque bg-neutral-opaque-6 flex-1"></div>
					<div className="section-separator-ani">
						<Image
							src='/separator/section-separator-ani.png'
							width={173}
							height={14}
							alt='separator'
							className='separator-img'
						/>
					</div>
					<div className="flex-1 neutral-opaque bg-gradient-to-l from-transparent to-neutral-opaque-10"></div>
				</div>
			</div>
			<div className='container'>
				<div className="knowledge-header sec-com-header">
					<div className="sec-com-frame active">
						<div className="line mid top"></div>
						<div className="line mid bottom"></div>
						<div className="line side left"></div>
						<div className="line side right"></div>
						<div className="dot top left"></div>
						<div className="dot top right"></div>
						<div className="dot bottom left"></div>
						<div className="dot bottom right"></div>
					</div>

					<div className="sec-knowledge-width">
						<div className='sec-com-tt txt-center'>
							<h2>
								Tìm hiểu thêm từ <span className="txt-hl">kiến thức</span> hệ thống lập trình từ đội ngũ MONA.Host
							</h2>
						</div>
					</div>
				</div>
				<div className="sec-com-content">
					<div className='swiper-knowledge relative flex gap-6 max-[1024px]:gap-4 max-[768px]:flex-wrap'>
						<Swiper
							spaceBetween={8}
							slidesPerView={3}
							modules={[Pagination]}
							grabCursor
							breakpoints={{
								320: {
									slidesPerView: 1.2,
								},
								480: {
									slidesPerView: 2,
								},
								768: {
									slidesPerView: 2,
									spaceBetween: 16,
								},
								1024: {
									slidesPerView: 3,
								},
								1200: {
									slidesPerView: 4,
									spaceBetween: 24,
								},
							}}
							pagination={{
								clickable: true,
								el: '.swiper-knowledge .swiper-pagination',
							}}
						>
							{dummyData.map((data, idx) => (
								<SwiperSlide key={idx}>
									<KnowledgeItem data={data} />
								</SwiperSlide>
							))}
						</Swiper>
						<div className='swiper-pagination'></div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Knowledge;
