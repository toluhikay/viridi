import React, { Fragment } from 'react'
import Vacuum1 from '../../../assets/cleaning/cleanVaccum.jpg'
import CleanOffice from '../../../assets/cleaning/cleanOffice.jpg'
import Vacuum2 from '../../../assets/cleaning/cleanVaccum1.png'
import AboutHero from '../../About/AboutHero/aboutHero'
import Image1 from '../../../assets/PictureClean/image3.jpg'
import Image2 from '../../../assets/PictureClean/image2.jpg'
import Image3 from '../../../assets/PictureClean/image1.jpg'
import Image4 from '../../../assets/PictureClean/whyImage.jpg'

const JanitorialService = () => {

    const janitorialService = [
        {id:1, text: `We focus on cleaning freshly installed tiles, granites, ceramics, etc., as well as regular post-construction cleaning.`, img: Vacuum1 },

        {id:3, text: `We provide retailer services, periodic cleanings, and one-time cleanings.`, img: CleanOffice },

        {id:3, text: `Our services come in several forms. We handle all of your thorough cleaning requirements, including deep cleaning, vacuuming, surface cleaning, floor cleaning and polishing, and cleaning of upholstery and apartments. Additionally,  We ensure we reach hard-to-reach areas.`, img: Vacuum2 },
    ]

    const images = [
        {id:1, img: Image1}, {id:2, img: Image2}, {id:3, img: Image3}, {id:4, img: Image4},
    ]

  return (
    <Fragment>
    <AboutHero title="Services > Janitorial Services"/>
    <div className="lg:px-24 bg-center bg-cover bg-no-repeat bg-fixed md:px-12 px-6 lg:py-16 md:py-6 py-3 flex flex-col justify-center items-center text-center">
        <p className='lg:text-3xl font-bold text-xl mb-3'><span className='text-green-500'>Janitorial</span>  Services</p>
        <p className='text-sm'>
        We keep everything clean so you can relax. By understanding our client's needs and meeting their requirements to the greatest standards of professionalism and ethics in the business, we help to create clean, tranquil work environments for our clients. Your sleep is guaranteed, as well as your peace of mind. <br />
        <span className='text-green-500'>...We are the finest with our excellent janitorial services...</span>
        </p>
        <div className='mt-12'>
            <p className='text-green-900 md:text-xl text-base font-bold'>We're here to add the ideal finishing touch to your space.</p>
            <div className='flex flex-wrap justify-between items-center mt-6 p-3 mb-12'>
                {
                    janitorialService.map((items)=>{
                        return (
                            <div key={items.id} className="md:w-[32%] w-full h-[250px] flex justify-center md:justify-start items-center flex-col">
                                <img src={items.img} alt="" className='w-[150px] h-[150px] rounded-full border-4 border-green-900'/>
                                <p className='text-xs mt-3'>{items.text}</p>
                            </div>
                        )
                    })
                }
            </div>
        </div>

    </div>
    <div className='lg:px-24 md:px-12 px-6 lg:py-12 md:py-4 py-4 flex flex-col justify-center items-center'>
            <p className='lg:text-3xl font-bold text-xl mb-3'>Some of Our Past Jobs</p>
        </div>
        <div className='lg:px-24 md:px-12 px-6 lg:py-12 md:py-4 py-3 flex flex-wrap justify-between items-center'>
        {
            images.map((items)=>{
                return(
                    <div key={items.id} className='md:w-[24%] sm:w-[48%] sm:h-[350px] md:h-[250px] mb-3'>
                        <img src={items.img} alt="" className='w-full h-full'/>
                    </div>
                )
            })
        }
        </div>
    </Fragment>
  )
}

export default JanitorialService