import React from 'react'
import Why from '../LandingPage/WhyUsSection/why.jsx'
import AboutHero from './AboutHero/aboutHero.jsx'
import Main from '../../assets/services1.jpg'
import Quotation from '../LandingPage/Quotation/quotation.jsx'
// import ClientFeedback from '../LandingPage/clientfeedback/clientFeedBack.jsx'
import OurCompany from './OurCompany/ourCompany.jsx'

const About = () => {
  const serviceDetails = [
    {id:1, header: "We Believe In:", text: "Quality, Diversity and Inclussion"},
    {id:2, header: "We work with the Highest level of:", text: "Professionalism and Integrity"},
    {id:3, header: "We Build:", text: "Trust, confidence and Retain our cliants"},
  ]
  
  return (
    <div>
        <AboutHero title="About Us"/>
        <OurCompany/>
        <Why title="Welcome to Viridi Consult"/>
        <Quotation/>
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
                    <p className='md:text-2xl text-xl font-light mb-3'>{items.text}</p>
                  </div>
                )
              })
            }
        </div>
      </div>

        {/* <ClientFeedback/> */}
    </div>
  )
}

export default About