import React from "react";
import Image1 from "assets/NewAssets/ServicesViridi1.jpg";

const Services = () => {
	const services = ["Environmental and Social Impact Assessment (ESIA)", "Environmental and Social Management Plan (ESMP) ", "Environmental Audit (EAu)", "Environmental Compliance Monitoring (ECM)", "Post Impact Assessment (PIA)", "Health Impact Assessment (HIA)", "Fumigation and pest control", "Water Quality Monitoring", "Soil Quality Monitoring", "Resettlement Action Plan", "Air Quality Monitoring", "Noise Level Monitoring", "Risk Assessment "];

	return (
		<div className='lg:px-24  md:px-12 px-6 lg:py-24 bg-cover bg-no-repeat bg-fixed bg-center  md:py-12 py-3 flex flex-col justify-center items-center'>
			<p className='lg:text-3xl font-bold text-green-900 text-xl mb-12'>Services We Offer</p>
			<div className='flex relative w-full flex-wrap lg:px-[30px] md:px-[30px] items-center md:h-[600px] h-auto'>
				<div data-aos='fade-right' className='relative z-[400000] md:h-full h-auto md:w-[30%] w-full md:px-0 px-[15px] flex items-center justify-center'>
					<div className='md:absolute md:h-full xl:w-[190%] lg:w-[170%] left-0 md:w-[150%] w-[90%] flex items-center justify-center'>
						<img className='h-[70%] w-full object-cover' src={Image1} alt='management service' />
					</div>
				</div>
				<div data-aos='fade-left' className='md:w-[69%] w-full items-center flex justify-end bg-secondary md:h-full h-auto py-[100px]'>
					<div className='lg:w-[60%] md:w-[100%] w-[90%]  px-[15px] text-white font-light'>
						{services.map((item, index) => {
							return (
								<div className='mb-1 flex items-center' key={index}>
									<div className='w-[20px] h-[1px]  bg-white mr-2'></div>
									<p className='w-[95%] xl:text-base text-xs'>{item}</p>
								</div>
							);
						})}
						<p className='mt-12 text-xs'>Our comprehensive services cover a wide range of environmental aspects, from assessing impacts to ensuring compliance monitoring. Discover how we can assist you in achieving your environmental goals. </p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Services;
