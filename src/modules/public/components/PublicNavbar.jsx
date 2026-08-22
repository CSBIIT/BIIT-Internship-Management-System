import { NavLink } from 'react-router-dom';
import Logo from '../../../components/common/Logo';

const navLinks = [
  { label: 'Opportunities', to: '/opportunities' },
  { label: 'About', to: '/about' },
  { label: 'Contact Us', to: '/contact' },
];

const PublicNavbar = () => {
  return (
    <header className="bg-brand px-10 py-4">
      <div className="flex items-center justify-between max-w-7xl mx-auto">
        <NavLink to="/">
          <Logo variant="white" />
        </NavLink>

        <nav className="flex items-center gap-6">
          {navLinks.map((link, index) => (
            <div key={link.to} className="flex items-center gap-6">
              <NavLink
                to={link.to}
                className={({ isActive }) =>
                  `text-sm font-medium transition-colors ${
                    isActive ? 'text-white' : 'text-white/70 hover:text-white'
                  }`
                }
              >
                {link.label}
              </NavLink>
              {index < navLinks.length - 1 && (
                <span className="text-white/30">|</span>
              )}
            </div>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default PublicNavbar;