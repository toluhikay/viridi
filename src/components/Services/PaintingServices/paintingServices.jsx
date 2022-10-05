import React, { Fragment } from 'react'
import AboutHero from '../../About/AboutHero/aboutHero'
import ExtPaint from '../../../assets/painting/paint3.jpg'
import CustomPaint from '../../../assets/painting/paint5.jpg'
import IntPaint from '../../../assets/painting/paint13BG.jpg'
import WallPaper from '../../../assets/wallpaper/wallpaper1.jpg'
import Image1 from '../../../assets/painting/paint4.jpg'
import Image2 from '../../../assets/painting/paint3.jpg'
import Image3 from '../../../assets/painting/paint1.jpg'
import Image4 from '../../../assets/painting/paint7.jpg'
import Image5 from '../../../assets/painting/paint13BG.jpg'
import Image6 from '../../../assets/painting/paint9.jpg'
import Image7 from '../../../assets/painting/paint16.jpg'
import Image8 from '../../../assets/painting/paint15.jpg'


const PaintingServices = () => {

    const paintServices = [
        {id:1, img: IntPaint, title:"KEY TAKE AWAY", details:`Whether you're moving into a new or existing home, 
        remodeling an old apartment, freshening things up, 
        replacing old paint, or upgrading for resale, Viridi 
        Consults limited skilled painting staff can make your 
        building stand out from the crowd. While maintaining 
        low pricing, we make sure that each household or 
        company owner gets value for their money.`},

        {id:2, img: ExtPaint, title:"EXTERIOR PAINTING", details:`Painting the exterior of your home will make it stand out from the neighbors, whether you're upgrading it to make it cleaner or want to be creative with color and embrace current design trends. Additionally, it raises the worth of your house.`},

        {id:3, img: WallPaper, title:"WALLPAPER INSTALLATION", details:`The ability of wallpaper designs to bring 
        your walls to life in some situations just 
        cannot be duplicated by paint. Color 
        schemes, patterns, and textures found in 
        wallpaper are distinctive. Wallpaper 
        installation in your home is a service we 
        offer.`},
        
        {id:4, img: CustomPaint, title:"CUSTOM PAINTING", details:`When a simple change in wall color is 
        insufficient, Viridi Consults Limited 
        offers specialized painting solutions 
        like murals, exquisite wall art, stenciling, and logo painting. So get in touch 
        with us if you want to add some style 
        to your house, workplace, etc..`},
    ]

    const images = [
        {id:1, img: Image1}, {id:2, img: Image2}, {id:3, img: Image3}, {id:4, img: Image4},
        {id:5, img: Image5}, {id:6, img: Image6}, {id:7, img: Image7}, {id:8, img: Image8},
    ]

    const NormalRow = ({source, title, details})=>{
        return (
            <div className='lg:px-24 md:px-12 px-6 lg:py-12 md:py-9 py-6 flex md:flex-row flex-col justify-between'>
                <div className='md:w-[48%] md:mb-0 mb-6 w-full'>
                    <img src={source} alt="" className='rounded-lg' />
                </div>
                <div className='flex flex-col justify-center items-start md:w-[48%]'>
                    <p className='md:text-3xl text-2xl font-bold text-green-500 mb-6'>{title}</p>
                    <p className='md:text-xl text-black opacity-50'>{details}</p>
                </div>
            </div>
        )
    }

    const RowReverse = ({source, title, details})=>{
        return (
            <div className='lg:px-24 md:px-12 bg-[#c4c4c430] px-6 lg:py-12 md:py-9 py-6 flex md:flex-row-reverse flex-col justify-between'>
                <div className='md:w-[48%] md:mb-0 mb-6 w-full'>
                    <img src={source} alt="" className='rounded-lg' />
                </div>
                <div className='flex flex-col justify-center items-start md:w-[48%]'>
                    <p className='md:text-3xl text-2xl font-bold text-green-500 mb-6'>{title}</p>
                    <p className='md:text-xl text-black opacity-50'>{details}</p>
                </div>
            </div>
        )
    }

  return (
    <Fragment>
        <AboutHero title="Services > Painting Services"/>
        <div className='lg:px-24 md:px-12 px-6 lg:py-12 md:py-4 py-4 flex flex-col justify-center items-center'>
            <p className='lg:text-3xl font-bold text-xl mb-3'><span className='text-green-500'>Painting</span>  Services We Offer</p>
            <p className='font-bold mt-6'><span className='text-green-500'>Residential painting services we offer include:
            </span> interior painting, exterior painting, Kitchen cabinet Painting, high ceilings painting, wallpaper, and 3D installation. <br />
            <span className='text-green-500'> Among the commercial painting services we provide 
            are: </span> painting of office buildings, retail stores, 
            High-rise and low-rise buildings, estates, Banks, 
            Churches, Schools, warehouses, and highways.</p>
        </div>
        <RowReverse
            source={ paintServices[0].img }
            title = { paintServices[0].title }
            details = { paintServices[0].details }
        />

        {/* <RowReverse
            source={ paintServices[1].img }
            title = { paintServices[1].title }
            details = { paintServices[1].details }
        /> */}

        <NormalRow
            source={ paintServices[2].img }
            title = { paintServices[2].title }
            details = { paintServices[2].details }
        />

        <RowReverse
            source={ paintServices[3].img }
            title = { paintServices[3].title }
            details = { paintServices[3].details }
        />
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

export default PaintingServices