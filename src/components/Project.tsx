import { ArrowUpRight} from 'lucide-react'
import { FaGithub } from 'react-icons/fa6'
import Button from './widgets/Button'


interface ProjectsProp{
    img: string,
    title: string,
    description: string,
    tools: string[],
    link: string,
    github: string
}

// [#E4D9F2]
function Project() {

  const projects: ProjectsProp [] = [
    {
        img: '/projects/AquaGuard.png', 
        title: 'AquaGuard Web Monitor', 
        description: 'A Capstone project that monitors water level for a town near the river.', 
        tools: ['PHP','JS', 'MaraDB', 'IoT'],
        link: '',
        github: 'https://github.com/jmaenriquez/capstone-proj'
    },

    { 
        img: '/projects/AquaGuard.png', 
        title: 'Accounting System', 
        description: 'A system that tracks company finances, assets, losses, revenues, and expenses.', 
        tools: ['C#','MudBlazor', 'PostGRE', 'GitHub'],
        link: '',
        github: 'https://github.com/jmaenriquez/accounting-system'
    }
  ]

  return (
    <div className='flex flex-col gap-8' id='projects'>
    
        <div className='flex flex-col items-center gap-4 relative'>
            <div
          className='absolute top-1/2 right-1/4 w-96 h-96 bg-[#7e51d6]/8 rounded-full blur-3xl -translate-y-1/2'
        />
            <span
                className='text-md md:text-lg xl:text-xl text-[#FFD166] animate-fade-in'
            >
                FEATURED WORK
            </span>

            <h1 
              className='text-[#FFD166] text-2xl md:text-3xl lg:text-4xl font-semibold animate-fade-in animation-delay-100'
            >
                What I've started, 
                <span className='text-white italic font-display font-normal'> up until now.</span>
            </h1>

            <p className='text-[#afa5bd] text-sm md:text-md lg:text-lg animate-fade-in animation-delay-200'>
                Some of my works that innovate solutions to real-world problems.
            </p>

        </div>

        {/* Card Container */}
        <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
            {
                projects.map((proj, index) => (
                
                //Cards
                <div
                  key={index}
                  className='group rounded-xl glass overflow-hidden flex flex-col gap-2 animate-fade-in md:row-span-1'
                  style={{animationDelay: `${(index + 3) * 100}ms`}}
                >
                    <div className='relative overflow-hidden aspect-video '>
                        <img 
                          src={proj.img} 
                          alt={proj.title}
                          className='w-full h-full object-cover transition-transform duration-500 group-hover:scale-110' 
                        />

                        <div
                          className='absolute inset-0 bg-linear-to-t from-[#34204A] via-[#34204A]/50 to-transparent opacity-70'
                        />

                        <div className='flex gap-4 absolute inset-0 items-center justify-center opacity-0 group-hover:opacity-100 transition-transform duration-500'>
                            <a
                              href={proj.link} target='_blank'
                              className='p-2 bg-[#afa5bd]/40 hover:bg-[#4d1191] rounded-full text-white' 
                            >
                                <ArrowUpRight
                                    className='w-6 h-6'
                                />
                            </a>
                            <a 
                              href={proj.github} target='_blank'
                              className='p-2 bg-[#afa5bd]/40 hover:bg-[#4d1191] rounded-full text-white'
                            >
                                <FaGithub
                                    className='w-6 h-6'
                                />
                            </a>
                        </div>
                    </div>
                    
                    <div className='px-4 py-2 flex flex-col gap-4'>
                        <div className='flex flex-col gap-2'>
                            <h1
                              className='text-lg lg:text-2xl font-medium text-white flex justify-between group-hover:text-[#b893e9] group-hover:translate-x-1 group-hover:translate-y-1 transition-all'
                            >
                                {proj.title} <a href={proj.link}><ArrowUpRight  className='w-6 h-6 hover:cursor-pointer'/></a>
                            
                            </h1>
                            <p
                              className='text-[#afa5bd] text-sm lg:text-lg' 
                            >{proj.description}</p>
                        </div>
                    </div>
                    <div className='flex flex-wrap gap-2 px-4 py-4'>
                        {
                            [...proj.tools].map((tool, index)=> (

                                <p 
                                  key={index}
                                  className='px-4 py-1 bg-[#afa5bd] hover:bg-[#643e96] hover:cursor-default hover:text-white rounded-full text-[#241534] text-xs sm:text-sm transition-all duration-200'
                                >
                                    {tool}
                                </p>
                            ))
                        }
                    </div>
                </div>
                ))
            }
        </div>

        <div className='flex justify-center'>

            <div className='w-120'>
                <Button 
                    name = 'View all Projects'
                    type='button'
                    onClick={() => window.open('https://github.com/jmaenriquez?tab=repositories', '_blank')}
                />
            </div>
        </div>
    </div>
  )
}

export default Project