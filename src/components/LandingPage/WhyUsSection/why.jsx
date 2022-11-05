import React, { Fragment } from 'react'
import HighLightPicture from '../../HighLightPicture.jsx/highlightpicture'
import {RiTeamFill} from 'react-icons/ri'
import {SiHandshake} from 'react-icons/si'
import {FaHandshake} from 'react-icons/fa'
import {RiCustomerService2Fill} from 'react-icons/ri'

const Why = ({title}) => {
    const why = [
      {
        id: 1,
        icon: <FaHandshake className="text-3xl font-bold text-white"/>,
        h1 : "Integrity",
        p: `To uphold high standards of moral behavior, to be reliable and trustworthy, and to 
        take pride and sincerity in whatever we do.`
      },
      {
        id: 2,
        icon: <SiHandshake className="text-3xl font-bold text-white"/>,
        h1 : "Respect",
        p: `To promote dignity, equity, consideration, and equal opportunity, as well as to acknowledge and value each individual's contribution to our firm.`
      },
      {
        id: 3,
        icon: <RiTeamFill className="text-3xl font-bold text-white"/>,
        h1 : "Teamwork",
        p: `To work together willingly toward our common goals and shared vision, building upon each of our strengths while promoting trust in each other`
      },
      {
        id: 4,
        icon: <RiCustomerService2Fill className="text-3xl font-bold text-white"/>,
        h1 : "Service",
        p: `Offering every customer, no matter how small or large, the highest degree of professional and outstanding service`
      },
      
    ]


  return (
    <Fragment>
        <div className='xl:px-24 lg:px-12 px-6 flex flex-col md:flex-row justify-between items-center'>
            <div className='md:w-[30%] w-full h-full'>
                <HighLightPicture/>
            </div>
            <div className='lg:py-16 py-12 md:pl-12 px-3 flex flex-col md:w-[68%] w-full'>
              <p className='lg:text-3xl md:text-2xl text-xl font-bold'>{title}</p>
              <div className='flex flex-wrap w-full justify-between mt-6'>
                  {
                    why.map(items=>{
                      return(
                        <div key={items.id} className="md:w-[40%] w-full flex text-justify">
                            <div className='mr-3'>
                              <div className='bg-green-900 rounded-full xl:p-3 p-1 h-auto w-auto'>
                                {items.icon}
                              </div>
                            </div>
                            <div>
                              <p className='xl:text-2xl md:text-xl text-base font-bold text-green-900'>{items.h1}</p>
                              <p className='text-sm leading-loose'>{items.p}</p>
                            </div>
                        </div>
                      )
                    })
                  }
              </div>
            </div>
        </div>
    </Fragment>
  )
}

export default Why