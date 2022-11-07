import React from 'react'
import {Link} from 'react-router-dom'
import AboutHero from '../About/AboutHero/aboutHero'
import Main from '../../assets/services1.jpg'
import {BsArrowRight} from 'react-icons/bs'
import {GiHexagonalNut} from 'react-icons/gi'
import Image1 from '../../assets/painting.jpg'
import Image2 from '../../assets/winner1.jpg'
import Image5 from '../../assets/highlight.jpg'


const whereWeWork = [
  {id:1, where: "GARDENS"},
  {id:2, where: "RESIDENTIAL FACILITIES"},
  {id:1, where: "SPORT CENTERS AND FACILITIES"},
  {id:1, where: "INDUSTRIES"},
  {id:1, where: "BANKING INSTITUTIONS"},
  {id:1, where: "OFFICES AND OTHER RELATED CORPRATE SECTORS"},
  {id:1, where: "HOTELS AND RESTAURANTS"},
  {id:1, where: "SCHOOLS, COLLEGES & UNIVERSITIES"},
  {id:1, where: "CHURCHES"},
  {id:1, where: "MOSQUES"},
  {id:1, where: "ROADS AND HIGHWAYS"},
]


const ServiceType =({serviceType, serviceHighlight, routeTo})=>{
  return (
    <div className='md:w-1/2 w-full bg-white p-12 flex flex-col justify-center items-start md:mb-0 mb-4'>
      <p className='font-bold text-xl mb-3 text-green-900'>{serviceType}</p>
      <p className='text-black opacity-90 mb-3'>{serviceHighlight}</p>
      <Link to={routeTo} className="flex justify-center items-center text-green-900 cursor-pointer">Learn More<BsArrowRight className='ml-2'/></Link>
    </div>
  )
}


const Services1 = () => {
  const serviceDetails = [
    {id:1, header: "We Offer:", text: "Painting Services"},
    {id:2, header: "We Give the Best", text: "Cleaning Services Around"},
    {id:3, header: "We Provide", text: "Top Notch Janitorial Services"},
  ]

  return (
    <div>
      <AboutHero title="Viridi Consult Services"/>
      <div className='lg:px-24 md:px-12 px-6 lg:py-24 md:py-20 py-16 flex flex-col md:flex-row justify-between'>
        <div className='md:w-1/2 w-full md:mb-0 mb-6 rounded-lg shadow-lg'>
          <img src={Main} alt="" className='rounded-lg shadow-lg' />
        </div>
        <div className='md:w-[45%] md:px-6 px-3 flex flex-col justify-center min-h-full'>
            {
              serviceDetails.map((items)=>{
                return (
                  <div key={items.id}>
                    <p className='md:text-xl text-base text-green-900 font-bold mb-2'>{items.header}</p>
                    <p className='md:text-base text-base font-light mb-3'>{items.text}</p>
                  </div>
                )
              })
            }
        </div>
      </div>
      <div className='lg:px-52 md:px-12 px-6 lg:py-24 md:py-20 py-16 bg-[#c4c4c430]'>
        <p className='text-center md:text-3xl text-2xl md:mb-16 mb-10 font-bold text-green-900'>Our Services</p>
        <div className=' flex md:flex-row flex-col'>
          <div className='md:w-1/2 w-full'>
            <img src={Image2} className="md:h-[400px] w-full" alt="" />
          </div>
          <ServiceType
            serviceType="FUMIGATION AND PEST CONTROL"
            routeTo='/fumigationServices'
            serviceHighlight="Using fumigation sheets, we totally cover an area with appropriate gaseous fumigants for the purpose of disinfecting or to exterminate pests within an enclosed space."
          />
        </div>
        <div className=' flex md:flex-row flex-col-reverse'>
          <ServiceType
            serviceType="PAINTING SERVICES"
            routeTo='/paintServices'
            serviceHighlight="We give your home a distinctive, enticing appearance with a splash of class. Although we work within your taste and budget, quality is not compromised."
          />
          <div className='md:w-1/2 w-full'>
            <img src={Image1} className="md:h-[400px] w-full" alt="" />
          </div>
        </div>
        <div className=' flex md:flex-row flex-col rounded-2xl'>
          <div className='md:w-1/2 w-full'>
            <img src={Image5} className="md:h-[400px] w-full" alt="" />
          </div>
          <ServiceType
            serviceType="JANITORIAL SERVICES"
            routeTo='/janitorialServices'
            serviceHighlight="We keep everything clean so you can relax. We 
            assist in fostering orderly, peaceful workplaces for 
            our clients by understanding their needs and 
            delivering on them with the highest standards of 
            professionalism and ethics in the industry."
          />
        </div>
      </div>
      <div className='lg:px-24 md:px-12 px-6 lg:py-24 md:py-20 py-16 '>
        <p className='text-center md:text-3xl text-2xl md:mb-16 mb-10 font-bold text-green-900'>Where We Work</p>
        <div className='flex justify-between flex-wrap items-start'>
          {
            whereWeWork.map((items)=>{
              return (
                <div key={items.id} className="text-green-900 md:w-1/2 w-full flex justify-start items-center text-2xl font-bold mb-3">
                    <GiHexagonalNut className='text-2xl' />
                    <p className='ml-3 font-thin md:text-xl text-sm'>{items.where}</p>
                </div>
              )
            })
          }
        </div>
      </div>
    </div>
  )
}

export default Services1