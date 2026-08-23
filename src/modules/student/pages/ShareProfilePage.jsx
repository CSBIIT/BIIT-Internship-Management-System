import { useState } from 'react';
import { Copy, Check, Share2, Link2, Mail, MessageCircle } from 'lucide-react';
import ProfileHeader from '../components/profile/ProfileHeader';
import Button from '../../../components/common/Button';

const profile = {
  name: 'Ali Khan',
  degree: 'BS Software Engineering',
  semester: '5th Semester',
  university: 'Barani Institute of Information Technology',
  location: 'Rawalpindi, Pakistan',
  photoUrl: null,
};

const profileLink = 'https://biit.edu.pk/profile/ali-khan';

const ShareProfilePage = () => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(profileLink);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy link', err);
    }
  };

  const shareLinks = [
    {
      icon: Share2,
      label: 'LinkedIn',
      iconBg: 'bg-blue-50',
      iconColor: 'text-blue-600',
      href: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(profileLink)}`,
    },
    {
      icon: Mail,
      label: 'Email',
      iconBg: 'bg-gray-100',
      iconColor: 'text-gray-600',
      href: `mailto:?subject=Check out my profile&body=${encodeURIComponent(profileLink)}`,
    },
    {
      icon: MessageCircle,
      label: 'WhatsApp',
      iconBg: 'bg-green-50',
      iconColor: 'text-green-600',
      href: `https://wa.me/?text=${encodeURIComponent(profileLink)}`,
    },
  ];

  return (
    <div className="max-w-2xl mx-auto px-4 sm:px-0">
      <ProfileHeader profile={profile} showActions={false} />

      {/* Your Profile Link */}
      <div className="bg-white rounded-2xl border border-gray-100 p-4 sm:p-5 mt-4">
        <div className="flex items-center gap-2 mb-3">
          <Link2 size={16} className="text-brand shrink-0" />
          <h2 className="font-semibold text-sm">Your Profile Link</h2>
        </div>

        <div className="flex flex-col sm:flex-row gap-2">
          <input
            readOnly
            value={profileLink}
            className="flex-1 min-w-0 text-sm bg-gray-50 border border-gray-200 rounded-lg px-3 py-2 text-gray-600 truncate"
          />
          <Button
            icon={copied ? Check : Copy}
            onClick={handleCopy}
            className="text-sm px-4 py-2 shrink-0 justify-center w-full sm:w-auto"
          >
            {copied ? 'Copied' : 'Copy Link'}
          </Button>
        </div>
      </div>

      {/* Share via */}
      <div className="bg-white rounded-2xl border border-gray-100 p-4 sm:p-5 mt-4">
        <div className="flex items-center gap-2 mb-3">
          <Share2 size={16} className="text-brand shrink-0" />
          <h2 className="font-semibold text-sm">Share via</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
          {shareLinks.map(({ icon: Icon, label, iconBg, iconColor, href }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 border border-gray-200 rounded-lg py-2.5 text-sm font-medium text-gray-700 hover:border-brand hover:bg-brand-light/40 transition-colors"
            >
              <span className={`w-6 h-6 rounded-full flex items-center justify-center shrink-0 ${iconBg}`}>
                <Icon size={13} className={iconColor} />
              </span>
              {label}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ShareProfilePage;