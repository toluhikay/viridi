import React from 'react'

const OurCompany = () => {
  return (
    <div className="bg-green-900 text-white lg:px-24 md:px-12 px-6 lg:py-12 md:py-4 py-3 flex flex-col md:flex-row justify-between items-start text-justify">
        <div className='md:w-[45%] w-full mb-3'>
            <p className='lg:text-2xl font-bold text-xl mb-3 text-green-500'>Our Company</p>
            <p className='text-sm'>Viridi Consults Limited is a Nigeria-registered company. We offer a 
                variety of specialized services for individuals, businesses, 
                and industries. We provide janitorial/cleaning services, pest 
                control/fumigation services, and structural/physical decoration 
                services such as painting, 3D installation, wallpaper installation, and 
                screeding. To provide excellent services and improve sustainability, we 
                used the best industry tools and equipment in performing our duties. We 
                work closely with relevant stakeholders, regulators, and our clients to 
                ensure project objectives are met. We are licensed by the relevant 
                regulatory bodies in Nigeria. Our strength lies in identifying and meeting 
                our customer's needs using the best available industrial techniques. Our 
                team consists of over 30 experts and a large number of associates from 
                different disciplines. As a team, we have several years of experience 
                working with individuals, corporate organizations, government, and 
                industries across Nigeria. Our services come with a guarantee and we 
                also offer monitoring services to meet the needs of clients.</p>
        </div>
        <div className='md:w-[45%] w-full flex flex-col justify-between h-auto'>
            <div className='mb-3'>
                <p className='lg:text-2xl font-bold text-xl mb-3 text-green-500'>Our Mission</p>
                <p className='text-sm'>To provide our clients with excellent and satisfactory services, so that they can easily recommend us to others.</p>
            </div>
            <div>
                <p className='lg:text-2xl font-bold text-xl mb-3 text-green-500'>Our Vision</p>
                <p className='text-sm'>To gain a reputation for providing exceptional service on a national and international level, as well as for our contribution to environmental sustainability.</p>
            </div>
        </div>
    </div>
  )
}

export default OurCompany