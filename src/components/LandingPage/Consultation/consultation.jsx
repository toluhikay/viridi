import React from "react";
import emailjs from "@emailjs/browser";
import { useRef } from "react";
import swal from "sweetalert";

const Consultation = () => {
	const form = useRef();
	const SERVICE_ID = process.env.REACT_APP_SERVICE_ID;
	const TEMPLATE_ID = process.env.REACT_APP_TEMPLATE_ID;
	const PUBLIC_KEY = process.env.REACT_APP_PUBLIC_KEY;

	const sendEmail = (e) => {
		e.preventDefault();
		emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY).then(
			(result) => {
				if (result.status === 200) {
					swal({
						title: "Thank You!",
						text: "Message Sent Successfully!",
						icon: "success",
						button: true,
					}).then(() => {
						window.location.reload();
					});
				}
			},
			(error) => {
				if (error) {
					swal({
						title: "Oops!",
						text: "Message Not Sent!",
						icon: "error",
						button: "Try Again",
					});
				}
			},
		);
	};
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
		<div className='lg:px-24 bg-secondary/80 bg-center bg-cover bg-no-repeat text-white bg-fixed md:px-12 px-6 lg:py-16 md:py-6 py-3 flex flex-col justify-center items-center'>
			<p className='lg:text-2xl font-bold text-xl mb-3'>Free Consultation</p>
			<form ref={form} className='lg:w-[55%] md:w-4/5 w-full' onSubmit={sendEmail}>
				<select name='service_name' id='' className='text-black w-full outline-none p-2 mb-3' required>
					<option value=''>-- Select a Service --</option>
					{ServicesData.map((item, index) => {
						return (
							<option value={item.label} key={index}>
								{item.label}
							</option>
						);
					})}
				</select>
				<div>
					<input type='text' placeholder='Your Name' name='from_name' className='text-black w-full outline-none p-2  mb-3' required />
					<input type='email' placeholder='Email Address' name='email' className='text-black w-full outline-none p-2  mb-3' required />
				</div>
				<div>
					<input type='date' placeholder='Date' className='text-black w-full outline-none p-2 mb-3' required />
				</div>
				<textarea name='message' id='' cols='30' rows='10' placeholder='Message' className='text-black w-full outline-none p-2 mb-3' required></textarea>
				<button type='submit' className='bg-green-900 p-2 hover:border-1 hover:bg-none hover:border-green-900 text-center w-full'>
					Send Message
				</button>
			</form>
		</div>
	);
};

export default Consultation;
