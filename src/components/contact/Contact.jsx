import React from 'react'
import { FaFacebookF, FaTwitter, FaLinkedinIn} from 'react-icons/fa'
import Title from '../layouts/Title'
import {contactImg} from '../../assets/index'
import ContactForm from './ContactForm'

const Contact = () => {
  return (
    <section id='contact' className='w-full  py-20  border-b-[1px] border-b-black'>
          <div className='flex justify-center items-center text-center'>
            <Title
                title="CONTACT"
                des="Contact with Me" />
          </div>
          <div className='w-full'>
            <div className='w-full h-auto flex justify-between'>
                          
                <div className='w-[60%] h-full py-10  bg-gradient-to-r from-[#1e2024] to-[#21272b] shadow-shadowOne p-8 gap-8  rounded-lg flex flex-col '>
                      <ContactForm />          
                </div>
                <div className='w-[35%] h-full bg-gradient-to-r from-[#1e2024] to-[#21272b] shadow-shadowOne  rounded-lg p-8 flex flex-col gap-8 justify-center'>
                      <img className='w-full h-64 object-cover rounded-lg mb-2' src={contactImg} alt="contactImg" />
                      <div className='flex flex-col gap-4'>
                          <h3 className='text-3xl font-bold text-white'>John Doe</h3>
                          <p className='text-lg font-normal text-gray-400'>Mern Stack Developer</p>
                          <p className='text-base tracking-wide text-gray-400'>The Last React Carousel You'll Ever Need,
                              This library is the port of jQuery slick library</p>
                          <p className='text-base text-gray-400 flex items-center gap-2'>Phone: <span className='text-lightText'>+212646109969</span></p>
                          <p className='text-base text-gray-400 flex items-center gap-2'>Email: <span className='text-lightText'>amine.daief@gmail.com</span></p>
                      </div> 
                      <div className='flex flex-col gap-4'>
                          <h2 className='text-base uppercase font-titleFont mb-4'>Find Me In</h2>
                          <div className='flex gap-4'>
                              <span className='bannerIcon'><FaFacebookF /></span>
                              <span className='bannerIcon'><FaTwitter /></span>
                              <span className='bannerIcon'><FaLinkedinIn /></span>
                          </div>
                      </div>
                </div>
            </div>
          </div>
    </section>      
  )
}

export default Contact