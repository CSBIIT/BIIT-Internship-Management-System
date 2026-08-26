import { Link } from 'react-router-dom';

const footerLinks = [
  { label: 'Support Center', to: '/support' },
  { label: 'Privacy Policy', to: '/privacy' },
  { label: 'Terms of Service', to: '/terms' },
  { label: 'Contact Career Services', to: '/contact' },
];

const PublicFooter = () => {
  return (
    <footer className="bg-brand px-4 sm:px-6 lg:px-10 py-4">
      <div className="flex flex-col sm:flex-row items-center justify-between gap-2 sm:gap-4 max-w-7xl mx-auto text-xs text-white/80 text-center sm:text-left">
        <p className="whitespace-nowrap shrink-0">© 2026 BIIT University Management System. All rights reserved.</p>
        <div className="flex flex-wrap sm:flex-nowrap justify-center items-center gap-x-3 sm:gap-x-4 lg:gap-x-6 gap-y-1">
          {footerLinks.map((link) => (
            <Link key={link.to} to={link.to} className="hover:text-white whitespace-nowrap">
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default PublicFooter;