import { FaFacebookF, FaLinkedinIn, FaGithub } from 'react-icons/fa6'
import { ChevronDown } from 'lucide-react';
import type { IconType } from 'react-icons';
import Button from '../components/widgets/Button';

interface Socials{
    icon: IconType,
    href: string
}

function Hero() {

  const social: Socials [] = [
    {icon: FaFacebookF, href: 'https://www.facebook.com/kurosaaan10'},
    {icon: FaLinkedinIn, href: 'http://www.linkedin.com/in/john-matthew-enriquez-b59634331'},
    {icon: FaGithub, href: 'https://github.com/jmaenriquez'},
  ]

  const skillsImg = [
    '/skills/React.webp',
    '/skills/tailwind.png',
    '/skills/Bootstrap.png',
    '/skills/mudblazor.png',
    '/skills/TS.png',
    '/skills/NodeJS.webp',
    '/skills/PHP.png',
    '/skills/Csharp.png',
    '/skills/outsystems.png',
    '/skills/Postgresql.webp',
    '/skills/mariadb.png',
    '/skills/Figma.webp',
    '/skills/Github.png',
    '/skills/ClaudeAI.webp',
  ]

  return (
    <div id='hero' className=''>
        <div className='w-full h-auto flex'>
            <div className='w-full py-2 flex flex-col-reverse items-center gap-4 md:flex-row md:justify-between md:gap-12 lg:gap-30'>
                
                {/* Left Panel */}
                <div className='animate-fade-in'>
                    <div className='flex flex-col gap-4 xl:gap-8'>

                        <p className='font-semibold text-white text-xl lg:text-2xl xl:text-4xl '>Hi! I'm JM Enriquez</p>
                        
                        <h1 className='font-semibold text-white text-3xl md:text-4xl xl:text-6xl '>FULL STACK <span className='text-[#FFD166] glow-text'>DEVELOPER</span></h1>

                        <p className='max-w-280 font-light text-sm text-[#E4D9F2] md:text-md xl:text-lg'>
                            Full Stack Developer working mainly in React, TypeScript, Node.js, and PostgreSQL. Enjoys turning ideas into working solutions. Learns by building things that solve real problems.
                        </p>
                        
                        <div className='flex gap-4 hover:cursor-pointer'>
                            {
                                social.map((s, index) => (

                                    <div
                                    key={index} 
                                    className='text-white w-10 h-10 rounded-full flex justify-center items-center border border-[#E4D9F2] hover:text-white hover:border-[#E4D9F2]'
                                    >
                                        <a href={s.href} target='_blank'>
                                            < s.icon />
                                        </a>
                                    </div>
                                ))
                            }
                        </div>
                        <div className='grid grid-cols-1 md:grid-cols-2 gap-4 mt-4'>
                            <Button
                                name = 'View Resume'
                                type = 'button'
                                onClick={() => console.log('Resume is clicked.')}
                            />
                            <Button
                                name = 'View Resume'
                                type = 'button'
                                onClick={() => console.log('Resume is clicked.')}
                            />
                        </div>
                    </div>
                </div>
                {/* Right Panel */}
                <div className='h-auto animate-fade-in animation-delay-100'>
                    <div className='z-50 p-8 w-80 md:w-100 xl:w-120 2xl:w-150'>
                        <img
                        src="/JM_Cropped.png" alt=""
                        />
                    </div>
                </div>
            </div>
        </div>
        
        {/* Skills Preview*/}
        <div className='w-full flex justify-center'>
            <div className='mt-12 mx animate-fade-in animation-delay-200 overflow-hidden max-w-300'>

                <p className='text-md mb-6 text-[#9a91ac] text-center'>Technologies I work with</p>

                <div className='flex animate-marquee'>
                    {[...skillsImg, ...skillsImg].map((skill, index) => (
                        <div 
                        key={index}
                        className='shrink-0 px-8 py-4 w-30 h-20 flex justify-center items-center '
                        >
                            <img
                                src={skill} 
                                className='rounded-lg w-16 h-16 object-contain'>
                            </img>
                        </div>
                    )) }
                </div>
            </div>
        </div>

        <div className='mt-8 animate-fade-in animation-delay-300'>
            <a 
              href="#about"
              className='flex flex-col items-center text-[#9488a2] gap-2'
            >
                <p className='text-sm'>Scroll Down</p>
                <div className='animate-bounce'>
                    <ChevronDown/>
                </div>
            </a>
        </div>
    </div>
  )
}

export default Hero