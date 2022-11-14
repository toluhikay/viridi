import React from 'react'
import emailjs from '@emailjs/browser'
import { useRef } from 'react'
import swal from 'sweetalert'

const Consultation = () => {
    const form = useRef()
    const SERVICE_ID = process.env.REACT_APP_SERVICE_ID
    const TEMPLATE_ID = process.env.REACT_APP_TEMPLATE_ID
    const PUBLIC_KEY = process.env.REACT_APP_PUBLIC_KEY


    const sendEmail =(e)=>{
        e.preventDefault()
        emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY)
            .then((result) => {
                if (result.status === 200){
                    swal({
                        title: "Thank You!",
                        text: "Message Sent Successfully!",
                        icon: "success",
                        button: true,
                      }).then(()=>{
                        window.location.reload()
                      });
                }
            }, (error) => {
               if (error){
                swal({
                    title: "Oops!",
                    text: "Message Not Sent!",
                    icon: "error",
                    button: "Try Again",
                  });
               }
            });
    }   

  return (
    <div className="lg:px-24 bg-[url('/src/assets/painting/paint6Hero.jpg')] bg-center bg-cover bg-no-repeat text-white bg-fixed md:px-12 px-6 lg:py-16 md:py-6 py-3 flex flex-col justify-center items-center">
        <p className='lg:text-2xl font-bold text-xl mb-3'>Free Consultation</p>
        <form ref={form} className='lg:w-[55%] md:w-4/5 w-full' onSubmit={sendEmail}>  
            <select name="service_name" id="" className='text-black w-full outline-none p-2 rounded-lg mb-3' >
                <option value="Fumigation & Pest Control">Fumigation & Pest Control</option>
                <option value="Painting Services">Painting Services</option>
                <option value="Janitorial Services">Janitorial Services</option>
            </select> 
            <div>
                <input type="text" placeholder='Your Name' name='from_name' className='text-black w-full outline-none p-2 rounded-lg mb-3' />
                <input type="email" placeholder='Email Address' name='email' className='text-black w-full outline-none p-2 rounded-lg mb-3'/>
            </div>
            <div>
                <input type="date" placeholder='Date' className='text-black w-full outline-none p-2 rounded-lg mb-3'/>
            </div>
            <textarea name="message" id="" cols="30" rows="10" placeholder='Message' className='text-black w-full outline-none p-2 rounded-lg mb-3'></textarea>
            <button type='submit' className='bg-green-900 p-2 hover:border-1 hover:bg-none hover:border-green-900 text-center rounded-lg w-full'
            >Send Message</button>  
        </form>
    </div>
  )
}

export default Consultation