'use client';
import Hero from '@/components/Home/Hero/Hero';
import '../styles/pages/home.scss';
import Infrastructure from '@/components/Home/Infrastructure/Infrastructure';
import { Partner } from '@/components/Home/Partner/Partner';
import { StableSystem } from '@/components/Home/StableSystem/StableSystem';
import { CustomerGrown } from '@/components/Home/CustomerGrown/CustomerGrown';
import { Research } from '@/components/Home/Research/Research';
import { Form } from '@/components/Home/Form/Form';
import Newspaper from '@/components/Home/Newspaper/Newspaper';
import Provide from '@/components/Home/Provide/Provide';
import Knowledge from '@/components/Home/Knowledge/Knowledge';
import Question from '@/components/Home/Question/Question';
import Image from 'next/image';
import CombineSection from '@/components/Home/CombineSection/CombineSection';
import LoadingComponent from '@/components/loading';

export default function Page() {
	return (
		<>
			<div className='background'>
				<div className='background-img'></div>
				<Hero />
				<Partner />
			</div>

			<StableSystem />
			<Provide />
			<CustomerGrown />
			<Newspaper />
			<Knowledge />
			<Question />
			<Form />
		</>
	);
}
