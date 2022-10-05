import React from 'react'
import Image1 from '../../../assets/painting/paint5.jpg'
import Image2 from '../../../assets/painting/paint3.jpg'
import Image4 from '../../../assets/PictureClean/image1.jpg'



const Gallery = () => {

    const images = [
        {id:1, img: Image1}, {id:2, img: Image2}, {id:3, img: 'https://media.istockphoto.com/photos/professional-cleaner-disinfecting-air-vents-at-a-factory-picture-id1307747009?k=20&m=1307747009&s=612x612&w=0&h=1MXjOu1V3fa6Y_Ahr4MZRvVcYZbhWipk5vx4tE9GfYw='},{id:4, img: Image4 }
    ]

  return (
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
  )
}

export default Gallery