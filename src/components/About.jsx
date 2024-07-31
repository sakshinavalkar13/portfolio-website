import React from 'react'

const About = () => {
  return (
    <div name="about"  className='text-white w-full h-screen bg-gradient-to-b from-black via-black to-gray-800'>
      <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full '>
         <div className='mt-20'>
          <p className='text-4xl font-bold inline border-b-4 border-gray-500 cursor-pointer'>About</p>
         </div>

         <p className='text-xl mt-20 '>
         Hello! I'm Sakshi Navalkar, a passionate and dedicated software developer with a knack for creating innovative and user-friendly web applications. I hold a strong background in full-stack development, with a particular focus on React and Node.js.
         I am constantly learning and exploring new technologies to enhance my skill set and keep up with industry trends. My goal is to develop solutions that not only meet user needs but also provide an exceptional user experience.

         </p>
        <br />
        <p className='text-xl'>
        Feel free to reach out to me for any collaboration or project opportunities. Let's build something amazing.
        </p>
      </div>
      
    </div>
  )
}

export default About
