import React from 'react';
import { ArrowRight, Briefcase, GraduationCap, Building2, BookOpen } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Button from '../../../components/common/Button';
import heroImage from '../../../assets/images/LI.jpeg';
import heroImageMobile from '../../../assets/images/LandingImage.jpeg';

const highlights = [
  {
    icon: Briefcase,
    title: 'Internships',
    description: 'Discover internships and job opportunities that match the goal.',
  },
  {
    icon: GraduationCap,
    title: 'Students',
    description: 'Develop your skills, gain practical experience and advance your careers.',
  },
  {
    icon: Building2,
    title: 'Employers',
    description: 'Connect with professionals and organizations that help you grow.',
  },
  {
    icon: BookOpen,
    title: 'Resources',
    description: 'Access useful guides, tools, resources to support your career journey.',
  },
];

const HeroText = ({ align = 'left', size = 'default', onGetStarted }) => (
  <div className={align === 'center' ? 'text-center' : 'text-left'}>
    <div
      className={`w-8 h-px bg-brand/70 mb-3 animate-fade-in-up ${align === 'center' ? 'mx-auto' : ''}`}
      style={{ animationDelay: '0ms' }}
    />
    <p
      className="text-brand text-xs font-bold uppercase tracking-[0.15em] mb-3 animate-fade-in-up"
      style={{ animationDelay: '80ms' }}
    >
      BIIT Career Services
    </p>

    <h1
      className={`font-bold leading-[1.05] mb-4 animate-fade-in-up ${
        size === 'large' ? 'text-4xl xl:text-5xl' : 'text-2xl sm:text-3xl'
      }`}
      style={{ animationDelay: '160ms' }}
    >
      <span className="text-black">Your Career.</span>
      <br />
      <span
        className="bg-gradient-to-r from-brand via-emerald-400 to-brand bg-[length:200%_auto] bg-clip-text text-transparent animate-shimmer"
      >
        Our Commitment.
      </span>
    </h1>

    <p
      className={`text-gray-500 leading-relaxed animate-fade-in-up ${size === 'large' ? 'text-base mb-8 max-w-sm' : 'text-sm mb-5'}`}
      style={{ animationDelay: '260ms' }}
    >
      Bridging talent with opportunities.
      <br />
      Empowering students to build future and helping organizations to find the right talent.
    </p>

    <div className="animate-fade-in-up" style={{ animationDelay: '360ms' }}>
      <Button
        icon={ArrowRight}
        onClick={onGetStarted}
        className={`transition-transform duration-200 hover:scale-105 ${size === 'large' ? 'px-8 py-3.5 text-base' : ''}`}
      >
        Get Started
      </Button>
    </div>
  </div>
);

const LandingPage = () => {
  const navigate = useNavigate();
  const goToRoleSelection = () => navigate('/get-started');

  return (
    <div className="bg-white">
      {/* ===== MOBILE + TABLET hero (below lg) - FIXED VERSION ===== */}
      <section className="lg:hidden">
        <div 
          className="relative h-56 sm:h-72 rounded-b-3xl overflow-hidden bg-[#f7f6f2] animate-fade-in"
          style={{
            backgroundImage: `url(${heroImageMobile})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center 20%',
            backgroundRepeat: 'no-repeat'
          }}
        >
          <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-b from-transparent to-[#f7f6f2]" />
        </div>

        <div className="px-4 sm:px-6 pt-6 pb-4 bg-[#f7f6f2]">
          <HeroText align="left" onGetStarted={goToRoleSelection} />
        </div>
      </section>

      {/* ===== DESKTOP hero (lg and up) - EXACT SAME AS PREVIOUS ===== */}
      <section className="hidden lg:block relative overflow-hidden bg-[#f7f6f2]">
        <div className="w-full h-[560px] relative">
          {/* Decorative soft accent circles for visual depth */}
          <div className="absolute top-10 left-10 w-24 h-24 rounded-full bg-brand/5 blur-2xl" />
          <div className="absolute bottom-16 left-32 w-16 h-16 rounded-full bg-brand/10 blur-xl" />

          <img
            src={heroImage}
            alt="BIIT Career Services team"
            className="absolute inset-0 w-full h-full object-contain object-right animate-fade-in"
            style={{
              maskImage: 'linear-gradient(to right, transparent 0%, black 6%)',
              WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 6%)',
              animationDelay: '150ms',
            }}
          />

          {/* Tinted fade matching the photo's warm tone, not stark white */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#f7f6f2] from-[25%] via-[#f7f6f2]/80 via-[38%] to-transparent to-[55%]" />

          {/* Text content, pinned in a fixed-width column so it never shifts */}
          <div className="absolute inset-0 max-w-7xl mx-auto px-10 flex flex-col justify-center">
            <div className="max-w-lg relative z-10">
              <HeroText align="left" size="large" onGetStarted={goToRoleSelection} />
            </div>
          </div>
        </div>
      </section>

      {/* Service highlights — 4 separate cards, overlapping hero bottom */}
      <div className="relative z-20 mt-6 lg:-mt-20 px-4 sm:px-6 lg:px-10 pb-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 max-w-6xl mx-auto">
          {highlights.map(({ icon: Icon, title, description }, index) => (
            <div
              key={title}
              className="group bg-brand rounded-2xl p-5 sm:p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1.5 cursor-default animate-fade-in-up flex flex-col items-center text-center sm:items-start sm:text-left"
              style={{ animationDelay: `${400 + index * 100}ms` }}
            >
              <div
                className="bg-white rounded-full p-3 sm:p-3.5 w-fit mb-4 shadow-md transition-transform duration-300 group-hover:scale-110 animate-float"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <Icon className="text-brand" size={20} />
              </div>
              <h3 className="text-white font-bold text-base sm:text-lg mb-1.5">{title}</h3>
              <p className="text-white/80 text-xs sm:text-sm leading-relaxed">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LandingPage;