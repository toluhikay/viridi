import React, { useRef, useState } from "react";
import AboutHero from "../About/AboutHero/aboutHero";
import { ImLocation2, ImPhone } from "react-icons/im";
import { SiMinutemailer } from "react-icons/si";
import emailjs from "@emailjs/browser";
import swal from "sweetalert";

const FormDetails = ({ label, type, placeholder, name, value }) => {
	return (
		<div className='flex flex-col w-full mb-3'>
			<label className='text-green-900 mb-3' htmlFor=''>
				{label}
			</label>
			<input className='border-0 outline-none border-b border-[#c4c4c4]' placeholder={placeholder} value={value} name={name} type={type} />
		</div>
	);
};

const Contact = () => {
	const contactInfo = [
		{ id: 1, icon: <ImLocation2 />, contactMethod: "Address", contactDetails: `Innovation Plaza, Suite C7-C10, Plot 770, Idris Gidado Street, Wuye Abuja` },
		{ id: 2, icon: <ImPhone />, contactMethod: "Phone", contactDetails: `+234-7043837916` },
		{ id: 3, icon: <SiMinutemailer />, contactMethod: "Email", contactDetails: `info@viridiconsultsltd.com.ng` },
	];

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

	return (
		<div className='overflow-hidden'>
			<AboutHero title='Contact Us' />
			<div className='lg:px-24 md:px-12 px-6 lg:py-12 md:py-6 py-12  flex flex-col md:flex-row md:justify-between  justify-center md:items-start items-center'>
				{contactInfo.map((items) => {
					return (
						<div key={items.id} className='flex flex-col md:mb-0 mb-6 text-center justify-center md:w-1/3 items-center'>
							<span className='mb-3 bg-green-900 rounded-full p-6 text-white'>{items.icon}</span>
							<p className='text-xs'>
								<span className='font-bold'>{items.contactMethod}</span>: {items.contactDetails}
							</p>
						</div>
					);
				})}
			</div>
			<div className='lg:px-24 md:px-12 px-6 lg:py-12 md:py-6 py-12  flex flex-col md:flex-row md:justify-between  justify-center md:items-start items-center h-auto'>
				<form ref={form} className='md:w-1/2 w-full md:shadow-lg md:p-6 p-3 rounded-lg' onSubmit={sendEmail}>
					<p className='md:text-4xl font-light mb-12 text-2xl'>Contact Us</p>
					<FormDetails label='FULL NAME' name='from_name' type='text' placeholder='Name' />
					<FormDetails label='EMAIL ADDRESS' name='email' type='email' placeholder='Email' />
					<FormDetails label='SUBJECT' name='service_name' type='text' placeholder='Subject' />
					<div className='flex flex-col w-full mb-3'>
						<label className='text-green-900 mb-3' htmlFor=''>
							MESSAGE
						</label>
						<textarea className='border-0 outline-none border-b border-[#c4c4c4]' name='message' id='' cols='30' rows='3'></textarea>
					</div>
					<button className='bg-green-900 text-white font-semibold p-3 outline-none rounded-lg' type='submit'>
						SEND MESSAGE
					</button>
				</form>

				<div className='flex p-6 flex-col justify-between items-start h-full'>
					<p className='md:text-xl text-base font-extralight text-green-900 mb-3'>Call Us, Write Us, Or Knock On Our Door</p>
					<p className='text-green-900 mb-3 font-normal md:text-3xl text-2xl'>We Are Available To Attend To Your Cleaning Needs</p>
					<p className='mt-12 mb-3 text-xl font-extralight'>Call us, Send us a Message and we will reply you typically within 24 hours. </p>
					<p className='text-xl'>
						Sunday: Closed <br /> <br />
						Monday - Friday: 9am - 5pm
					</p>
				</div>
			</div>
			<div className='w-full bg-secondary'>
				<iframe className='w-full h-[450px]' id='gmap_canvas' src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3940.1229236612485!2d7.440779714947444!3d9.052550691111813!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x104e0b341b21d393%3A0xbf5f5f061cd195ee!2sInnovation%20Plaza!5e0!3m2!1sen!2sng!4v1667762942778!5m2!1sen!2sng' allowFullScreen='' loading='lazy' referrerPolicy='no-referrer-when-downgrade' title='map1'></iframe>
			</div>
		</div>
	);
};

export default Contact;
