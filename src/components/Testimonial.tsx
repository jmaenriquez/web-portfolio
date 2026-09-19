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
        author: 'John Doe', 
        role: 'CEO, Fintech Inc.', 
        comments: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti quaerat vero quae, est voluptatem architecto qui animi vel magni necessitatibus totam repellat eos, autem minima modi! A debitis non atque?'
    },

    { 
        author: 'Vicky Conroy', 
        role: 'Sr. Full Stack Dev,  Likha-IT Inc.', 
        comments: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti quaerat vero quae, est voluptatem architecto qui animi vel magni necessitatibus totam repellat eos, autem minima modi! A debitis non atque?'
    },

    { 
        author: 'Manny Pacqaio', 
        role: 'Heavy Weight Boxing Champ.', 
        comments: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti quaerat vero quae, est voluptatem architecto qui animi vel magni necessitatibus totam repellat eos, autem minima modi! A debitis non atque?'
    },

    { 
        author: "Walter O'Brien", 
        role: 'Team Lead, Scorpions', 
        comments: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti quaerat vero quae, est voluptatem architecto qui animi vel magni necessitatibus totam repellat eos, autem minima modi! A debitis non atque?'
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