import React from 'react'
import Title from '../layouts/Title'
import Card from './Card'
import { AiFillAppstore } from "react-icons/ai"
import { FaMobile, FaGlobe } from "react-icons/fa"
import {SiProgress, SiAntdesign} from "react-icons/si"

const Features = () => {
  return (
    <section id='features' className='w-full  py-20  border-b-[1px] border-b-black'>
      <div className="className='flex justify-center items-center text-center">
      <Title title="Features" des="What I do" />
      </div>
      <div className='grid grid-cols-3 gap-20'>
        <Card title="Card 1" des="hgf ygug jyguguik kyjguy hgy jhiugiu jyguyg jguyg jb jyguyguy hj fyv jyug ygug yugu hiuyh iuhih iuhiub jby " />
        <Card title="Card 2" des="hgf ygug jyguguik kyjguy hgy jhiugiu jyguyg jguyg jb jyguyguy hj fyv jyug ygug yugu hiuyh iuhih iuhiub jby " icon={<SiProgress />} />
        <Card title="Card 3" des="hgf ygug jyguguik kyjguy hgy jhiugiu jyguyg jguyg jb jyguyguy hj fyv jyug ygug yugu hiuyh iuhih iuhiub jby " icon={<FaMobile />} />
        <Card title="Card 4" des="hgf ygug jyguguik kyjguy hgy jhiugiu jyguyg jguyg jb jyguyguy hj fyv jyug ygug yugu hiuyh iuhih iuhiub jby " icon={<FaGlobe />} />
        <Card title="Card 5" des="hgf ygug jyguguik kyjguy hgy jhiugiu jyguyg jguyg jb jyguyguy hj fyv jyug ygug yugu hiuyh iuhih iuhiub jby " icon={<SiAntdesign />} />
        <Card title="Card 6" des="hgf ygug jyguguik kyjguy hgy jhiugiu jyguyg jguyg jb jyguyguy hj fyv jyug ygug yugu hiuyh iuhih iuhiub jby " icon={<AiFillAppstore />} />
      </div>
    </section>
  )
}

export default Features