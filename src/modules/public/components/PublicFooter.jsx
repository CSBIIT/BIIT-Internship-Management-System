import { Link } from 'react-router-dom';

const footerLinks = [
  { label: 'Support Center', to: '/support' },
  { label: 'Privacy Policy', to: '/privacy' },
  { label: 'Terms of Service', to: '/terms' },
  { label: 'Contact Career Services', to: '/contact' },
];

const PublicFooter = () => {
  return (
    <footer className="bg-brand px-10 py-4">
      <div className="flex items-center justify-between max-w-7xl mx-auto text-xs text-white/80">
        <p>© 2026 BIIT University Management System. All rights reserved.</p>
        <div className="flex gap-6">
          {footerLinks.map((link) => (
            <Link key={link.to} to={link.to} className="hover:text-white">
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default PublicFooter;