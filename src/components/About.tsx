import { CodeXml, ClockArrowUp, Users, Radical } from "lucide-react";
import type { IconType } from 'react-icons';

interface IconTypes{
  icon: IconType,
  title: string,
  text: string
}

function About() {

  const cardIcons: IconTypes [] = [
    { icon: CodeXml, title: 'Title', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
    { icon: ClockArrowUp, title: 'Title', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
    { icon: Users, title: 'Title', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
    { icon: Radical, title: 'Title', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
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
              <p className='text-[#FFD166] text-2xl md:text-3xl lg:text-4xl font-semibold'>This is a motivational quote,<span className='text-white italic font-display font-normal'> to help design the page </span></p>

              <div className='space-y-4 text-[#afa5bd] mt-12 text-sm md:text-md lg:text-lg '>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.
                </p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.
                </p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.
                </p>
              </div>

              <div className='glass rounded-2xl p-4 glow-border mt-10'>
                <p className='font-medium text-md italic text-[#E4D9F2] text-center text-sm md:text-md lg:text-lg'>
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt."
                </p>
              </div>
            </div>
          </div>


          {/* Right Pannel */}
          <div className='grid lg:grid-cols-2 gap-6'>
            {
              cardIcons.map((ci, index) => (
              <div
                key={index} 
                className='glass-strong p-8 rounded-3xl animate-fade-in'
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