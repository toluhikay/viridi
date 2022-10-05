import React from 'react'

const AboutHero = ({title}) => {
  return (
    <div className="lg:px-24 bg-[url('https://images.unsplash.com/photo-1621849400072-f554417f7051?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80')] bg-[#000] min-h-[350px] bg-center bg-cover bg-no-repeat text-white bg-fixed md:px-12 px-6 lg:py-16 md:py-6 py-3 flex flex-col justify-end">
        <p className='lg:text-5xl md:text-3xl text-2xl mb-3'>{title}</p>
    </div>
  )
}

export default AboutHero