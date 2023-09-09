import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation } from "swiper/modules";

const Hero = () => {
	return (
		<div className='bg-[#080A0C] text-white  md:h-[600px] overflow-hidden h-[400px] bg-no-repeat bg-cover flex justify-center items-center'>
			<Swiper
				slidesPerView={1}
				spaceBetween={30}
				loop={true}
				// pagination={{
				// 	clickable: true,
				// }}
				navigation={true}
				modules={[Pagination, Navigation]}
				className='mySwiper h-full w-full'
			>
				<SwiperSlide className='w-full h-full'>
					<div className='w-full h-full flex items-center px-[15px] bg-slider1 bg-cover bg-blend-darken bg-black/60 text-center bg-center justify-center'>
						<div className='w-full sm:w-[80%] xl:w-[60%]'>
							<p className='text-white lg:text-4xl sm:text-3xl text-2xl'>Empowering Sustainable Futures: Your Trusted Environmental Consulting Partner</p>
							<p className='mt-2 lg:text-xl text-base'>Welcome to Viridi Consults Limited, Your Trusted Partner in Environmental Consulting</p>
						</div>
					</div>
				</SwiperSlide>
				<SwiperSlide>
					{" "}
					<div className='w-full h-full flex items-center px-[15px] bg-slider3 bg-cover bg-blend-darken bg-black/60 text-center bg-center justify-center'>
						<div className='w-full sm:w-[80%] xl:w-[60%]'>
							<p className='text-white lg:text-4xl sm:text-3xl text-2xl'>Empowering Sustainable Futures: Your Trusted Environmental Consulting Partner</p>
							<p className='mt-2 lg:text-xl text-base'>Welcome to Viridi Consults Limited, Your Trusted Partner in Environmental Consulting</p>
						</div>
					</div>
				</SwiperSlide>
				<SwiperSlide>
					{" "}
					<div className='w-full h-full flex items-center px-[15px] bg-slider2 bg-cover bg-blend-darken bg-black/60 text-center bg-center justify-center'>
						<div className='w-full sm:w-[80%] xl:w-[60%]'>
							<p className='text-white lg:text-4xl sm:text-3xl text-2xl'>Empowering Sustainable Futures: Your Trusted Environmental Consulting Partner</p>
							<p className='mt-2 lg:text-xl text-base'>Welcome to Viridi Consults Limited, Your Trusted Partner in Environmental Consulting</p>
						</div>
					</div>
				</SwiperSlide>
			</Swiper>
		</div>
	);
};

export default Hero;
