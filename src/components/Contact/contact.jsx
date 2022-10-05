import React from 'react'
import AboutHero from '../About/AboutHero/aboutHero'
import {ImLocation2, ImPhone} from 'react-icons/im'
import { SiMinutemailer } from 'react-icons/si'

const FormDetails =({label, type, placeholder})=>{
  return(
    <div className='flex flex-col w-full mb-3'>
      <label className='text-green-900 mb-3' htmlFor="">{label}</label>
      <input className='border-0 outline-none border-b border-[#c4c4c4]' placeholder={placeholder} type={type} />
    </div>
  )
}

const Contact = () => {
    const contactInfo = [
      {id:1, icon: <ImLocation2/>, contactMethod: "Address", contactDetails: `Innovation Plaza, Suite C7-C10, Plot 770, Idris Gidado Street, Wuye Abuja`},
      {id:2, icon: <ImPhone/>, contactMethod: "Phone", contactDetails: `(+234) 7081897072, 8130508940`},
      {id:3, icon: <SiMinutemailer/>, contactMethod: "Email", contactDetails: `viridiconsults@gmail.com`},  
    ]


  return (
    <div>
        <AboutHero title="Contact Us"/>
        <div className='lg:px-24 md:px-12 px-6 lg:py-12 md:py-6 py-12  flex flex-col md:flex-row md:justify-between  justify-center md:items-start items-center'>
          {
            contactInfo.map((items)=>{
              return (
                <div key={items.id} className="flex flex-col md:mb-0 mb-6 text-center justify-center md:w-1/3 items-center">
                  <span className='mb-3 bg-green-900 rounded-full p-6 text-white'>{items.icon}</span>
                  <p className='text-xs'><span className='font-bold'>{items.contactMethod}</span>: {items.contactDetails}</p>
                </div>
              )
            })
          }
        </div>
        <div className='lg:px-24 md:px-12 px-6 lg:py-12 md:py-6 py-12  flex flex-col md:flex-row md:justify-between  justify-center md:items-start items-center h-auto'>
          <form action="" className='md:w-1/2 w-full md:shadow-lg md:p-6 p-3 rounded-lg'>
            <p className='md:text-4xl font-light mb-12 text-2xl'>Contact Us</p>
            <FormDetails label='FULL NAME' type='text' placeholder="Name" />
            <FormDetails label='EMAIL ADDRESS' type='email' placeholder="Email"/>
            <FormDetails label='SUBJECT' type='text' placeholder="Subject" />
            <div className='flex flex-col w-full mb-3'>
              <label className='text-green-900 mb-3' htmlFor="">MESSAGE</label>
              <textarea className='border-0 outline-none border-b border-[#c4c4c4]' name="" id="" cols="30" rows="3"></textarea>
            </div>
            <button className='bg-green-900 text-white font-semibold p-3 outline-none rounded-lg' type="submit">SEND MESSAGE</button>         
          </form>

          <div className='flex p-6 flex-col justify-between items-start h-full'>
            <p className='md:text-xl text-base font-extralight text-green-500 mb-3'>Call Us, Write Us, Or Knock On Our Door</p>
            <p className='text-green-900 mb-3 font-normal md:text-3xl text-2xl'>We Are Available To Attend To Your Cleaning Needs</p>
            <p className='mt-12 mb-3 text-xl font-extralight'>Call us, Send us a Message and we will reply you typically within 24 hours. </p>
            <p className='text-xl'>
              Sunday: Closed <br /> <br />
              Monday - Friday: 9am - 7pm <br /> <br />
              Saturday: 9am - 5pm
            </p>
          </div>
        </div>

      <iframe className='w-full h-[450px]' id="gmap_canvas" src="https://maps.google.com/maps?q=Innovation%20Plaza,%20Suite%20C7-C10,%20%20Plot%20770,%20Idris%20Gidado%20Street,%20%20Wuye%20Abuja&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" title='map'></iframe>
       
    </div>
  )
}

export default Contact