import { useNavigate } from 'react-router-dom' 

function NotFound() {
    const nav = useNavigate();
  return (
    <div className='relative w-full min-h-screen overflow-x-hidden bg-[#281c3a] flex flex-col gap-8'>

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
              animation: `slow-drift ${15 + Math.random() * 30}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 3}s`
            }}
          />
        ))}
      </div>

      <div className='z-10 flex flex-col gap-4 items-center p-12'>
        <div className='w-26 h-26 lg:w-38 lg:h-38'>
          <img src="/error404_icon.png" alt="error 404" />
        </div>

        <div className='text-center flex flex-col gap-4'>
          <h1 className='text-xl md:text-2xl lg:text-3xl text-[#FFD166] font-semibold'>No Page Found</h1>
          <p className='text-sm md:text-md lg:text-lg font-medium text-[#afa5bd]'>The page you are looking for does not exist, isn't available. or was far gone from the outer space.</p>
        </div>

        <button
          onClick={() => nav(-1)}
          className='w-65 md:w-90 lg:w-120 rounded-full bg-[#afa5bd] shadow-xl/25 font-semibold p-2.5 mt-6 hover:bg-[#FFD166] cursor-pointer active:scale-95 duration-150 ease-in-out'
        >
          Go back
        </button>
      </div>
    </div>
  )
}

export default NotFound