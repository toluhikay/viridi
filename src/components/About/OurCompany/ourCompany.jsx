import React from "react";
import { FaHandshake, FaPeopleCarry, FaSmileWink } from "react-icons/fa";
import { GiThink } from "react-icons/gi";
import { MdCleanHands, MdOutlineSmokeFree } from "react-icons/md";

const OurCompany = () => {
	const why = [
		{
			id: 1,
			icon: <FaHandshake className='text-3xl font-bold text-white' />,
			h1: "Integrity",
			p: `We uphold unwavering honesty and transparency in everything we do.`,
		},
		{
			id: 2,
			icon: <GiThink className='text-3xl font-bold text-white' />,
			h1: "Innovation",
			p: `We continuously seek creative solutions to drive progress and excellence.`,
		},
		{
			id: 3,
			icon: <MdCleanHands className='text-3xl font-bold text-white' />,
			h1: "Ethical and Social Responsibility",
			p: `We prioritize ethical conduct and contribute positively to society.`,
		},
		{
			id: 4,
			icon: <MdOutlineSmokeFree className='text-3xl font-bold text-white' />,
			h1: "Environmental Stewardship",
			p: `We are dedicated to preserving and nurturing our planet's well-being.`,
		},
		{
			id: 5,
			icon: <FaSmileWink className='text-3xl font-bold text-white' />,
			h1: "Empathy",
			p: `We empathize with our colleagues, clients, and communities, fostering understanding and compassion in all our interactions.`,
		},
		{
			id: 6,
			icon: <FaPeopleCarry className='text-3xl font-bold text-white' />,
			h1: "Team Spirit",
			p: `We value collaboration and foster a sense of unity, recognizing that our collective strength is greater than our individual efforts.`,
		},
	];
	return (
		<div className='bg-secondary text-white lg:px-24 md:px-12 px-6 lg:py-12 md:py-4 py-3 flex flex-col justify-center items-center text-center'>
			<div className='md:w-[70%] w-full mb-12'>
				<p className='lg:text-2xl font-bold text-xl mb-3 text-primary'>Our Company</p>
				<p className='text-base'>Viridi Consults Limited is a limited liability company incorporated under the Companies and Allied Matters Act 1990. Our commitment to excellence is not just a promise; it's a legal commitment. This status reflects our unwavering dedication to providing you with the highest quality environmental consulting services. we are your trusted ally in navigating the intricate and ever-evolving landscape of environmental stewardship. </p>
			</div>
			<div className='md:w-[80%] w-full flex flex-col justify-between h-auto'>
				<div className='mb-12'>
					<p className='lg:text-2xl font-bold text-xl text-green-500 mb-3'>Our Mission</p>
					<p className='text-sm'>To provide our clients with excellent and satisfactory services, so that they can easily recommend us to others.</p>
				</div>
				<div>
					<p className='lg:text-2xl font-bold text-xl mb-3 text-green-500'>Our Core Values</p>
					<div className='flex flex-wrap w-full justify-between mt-6'>
						{why.map((items) => {
							return (
								<div key={items.id} className='md:w-[48%] mb-12 items-center  w-full flex flex-col text-center'>
									<div className='mr-3'>
										<div className='bg-primary rounded-full xl:p-3 p-1 h-auto w-auto'>{items.icon}</div>
									</div>
									<div>
										<p className='xl:text-2xl md:text-xl text-base font-bold text-white'>{items.h1}</p>
										<p className='text-sm leading-loose'>{items.p}</p>
									</div>
								</div>
							);
						})}
					</div>
				</div>
			</div>
		</div>
	);
};

export default OurCompany;
