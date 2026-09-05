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
      <div className="flex flex-wrap items-center justify-center gap-4 text-xs text-white/80">
  <span>© 2026 BIIT Internship Management System. All rights reserved.</span>
<Link to="/info#support" className="hover:text-white hover:underline">Support Center</Link>
<Link to="/info#privacy" className="hover:text-white hover:underline">Privacy Policy</Link>
<Link to="/info#terms" className="hover:text-white hover:underline">Terms of Service</Link>
<Link to="/info#contact" className="hover:text-white hover:underline">Contact Career Services</Link></div>
    </footer>
  );
};

export default PublicFooter;