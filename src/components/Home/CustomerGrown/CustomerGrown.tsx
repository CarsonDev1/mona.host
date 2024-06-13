'use client';
import React from 'react';
import Image from 'next/image';
import './CustomerGrown.scss';
import Link from 'next/link';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Grid, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/grid';
import 'swiper/css/pagination';

const caseStudies = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'];

export const CustomerGrown = () => {
	return (
		<section className='sec-com sec-customergrown'>
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
				<div className='sec-com-header customergrown-header text-center'>
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

					<div className="sec-customergrown-width">
						<h2 className='sec-com-tt'>Những <span className="txt-hl">khách hàng</span> phát triển mạnh mẽ cùng MONA.Host</h2>
					</div>
				</div>
			</div>
			<div className='customergrown-content sec-com-content'>
					<div className='customergrown-list d-flex f-ctn'>
						<Swiper
							slidesPerView={1.1}
							loop={true}
							grid={{
								rows: 2,
							}}
							pagination={{
								clickable: true,
							}}
							modules={[Grid, Pagination]}
							breakpoints={{
								480: {
									slidesPerView: 1.5,
								},
								768: {
									slidesPerView: 2.2,
								},
								1200: {
									slidesPerView: 4,
								},
							}}
							className="mySwiper"
						>
							{caseStudies.map((item, index) => (
								<SwiperSlide key={index}>
									<div className='customergrown-item col'>
										<div className='wrap'>
											<div className='img'>
												<Image src='/home/demo-img.png' width={451} height={333} alt='' />
											</div>
											<div className='content'>
												<div className='name'>Case study Levents</div>
												<div className='desc'>
													Local brand hàng đầu Việt Nam giải quyết nguy cơ mất doanh thu Online vì đối
													mặt với tình trạng quá tải máy chủ do lượng khách áp đảo hạ tầng máy chủ khi
													chọn MONA.Host
												</div>
												<Link href='' className='view-more'>
													<span className='txt'>Xem thêm</span>
													<span className='icon'>
														<Image src='/arrow-right.svg' width={451} height={333} alt='' />
													</span>
												</Link>
											</div>
										</div>
									</div>
								</SwiperSlide>
							))}
						</Swiper>
					</div>
				<div className="container">
				</div>
			</div>
		</section>
	);
};
