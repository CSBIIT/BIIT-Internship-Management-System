import { useState } from 'react';
import {
  Copy,
  Check,
  Share2,
  Link2,
  Mail,
  MessageCircle,
  Sparkles,
  ArrowRight,
} from 'lucide-react';

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

/*
  ============================================================
  CONSISTENT CARD STYLE
  ------------------------------------------------------------
  Same hover interaction used throughout the Dashboard:
  - Lift on hover
  - Shadow on hover
  - Smooth 300ms transition
  - Green animated top line
  ============================================================
*/

const cardClass = `
  group
  relative
  overflow-hidden
  rounded-2xl
  border
  border-gray-100
  bg-white
  shadow-sm
  transition-all
  duration-300
  ease-out
  hover:-translate-y-1
  hover:shadow-lg
`;

const greenTopLine = `
  pointer-events-none
  absolute
  left-0
  top-0
  z-20
  h-0.5
  w-0
  bg-brand
  transition-all
  duration-300
  group-hover:w-full
`;

const ShareProfilePage = () => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(profileLink);
      setCopied(true);

      setTimeout(() => {
        setCopied(false);
      }, 2000);
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
      href: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
        profileLink
      )}`,
    },
    {
      icon: Mail,
      label: 'Email',
      iconBg: 'bg-gray-100',
      iconColor: 'text-gray-600',
      href: `mailto:?subject=Check out my profile&body=${encodeURIComponent(
        profileLink
      )}`,
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
    <div className="max-w-2xl mx-auto px-4 sm:px-0 overflow-hidden">

      {/* =====================================================
          PROFILE HEADER
      ====================================================== */}

      <div
        className="animate-fade-in-up"
        style={{
          animationDelay: '0ms',
        }}
      >
        <ProfileHeader
          profile={profile}
          showActions={false}
        />
      </div>


      {/* =====================================================
          PROFILE LINK
      ====================================================== */}

      <div
        className={`
          ${cardClass}
          mt-4
          p-4
          animate-fade-in-up
          sm:p-5
        `}
        style={{
          animationDelay: '150ms',
        }}
      >

        {/* Same green hover line as Dashboard */}
        <div className={greenTopLine} />

        <div className="relative z-10">

          {/* Section Heading */}
          <div className="mb-3 flex items-center justify-between">

            <div className="flex items-center gap-2">

              <span
                className="
                  flex
                  h-8
                  w-8
                  items-center
                  justify-center
                  rounded-lg
                  bg-brand-light
                  text-brand
                  transition-all
                  duration-300
                  group-hover:scale-105
                "
              >
                <Link2 size={15} />
              </span>

              <div>

                <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-brand">
                  Profile Sharing
                </p>

                <h2 className="text-sm font-semibold text-gray-900">
                  Your Profile Link
                </h2>

              </div>

            </div>

            <Sparkles
              size={15}
              className="
                text-gray-200
                transition-all
                duration-300
                group-hover:rotate-12
                group-hover:text-brand
              "
            />

          </div>


          {/* Link + Copy */}
          <div className="flex flex-col gap-2 sm:flex-row">

            <div className="relative min-w-0 flex-1">

              <input
                readOnly
                value={profileLink}
                className="
                  w-full
                  min-w-0
                  rounded-lg
                  border
                  border-gray-200
                  bg-gray-50
                  px-3
                  py-2
                  text-sm
                  text-gray-600
                  outline-none
                  transition-all
                  duration-300
                  focus:border-brand
                  focus:bg-white
                "
              />

            </div>

            <Button
              icon={copied ? Check : Copy}
              onClick={handleCopy}
              className="
                w-full
                shrink-0
                justify-center
                px-4
                py-2
                text-sm
                transition-all
                duration-300
                hover:-translate-y-0.5
                hover:shadow-md
                sm:w-auto
              "
            >
              {copied ? 'Copied' : 'Copy Link'}
            </Button>

          </div>

        </div>

      </div>


      {/* =====================================================
          SHARE VIA
      ====================================================== */}

      <div
        className={`
          ${cardClass}
          mt-4
          p-4
          animate-fade-in-up
          sm:p-5
        `}
        style={{
          animationDelay: '300ms',
        }}
      >

        {/* Same green hover line */}
        <div className={greenTopLine} />

        <div className="relative z-10">

          {/* Section Heading */}
          <div className="mb-4 flex items-center justify-between">

            <div className="flex items-center gap-2">

              <span
                className="
                  flex
                  h-8
                  w-8
                  items-center
                  justify-center
                  rounded-lg
                  bg-brand-light
                  text-brand
                  transition-all
                  duration-300
                  group-hover:scale-105
                "
              >
                <Share2 size={15} />
              </span>

              <div>

                <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-brand">
                  Spread The Word
                </p>

                <h2 className="text-sm font-semibold text-gray-900">
                  Share via
                </h2>

              </div>

            </div>

            <Sparkles
              size={15}
              className="
                text-gray-200
                transition-all
                duration-300
                group-hover:rotate-12
                group-hover:text-brand
              "
            />

          </div>


          {/* Share Options */}
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">

            {shareLinks.map(
              ({ icon: Icon, label, iconBg, iconColor, href }, index) => (

                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    group/share
                    relative
                    flex
                    items-center
                    justify-between
                    overflow-hidden
                    rounded-xl
                    border
                    border-gray-100
                    bg-white
                    px-3
                    py-3
                    text-sm
                    font-medium
                    text-gray-700
                    shadow-sm
                    animate-fade-in-up
                    transition-all
                    duration-300
                    ease-out
                    hover:-translate-y-1
                    hover:border-brand
                    hover:bg-brand-light/20
                    hover:shadow-md
                  "
                  style={{
                    animationDelay: `${450 + index * 100}ms`,
                  }}
                >

                  {/* Small animated top line */}
                  <div
                    className="
                      pointer-events-none
                      absolute
                      left-0
                      top-0
                      h-0.5
                      w-0
                      bg-brand
                      transition-all
                      duration-300
                      group-hover/share:w-full
                    "
                  />


                  <div className="flex items-center gap-3">

                    {/* Icon */}
                    <span
                      className={`
                        flex
                        h-9
                        w-9
                        shrink-0
                        items-center
                        justify-center
                        rounded-lg
                        ${iconBg}
                        transition-all
                        duration-300
                        group-hover/share:scale-105
                      `}
                    >
                      <Icon
                        size={15}
                        className={iconColor}
                      />
                    </span>


                    {/* Label */}
                    <span>
                      {label}
                    </span>

                  </div>


                  {/* Arrow */}
                  <ArrowRight
                    size={14}
                    className="
                      text-gray-300
                      transition-all
                      duration-300
                      group-hover/share:translate-x-1
                      group-hover/share:text-brand
                    "
                  />

                </a>

              )
            )}

          </div>

        </div>

      </div>


      {/* =====================================================
          HELPFUL INFO
      ====================================================== */}

      <div
        className={`
          ${cardClass}
          mt-4
          p-4
          animate-fade-in-up
          sm:p-5
        `}
        style={{
          animationDelay: '800ms',
        }}
      >

        <div className={greenTopLine} />

        <div className="relative z-10 flex items-start gap-3">

          <span
            className="
              flex
              h-8
              w-8
              shrink-0
              items-center
              justify-center
              rounded-lg
              bg-brand-light
              text-brand
            "
          >
            <Sparkles size={14} />
          </span>

          <div>

            <p className="mb-1 text-sm font-semibold text-gray-800">
              Make your profile stand out
            </p>

            <p className="text-xs leading-5 text-gray-500">
              Share your profile with recruiters, companies, and your
              professional network to increase your chances of discovering
              new opportunities.
            </p>

          </div>

        </div>

      </div>

    </div>
  );
};

export default ShareProfilePage;