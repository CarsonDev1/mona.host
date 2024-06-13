'use client';
import React, { useState } from 'react';
import './Question.scss';

const dummyData = [
	{
		question: 'Why do I need to use a Design System?',
		answer: "A Design System is a super useful tool for designers. It helps keep designs consistent and makes the design process faster. You can use pre-designed stuff over and over, and it's helpful for both new and experienced designers. In short, a Design System is like a designer's toolbox for making great-looking and user-friendly designs.",
	},
	{
		question: 'Are there any fees or commissions in addition to the monthly subscription?',
		answer: "If you go over your organisations or user limit, a member of the team will reach out about bespoke pricing. In the meantime, our collaborative features won't appear in accounts or users that are over the 100-account or 1,000-user limit.",
	},
	{
		question: "You really don't charge per user? Why not?",
		answer: "If you go over your organisations or user limit, a member of the team will reach out about bespoke pricing. In the meantime, our collaborative features won't appear in accounts or users that are over the 100-account or 1,000-user limit.",
	},
	{
		question: 'What happens when I go over my monthly active limit?',
		answer: "If you go over your organisations or user limit, a member of the team will reach out about bespoke pricing. In the meantime, our collaborative features won't appear in accounts or users that are over the 100-account or 1,000-user limit.",
	},
];

const FaqAccordion = () => {
	const [expanded, setExpanded] = useState([true, false, false, false, false]);
	const handleToggle = (index: number) => {
		setExpanded((prevExpanded) => prevExpanded.map((item, i) => (i === index ? !item : false)));
		console.log('expanded',expanded);
		
	};

	return (
		<div className='sec-question-content col-10 mg-auto relative antialiased'>
			<div className='relative flex flex-col justify-center'>
				<div className='w-full mx-auto'>
					<div className='flex flex-col lg:gap-6 gap-4 '>
						{dummyData.map((item, index) => (
							<div key={index} aria-expanded={expanded[index]} className='accordion-inside' onClick={() => handleToggle(index)}>
								<div className="bgBox"></div>
								<button
									type='button'
									className='flex items-center justify-between w-full text-left font-semibold py-2 tt'
									
									aria-expanded={expanded[index]}
									aria-controls={`faqs-text-${index + 1}`}
								>
									<span className='text-[1.8rem]'>
										{item.question}
									</span>
									<svg
										className={`shrink-0 ml-8 ${expanded[index] ? '' : 'rotate-90'}`}
										width='16'
										height='16'
										xmlns='http://www.w3.org/2000/svg'
									>
										<rect
											y='7'
											width='16'
											height='2'
											rx='1'
											className='transform origin-center transition duration-200 ease-out sec-question-rect'
										/>
										<rect
											y='7'
											width='16'
											height='2'
											rx='1'
											className={`sec-question-rect transform origin-center transition duration-200 ease-out ${
												expanded[index] ? 'rotate-0' : 'rotate-90'
											}`}
										/>
									</svg>
								</button>
								<div
									id={`faqs-text-${index + 1}`}
									role='region'
									aria-labelledby={`faqs-title-${index + 1}`}
									className={`grid text-slate-600text-[1.6rem] overflow-hidden transition-all duration-300 ease-in-out ${
										expanded[index] ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
									}`}
								>
									<div className='overflow-hidden'>
										<p className='md:mt-3 mt-2 pb-3 text-[1.6rem] answer-txt'>{item.answer}</p>
									</div>
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
		</div>
	);
};

export default FaqAccordion;
