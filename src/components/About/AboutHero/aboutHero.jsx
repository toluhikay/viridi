import React from "react";

const AboutHero = ({ title, subtitle }) => {
	return (
		<div className='lg:px-24 bg-slider2 bg-[#000] h-[80vh] bg-blend-darken bg-black/70 bg-center bg-cover bg-no-repeat text-white bg-fixed md:px-12 px-6 lg:py-16 md:py-6 py-3 flex flex-col justify-center items-center'>
			<p className='lg:text-4xl font-bold md:text-3xl text-white text-2xl mb-3'>{title}</p>
			<p className='text-white text-center italic text-xl font-light'>{subtitle}</p>
		</div>
	);
};

export default AboutHero;
