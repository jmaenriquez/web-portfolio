import { Menu} from 'lucide-react';
import React from 'react';
import Button from './widgets/Button';

interface Navlink {
  href: string,
  label: string
}

function TopNav() {
  const [isMobileMenu, setIsMobileMenu] = React.useState(false);
  const links: Navlink [] = [
    {href: '#about', label: 'About'},
    {href: '#projects', label: 'Projects'},
    {href: '#experience', label: 'Experience'},
    {href: '#testimonials', label: 'Testimonials'}
  ]
  
  return (
    <div className='fixed top-0 left-0 w-full z-50 bg-black/10 backdrop-blur-sm rounded-sm border border-black/20'>

      <nav className='flex justify-between items-center w-full px-4 py-2'>
        {/* Logo */}
        <div 
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className='text-2xl text-white p-2 w-12 hover:cursor-pointer'
        >
          JE.
        </div>

        {/* Links */}
        <div className='hidden md:flex shadow-sm/10 gap-8 glass rounded-full px-4 py-2'>
            {
              links.map(link => (
                <a
                key={link.label} 
                href={link.href}
                className='p-0 text-[#c9c9c9] hover:text-white'
                >
                  {link.label}
                </a>
              ))
            }
        </div>
        
        {/* Button */}
        <div className='hidden md:flex'>
          <a 
            href="https://mail.google.com/mail/?view=cm&fs=1&to=johnmatthewenriquez1031@gmail.com&su=Let%27s%20Work%20Together%2e&body=Hi%20JM%2C%0A%0A"
            target='_blank'
            rel='noopener noreferrer'
          >
              <Button
              name='Contact Me'
              type='button'
              />
          </a>
        </div>
        
        {/* Burger Icon */}
        <div className='md:hidden'>
          <Menu
            strokeWidth={2}
            size={25}
            className='text-white hover:cursor-pointer md:hidden'
            onClick={() => { !isMobileMenu?  setIsMobileMenu(true) : setIsMobileMenu(false)}}
          />
        </div>
      </nav>
      
      {/* Mobile device */}
      <div>
        {
          isMobileMenu &&
          <div className='md:hidden flex flex-col glass-strong gap-8 px-4 py-2 animate-fade-in'>
            {
              links.map(link => (
                <a
                key={link.label} 
                href={link.href}
                className='p-0 text-[#c9c9c9]  hover:text-white'
                >
                  {link.label}
                </a>
              ))
            }

            <div className='md:hidden w-full'>
              <Button
              name='My Button'
              type='button'
              onClick={() => console.log('Button Clicked')}
              />
            </div>
        </div>
        
        }
        
      </div>

    </div>
  )
}

export default TopNav 