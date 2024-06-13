import Image from 'next/image';
import InfrastructureItem from './InfrastructureItem';
import { url } from 'inspector';

const Infrastructure = () => {
	// const style = { "--my-css-var": 10 } as React.CSSProperties;

	return (
		<section className='sec-com infrastructure'>
			<div className='pt-36'>
				<div className='mx-auto px-6 max-w-6xl'>
					<div className='title text-3xl text-gray-950  font-semibold text-center mb-8'>
						<h2>Hạ tầng đơn giản và mạnh mẽ</h2>
					</div>
					<div className='img mb-16'>
						<Image
							className='mg-auto hide-mb'
							src='/home/infrastructure-01.svg'
							width={1370}
							height={636}
							alt='infrastructure'
						/>
					</div>

					<div className='relative z-10 grid gap-3 grid-cols-5'>
						<InfrastructureItem />
					</div>
				</div>
			</div>
		</section>
	);
};

export default Infrastructure;
