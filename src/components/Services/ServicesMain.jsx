import React, { useState } from "react";
import BrandImage from "assets/NewAssets/ServicesViridi2.jpg";
import { BsCaretDownSquareFill } from "react-icons/bs";

const ServicesMain = () => {
	const [dropDownOpen, setDropDownOpen] = useState(0);

	const ServicesData = [
		{ id: 1, label: "Environmental and Social Impact Assessment (ESIA)", content: "Our Environmental and Social Impact Assessment (EIA) services are designed to evaluate the potential environmental impacts of projects across various industries. We specialize in conducting thorough assessments that align with regulatory standards while minimizing the project's ecological footprint. With EIA expertise, we provide you with a clear understanding of the environmental risks and opportunities associated with your project." },
		{ id: 2, label: "Environmental Audits (EAu)", content: "Environmental Audits (EAu) deliver a crucial evaluation of your environmental management practices, pinpointing opportunities for enhancement. By conducting thorough audits and offering actionable recommendations, we empower you to elevate your sustainability efforts and cultivate responsible operations. This process enables you to reach heightened environmental standards and diminish your ecological impact." },
		{ id: 3, label: "Environmental and Social Management Plans (ESMP)", content: "Environmental and Social Management Plans (EMPs) serve as the roadmap for attaining sustainable outcomes throughout a project's lifecycle. Collaborating closely with you, we pinpoint environmental risks and create proactive mitigation strategies. These EMPs guarantee compliance with regulations, minimize environmental impact, and elevate the overall sustainability of your project." },
		{ id: 4, label: "Environmental Compliance Monitoring (ECM)", content: "Environmental Compliance Monitoring (ECM) services are crafted to proactively maintain your projects' adherence to environmental regulations. We assist you in navigating intricate regulatory environments, mitigating the risk of fines and penalties. Our thorough monitoring and reporting keep you well-informed, facilitating prompt corrective actions to uphold environmental integrity." },
		{ id: 6, label: "GIS and Mapping", content: "Our utilization of advanced Geographic Information Systems (GIS) and mapping technology empowers you to make informed environmental decisions. Through spatial analysis and data visualization, we provide valuable insights that support effective environmental management. Whether you need land use mapping, resource assessment, or environmental planning, our GIS expertise enables you to visualize and optimize your project's impact." },
		{ id: 7, label: "Specialized Monitoring (Water Quality, Soil Quality, Air Quality, and Noise Level assessments)", content: "With expertise in Water Quality, Soil Quality, Air Quality, and Noise Level assessments, our specialized monitoring services deliver precise data and actionable insights tailored to your project's unique environmental aspects. We provide you with the information you need to make informed decisions and implement effective environmental management strategies" },
		{ id: 8, label: "Post Impact Assessment (PIA)", content: "Post Impact Assessment services aid in evaluating the genuine environmental effects of completed projects. This assessment entails identifying impacts, uncovering any unforeseen consequences, and suggesting mitigation strategies to address them. It guarantees that your environmental responsibilities extend well beyond the project's completion.s" },
		{ id: 9, label: "Health Impact Assessment", content: "Our Health Impact Assessment (HIA) services are designed to evaluate the potential health effects of projects and initiatives. We assess the impact on the health and well-being of individuals and communities, offering insights and recommendations to ensure that projects promote positive health outcomes." },
		{ id: 10, label: "Resettlement Action Plan (RAP)", content: "We develop Resettlement Action Plans (RAPs) that prioritize the welfare of affected communities during project implementation. Our plans focus on minimizing social and environmental disruptions while fostering sustainable, responsible resettlement." },
		{ id: 11, label: "Risk Assessment", content: "Our Risk Assessment services identify environmental risks associated with your projects. We analyze potential threats and vulnerabilities, providing you with actionable strategies to mitigate these risks and ensure environmental safety." },
		{ id: 12, label: "Fumigation and Pest Control", content: "We offer comprehensive Fumigation and Pest Control services to safeguard your property and facilities from pests and vector-borne diseases. Our environmentally responsible methods prioritize both safety and efficacy. At Viridi Consults Limited, we are committed to helping you achieve environmental excellence while adhering to the highest industry standards. Explore our services to discover how we can be your trusted environmental partner on the journey to a greener and more sustainable future." },
	];

	return (
		<div className='lg:px-24 md:px-12 px-6 lg:py-24 md:py-20 py-16 flex justify-center flex-wrap md:flex-row-reverse  md:text-start text-center flex-col items-center'>
			{/* <div data-aos='zoom-out-right' className='md:w-[46%]'>
				<img src={BrandImage} className='w-full' alt='' />
			</div> */}
			<div data-aos='fade-left' className='md:w-[80%] lg:w-[70%] sm:mt-12'>
				<p className='md:text-3xl text-2xl text-black mb-3 text-center font-bold'>OUR SERVICES</p>
				<p className='lg:w-full mb-10 text-center'>At Viridi Consults Limited, we offer a comprehensive range of environmental consulting services designed to meet the diverse needs of our clients. With our commitment to sustainability and environmental responsibility, we provide tailored solutions to help you navigate the complex landscape of environmental management.</p>
				<div>
					{ServicesData.map((item, index) => {
						return (
							<div className='border border-[#08244d36] sm:py-[26px] py-5 px-7 sm:px-[35px] text-start md:mb-[49px] mb-[20px]' key={index}>
								<div className={`flex justify-between items-center ${dropDownOpen === item.id && "mb-6"}`}>
									<div className='flex items-center w-[90%]'>
										<div className='w-[39px] sm:mr-12 mr-2 h-[26px] bg-secondary border-white border'></div>
										<p className='sm:text-base uppercase text-sm w-[80%]'>{item.label}</p>
									</div>
									<BsCaretDownSquareFill
										className='text-secondary w-[34px] h-[26px] cursor-pointer'
										onClick={() => {
											dropDownOpen !== item.id ? setDropDownOpen(item.id) : setDropDownOpen(0);
										}}
									/>
								</div>
								<div className={`${dropDownOpen === item.id ? "flex" : "hidden"} overflow-hidden`}>
									<p>{item.content}</p>
								</div>
							</div>
						);
					})}
				</div>
			</div>
		</div>
	);
};

export default ServicesMain;
