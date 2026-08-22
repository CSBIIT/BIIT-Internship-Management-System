import { ArrowRight, Briefcase, GraduationCap, Building2, BookOpen } from 'lucide-react';
import Button from '../../../components/common/Button';
import heroImage from '../../../assets/images/LandingImage.jpeg';

const highlights = [
  { icon: Briefcase, title: 'Internships', description: 'Discover internships and job opportunities that match the goal.' },
  { icon: GraduationCap, title: 'Students', description: 'Develop your skills, gain practical experience and advance your careers.' },
  { icon: Building2, title: 'Employers', description: 'Connect with professionals and organizations that help you grow.' },
  { icon: BookOpen, title: 'Resources', description: 'Access useful guides, tools, resources to support your career journey.' },
];

const LandingPage = () => {
  return (
    <div className="bg-white min-h-screen">
      {/* Hero section */}
      <section className="relative overflow-hidden bg-white">
        <div className="w-full h-[320px] sm:h-[400px] lg:h-[480px] relative">
          <img
            src={heroImage}
            alt="BIIT Career Services team"
            className="absolute inset-0 w-full h-full object-cover object-right"
          />

          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 via-50% to-transparent" />

          <div className="absolute inset-0 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-center">
            <div className="max-w-sm sm:max-w-md lg:max-w-lg">
              <div className="w-10 h-0.5 bg-[#1a4d3e] mb-2" />
              <p className="text-[#1a4d3e] text-xs font-bold uppercase tracking-wide mb-3">
                BIIT Career Services
              </p>

              <h1 className="font-bold leading-tight text-3xl sm:text-4xl lg:text-5xl mb-3">
                <span className="text-black">Your Career.</span>
                <br />
                <span className="text-[#1a4d3e]">Our Commitment.</span>
              </h1>

              <p className="text-gray-600 text-sm sm:text-base mb-6 max-w-sm">
                Bridging talent with opportunities.
                <br />
                Empowering students to build future and helping organizations to find the right talent.
              </p>

              <Button 
                icon={ArrowRight} 
                className="bg-[#1a4d3e] hover:bg-[#143a2f] text-white px-6 py-2.5 rounded-lg"
              >
                Get Started
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Service highlights card - overlapping hero bottom */}
      <div className="relative z-20 -mt-16 sm:-mt-20 lg:-mt-24 px-4 sm:px-6 lg:px-8 pb-12 sm:pb-16">
        <div className="bg-[#1a4d3e] rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-10 max-w-6xl mx-auto shadow-xl">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-6">
            {highlights.map(({ icon: Icon, title, description }) => (
              <div 
                key={title} 
                className="flex items-start gap-4 sm:flex-col sm:items-start"
              >
                <div className="bg-white/10 rounded-full p-3 w-fit shrink-0">
                  <Icon className="text-white" size={20} />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-white font-semibold text-sm sm:text-base lg:text-lg mb-1">
                    {title}
                  </h3>
                  <p className="text-white/70 text-xs sm:text-sm leading-relaxed">
                    {description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;