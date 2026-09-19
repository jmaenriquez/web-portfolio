interface Experiences{
    title: string,
    duration: string,
    company: string,
    description: string,
    roles: string[]
}

function Experience() {

  const experience: Experiences [] = [
    { 
        title: 'Jr. Full Stack Developer', 
        duration: '2025 - 2026',
        company: 'Metaverse Holdings Corp. (Sagesoft Cloud Inc.)',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.',
        roles: ['Full Stack', 'Junior']
    },
    { 
        title: 'Web Dev Intern', 
        duration: 'Jan - Apr 2025',
        company: 'Metaverse Holdings Corp.',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.',
        roles: ['Lead', 'Project Mngr', 'Ver Ctrl Mngr', 'DB Mngr', 'Full Stack']
    },
]

  return (
    <div 
      id='experience'
      className='relative py-32'
    >
        <div
          className='absolute top-1/2 left-1/4 w-60 h-60 md:w-96 md:h-96 bg-[#7e51d6]/15 rounded-full blur-3xl -translate-y-1/2'
        />

        <div className='flex flex-col gap-8'>
            <div className='flex flex-col gap-4'>
                <p className='text-md md:text-lg xl:text-xl text-[#FFD166]'>JOURNEY</p>
                <h1 className='text-[#FFD166] text-2xl md:text-3xl lg:text-4xl font-semibold'>Experience gained<span className='text-white italic font-display font-normal'> through discipline and perseverance</span></h1>

                <p className='text-[#afa5bd] text-sm animate-fade-in animation-delay-200'> A timeline of my professional growth, from a curious aspiring student to a junior full stack developer contributing to enterprise level projects. </p>
            </div>

            <div className='relative'>
                
                {/* Timeline */}
                <div className='timeline-glow absolute rounded-full left-0 lg:left-1/2 top-0 bottom-0 w-0.5 bg-linear-to-b from-[#FFD166]/70 via-[#FFD166]/30 to-transparent md:-translate-x-1/2 shadow[0_0_25px_rgba(32,178,166,0.8)]' />
            
                <div className='space-y-12 w-full'>
                    {
                        experience.map((exp, index) => (

                            <div 
                              key={index}
                              className='relative grid lg:grid-cols-2 gap-8 animate-fade-in'
                              style={{animationDelay: `${(index + 1) * 150}ms`}}
                            >
                                {/* Timeline Dots */}
                                <div className='absolute left-0 lg:left-1/2 w-3 h-3 rounded-full bg-[#FFD166] -translate-x-1/2 ring-4 ring-[#281c3a] z-10'></div>

                                {/* Card */}
                                <div 
                                  className={`pl-8 lg:pl-0 ${
                                    index % 2 === 0 
                                    ? 'lg:pr-16 lg:text-right' 
                                    : 'lg:col-start-2 lg:pl-16'
                                  }`}
                                >
                                    <div className={`p-6 glass rounded-3xl border hover:border-[#E4D9F2]/50 duration-300 transition-all`}>

                                        {/* Top */}
                                        <div className={`flex justify-between items-center space-y-2 ${
                                            index % 2 === 0
                                            ? 'lg:flex-row-reverse' 
                                            : ''
                                        }`}
                                        >
                                            <h1 className='text-md md:text-2xl text-white font-medium'>{exp.title}</h1>
                                            <p className='text-xs md:text-sm lg:text-md text-[#afa5bd] font-medium'>{exp.duration}</p>
                                        </div>

                                        {/* Mid */}
                                        <div className='text-xs md:text-sm flex flex-col gap-4 space-y-2'>
                                            <p className='text-[#E4D9F2]'>{exp.company}</p>
                                            <p className='text-[#afa5bd]'>{exp.description} </p>
                                        </div>

                                        {/* Roles */}
                                        <div className={`flex flex-wrap mt-6 gap-2 ${
                                            index % 2 === 0 
                                            ? 'lg:justify-end' 
                                            : ''
                                        }`}>
                                            {
                                                exp.roles.map((role, index) => (
                                                    <div
                                                    key={index}
                                                    className='text-xs md:text-sm text-[#241534] bg-[#afa5bd] hover:bg-[#643e96] hover:cursor-default hover:text-white px-4 py-1 rounded-full flex items-center transition-all duration-200'
                                                    >
                                                        {role}
                                                    </div>
                                                ))
                                            }
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    </div>
  )
}

export default Experience