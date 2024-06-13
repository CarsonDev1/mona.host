import React from 'react';
import Accordion from './Accordion';
import Image from 'next/image';

const Question = () => {
	return (
		<section className='sec-question sec-com'>
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

					<div className="sec-question-width">
						<h2 className='sec-com-tt stablesystem-title'>Các <span className="txt-hl">câu hỏi</span> thường gặp</h2>
						<div className="sec-com-desc">Find questions and answers related to the design system, purchase, updates, and support.</div>
					</div>
				</div>

				<div className='sec-com-content'>
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

					<Accordion />
				</div>
			</div>
		</section>
	);
};

export default Question;
