import ChooseItem from '@/app/domains/components/choose/ChooseItem';
import React from 'react';

const chooseData = [
	{
		title: 'Đội ngũ giàu kinh nghiệm',
		description:
			'MONA.Host có hơn 8+ năm kinh nghiệm trong lĩnh vực cung cấp hạ tầng, hosting cho hơn 10.000+ khách hàng',
		background: 'from-primary-500',
		image: '/domains/choose-01.png',
	},
	{
		title: 'Dịch vụ chuyên nghiệp',
		description: 'MONA.Host có quy trình làm việc từ Tư vấn > Triển khai > Vận hành',
		background: 'from-success-500',
		image: '/domains/choose-02.png',
	},
	{
		title: 'Luôn vì quyền lợi khách hàng',
		description: 'Ở MONA.Host, chúng tôi luôn đặt lợi ích của khách hàng lên đầu tiên',
		background: 'from-danger-500',
		image: '/domains/choose-03.png',
	},
];

const Choose = () => {
	return (
		<div className='px-4 py-12 mx-auto max-w-7xl sm:px-6 lg:px-8'>
			<h2 className='mb-8 text-2xl font-semibold text-center sm:text-3xl text-gray-950 '>
				Vậy câu hỏi đặt ra là
				<br className='hidden sm:block' />
				Vì sao lại chọn MONA.Host
			</h2>
			<div className='grid gap-6 sm:grid-cols-2 lg:grid-cols-3'>
				{chooseData.map((choose, index) => (
					<ChooseItem
						key={index}
						title={choose.title}
						image={choose.image}
						description={choose.description}
						background={choose.background}
					/>
				))}
			</div>
		</div>
	);
};

export default Choose;
