import React from "react";

const OurCertifications = () => {
	const Certifications = ["Federal Ministry of Environment (FMEnv) ", "National Environmental Standards and Regulations Enforcement Agency (NESREA)", "State Regulatory Agencies", "Department of Petroleum Resources (DPR)", "Environmental Health Officers Registration Council of Nigeria (EHORECON)", "Abuja Environmental Protection Board (AEPB)", "And a host of others"];
	return (
		<div className='w-full lg:px-24 md:px-12 px-6 lg:py-24 bg-secondary md:py-20 py-16 flex flex-col justify-center items-center'>
			<p className='lg:text-3xl md:text-2xl text-xl text-center font-bold text-white'>Our Certifications</p>

			<div data-aos='fade-left' className='md:w-[69%] w-full items-center flex justify-end bg-secondary md:h-full h-auto py-[100px]'>
				<div className='sm:w-[90%] w-full  px-[15px] text-white font-light'>
					<p className='mb-12 sm:text-xl'>We take pride in our extensive list of certifications and affiliations with renowned organizations, showcasing our dedication to environmental excellence: </p>
					{Certifications.map((item, index) => {
						return (
							<div className='mb-6 flex items-center' key={index}>
								<div className='w-[15px] h-[15px] rounded-full bg-white mr-2'></div>
								<p className='sm:w-[95%] w-full sm:text-xl text-base'>{item}</p>
							</div>
						);
					})}
				</div>
			</div>
		</div>
	);
};

export default OurCertifications;
