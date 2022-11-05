import React, { Fragment } from 'react'
import AboutHero from '../../About/AboutHero/aboutHero'

const Fumigation = () => {

    const fumigationServices = [
        {id:1, img: "https://media.istockphoto.com/photos/fumigator-sanitizing-cleaning-and-disinfection-coronavirus-pandemic-picture-id1308788813?k=20&m=1308788813&s=612x612&w=0&h=BOSQOYEkDFK-_nKYqM55AYIbOdT8FGpSNHUxfwvjAiQ=", 
        title:"FUMIGATION", 
        details:`We can be trusted to offer environment-friendly and 
        reliable pest management measures for residential, 
        commercial, and industrial buildings in every state in 
        Nigeria as well as the Federal Capital Territory (FCT).
        Our team of workers is competent, experienced, skilled, 
        and well-trained in Integrated Pest Management (IPM).
        For a decent cost, we offer the proper solution for your 
        pest problems as we offer the most effective fumigation 
        and pest control services in Nigeria. We abide by the 
        appropriate Health and Safety regulations while we work 
        to ensure your house or business premises is free of 
        pests. We have a pest control plan that can suit your 
        home and business.`},

        {id:2, img: "https://media.istockphoto.com/photos/agricultural-worker-takes-care-of-his-estate-picture-id958953510?k=20&m=958953510&s=612x612&w=0&h=j6e4PGveN3F9YaWbZrTladM2Dtq6zcLOn119R_p3hSk=", 
        title:"PEST CONTROL", 
        details:`To eliminate pests from your space, we use 
        proper gaseous fumigants. We offer general pest 
        management services for pests like wasps and 
        bees, cockroaches, ants, rats, mice, spiders, flies, 
        fleas, ticks, termites, rodents, snakes, crickets, 
        and more. Our team of expert pest control 
        professionals will identify the pest problem and 
        devise a strategy to effectively eliminate it.`},

        {id:4, 
            img: "https://media.istockphoto.com/photos/pump-pressure-for-pest-control-install-in-new-building-house-site-picture-id1303266957?k=20&m=1303266957&s=612x612&w=0&h=DKOyxzo6igt0QptyfCsLMx2W_bjxS3fPwJsD6Rvmmio=",
        title:"PRE AND POST CONSTRUCTION TREATMENT", 
        details:`We ensure to do the necessary pre-construction treatment of your building in order to 
        prevent termite inversion. We apply appropriate insecticide to the soil that is in direct 
        contact with a building's foundation to 
        prevent termites. After construction, we also 
        do post-construction treatment to avoid a 
        termite infestation that can destroy woods, 
        ceilings, walls, etc`},

        {id:3,  
        img: "https://media.istockphoto.com/photos/exterminator-hygiene-disinfection-picture-id1219349946?k=20&m=1219349946&s=612x612&w=0&h=oqideBmQUP0Qdq99N8W5z7XzC8JdqsoK1EUQrUfBgCk=", 
        title:"PEST TREATMENT", 
        details:`Before pest treatment, we evaluate the property to assess the 
        level of infestation, access points, and the best removal 
        technique. We then use only licensed insecticides and pest 
        control tools to ensure the complete eradication of all insects. 
        We use eco-friendly, natural, non-toxic products.`},
        
        
    ]

    const NormalRow = ({source, title, details})=>{
        return (
            <div className='lg:px-24 md:px-12 px-6 lg:py-12 md:py-9 py-6 flex md:flex-row flex-col justify-between'>
                <div className='md:w-[48%] md:mb-0 mb-6 w-full'>
                    <img src={source} alt="" className='rounded-lg' />
                </div>
                <div className='flex flex-col justify-center items-start md:w-[48%]'>
                    <p className='md:text-3xl text-2xl font-bold text-green-900 mb-6'>{title}</p>
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
                    <p className='md:text-3xl text-2xl font-bold text-green-900 mb-6'>{title}</p>
                    <p className='md:text-xl text-black opacity-50'>{details}</p>
                </div>
            </div>
        )
    }


  return (
    <Fragment>
        <AboutHero title="Services - Fumigation"/>
        
        <div className='lg:px-24 md:px-12 md:pt-8 px-6 py-3 flex flex-col justify-center items-center'>
            <p className='lg:text-3xl md:text-2xl  font-bold text-sm text-center mb-3'><span className='text-green-900'>RESIDENTIAL AND COMMERCIAL</span> CONTRACT</p>
            <p className='text-center'>To ensure that your company stays on top of any pest 
            issues, we can set up a customized maintenance schedule. Contracts for pest management are crucial to 
        preventing the recurrence of pest issues.</p>
        <div className='lg:px-24 md:px-12 px-6  py-3 lg:pt-12 flex flex-col justify-center items-center'>
            <p className='lg:text-2xl font-bold text-xl text-center mb-3'><span className='text-green-900'>Fumigation & Pest Control</span>  Services We Offer</p>
        </div>
        </div>
        <NormalRow
            source={ fumigationServices[0].img }
            title = { fumigationServices[0].title }
            details = { fumigationServices[0].details }
        />

        <RowReverse
            source={ fumigationServices[1].img }
            title = { fumigationServices[1].title }
            details = { fumigationServices[1].details }
        />

        <NormalRow
            source={ fumigationServices[2].img }
            title = { fumigationServices[2].title }
            details = { fumigationServices[2].details }
        />

        <RowReverse
            source={ fumigationServices[3].img }
            title = { fumigationServices[3].title }
            details = { fumigationServices[3].details}
        />
    </Fragment>
  )
}

export default Fumigation