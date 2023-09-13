import React from "react";
import Main from "../../assets/NewAssets/Services1.jpeg";
import ServicesMain from "./ServicesMain";

const Services1 = () => {
	return (
		<div>
			<div className='lg:px-24 bg-slider3 bg-[#000] h-[80vh] bg-blend-darken bg-black/70 bg-center bg-cover bg-no-repeat text-white bg-fixed md:px-12 px-6 lg:py-16 md:py-6 py-3 flex flex-col justify-center items-center'>
				<p className='lg:text-4xl font-bold md:text-3xl text-white text-2xl mb-3'>{"Viridi Consult Services"}</p>
			</div>
			<div className='lg:px-24 md:px-12 px-6 lg:py-24 md:py-20 py-16 flex flex-col md:flex-row justify-between'>
				<div data-aos='fade-left' className='md:w-1/2 w-full md:mb-0 mb-6 rounded-lg shadow-lg'>
					<img src={Main} alt='' className='rounded-lg shadow-lg' />
				</div>
				<div data-aos='fade-right' className='md:w-[45%] md:px-6 px-3 flex flex-col justify-center min-h-full'>
					<p className='text-[16px] xl:leading-10 tracking-wide xl:text-start text-center'>At Viridi Consults Limited, we offer a comprehensive range of environmental consulting services designed to meet the diverse needs of our clients. With our commitment to sustainability and environmental responsibility, we provide tailored solutions to help you navigate the complex landscape of environmental management.</p>
				</div>
			</div>
			<ServicesMain />
		</div>
	);
};

export default Services1;
