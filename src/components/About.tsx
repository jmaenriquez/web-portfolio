import { CodeXml, ClockArrowUp, Users, Info } from "lucide-react";
import type { IconType } from 'react-icons';

interface IconTypes{
  icon: IconType,
  title: string,
  text: string
}

function About() {

  const cardIcons: IconTypes [] = [
    { icon: CodeXml, title: 'Code Craftsman', text: 'Structures code for readability, easier maintenance, and smooth collaboration.' },
    { icon: ClockArrowUp, title: 'Delivers On Time', text: 'Pushes through tough tasks with stubborn persistence and attention to detail.' },
    { icon: Users, title: 'Team Player', text: 'Supports the team with analytical thinking and a collaborative approach.' },
    { icon: Info, title: 'Detail-Oriented', text: 'Catches the small things that make the difference between working and working well.' },
  ]

  return (
    <div id="about" className="relative py-32">
        <div className='relative w-full py-2 grid grid-cols-1 md:grid-cols-2 items-center gap-8 md:gap-16 2xl:gap-30'>
          {/* Left Pannel */}
          <div className=' flex flex-col gap-4 animate-fade-in animation-delay-200'>
            <div
              className='absolute top-1/2 left-1/4 w-60 h-60 md:w-96 md:h-96 bg-[#7e51d6]/15 rounded-full blur-3xl -translate-y-1/2'
            />
            <span className='text-md md:text-lg xl:text-xl text-[#FFD166]'>ABOUT ME</span>

            <div>
              <p className='text-[#FFD166] text-2xl md:text-3xl lg:text-4xl font-semibold'>Coding is my craft,<span className='text-white italic font-display font-normal'> problem-solving is my drive. </span></p>

              <div className='space-y-4 text-[#afa5bd] mt-12 text-sm md:text-md lg:text-lg '>
                <p className="Greetings">
                  Hi! I'm JM, a Junior Full Stack Developer who loves learning new things and building software that makes people's everyday life a little easier.
                </p>
                <p>
                  I started coding in college with no background in it, just a curiosity and a craving for a new environment. The more problems I solved, the more I fell in love with it, eventually leading small teams through our capstone project and into an internship that turned out to be the real turning point — learning a new stack under real deadlines, and coming out the other side stronger for it.
                </p>
                <p>
                  That internship led to a full-time role, further training, and a spot on an enterprise project for the company's major client. Since then, I've grown into system architecture, database design, and full-stack API integration — and I'm still climbing, aiming to take on bigger challenges as I go.
                </p>
              </div>

              <div className='glass rounded-2xl p-4 glow-border mt-10'>
                <p className='font-medium text-md italic text-[#E4D9F2] text-center text-sm md:text-md lg:text-lg'>
                  "I didn't start with a plan — I started with curiosity, and that's still what drives me."
                </p>
              </div>
            </div>
          </div>


          {/* Right Pannel */}
          <div className='grid xl:grid-cols-2 gap-6'>
            {
              cardIcons.map((ci, index) => (
              <div
                key={index} 
                className='glass-strong p-8 rounded-3xl animate-fade-in border hover:cursor-default hover:border-[#E4D9F2]/50 duration-300 transition-all'
                style={{animationDelay:`${(index + 1) * 100}ms`}}
              >
                <span className='flex gap-4 items-center mb-4 text-sm md:text-md lg:text-lg'>
                  <div className='bg-[#afa5bd] p-2 rounded-lg md:rounded-xl text-[#241534]'>
                    <ci.icon 
                      className="w-5 h-5 md:w-6 md:h-6"
                    />
                  </div>
                  <p className='text-white text-lg'> {ci.title} </p>
                </span>

                <p className=' text-[#afa5bd] text-sm md:text-lg flex justify-center'>{ci.text}</p>
                      
              </div>
                ))
              }
              
            </div>
          

        </div>

        
    </div>
  )
}

export default About