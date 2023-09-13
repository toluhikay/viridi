import React from "react";

const WhyChooseUs = () => {
	const WhyUsDetails = [
		{ id: 1, title: "Experience", details: "With over a decade of experience, we bring unmatched expertise to every project." },
		{ id: 2, title: "Expertise", details: "Our team of environmental scientists, engineers, and consultants is at the forefront of industry knowledge. " },
		{ id: 3, title: "Client-Centric", details: "We prioritize your needs, providing personalized solutions that align with your goals. " },
		{ id: 4, title: "Sustainability", details: "We are committed to sustainable practices that protect our planet for future generations." },
	];

	return (
		<div className='bg-secondary/20 lg:px-24 md:px-12 px-6 py-20 flex flex-col items-center justify-center'>
			<p className='lg:text-3xl md:text-2xl text-xl w-full text-secondary mb-6 font-bold'>Why Choose Us</p>
			<div className='flex w-full flex-wrap items-center my-10 justify-around gap-8'>
				{WhyUsDetails.map((item, index) => {
					return (
						<div data-aos={index % 2 !== 0 ? "fade-right" : "fade-left"} className={`flex md:w-[48%] ${index % 2 === 0 ? "justify-start" : "justify-end"}`} key={index}>
							<div className='bg-white/80 min-h-[300px] flex flex-col justify-center w-full sm:mb-0 p-12'>
								<p className='text-primary text-3xl font-bold mb-3'>0{item.id}</p>
								<p className='text-secondary font-bold mb-6'>{item.title}</p>
								<p className='text-xl font-light'>{item.details}</p>
							</div>
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default WhyChooseUs;
