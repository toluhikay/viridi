import React from 'react'
import ImageOne from "../../../assets/model/image1.png"
import ImageTwo from "../../../assets/model/image2.png"
import ImageThree from "../../../assets/model/image3.png"
import ImageFour from "../../../assets/model/image4.png"
import ImageFive from "../../../assets/model/image5.png"
import ImageSix from "../../../assets/model/image6.png"

const BusinessModel = () => {
    const businessModel = [
        {id:1, step: "Step 1", stepTitle: "Customer Visit & Discussion", img: ImageOne,
            stepDetails: `Talk with the customer to learn about their requirements and concerns`
        },
        {id:2, step: "Step 2", stepTitle: "INSPECTION OF FACILITY", img: ImageTwo,
            stepDetails: `Reconnaissance inspection of the facility`
        },
        {id:3, step: "Step 3", stepTitle: "NEEDS IDENTIFICATION", img: ImageThree,
            stepDetails: `In accordance with STEPS 1 and 2, reconcile the clients' needs.`
        },
        {id:4, step: "Step 4", stepTitle: "STATUTORY OBLIGATIONS", img: ImageFour,
            stepDetails: `Project registration with the appropriate regulatory agencies (mostly for 
                Selected Projects that need government certification and approval)`
        },
        {id:5, step: "Step 5", stepTitle: "Site Job", img: ImageFive,
            stepDetails: `Execute the site job in accordance with the defined Terms of Reference (TOR)`
        },
        {id:6, step: "Step 6", stepTitle: "FOLLOW UP, MONITORING, CERTIFICATION", img: ImageSix,
            stepDetails: `Monitoring and follow-up to obtain evaluations of the completed task(s) and certification for Projects that requires government approval`
        },
    ]
  return (
    <div className='lg:px-24 md:px-12 px-6 lg:py-12 md:py-4 py-3 flex flex-col justify-center items-center'>
        <p className='lg:text-3xl font-bold text-xl text-green-900 mb-12'>OUR INTERGRATED BUSINESS MODEL</p>
        <div className='flex flex-wrap justify-between'>
            {
                businessModel.map((item)=>{
                    return(
                        <div className='md:w-[32%] sm:w-[48%] w-full text-center p-3 rounded-xl mb-3 flex flex-col justify-start items-center border-2 shadow-md' key={item.id}>
                            <p className='font-bold group-hover:text-white text-green-900 pb-2'>{item.step}</p>
                            <div className='w-[150px] h-[150px] rounded-full border group-hover:border-white border-green-500 flex justify-center items-center  p-2 mb-2'>
                                <img src={item.img} alt="" className='w-[100px] h-[100px] rounded-full' />
                            </div>
                            <p className='font-bold group-hover:text-white text-green-900 pb-2'>{item.stepTitle}</p>
                            <p className='text-sm group-hover:text-white text-green-900'>{item.stepDetails}</p>
                        </div>
                    )
                })
            }
        </div>
    </div>
  )
}

export default BusinessModel