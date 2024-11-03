import React from 'react'
import TypewriterComponent from '../components/typewriter/typewriter'

const About = () => {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
       <h1 className="text-purple-500 text-2xl font-semibold">
        <TypewriterComponent strings={["This Is My About Page..."]}/>
        </h1> 
    </div>
  )
}
export default About;