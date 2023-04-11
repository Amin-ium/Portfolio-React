import React from 'react'
import Title from '../layouts/Title'
import {projectOne, projectTwo, projectThree} from '../../assets/index'
import ProjectCard from './ProjectCard'

const Projects = () => {
  return (
      <section id='projects' className='w-full  py-20  border-b-[1px] border-b-black'>
          <div className='flex justify-center items-center text-center'>
            <Title
                title="VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK"
                des="My Projects" />
      </div>
      <div className='grid grid-cols-3 gap-14'>
        <ProjectCard title="Card 1" des="hgf ygug jyguguik kyjguy hgy jhiugiu jyguyg jguyg jb jyguyguy hj fyv jyug ygug yugu hiuyh iuhih iuhiub jby " src={projectOne} />
        <ProjectCard title="Card 1" des="hgf ygug jyguguik kyjguy hgy jhiugiu jyguyg jguyg jb jyguyguy hj fyv jyug ygug yugu hiuyh iuhih iuhiub jby " src={projectTwo} />
        <ProjectCard title="Card 1" des="hgf ygug jyguguik kyjguy hgy jhiugiu jyguyg jguyg jb jyguyguy hj fyv jyug ygug yugu hiuyh iuhih iuhiub jby " src={projectThree} />
        <ProjectCard title="Card 1" des="hgf ygug jyguguik kyjguy hgy jhiugiu jyguyg jguyg jb jyguyguy hj fyv jyug ygug yugu hiuyh iuhih iuhiub jby " src={projectOne} />
        <ProjectCard title="Card 1" des="hgf ygug jyguguik kyjguy hgy jhiugiu jyguyg jguyg jb jyguyguy hj fyv jyug ygug yugu hiuyh iuhih iuhiub jby " src={projectTwo} />
        <ProjectCard title="Card 1" des="hgf ygug jyguguik kyjguy hgy jhiugiu jyguyg jguyg jb jyguyguy hj fyv jyug ygug yugu hiuyh iuhih iuhiub jby " src={projectThree} />
      </div>
      </section>
  )
}

export default Projects