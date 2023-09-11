import React from "react";
import Energy from "assets/NewAssets/EnergyPicture.avif";
import Construction from "assets/NewAssets/Construction.avif";
import Manufacturing from "assets/NewAssets/Manufacturing.avif";
import Mining from "assets/NewAssets/Mining.avif";
import Transportion from "assets/NewAssets/Transaportation.avif";
import RealEstate from "assets/NewAssets/RealEstate.avif";
import HealthCare from "assets/NewAssets/HealthCare.avif";
import Government from "assets/NewAssets/Government.avif";

const WhereWeWork = () => {
	const WhereWeWork = [
		{
			id: 1,
			img: Energy,
			header: "Energy and Utilities",
			text: "Assisting in sustainable energy projects, ensuring minimal environmental impact.",
		},
		{
			id: 1,
			img: Construction,
			header: "Construction and Infrastructure",
			text: "Guiding large-scale projects toward environmental responsibility.",
		},
		{
			id: 1,
			img: Manufacturing,
			header: "Manufacturing",
			text: "Implementing eco-friendly processes and managing waste",
		},
		{
			id: 1,
			img: Mining,
			header: "Mining and Natural Resources",
			text: "Balancing resource extraction with environmental preservation.",
		},
		{
			id: 1,
			img: Transportion,
			header: "Transportation",
			text: "Enhancing transportation systems while minimizing their carbon footprint",
		},
		{
			id: 1,
			img: RealEstate,
			header: "Real Estate and Development",
			text: "Incorporating environmental best practices into urban planning.",
		},
		{
			id: 1,
			img: HealthCare,
			header: "Healthcare and Pharmaceuticals",
			text: "Ensuring compliance with stringent environmental regulations.",
		},
		{
			id: 1,
			img: Government,
			header: "Government and Public Sector",
			text: "Collaborating on initiatives to protect natural resources.",
		},
	];
	return (
		<div className='xl:px-24 lg:px-12 px-6 flex flex-col pt-20 justify-between items-center'>
			<p className='lg:text-3xl md:text-2xl text-xl text-center font-bold'>
				Where We <span className='text-secondary'>Work</span>
			</p>
			<div className='w-full'>
				{WhereWeWork.map((item, index) => {
					return (
						<div className={`flex w-full ${index % 2 === 0 ? "flex-row" : "flex-row-reverse"} my-12 justify-between flex-wrap items-center`} key={index}>
							<div data-aos={index % 2 === 0 ? "fade-right" : "fade-left"} className='md:w-[53%] w-full flex justify-center items-center lg:h-[270px]'>
								<img className='md:w-full md:h-full sm:w-[80%] w-[90] object-fill' src={item.img} alt={item.header} loading='lazy' />
							</div>
							<div data-aos={index % 2 !== 0 ? "fade-right" : "fade-left"} className='md:w-[40%] w-full md:text-start text-center border-b-[.5px] border-[#666] py-7 lg:px-10'>
								<h2 className='font-bold mb-3 '>{item.header}</h2>
								<p className='font-extralight text-xl'>{item.text}</p>
							</div>
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default WhereWeWork;
