import React, { Fragment, useState } from 'react'
import {Link, Outlet} from 'react-router-dom'
import { FiPhoneCall } from 'react-icons/fi'
import {SiMinutemailer} from 'react-icons/si'
import {GiHamburgerMenu} from 'react-icons/gi'
import Logo from '../../assets/logo.jpeg'
import { FaInstagram, FaLinkedin, FaWhatsapp} from 'react-icons/fa'

const Navigation = () => {
  const [navOpen, setNavOpen] = useState(true)

  const handleNavOpen = () =>{
    setNavOpen(!navOpen)
  }

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
  ]
  const links = [
    {id:1, link:"home", to:"/"}, {id:2, link:"about us", to:"/about"}, {id:3, link:"services", to:"/services"}, {id:4, link:"contact", to:"/contact"},
  ]

  return (
    <Fragment>
        <div className='lg:px-24 md:px-12 px-6 bg-green-900 text-white py-1 flex justify-between items-center'>
            <div className='flex flex-col md:flex-row'>
                <p className='flex items-center justify-start md:justify-center text-xs mr-2'><FiPhoneCall className='mr-1'/> (+234) 7081897072, 8130508940</p>
                <p className='flex items-center justify-start md:justify-center text-xs'><SiMinutemailer className='mr-1'/> info@viridiconsultsltd.com.ng</p>
            </div>
            <div className='flex'>
              {
                socials.map((item)=>{
                  return(
                    <Fragment>
                      <a href={item.link} key={item.id} target="_blank" rel='noreferrer' className="ml-3">{item.logo}</a>
                    </Fragment>
                  )
                })
              }
            </div>
        </div>

        
        <div className='lg:px-24 sticky z-[10000] top-0 left-0 right-0 bg-white md:px-12 px-6 lg:py-6 md:py-4 py-3 '>
          <div className='flex justify-between md:items-center'>
              <div className='flex justify-between items-center w-full md:w-1/3'>
                {/* <p className='lg:text-4xl md:text-2xl text-xl font-bold'>Viridi <span>Consult Ltd.</span></p> */}
                <Link to='/'>
                  <img src={Logo} alt="" className='w-[70px] h-[70px]' />
                </Link>
                <div>
                  <GiHamburgerMenu className='text-2xl md:hidden cursor-pointer hover:text-green-900' onClick={handleNavOpen}/>
                </div>
              </div>
              <nav className=' hidden md:flex md:w-[30%]'>
                <ul className='md:flex w-full justify-between'>
                  {
                    links.map((items)=>{
                      return (
                        <Fragment>
                          <li key={items.id}>
                            <Link to={items.to} className=" uppercase hover:underline hover:text-green-900 ml-2 lg:text-sm text-sm">{items.link}</Link>
                          </li>
                        </Fragment>
                      )
                    })
                  }
                </ul>
              </nav>
          </div>
          <nav className='w-full'>
                <ul className={!navOpen? 'flex flex-col md:hidden h-[200px] w-full justify-between': 'hidden'}>
                  {
                    links.map((items)=>{
                      return (
                        <Fragment>
                          <li key={items.id}>
                            <Link to={items.to} className=" uppercase font-bold hover:underline hover:text-green-900 text-xs" onClick={handleNavOpen}>{items.link}</Link>
                          </li>
                        </Fragment>
                      )
                    })
                  }
                </ul>
              </nav>
        </div>
        <Outlet/>
    </Fragment>
  )
}

export default Navigation
