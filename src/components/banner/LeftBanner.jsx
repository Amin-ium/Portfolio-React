import React from 'react'
import { useTypewriter, Cursor } from 'react-simple-typewriter'
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaReact } from 'react-icons/fa'
import {SiTailwindcss, SiFigma, SiNextdotjs} from 'react-icons/si'

const LeftBanner = () =>
{
    const [text] = useTypewriter({
        words: ["Professinal Coder", "Full Stack Developer", "UI Designer"],
        loop: true,
        typeSpeed: 20,
        deleteSpeed: 10,
        delaySpeed: 2000,
    });
  return (
    <div className='w-1/2 flex flex-col gap-20'>
                <div className='flex flex-col gap-5'>
                  <h4 className='text-lg font-normal'>WELCOME TO MY WORLD</h4>
                  <h1 className='text-6xl font-bold text-white'>Hi, I'm  <span className='text-designColor capitalize'>Amine Daief</span></h1>
                  <h2 className='text-4xl font-bold text-white'>a <span>{text}</span>
                      <Cursor
                          cursorBlinking='false'
                          cursorStyle="|"
                          cursorColor='#ff014f'
                      />
                  </h2>
                  <p className='text-base font-bodyFont leading-6 tracking-wide'>Note that the development build is not optimized Note that the development build is not optimized Note that the development build is not optimized</p>
                </div>
                <div className='flex justify-between'>
                    <div>
                        <h2 className='text-base uppercase fint-titleFont mb-4'>Find me in</h2>
                        <div className='flex gap-4'>
                            <span className='bannerIcon transform hover:-translate-y-1 transition-all'>
                                <FaFacebookF />
                            </span>
                            <span className='bannerIcon transform hover:-translate-y-1 transition-all'>
                                <FaTwitter />
                            </span>
                            <span className='bannerIcon transform hover:-translate-y-1 transition-all'>
                                <FaLinkedinIn />
                            </span>
                        </div>
                    </div>
                    <div>
                    <h2 className='text-base uppercase font-titleFont mb-4'>BEST SKILL ON</h2>
                    <div className='flex gap-4'>
                        <span className='bannerIcon transform hover:-translate-y-1 transition-all'>
                            <FaReact />
                        </span>
                        <span className='bannerIcon transform hover:-translate-y-1 transition-all'>
                            <SiNextdotjs />
                        </span>
                        <span className='bannerIcon transform hover:-translate-y-1 transition-all'>
                            <SiTailwindcss />
                        </span>
                        <span className='bannerIcon transform hover:-translate-y-1 transition-all'>
                            <SiFigma />
                        </span>
                    </div>       
                    </div>
                </div>
            </div>
  )
}

export default LeftBanner