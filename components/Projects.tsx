import React from 'react'
import SectionTitle from './SectionTitle'
import ProjectCard from './ProjectCard'

const Projects = () => {
  return (
    <section id='projects' className='max-w-contentContainer mx-auto px-4 py-24'>
        <SectionTitle title='projects' />
        <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mt-10 lgl:px-10'>
            <ProjectCard 
                title="Outline: Tasking Made Fun"
                desc="A social media app where you can share your to-do list for the day with your friends."
                listItem={["React Native", "Firestore", "PostgreSQL"]}
                link="https://github.com/ameerghazal/Outline-Application"
            />
            <ProjectCard 
                title="Walk.io - Activity Tracker"
                desc="An activity tracker made to track my runs and hiking trails."
                listItem={["React Native", "Express.js", "MongoDB"]}
                link="github.com/Rajie04"
            />
            <ProjectCard 
                title="Forkify"
                desc="Recipe application where users can search existing recipes and upload new ones."
                listItem={["JavaScript", "SASS", "HTML"]}
                link="https://forkify-ahmed-raja.netlify.app/"
            />
        </div>
    </section>
  )
}

export default Projects