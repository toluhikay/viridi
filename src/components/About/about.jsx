import React from "react";
import AboutHero from "./AboutHero/aboutHero.jsx";
import Main from "../../assets/NewAssets/Team.jpeg";
import OurCompany from "./OurCompany/ourCompany.jsx";
import WhereWeWork from "./OurCompany/WhereWeWork.jsx";
import OurCertifications from "./OurCompany/OurCertifications.jsx";

const About = () => {
	return (
		<div className='overflow-hidden'>
			<AboutHero title='About Us' subtitle={"Your Environmental Partner in a Changing World"} />
			<OurCompany />
			<WhereWeWork />
			<div className='w-full lg:px-24 md:px-12 px-6 lg:py-24 md:py-20 py-16'>
				<p className='lg:text-3xl md:text-2xl text-xl font-bold mb-12 text-center'>Meet Our Expert Team</p>
				<div className='flex flex-wrap items-center justify-center'>
					<div className='xl:w-1/2 sm:w-[70%] w-full md:mb-0 mb-6 rounded-lg shadow-lg'>
						<img src={Main} alt='' className='rounded-lg w-full h-auto shadow-lg' />
					</div>
					<div className='xl:w-[45%] w-full xl:mt-0 mt-6 md:px-6 px-3 flex flex-col justify-center min-h-full'>
						<p className='text-[16px] xl:leading-10 tracking-wide xl:text-start text-center'>
							We pride ourselves on our exceptional team of dedicated professionals who form the backbone of our environmental consultancy services. Our diverse and highly skilled team is meticulously selected to deliver top-notch environmental solutions to our clients. Our team comprises of Environmental Scientists and Engineers, Certified Environmental Consultants, GIS and Mapping Experts, compliance and Auditing Specialists, Monitoring and Data Analysts, Resettlement and Social Impact Experts, Fumigation and Pest Control Professionals and Customer-Focused Support Team. <br /> <br />
							When you choose us, you are choosing a team of passionate professionals who are making a positive impact on our planet one project at a time.
						</p>
					</div>
				</div>
			</div>
			<OurCertifications />
			{/* <ClientFeedback/> */}
		</div>
	);
};

export default About;
