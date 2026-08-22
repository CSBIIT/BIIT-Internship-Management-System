import { Link } from 'react-router-dom';

const footerLinks = [
  { label: 'Support Center', to: '/support' },
  { label: 'Privacy Policy', to: '/privacy' },
  { label: 'Terms of Service', to: '/terms' },
  { label: 'Contact Career Services', to: '/contact' },
];

const PublicFooter = () => {
  return (
    <footer className="bg-brand px-4 sm:px-6 lg:px-10 py-4 sm:py-5">
      <div className="flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4 max-w-7xl mx-auto text-xs sm:text-sm text-white/80">
        <p className="text-center sm:text-left">
          © 2026 BIIT University Management System. All rights reserved.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 md:gap-6">
          {footerLinks.map((link, index) => (
            <span key={link.to} className="flex items-center">
              <Link 
                to={link.to} 
                className="hover:text-white transition-colors whitespace-nowrap"
              >
                {link.label}
              </Link>
              {index < footerLinks.length - 1 && (
                <span className="hidden sm:inline ml-3 sm:ml-4 md:ml-6 text-white/30">|</span>
              )}
            </span>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default PublicFooter;