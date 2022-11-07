import React from 'react'
import {GiInsectJaws, GiKnapsack, GiPaintBucket, GiPaintRoller, GiGreenhouse, GiWindow, GiFloorPolisher} from 'react-icons/gi'
import {MdFormatPaint, MdOutlinePestControl, MdWallpaper} from 'react-icons/md'
import { MdChair } from 'react-icons/md'

const Services = () => {
    const services = [
        {
            id:1, serviceName: "Interior Painting",
            serviceDetail: `Your home's interior can be significantly 
            changed by applying a new coat of paint.  
            Viridi Consults Limited has made the 
            painting process simpler. We can complete 
            your project using quality standards and 
            experienced painters.`,
            icon: <GiPaintRoller className='text-5xl absolute bottom-1 right-1 z-10 group-hover:right-5 transition-all group-hover:text-green-900 group-hover:text-6xl'/>
        },
        {
            id:2, serviceName: "Wallpaper Installation",
            serviceDetail: `In some cases, paint just can't do 
            what wallpaper designs can to make 
            your walls come to life. Wallpaper 
            produces distinctive color combinations, patterns, and textures. Our 
            teams can put up decals and wallpaper in your house.`,
            icon: <MdWallpaper className='text-5xl absolute bottom-1 right-1 z-10 group-hover:right-5 transition-all group-hover:text-green-900 group-hover:text-6xl'/>
        },
        {
            id:3, serviceName: "Exterior Painting",
            serviceDetail: `Painting the exterior of your home will 
            make it stand out from the neighbors, 
            whether you're upgrading it to make it 
            cleaner or want to be creative with color 
            and embrace current design trends. Additionally, it raises the worth of your house.`,
            icon: <MdFormatPaint className='text-5xl absolute bottom-1 right-1 z-10 group-hover:right-5 transition-all group-hover:text-green-900 group-hover:text-6xl'/>
        },
        {
            id:4, serviceName: "Custom Painting",
            serviceDetail: `Viridi Consults Limited offers 
            customized painting solutions like 
            murals, beautiful wall art, stenciling, 
            and logo painting when a simple 
            change in wall color is insufficient. 
            So get in touch with us if you want to 
            give your home, office, etc some flair.`,
            icon: <GiPaintBucket className='text-5xl absolute bottom-1 right-1 z-10 group-hover:right-5 transition-all group-hover:text-green-900 group-hover:text-6xl'/>
        },
        {
            id:5, serviceName: "Fumigation",
            serviceDetail: `Using fumigation sheets, we totally cover an 
            area with gaseous fumigants to poison pests 
            in the sealed area and hold for a predetermined amount of time to kill any pests.`,
            icon: <GiKnapsack className='text-5xl absolute bottom-1 right-1 z-10 group-hover:right-5 transition-all group-hover:text-green-900 group-hover:text-6xl'/>
        },
        {
            id:6, serviceName: "Pest Control",
            serviceDetail: `We get rid of undesirable flying and 
            crawling pests like snakes, cockroaches, 
            rats, flies, wasps, houseflies, and ants 
            that obstruct human activity.`,
            icon: <MdOutlinePestControl className='text-5xl absolute bottom-1 right-1 z-10 group-hover:right-5 transition-all group-hover:text-green-900 group-hover:text-6xl'/>
        },
        {
            id:7, serviceName: "Construction Treatment",
            serviceDetail: `Before construction, termite infestation 
            is avoided. After construction, we work to avoid 
            termite infestation.`,
            icon: <GiInsectJaws className='text-5xl absolute bottom-1 right-1 z-10 group-hover:right-5 transition-all group-hover:text-green-900 group-hover:text-6xl'/>
        },
       
        {
            id:8, serviceName: "Janitorial And Cleaning Services",
            serviceDetail: `By understanding our clients' needs and 
            meeting them with the greatest standards of professionalism and ethics in the 
            business, we help to create serene, orderly environments for them.`,
            icon: <GiKnapsack className='text-5xl absolute bottom-1 right-1 z-10 group-hover:right-5 transition-all group-hover:text-green-900 group-hover:text-6xl'/>
        },
        {
            id:9, serviceName: "Residential Cleaning",
            serviceDetail: `We provide all 
            types of residential cleaning, including 
            sweeping, mopping, and toilet cleaning. 
            We offer tailored services based on your 
            needs. Would you like someone to clean 
            your apartment every day, every week, or 
            every month? Get in touch with Viridi 
            Consults Limited. We offer flexible 
            scheduling so you can choose a time that 
            suits you.`,
            icon: <GiGreenhouse className='text-5xl absolute bottom-1 right-1 z-10 group-hover:right-5 transition-all group-hover:text-green-900 group-hover:text-6xl'/>
        },
        {
            id:10, serviceName: "Upholstery Cleaning",
            serviceDetail: `It can be 
            annoying to have stains and filth on 
            your upholstery. It exhausts and 
            makes you uncomfortable. We can 
            help you make your upholstery clean, 
            and fresh with the help of our excellent couch and upholstery cleaning 
            service. We promise that the quality 
            of our work is unmatched.`,
            icon: <MdChair className='text-5xl absolute bottom-1 right-1 z-10 group-hover:right-5 transition-all group-hover:text-green-900 group-hover:text-6xl'/>
        },
        {
            id:11, serviceName: "Cleaning of Glasses",
            serviceDetail: ` 
            We can restore your dead glasses and 
            windows to life, make them gleam and 
            bright, and give them the nice, classy look 
            they deserve with our glass cleaning 
            services.`,
            icon: <GiWindow className='text-5xl absolute bottom-1 right-1 z-10 group-hover:right-5 transition-all group-hover:text-green-900 group-hover:text-6xl'/>
        },
        {
            id:12, serviceName: "Polishing",
            serviceDetail: ` Our team shines materials 
            such as terrazzo, granite, and marble 
            among others. In order to maintain 
            the floor's brightness and keep it in 
            good condition, we always recommend regular maintenance`,
            icon: <GiFloorPolisher className='text-5xl absolute bottom-1 right-1 z-10 group-hover:right-5 transition-all group-hover:text-green-900 group-hover:text-6xl'/>
        },
        
    ]

  return (
    <div className="lg:px-24  md:px-12 px-6 lg:py-24 bg-cover bg-no-repeat bg-fixed bg-center  md:py-12 py-3 flex flex-col justify-center items-center">
        <p className='lg:text-3xl font-bold text-green-900 text-xl mb-3'>Services We Offer</p>
        <div className=' flex flex-wrap justify-between items-center'>
            {
                services.map((items)=>{
                    return (
                        <div key={items.id} className=" shadow-xl group text-black md:w-[45%]  lg:w-[23%] m-2 relative md:h-56 w-full lg:h-[300px] sm:h-44 h-auto p-4 rounded-md">
                            <p className='xl:text-2xl lg:text-xl font-bold'>{items.serviceName}</p>
                            <p className='z-20 relative text-xs leading-loose group-hover:text-gray-900'>{items.serviceDetail}</p>
                            <span className='text-green-900'>{items.icon}</span>
                            {/* {items.icon} */}
                        </div>
                    )
                })
            }
        </div>
    </div>
  )
}

export default Services