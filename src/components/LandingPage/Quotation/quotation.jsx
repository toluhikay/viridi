import React from 'react'
import CountUp from 'react-countup'
import { Link } from 'react-router-dom'

const Quotation = () => {
    const stats = [
        {id:1, statNum: 60, statType: "Client"},
        {id:2, statNum: 40, statType: "Professional Staff"},
        {id:3, statNum: 120, statType: "Projects"},
        // {id:4, statNum: 50, statType: "Consultations"},
   ]
//    useCountUp({
//     ref: "counter",
//     end: '',
//     start:false,
//     enableScrollSpy: true,
//     scrollSpyDelay: 1000
//   });
  return (
    <div className='bg-green-900 text-white lg:px-24 md:px-12 px-6 lg:py-12 md:py-4 py-3 flex flex-col md:flex-row justify-between items-center'>
        <div className='flex flex-col md:justify-start justify-between md:mb-0 mb-12'>
            <p className='lg:text-2xl font-bold text-xl mb-3'>We Provide Free Quotation</p>
            <Link to='contact'>
            <button className='p-3 border border-white rounded-[3px] hover:bg-white hover:text-green-900'>FREE CONSULTATION</button>
            </Link>
        </div>
        <div className='flex flex-col md:flex-row md:justify-between justify-center items-center w-2/3'>
            {
                stats.map((item)=>{
                    return (
                        <div key={item.id} className="flex flex-col justify-center items-center md:mb-0 mb-12" >
                            <CountUp scrollSpyOnce='true' className='font-bold lg:text-5xl md:text-4xl text-3xl mb-3 text-green-500' end={item.statNum} duration="3" enableScrollSpy/>
                            <p>{item.statType}</p>
                            {/* <span id='counter' className='visibility-hidden' /> */}
                        </div>
                    )
                })
            }
        </div>
    </div>
  )
}

export default Quotation