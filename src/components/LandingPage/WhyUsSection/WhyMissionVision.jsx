import React, { Fragment } from "react";
import { MdCleanHands, MdOutlineSmokeFree } from "react-icons/md";
import { FaHandshake, FaPeopleCarry, FaSmileWink } from "react-icons/fa";
import { GiThink } from "react-icons/gi";

const WhyMissionVision = ({ title }) => {
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
		<Fragment>
			<div className='xl:px-24 lg:px-12 px-6 flex py-12 flex-wrap w-full md:flex-row items-center justify-center'>
				<div data-aos='fade-right' className='lg:w-[50%] md:w-[65%] text-white bg-secondary rounded px-[15px] py-16 text-[20px] leading-9 font-extralight tracking-wide w-full h-full'>
					<div>
						<p>Welcome to Viridi Consults Limited, where our unwavering commitment is to foster a brighter future for our planet. Rooted in an unyielding commitment to sustainability and steered by a team of seasoned experts, we specialize in crafting tailored environmental consulting solutions that consistently surpass the highest standards of excellence.</p>
					</div>
				</div>
				<div className='lg:pt-16 pt-12 px-3 flex flex-col text-center md:w-[80%] w-full'>
					<p className='lg:text-3xl md:text-2xl text-xl text-center mb-6 font-bold'>
						Our <span className='text-secondary'>Mission</span>
					</p>
					<p>Our mission is to help our clients navigate the complexities of environmental management, ensuring responsible and sustainable practices. </p>
				</div>
				<div className='lg:py-16 py-12 px-3 flex flex-col md:w-[80%] w-full'>
					<p className='lg:text-3xl md:text-2xl text-xl text-center font-bold'>
						Our <span className='text-secondary'>Core Values</span>
					</p>
					<div className='flex flex-wrap w-full justify-between mt-6'>
						{why.map((items, index) => {
							return (
								<div data-aos={index % 2 === 0 ? "fade-right" : "fade-left"} key={items.id} className='md:w-[48%] mb-12 items-center  w-full flex flex-col text-center'>
									<div className='mr-3'>
										<div className='bg-primary rounded-full xl:p-3 p-1 h-auto w-auto'>{items.icon}</div>
									</div>
									<div>
										<p className='xl:text-2xl md:text-xl text-base font-bold text-green-900'>{items.h1}</p>
										<p className='text-sm leading-loose'>{items.p}</p>
									</div>
								</div>
							);
						})}
					</div>
				</div>
			</div>
		</Fragment>
	);
};
export default WhyMissionVision;
