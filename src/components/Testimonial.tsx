import React from 'react'
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react'

interface Testimonies{
    author: string,
    role: string,
    comments: string
}

function Testimonial() {

  const testimony: Testimonies [] = [

    { 
        author: 'John Renz Del Mundo', 
        role: 'Former Team Lead, Metaverse Holdings Corp.', 
        comments: 'Great job to JM. He showed great initiative, was very active throughout, and accepted every task with openness. His willingness to learn is highly appreciated. Keep up the good work!'
    },

    { 
        author: 'Olsen Daim Valente', 
        role: 'AI Quality Mngr, Mercor (Former Jr. Dev, Metaverse Holdings Corp.)', 
        comments: "JM was honestly one of the most hardworking guys I ever worked with. He was 100% focused on his tasks and didn't waste any time. He always made his work the top priority before anything else and got things done no matter what. On top of that, he is a huge team player. He always had everyone's back, helped out whenever anyone needed it, and brought out the best in the team. He has so many great strengths, and all of that easily makes him such a good leader."
    },

    { 
        author: "Kurt Reyes", 
        role: 'CEO, Kurt Reyes 3D Printing Services', 
        comments: "JM did an excellent job in developing our chatbot. He was very fast, responsive, and approachable throughout the entire project. He was always willing to accommodate our requests, answer our questions, and make adjustments whenever needed. Communication with him was smooth and easy, which made the development process much more convenient for us. The final chatbot successfully met the objectives of our project, and we really appreciate his efforts, technical skills, and dedication in making it happen."
    }
  ]

  const [activeIndex, setActiveIndex] = React.useState(0)

  const handleNextCard = () => {
    setActiveIndex((prevIdx) => (prevIdx + 1) % testimony.length);
  }

  const handlePrevCard = () => {
    setActiveIndex((prevIdx) => (prevIdx - 1 + testimony.length) % testimony.length);
  }

  return (
    <div 
      id='testimonials'
      className='py-32 relative'
    >
        <div
          className='absolute top-1/2 right-1/2 w-60 h-60 md:w-96 md:h-96 bg-[#7e51d6]/15 rounded-full blur-3xl -translate-y-1/2'
        />

        <div 
          className='px-6 relative z-10 grid grid-cols-1 gap-12'
        > 
            <div className=' flex flex-col gap-4'>

                <h3
                    className='text-md md:text-lg xl:text-xl text-[#FFD166] animate-fade-in text-center w-full'
                >
                    WHAT PEOPLE SAY
                </h3>

                <h1 
                className='text-[#FFD166] text-2xl md:text-3xl text-center lg:text-4xl font-semibold animate-fade-in animation-delay-100'
                >
                    Not just my word,  
                    <span className='text-white italic font-display font-normal'> hear it from those who've seen it firsthand.</span>
                </h1>
            </div>

            {/* Testimonial Carousel */}
            <div>
                
                <div className='max-w-4xl mx-auto'>
                    <div className='relative'>
                        {/* Main Testimonial */}
                        <div className='glass p-8 rounded-3xl md:p-12 glow-border animate-fade-in animation-delay-200'>
                            <div className='absolute -top-4 left-8 w-12 h-12 rounded-full bg-[#afa5bd] flex items-center justify-center'>
                                <Quote className='w-6 h-6 text-[#241534]'/>
                            </div>

                            <blockquote className='text-xs sm:text-sm md:text-lg lg:text-xl leading-relaxed mb-8 pt-4 text-[#E4D9F2]'>
                                "{testimony[activeIndex].comments}"
                            </blockquote>

                            <div className='flex flex-col gap-2'>
                                <h3 className='text-lg md:text-xl text-white font-semibold'>{testimony[activeIndex].author}</h3>
                                <p className='text-[#afa5bd] text-sm md:text-md'>{testimony[activeIndex].role}</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Testimonial Nav */}
                <div className='flex justify-center items-center p-8 gap-12'>
                    <button 
                      className='glass-strong text-white p-2 rounded-full cursor-pointer active:scale-95 duration-150 ease-in-out'
                      onClick={handlePrevCard}
                    >
                        <ChevronLeft/>
                    </button>

                    <div className='flex gap-2'>
                        {
                            testimony.map((_, index) => (
                                <button
                                  key={index}
                                  className={`glass-strong p-1.5 rounded-full cursor-pointer active:scale-95 duration-150 ease-in-out ${ activeIndex == index ? 'px-4 bg-[#afa5bd]' : ''} `}
                                  onClick={() => setActiveIndex(index)}
                                
                                />
                            ))
                        }
                    </div>

                    <button
                      className='glass-strong text-white p-2 rounded-full cursor-pointer active:scale-95 duration-150 ease-in-out'
                      onClick={handleNextCard}
                    >
                        <ChevronRight/>
                    </button>
                </div>
            </div>
            
        </div>
    </div>
  )
}



export default Testimonial