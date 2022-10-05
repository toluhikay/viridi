import React from 'react'

const Consultation = () => {
  return (
    <div className="lg:px-24 bg-[url('/src/assets/painting/paint6Hero.jpg')] bg-center bg-cover bg-no-repeat text-white bg-fixed md:px-12 px-6 lg:py-16 md:py-6 py-3 flex flex-col justify-center items-center">
        <p className='lg:text-2xl font-bold text-xl mb-3'>Free Consultation</p>
        <form action="POST" className='lg:w-[55%] md:w-4/5 w-full'>  
            <select name="" id="" className='text-black w-full outline-none p-2 rounded-lg mb-3' >
                <option value="">Fumigation & Pest Control</option>
                <option value="">Painting Services</option>
                <option value="">Janitorial Services</option>
            </select> 
            <div>
                <input type="text" placeholder='Your Name' className='text-black w-full outline-none p-2 rounded-lg mb-3' />
                <input type="email" placeholder='Email Address' className='text-black w-full outline-none p-2 rounded-lg mb-3'/>
            </div>
            <div>
                <input type="date" placeholder='Date' className='text-black w-full outline-none p-2 rounded-lg mb-3'/>
            </div>
            <textarea name="" id="" cols="30" rows="10" placeholder='Message' className='text-black w-full outline-none p-2 rounded-lg mb-3'></textarea>
            <button type='submit' className='bg-green-900 p-2 hover:border-1 hover:bg-none hover:border-green-900 text-center rounded-lg w-full'>Send Message</button>     
        </form>
    </div>
  )
}

export default Consultation