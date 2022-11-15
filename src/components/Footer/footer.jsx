import React, {Fragment} from 'react'
import { FaInstagram, FaLinkedin, FaWhatsapp} from 'react-icons/fa'
import {BsSignpost2Fill} from 'react-icons/bs'
import {FiPhoneCall} from 'react-icons/fi'
import {SiMinutemailer} from 'react-icons/si'
import { Link } from 'react-router-dom'

const Footer = () => {
    const socials = [
        {
          id: 1, 
          name: "linkedin",
          logo: <FaLinkedin/>,
          link: "https://www.linkedin.com/company/viridi-consults-limited/"
        },
        {
          id: 2, 
          name: "whatsapp",
          logo: <FaWhatsapp/>,
          link: "https://api.whatsapp.com/send?phone=2347081897072&text=Welcome%20to%20Viridi%20Consults%20Limited.%20We%20offer%20Janitorial,%20fumigation%20and%20painting%20services.%20Kindly%20drop%20your%20message,%20we%20will%20get%20in%20touch%20shortly"
        },
        {
          id: 3, 
          name: "instagram",
          logo: <FaInstagram/>,
          link: "https://www.instagram.com/viridiconsultslimited/"
        },
        // {
        //   id: 4, 
        //   name: "gmail",
        //   logo: <FaMailBulk/>,
        //   link: "https://viridiconsults@gmail.com"
        // },

      ]
    const links = [
        {id:1, link:"Fumigation and Pest Control", to:"fumigationServices"}, {id:2, link:"Painting Services", to:"paintServices"}, {id:2, link:"Janitorial Services", to:"janitorialServices"}
    ]
    const date = new Date().getFullYear()
    
  return (
    <div className='pb-12 bg-black'>
    <div className='bg-black opacity-90 text-white lg:px-24 md:px-12 px-6 md:py-24 py-12 flex flex-col md:flex-row justify-between'>
        <div className='w-[30%]'>
            <p className='lg:text-3xl md:text-2xl text-xl font-bold mb-6'>Viridi Consults</p>
            <p className='mb-4 text-white opacity-50'>To provide our clients with excellent services so that recommendations are easy</p>
            <div className='flex'>
            {
                socials.map((item)=>{
                  return(
                    <Fragment>
                      <a href={item.link} key={item.id} target="_blank" rel='noreferrer' className="mr-3 text-green-500 bg-[#c4c4c470] rounded-full p-2 hover:text-white">{item.logo}</a>
                    </Fragment>
                  )
                })
              }
            </div>
        </div>
        <div className='md:w-[30%] w-full md:mt-0 mt-9'>
            <p className='lg:text-3xl md:text-2xl text-xl font-bold mb-6'>Services</p>
            
            <ul className=''>
            {
                links.map((items)=>{
                    return (
                    <Fragment>
                        <li key={items.id}>
                            <Link   className=" capitalize mb-6 opacity-70 font-bold" to={items.to}>{items.link}</Link>
                        </li>
                    </Fragment>
                    )
                })
            }
            </ul>
        </div>
        <div className='md:w-[30%] md:mt-0 mt-6 w-full'>
            <p className='lg:text-3xl md:text-2xl text-xl font-bold mb-6'>Have Questions?</p>
            <div className='text-white opacity-50 flex justify-start items-start'>
                <BsSignpost2Fill className='text-2xl mr-3'/>
                <p>Viridi Consults Limited Innovation Plaza, Suite C7-C10, Plot 770, Idris Gidado Street, Wuye Abuja</p>
            </div>
            <div className='text-white opacity-50 flex justify-start items-center'>
                <FiPhoneCall className='text-2xl mr-3'/>
                <p>(+234) 7081897072, 8130508940</p>
            </div>

            <div className='text-white opacity-50 flex justify-start items-center'>
                <SiMinutemailer className='text-2xl mr-3'/>
                <p>info@viridiconsultsltd.com.ng</p>
            </div>
        </div>
    </div>
      <hr className='text-white bg-white' />
      <p className='text-white text-center pt-6'> {date} © Copyrights Viridi Consults Limited</p>
    </div>
  )
}

export default Footer