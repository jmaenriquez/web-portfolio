import Hero from './components/Hero';
import Nav from './components/TopNav';
import About from './components/About';
import Project from './components/Project';
import Experience from './components/Experience';

/* BG Color Options 
    Active: #281c3a
    Options: [#2B1B3D,#34204A,#241534]

    // [#E4D9F2]
    #f0f2f5 - FOREGROUND
    #0f1418 - BACKGROUND
    #4920b2 -
*/

function Dashboard() {
  return (
    <div className='relative w-full min-h-screen overflow-x-hidden bg-[#281c3a] py-16 px-20 lg:px-25 xl:px-30 2xl:px-50 flex flex-col gap-8'>

      {/* Floating Pixels */}
      <div className='absolute inset-0 overflow-hidden pointer-events-none z-0'>
        {[...Array(50)].map((_, index) => (
          <div
            key={index}
            className='absolute w-1.5 h-1.5 opacity-60'
            style={{
              backgroundColor: '#FFD166',
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `slow-drift ${15 + Math.random() * 20}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 5}s`
            }}
          />
        ))}
      </div>

      <div className='relative z-10'>
        <Nav/>
        <Hero/>
        <About/>
        <Project/>
        <Experience/>
      </div>

    </div>
  )
}

export default Dashboard