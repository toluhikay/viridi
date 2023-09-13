import React, { Fragment } from "react";
import Hero from "./HeroComponent/hero";
import Services from "./Services/services";

import Consultation from "./Consultation/consultation";
import { useNavigate } from "react-router-dom";
import WhyMissionVision from "./WhyUsSection/WhyMissionVision";
import WhyChooseUs from "./WhyUsSection/WhyChooseUs";

const LandingPage = () => {
	const navigate = useNavigate();
	return (
		<div className='overflow-hidden'>
			<Hero />
			<div className='bg-secondary px-[15px] flex flex-col items-center justify-center py-12'>
				<button className='text-white border border-white rounded py-3 px-5 hover:text-secondary hover:bg-white transition-all' onClick={() => navigate("/services")}>
					Explore Our Services
				</button>
			</div>
			<WhyMissionVision />
			<WhyChooseUs />
			<Services />
			<div className='bg-secondary px-[15px] flex flex-col items-center justify-center py-12'>
				<button className='text-white border border-white rounded py-3 px-5 hover:text-secondary hover:bg-white transition-all' onClick={() => navigate("/services")}>
					Explore Our Services
				</button>
			</div>
			<Consultation />
		</div>
	);
};

export default LandingPage;
