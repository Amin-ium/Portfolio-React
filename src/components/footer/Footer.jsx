import React from 'react'
import { FaFacebookF, FaTwitter, FaLinkedinIn} from 'react-icons/fa'
import { Link } from 'react-scroll/modules'
import { logo } from '../../assets/index'
import { navLinkData } from '../../constants'


const Footer = () => {
  return (
      <div className='w-full py-20 h-auto border-b-[1px] border-b-black grid grid-cols-4 gap-8'>
          <div className='w-full h-full flex flex-col gap-8'>
              <img className='w-32' src={logo} alt='logo' />
              <div className='flex gap-4'>
                    <span className='bannerIcon'><FaFacebookF /></span>
                    <span className='bannerIcon'><FaTwitter /></span>
                    <span className='bannerIcon'><FaLinkedinIn /></span>
                </div>
          </div>
          <div className='w-full h-full'>
              <h3 className='text-xl uppercase text-designColor tracking-wide'>Qiuck Links</h3>
              <ul className='flex flex-col gap-4 font-titleFont font-medium overflow-hidden py-6'>
                  <li>
                      <span className='w-full text-lg hover:text-designColor duration-300 cursor-pointer relative group'>Home
                          <span className='absolute h-[1px] w-full inline-flex bg-designColor -bottom-1 left-0 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300'></span>
                      </span>
                  </li>
                  <li>
                      <span className='w-full text-lg hover:text-designColor duration-300 cursor-pointer relative group'>Features
                          <span className='absolute h-[1px] w-full inline-flex bg-designColor -bottom-1 left-0 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300'></span>
                      </span>
                  </li>
                  <li>
                      <span className='w-full text-lg hover:text-designColor duration-300 cursor-pointer relative group'>Projects

                          <span className='absolute h-[1px] w-full inline-flex bg-designColor -bottom-1 left-0 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300'></span>
                      </span>
                  </li>
                  <li>
                      <span className='w-full text-lg hover:text-designColor duration-300 cursor-pointer relative group'>Resume
                          <span className='absolute h-[1px] w-full inline-flex bg-designColor -bottom-1 left-0 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300'></span>
                      </span>
                  </li>
              </ul>
          </div>
          <div className='w-full h-full'>
          <h3 className='text-xl uppercase text-designColor tracking-wide'>Qiuck Links</h3>
          <ul className='flex flex-col gap-4 font-titleFont font-medium overflow-hidden py-6'>
              <li>
                  <span className='w-full text-lg hover:text-designColor duration-300 cursor-pointer relative group'>Home
                      <span className='absolute h-[1px] w-full inline-flex bg-designColor -bottom-1 left-0 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300'></span>
                  </span>
              </li>
              <li>
                  <span className='w-full text-lg hover:text-designColor duration-300 cursor-pointer relative group'>Features
                      <span className='absolute h-[1px] w-full inline-flex bg-designColor -bottom-1 left-0 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300'></span>
                  </span>
              </li>
              <li>
                  <span className='w-full text-lg hover:text-designColor duration-300 cursor-pointer relative group'>Projects

                      <span className='absolute h-[1px] w-full inline-flex bg-designColor -bottom-1 left-0 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300'></span>
                  </span>
              </li>
              <li>
                  <span className='w-full text-lg hover:text-designColor duration-300 cursor-pointer relative group'>Resume
                      <span className='absolute h-[1px] w-full inline-flex bg-designColor -bottom-1 left-0 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300'></span>
                  </span>
              </li>
              <li>
                  <span className='w-full text-lg hover:text-designColor duration-300 cursor-pointer relative group'>Contact
                      <span className='absolute h-[1px] w-full inline-flex bg-designColor -bottom-1 left-0 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300'></span>
                  </span>
              </li>
          </ul>
      </div>
      <div className='w-full h-full'>
      <h3 className='text-xl uppercase text-designColor tracking-wide'>Qiuck Links</h3>
      <ul className='flex flex-col gap-4 font-titleFont font-medium overflow-hidden py-6'>
          
                  {
                      navLinkData.map(({ _id, title, link }) => (
                        _id !== 1005 && (
                      <li key={_id}>
                        <Link activeClass="active" to={link} spy={true} smooth={true} offset={-70} duration={500}>
                        <span className='w-full text-lg hover:text-designColor duration-300 cursor-pointer relative group'>{title}
                        <span className='absolute h-[1px] w-full inline-flex bg-designColor -bottom-1 left-0 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300'></span>
                    </span>
                        </Link>  
                              </li>
                          )
                    ))
                  }
      </ul>
  </div>
      </div>
  )
}

export default Footer