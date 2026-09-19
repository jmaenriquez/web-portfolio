import { FaFacebookF, FaLinkedinIn, FaGithub } from 'react-icons/fa6'

const socialLinks = [
  { icon: FaGithub, href: "https://github.com/jmaenriquez", label: "GitHub" },
  { icon: FaLinkedinIn, href: "http://www.linkedin.com/in/john-matthew-enriquez-b59634331", label: "LinkedIn" },
  { icon: FaFacebookF, href: "https://www.facebook.com/kurosaaan10", label: "Facebook" },
];

const footerLinks = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
];

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 border-t border-[#E4D9F2]/30">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Logo & Copyright */}
          <div className="text-center md:text-left">
            <a href="#" className="text-xl font-bold tracking-tight">
              <div 
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className='text-2xl text-white p-2 w-12 hover:cursor-pointer'
              >
                JE.
              </div>
            </a>
            <p className="text-sm text-[#afa5bd] mt-2">
              © {currentYear} JM Enriquez. All rights reserved.
            </p>
          </div>

          {/* Links */}
          <nav className="flex flex-wrap justify-center gap-6">
            {footerLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-[#c9c9c9] hover:text-white transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target='_blank'
                aria-label={social.label}
                className="p-2 rounded-full bg-[#afa5bd] text-[#241534] hover:bg-[#643e96] hover:text-white transition-all"
              >
                <social.icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};