import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import Logo from '../../../components/common/Logo';

const navLinks = [
  { label: 'Home', to: '/home' },
  { label: 'Opportunities', to: '/opportunities' },
  { label: 'About', to: '/about' },
  { label: 'Contact Us', to: '/contact' },
];

const PublicNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <header className="bg-brand px-4 sm:px-6 lg:px-10 py-3 sm:py-4 sticky top-0 z-50">
      <div className="flex items-center justify-between max-w-7xl mx-auto">
        {/* Logo */}
        <NavLink to="/" onClick={closeMenu}>
          <Logo variant="white" />
        </NavLink>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-4 lg:gap-6">
          {navLinks.map((link, index) => (
            <div key={link.to} className="flex items-center gap-4 lg:gap-6">
              <NavLink
                to={link.to}
                className={({ isActive }) =>
                  `text-sm lg:text-base font-medium transition-colors whitespace-nowrap ${
                    isActive ? 'text-white' : 'text-white/70 hover:text-white'
                  }`
                }
              >
                {link.label}
              </NavLink>
              {index < navLinks.length - 1 && (
                <span className="text-white/20 hidden lg:inline">|</span>
              )}
            </div>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-white p-1 hover:text-white/80 transition-colors"
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <nav className="md:hidden mt-4 pt-4 border-t border-white/10">
          <div className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                onClick={closeMenu}
                className={({ isActive }) =>
                  `text-sm font-medium transition-colors py-2 px-3 rounded-lg ${
                    isActive 
                      ? 'text-white bg-white/10' 
                      : 'text-white/70 hover:text-white hover:bg-white/5'
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
};

export default PublicNavbar;