import React from "react";

interface ButtonProps{
    name: React.ReactNode,
    type: 'button' | 'submit',
    onClick?: () => void;
}

function Button({ name, type, onClick }: ButtonProps) {
  return (
    <div>
        <button 
            type={type}
            onClick={onClick}
            className='w-full px-8 py-2 shadow-sm/10 rounded-sm cursor-pointer active:scale-95 duration-150 ease-in-out backdrop-blur-md border border-white/40 text-white hover:bg-white/10 hover:border-white/60 transition-all'        >
            {name}
        </button>
    </div>
  )
}


export default Button;