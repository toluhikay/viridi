import React, { Fragment } from "react";
import Hero from "./HeroComponent/hero";
import Why from "./WhyUsSection/why";
import Quotation from "./Quotation/quotation";
import Services from "./Services/services";
import BusinessModel from "./BusinessModel/businessModel";
import ClientFeedback from "./clientfeedback/clientFeedBack";
import Gallery from "./Gallery/gallery";
import Consultation from "./Consultation/consultation";
import { useNavigate } from "react-router-dom";
import WhyMissionVision from "./WhyUsSection/WhyMissionVision";
import WhyChooseUs from "./WhyUsSection/WhyChooseUs";

const LandingPage = () => {
	const navigate = useNavigate();
	return (
		<Fragment>
			<Hero />
			<div className='bg-secondary px-[15px] flex flex-col items-center justify-center py-12'>
				<button className='text-white border border-white rounded py-3 px-5 hover:text-secondary hover:bg-white transition-all' onClick={() => navigate("/services")}>
					Explore Our Services
				</button>
			</div>
			<WhyMissionVision />
			<WhyChooseUs />
			{/* <Quotation /> */}
			<Services />
			<div className='bg-secondary px-[15px] flex flex-col items-center justify-center py-12'>
				<button className='text-white border border-white rounded py-3 px-5 hover:text-secondary hover:bg-white transition-all' onClick={() => navigate("/services")}>
					Explore Our Services
				</button>
			</div>
			{/* <BusinessModel /> */}
			{/* <ClientFeedback /> */}
			{/* <Gallery /> */}
			<Consultation />
		</Fragment>
	);
};

export default LandingPage;
