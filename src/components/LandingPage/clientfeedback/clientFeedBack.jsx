import React, {useState, useEffect} from 'react'
import {GrNext, GrPrevious} from 'react-icons/gr'
import './client.css'
import Winner from '../../../assets/man.jpeg'
import Peach from '../../../assets/peachville.jpeg'
import Woman from '../../../assets/woman.jpeg'
import Ashawa from '../../../assets/ashawa.jpeg'

const ClientFeedback = () => {
    const clientFeedback = [
        {
            id:1, feedback: "The company is reliable, cost-effective, and service delivery was top-notch.  When it comes to residential and office cleaning services, just call on Viridi Consults Limited",
            name: "Mrs. Justina I.",
            job: "Business Woman",
            img: Woman
        },
        {
            id:2, feedback: "We were looking for a reliable service provider to paint and clean our office before resumption after the December break. Viridi Consults Limited came through.  Job well done!!!",
            name:'Ashawa Consults',
            job: "Business Group",
            img: Ashawa
        },
        {
            id:3, feedback: "We are very satisfied with the team's professionalism and the quality of their services.",
            name: "Peachville",
            job: "Company",
            img: Peach
        },
        {
            id:4, feedback: "Every quarter of the year, Viridi consults limited comes to fumigate and clean my house. Its performance is unmatched.",
            name: "Winner O.",
            job: "Business Owner",
            img: Winner
        },
    ]


    const [people, setPeople] = useState(clientFeedback)
    const [index, setIndex] = useState(0)

    useEffect(() => {
        const lastIndex = people.length - 1;
        if (index < 0) {
          setIndex(lastIndex);
        }
        if (index > lastIndex) {
          setIndex(0);
        }
      }, [index, people]);
    
      useEffect(() => {
        let slider = setInterval(() => {
          setIndex(index + 1);
        }, 5000);
        return () => {
          clearInterval(slider);
        };
      }, [index]);

    

  return (
    <div className='bg-[#c4c4c450] lg:px-24 md:px-12 px-6 lg:py-12 md:py-4 py-3 flex flex-col justify-center items-center w-full relative'>
        <p className='lg:text-3xl font-bold pt-5 text-xl mb-12'>Happy Clients & Their Feedbacks</p>
        <div className='flex justify-between w-[70%] relative h-[300px] overflow-hidden'>
            {
                clientFeedback.map((items, personIndex)=>{
                    let position = 'NextSlide'
                    if (personIndex === index){
                        position = 'ActiveSlide'
                    }
                    if (personIndex === index -1 || (index === 0 && personIndex === people.length -1)){
                        position = 'LastSlide'
                    }
                    return(
                        <article key={items.id} className={`${position} bg-white transition-all flex flex-col opacity-0 absolute top-0 right-0 left-0 justify-center items-center w-[100%] rounded-xl shadow-md  p-7 m-1 text-center`}>
                            <div className=''>
                                <img src={items.img} className='w-[100px] h-[100px] rounded-full mb-3' alt="" />
                            </div>
                            <p className='text-xs mb-3'>{items.feedback}</p>
                            <p className='text-base font-bold mb-3 text-green-900'>{items.name}</p>
                            <p className='text-sm font-bold text-[#444]'>{items.job}</p>
                        </article>
                    )
                })
            }
            
        </div>
        <div className='absolute z-1000 top-[50%] left-0 w-full flex px-5 justify-between'>
                <button className='hover:shadow p-2 hover:bg-white rounded-md' onClick={()=> setIndex(index-1)}><GrPrevious/></button>
                <button className='hover:shadow p-2 hover:bg-white rounded-md' onClick={()=>setIndex(index + 1)}><GrNext/></button>
            </div>
    </div>
  )
}

export default ClientFeedback