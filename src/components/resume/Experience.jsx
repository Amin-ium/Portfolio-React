import React from 'react'
import { motion } from 'framer-motion'
import ResumeCard from './ResumeCard'

const Experience = () => {
  return (
    <motion.div initial={{opacity:0}} animate={{opacity:1, transition:{duration:.5}}} className='w-full flex gap-20'>
    <div>
        <div className='py-12 font-titleFont'>
            <p className='text-sm text-designColor tracking-[4px]'>Features</p>
            <h2 className='text-4xl font-bold'>Dsign Experience</h2>
        </div>
        <div className='mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10'>
            <ResumeCard
            title="Secondary School Education"
            subTitle="Kingstar Secondary School (1998 - 2000)"
            result="5.00/5"
            des="Secondary education or post-primary education covers 2 phases on the International Standard Classification of Education Scale" />
            <ResumeCard
            title="Science & Formation"
            subTitle="Kingstar Secondary School (1998 - 2000)"
            result="5.00/5"
            des="Secondary education or post-primary education covers 2 phases on the International Standard Classification of Education Scale" />
            <ResumeCard
            title="Secondary School Education"
            subTitle="Kingstar Secondary School (1998 - 2000)"
            result="5.00/5"
            des="Secondary education or post-primary education covers 2 phases on the International Standard Classification of Education Scale"
            />
        </div>
    </div>
    <div>
        <div className='py-12 font-titleFont'>
            <p className='text-sm text-designColor tracking-[4px]'>Features</p>
            <h2 className='text-4xl font-bold'>Development Experience</h2>
        </div>
        <div className='mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10'>
            <ResumeCard
            title="High School Education"
            subTitle="Kingstar High School (2002 - 2004)"
            result="5.00/5"
            des="Secondary education or post-primary education covers 2 phases on the International Standard Classification of Education Scale" />
            <ResumeCard
            title="Technology & Design"
            subTitle="Kingstar Secondary School (2004 - 2006)"
            result="5.00/5"
            des="Technology education or post-primary education covers 2 phases on the International Standard Classification of Education Scale" />
            <ResumeCard
            title="Marketing School Education"
            subTitle="Marketing Secondary School (2006 - 2008)"
            result="5.00/5"
            des="Marketing education or post-primary education covers 2 phases on the International Standard Classification of Education Scale"
            />
        </div>
    </div>
</motion.div>
  )
}

export default Experience