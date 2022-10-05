import React, {useState, useEffect} from 'react'
import {GrNext, GrPrevious} from 'react-icons/gr'
import './client.css'

const ClientFeedback = () => {
    const clientFeedback = [
        {
            id:1, feedback: "this far farther than the ferthest was only a group the be you thing, enjoyable",
            name: "Thomas Ejembi",
            job: "Software Engineer",
            img: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8cGVvcGxlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60"
        },
        {
            id:2, feedback: "this far farther than the ferthest was only a group the be you thing, enjoyable",
            name: "Winner Winner",
            job: "Business Man",
            img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fHBlb3BsZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60"
        },
        {
            id:3, feedback: "this far farther than the ferthest was only a group the be you thing, enjoyable",
            name: "Jimmy Jimmy",
            job: "Business Man",
            img: "https://images.unsplash.com/photo-1657214059212-104dac959c56?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxzZWFyY2h8MTV8fHBlb3BsZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60"
        },
        {
            id:4, feedback: "this far farther than the ferthest was only a group the be you thing, enjoyable",
            name: "Odogwu Odogwu",
            job: "Viridi Viridi",
            img: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fHBlb3BsZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60"
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