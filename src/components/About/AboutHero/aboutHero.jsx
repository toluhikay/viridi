import React from "react";

const AboutHero = ({ title, subtitle }) => {
	return (
		<div className="lg:px-24 bg-[url('https://images.unsplash.com/photo-1484885192048-9696607347da?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80')] bg-[#000] min-h-[350px] bg-center bg-cover bg-no-repeat text-white bg-fixed md:px-12 px-6 lg:py-16 md:py-6 py-3 flex flex-col justify-center items-center">
			<p className='lg:text-4xl font-bold md:text-3xl text-secondary text-2xl mb-3'>{title}</p>
			<p className='text-secondary text-center italic text-xl font-light'>{subtitle}</p>
		</div>
	);
};

export default AboutHero;
