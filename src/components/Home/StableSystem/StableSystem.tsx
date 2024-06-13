'use client';
import React, { useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaArrowRight } from 'react-icons/fa6';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
// import required modules
import { EffectCoverflow, Pagination } from 'swiper/modules';
import './StableSystem.scss';

export const StableSystem = () => {
	return (
		<section className='sec-com stablesystem'>
			<div className='container'>
				<div className='sec-com-header stablesystem-header text-center'>
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

					<h2 className='sec-com-tt stablesystem-title'>
						Mona.Host <br /> Luôn hướng tới sự <span className="txt-hl">ổn định</span>
					</h2>
				</div>

				<div className="sec-com-content stablesystem-content">
					<div className="sec-com-frame active">
						<div className="line mid bottom"></div>
						<div className="line side left"></div>
						<div className="line side right"></div>
						<div className="dot top left"></div>
						<div className="dot top right"></div>
						<div className="line-sticky">
							<div className="sticky-ele"></div>
						</div>
					</div>

					<div className="stablesystem-wrap col-10 mg-auto">
						<div className="stablesystem-list d-flex f-ctn">
							<div className="stablesystem-item col col-12">
								<div className="wrap">
									<div className="box">
											<div className="bgBox"></div>
											<div className="content">
												<div className="title">Hạ tầng được đầu tư mạnh nhất thị trường để đảm bảo sự ổn định</div>
												<div className="desc">
													<p className="desc-item">Đầu tư xây dựng hệ thống mạnh mẽ, chọn lọc từng linh kiện </p>
													<p className="desc-item">Tốc độ kết nối nội bộ 80Gbps, tốc độ Internet 20Gbps đảm bảo trải nghiệm liền mạch</p>
													<p className="desc-item">Bảo mật hệ thống đa tầng được phát triển và hoàn thiện suốt 8 năm</p>
												</div>
												<div className="stablesystem-btn">
												<Link
													href='#'
													className='btn btn-pri banner-link'
												>
													<span className='txt'>Xem thông số kỹ thuật</span>
													<svg
															className="HoverArrow"
															width={10}
															height={10}
															viewBox="0 0 10 10"
															aria-hidden="true"
														>
															<g fillRule="evenodd">
																<path className="HoverArrow__linePath" d="M0 5h7" />
																<path className="HoverArrow__tipPath" d="M1 1l4 4-4 4" />
															</g>
														</svg>
												</Link>
												</div>
											</div>
											<div className="img">
												<Image
													src='/home/stablesystem-01.svg'
													width={573}
													height={417}
													alt=''
													className=''
													loading='lazy'
												/>
											</div>
									</div>
								</div>
							</div>
							<div className="stablesystem-item col col-6">
								<div className="wrap">
									<div className="box">
										<div className="bgBox"></div>
										<div className="content">
											<div className="title">Hệ thống hoạt động dưới hệ thống giám sát và kỹ sư liên tục 24/7</div>
											<div className="desc">
												<p className="desc-item">Sử dụng các công nghệ giám sát hệ thống hàng đầu giúp phát hiện các nguy cơ tìm ẩn và tình hình hoạt động của hệ thống.</p>
												<p className="desc-item">Đội ngũ kỹ sự trình độ cao, từng thiết kế và duy trì hoạt động cho những hệ thống phục vụ hàng triệu user cùng lúc. Giải quyết mọi nguy cơ hệ thống từ khi nó còn chưa phát sinh vấn đề.</p>
												<p className="desc-item"> MONA.Host đã đảm bảo thời gian uptime 99.9% cho toàn bộ khách hàng, xử lý tất cả vấn đề phát sinh trong quá trình vận hành ngay trước cả khi khách hàng phát hiện vấn đề</p>
											</div>
										</div>
										<div className="img">
											<Image
												src='/home/stablesystem-02.svg'
												width={477}
												height={374}
												alt=''
												className=''
												loading='lazy'
											/>
										</div>
									</div>
								</div>
							</div>
							<div className="stablesystem-item col col-6">
								<div className="wrap">
									<div className="box">
										<div className="bgBox"></div>
										<div className="content">
											<div className="title">Ưu tiên giải quyết vấn đề, đặt hoạt động kinh doanh của khách hàng lên hàng đầu</div>
											<div className="desc">
												<p className="desc-item"> Luôn đảm bảo hoạt động kinh doanh của quý khách hàng được ổn định, phát triển mạnh mẽ và lấy đó làm kim chỉ nam hoạt động</p>
												<p className="desc-item">Khi đã chọn MONA.Host, không cần biết hệ thống của bạn được phát triển bởi đơn vị nào, kỹ sư của chúng tôi sẽ giải quyết mọi vấn đề phát sinh </p>
												<p className="desc-item">Không đổ lỗi, không kéo dài quy trình, không gây khó khăn cho khách hàng. MONA.Host giải quyết tất cả vấn đề vì chúng tôi đủ nguồn lực cũng như khả năng làm tốt việc đó.</p>
											</div>
										</div>
										<div className="img">
											<Image
												src='/home/stablesystem-03.svg'
												width={477}
												height={374}
												alt=''
												className=''
												loading='lazy'
											/>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};
