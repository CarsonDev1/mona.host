import React from 'react';
import DomainsCard from '@/app/domains/components/domains-card/DomainsCard';

const domainData = [
	{
		title: '01',
		content: 'Tạo lợi thế kinh doanh bằng tên miền chứa từ khóa.',
		background: 'from-primary-500',
	},
	{
		title: '02',
		content: 'Khách hàng sẽ dễ nhớ, dễ tìm thấy tên miền của bạn',
		background: 'from-success-500',
	},
	{
		title: '03',
		content: 'Xây dựng thương hiệu hiệu quả',
		background: 'from-danger-500',
	},
	{
		title: '04',
		content: 'Xây dựng thương hiệu hiệu quả',
		background: 'from-gray-500',
	},
	{
		title: '05',
		content: 'Xây dựng thương hiệu hiệu quả',
		background: 'from-warning-500',
	},
	{
		title: '06',
		content: 'Xây dựng thương hiệu hiệu quả',
		background: 'from-info-500',
	},
];

const ContentList: React.FC = () => {
	return (
		<section className='px-4 py-12 mx-auto text-center max-w-7xl sm:px-6 lg:px-8'>
			<h2 className='text-2xl font-semibold sm:text-3xl text-gray-950 '>
				Muốn bán được hàng <br /> Hãy đảm bảo họ tìm được & tin tưởng bạn!
			</h2>
			<p className='hidden max-w-2xl mx-auto my-4 text-base text-gray-700 sm:block sm:text-lg text-wrap'>
				Một tên miền chất lượng sẽ giúp bạn làm điều đó!
			</p>
			<div className='grid grid-cols-1 gap-4 mt-8 sm:mt-12 sm:grid-cols-2 lg:grid-cols-3'>
				{domainData.map((domain, index) => (
					<DomainsCard
						key={index}
						title={domain.title}
						content={domain.content}
						background={domain.background}
					/>
				))}
			</div>
		</section>
	);
};

export default ContentList;
