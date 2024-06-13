import React from 'react';
import DomainCardName from '@/app/domains/components/domain-card-name/DomainCardName';
import { ListDomain } from '@/types/ListDomain';
import { ModeToggle } from '@/components/toggle-mode';

interface DomainNameProps {
	listDomain: ListDomain[];
	onSeeMore: () => void;
	onRegister: (suffix: string) => void;
}

const DomainName: React.FC<DomainNameProps> = ({ listDomain, onSeeMore, onRegister }) => {
	return (
		<div className='sec-com'>
			<div className='container'>
				<section className='px-4 py-0 mx-auto text-center'>
					<h2 className='text-2xl font-semibold sm:text-3xl text-gray-950'>
						Mona cung cấp cho bạn <br /> Những tên miền chất lượng
					</h2>
					<p className='hidden max-w-2xl mx-auto my-4 text-lg text-gray-700 text-wrap sm:block'>
						700+ loại tên miền mở rộng và hơn thế nữa từ Domain Sugestion by MONA AI
					</p>
					<div className='grid grid-cols-1 gap-4 mt-8 sm:mt-12 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6 xl:grid-cols-4'>
						{listDomain.map((domainName, index) => (
							<DomainCardName
								key={index}
								description={domainName.description}
								suffix={domainName.suffix}
								buy_price={domainName.buy_price}
								background={domainName.background}
								onRegister={onRegister}
							/>
						))}
					</div>
					<div
						className='flex flex-col items-center justify-center gap-4 mt-8 cursor-pointer'
						onClick={onSeeMore}
					>
						<div className='p-3 rounded-md bg-[#1ec0f2] hover:bg-[#5180e5]'>
							<span className='text-white text-nowrap'>Xem thêm</span>
						</div>
					</div>
				</section>
			</div>
		</div>
	);
};

export default DomainName;
