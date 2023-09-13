import React, { Fragment } from "react";
import { FaInstagram, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { BsSignpost2Fill } from "react-icons/bs";
import { FiPhoneCall } from "react-icons/fi";
import { SiMinutemailer } from "react-icons/si";

const Footer = () => {
	const socials = [
		{
			id: 1,
			name: "linkedin",
			logo: <FaLinkedin />,
			link: "https://www.linkedin.com/company/viridi-consults-limited/",
		},
		{
			id: 2,
			name: "whatsapp",
			logo: <FaWhatsapp />,
			link: "https://api.whatsapp.com/send?phone=2347081897072&text=Welcome%20to%20Viridi%20Consults%20Limited.%20We%20offer%20Janitorial,%20fumigation%20and%20painting%20services.%20Kindly%20drop%20your%20message,%20we%20will%20get%20in%20touch%20shortly",
		},
		{
			id: 3,
			name: "instagram",
			logo: <FaInstagram />,
			link: "https://www.instagram.com/viridiconsultslimited/",
		},
	];
	const links = [
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
	const date = new Date().getFullYear();

	return (
		<div className='pb-12 bg-black'>
			<div className='bg-black opacity-90 text-white lg:px-24 md:px-12 px-6 md:py-24 py-12 flex flex-col md:flex-row justify-between'>
				<div className='md:w-[30%]'>
					<p className='lg:text-3xl md:text-2xl text-xl font-bold mb-6'>Viridi Consults Limited</p>
					<p className='mb-4 text-white opacity-50'>Our mission is to help our clients navigate the complexities of environmental management, ensuring responsible and sustainable practices. </p>
					<div className='flex'>
						{socials.map((item, index) => {
							return (
								<Fragment key={index}>
									<a href={item.link} key={index} target='_blank' rel='noreferrer' className='mr-3 text-green-500 bg-[#c4c4c470] rounded-full p-2 hover:text-white'>
										{item.logo}
									</a>
								</Fragment>
							);
						})}
					</div>
				</div>
				<div className='md:w-[30%] w-full md:mt-0 mt-9'>
					<p className='lg:text-3xl md:text-2xl text-xl font-bold mb-6'>Services</p>

					<ul className=''>
						{links.map((items, index) => {
							return (
								<Fragment key={index}>
									<li key={index}>
										<p className=' capitalize mb-6 opacity-70 text-sm'>{items.label}</p>
									</li>
								</Fragment>
							);
						})}
					</ul>
				</div>
				<div className='md:w-[30%] md:mt-0 mt-6 w-full'>
					<p className='lg:text-3xl md:text-2xl text-xl font-bold mb-6'>Have Questions?</p>
					<div className='text-white opacity-50 flex justify-start items-start'>
						<BsSignpost2Fill className='text-2xl mr-3' />
						<p>Viridi Consults Limited Innovation Plaza, Suite C7-C10, Plot 770, Idris Gidado Street, Wuye Abuja</p>
					</div>
					<div className='text-white opacity-50 flex justify-start items-center'>
						<FiPhoneCall className='text-2xl mr-3' />
						<p>(+234)7043837916</p>
					</div>

					<div className='text-white opacity-50 flex justify-start items-center'>
						<SiMinutemailer className='text-2xl mr-3' />
						<p>info@viridiconsultsltd.com.ng</p>
					</div>
				</div>
			</div>
			<hr className='text-white bg-white' />
			<p className='text-white text-center pt-6'> {date} © Copyrights Viridi Consults Limited</p>
		</div>
	);
};

export default Footer;
