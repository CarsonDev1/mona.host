import Image from 'next/image';
import React from 'react';

const Identification = () => {
	return (
		<div className='px-4 py-12 mx-auto max-w-7xl sm:px-6 lg:px-8'>
			<div className='flex flex-col items-center justify-around gap-8 md:flex-row md:gap-12'>
				<div className='flex flex-col items-center gap-4 text-center md:text-left md:w-1/2'>
					<h2 className='text-2xl font-semibold text-center sm:text-3xl md:text-4xl text-gray-950 xl:text-left'>
						Tên miền là định danh duy nhất <br className='hidden sm:block' /> của website bạn trên Internet
					</h2>
					<p className='max-w-2xl mx-auto text-base text-gray-700 sm:text-lg '>
						Hãy biến nó trở nên nổi bật hơn với
						<br className='hidden sm:block' />
						những tên miền <span className='font-semibold'>ĐỘC ĐÁO từ MONA.Host</span>
					</p>
					<div className='flex flex-col items-center justify-center gap-4 mt-2'>
						<div className='p-3 bg-[#1ec0f2] rounded-md hover:bg-[#6790e7]'>
							<a className='cursor-pointer'>
								<span className='text-white text-nowrap'>Liên hệ với MONA</span>
							</a>
						</div>
					</div>
				</div>
				<div className='flex justify-center md:justify-end md:w-1/2'>
					<Image
						src='/domains/identification-image.png'
						width={500}
						height={500}
						alt='identification-image'
					/>
				</div>
			</div>
		</div>
	);
};

export default Identification;
