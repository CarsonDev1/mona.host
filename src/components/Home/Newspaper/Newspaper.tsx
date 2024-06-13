'use client';

import React from 'react';
import './Newspaper.scss';
import { InfiniteMovingCards } from '../../ui/infinite-moving-cards';
import Link from 'next/link';
import Image from 'next/image';

type Props = {};
interface Testimonial {
	logo: string | JSX.Element | any;
	name: string | JSX.Element;
	quote: string | JSX.Element; // Quote can be either a string or JSX element
	title?: string | JSX.Element; // Title can be either a string or JSX element
}
const testimonials: Testimonial[] = [
	{
		logo: '/newspaper/newspaper-1.png',
		name: 'Charles Dickens',
		quote: 'Lorem Ipsum is simply dummy text of the printing and ypesetting industry. Lorem Ipsum has been the industry',
		// title: "A Tale of Two Cities",
	},
	{
		logo: '/newspaper/newspaper-1.png',
		name: 'William Shakespeare',
		quote: "Lorem Ipsum is simply dummy text of the printing and ypesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s dsadsadasd asdsdsasdsadsadasd sadsdasdsaddkmsajkndasnjska",
		// title: "Hamlet",
	},
	{
		logo: '/newspaper/newspaper-1.png',
		name: 'Edgar Allan Poe',
		quote: 'Lorem Ipsum is simply dummy text of the printing and ypesetting industry. Lorem Ipsum has been the industry',
		// title: "A Dream Within a Dream",
	},
	{
		logo: '/newspaper/newspaper-1.png',
		name: 'Jane Austen',
		quote: "Lorem Ipsum is simply dummy text of the printing and ypesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s dsadsadasd asdsdsasdsadsadasd sadsdasdsaddkmsajkndasnjska",
		// title: "Pride and Prejudice",
	},
	{
		logo: '/newspaper/newspaper-1.png',
		quote: 'Lorem Ipsum is simply dummy text of the printing and ypesetting industry. Lorem Ipsum has been the industry',
		name: 'Herman Melville',
		// title: "Moby-Dick",
	},
];

const testimonial_02: Testimonial[] = [
	{
		logo: '/newspaper/newspaper-1.png',
		name: 'Charles Dickens',
		quote: 'Lorem Ipsum is simply dummy text of the printing and ypesetting industry. Lorem Ipsum has been the industry',
		// title: "A Tale of Two Cities",
	},
	{
		logo: '/newspaper/newspaper-1.png',
		name: 'William Shakespeare',

		quote: "Lorem Ipsum is simply dummy text of the printing and ypesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s dsadsadasd asdsdsasdsadsadasd sadsdasdsaddkmsajkndasnjska",
		// title: "Hamlet",
	},
	{
		logo: '/newspaper/newspaper-1.png',
		name: 'Edgar Allan Poe',
		quote: 'Lorem Ipsum is simply dummy text of the printing and ypesetting industry. Lorem Ipsum has been the industry',
		// title: "A Dream Within a Dream",
	},
];

const Newspaper = (props: Props) => {
	return (
		<section className='newspaper sec-com'>
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
			<div className='px-4 mx-auto'>
				<div className="container">
					<div className='sec-com-header text-center'>
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

						<div className="sec-com-tt">
							<h2><span className="txt-hl">Báo chí</span> nói gì về <br /> MONA.Host</h2>
						</div>
					</div>
				</div>

				<div className="sec-com-content">
					<div className='w-screen card-wrapper flex flex-col overflow-hidden'>
						<InfiniteMovingCards
							items={testimonials.map((testimonial, index) => ({
								// name: testimonial.name,
								...testimonial,
								name: <span className='newspaper-logo'><Image width={193} height={22} src={testimonial.logo} alt='error' className='news-icon' /></span>,
								quote: (
									<span className='quote-class text-[1.6rem]  font-medium line-clamp-4'>
										{testimonial.quote}
									</span>
								),
								title: (
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
								),
							}))}
							direction='left'
							speed='slow'
							className='moving-cards max-w-[100vw] '
						/>
						<InfiniteMovingCards
							items={testimonial_02.map((testimonial, index) => ({
								// name: testimonial.name,
								...testimonial,
								name: <span className='newspaper-logo'><Image width={193} height={22} src={testimonial.logo} alt='error' className='news-icon' /></span>,
								quote: (
									<span className='quote-class text-[1.6rem]  font-medium line-clamp-4'>
										{testimonial.quote}
									</span>
								),
								title: (
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
								),
							}))}
							direction='right'
							speed='slow'
							className='moving-cards max-w-[100vw] '
						/>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Newspaper;
