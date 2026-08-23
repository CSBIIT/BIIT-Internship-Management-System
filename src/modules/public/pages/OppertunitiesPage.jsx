import { Check } from 'lucide-react';
import teamPhoto from '../../../assets/images/OppertunitiesP1.png';
import meetingPhoto from '../../../assets/images/OppertunitiesP2.png';
import groupPhoto from '../../../assets/images/OppertunitiesP3.png';

const stats = [
  { value: '750+', label: 'Internships' },
  { value: '120+', label: 'Partner Companies' },
  { value: '95%', label: 'Placement Rate' },
];

const experiencePoints = [
  'Apply classroom knowledge to real projects',
  'Develop technical and communication skills',
  'Build confidence and professional networks',
  'Improve career prospects',
];

const collaborationPoints = [
  'Hands-on workshops',
  'Peer review sessions',
  'Industry mentor access',
  'Collaborative project spaces',
];

const OpportunitiesPage = () => {
  return (
    <div className="bg-white">
      {/* Top intro + stats + photo */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-12 lg:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div>
            <p className="text-brand text-xs font-bold uppercase tracking-wide mb-2">
              New Opportunities
            </p>
            <h1 className="text-3xl sm:text-4xl font-bold leading-tight mb-4">
              Explore Opportunities.
              <br />
              <span className="text-brand">Build Your Future.</span>
            </h1>
            <p className="text-gray-500 text-sm sm:text-base mb-6">
              BIIT Career Services connects talented students with meaningful
              internship opportunities that help transform academic knowledge
              into practical professional experience.
            </p>

            <div className="flex flex-wrap gap-6 sm:gap-10">
              {stats.map((stat) => (
                <div key={stat.label}>
                  <p className="text-2xl sm:text-3xl font-bold text-brand">{stat.value}</p>
                  <p className="text-gray-500 text-xs sm:text-sm">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          <img
            src={teamPhoto}
            alt="BIIT Career Services team"
            className="rounded-2xl w-full h-64 sm:h-80 lg:h-96 object-cover"
          />
        </div>
      </section>

      {/* Why internships matter */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-8 lg:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <img
            src={meetingPhoto}
            alt="Career mentorship meeting"
            className="rounded-2xl w-full h-64 sm:h-72 object-cover order-2 lg:order-1"
          />

          <div className="order-1 lg:order-2">
            <p className="text-brand text-xs font-bold uppercase tracking-wide mb-2">
              Why Internships Matter
            </p>
            <h2 className="text-2xl sm:text-3xl font-bold mb-4">
              Real Experience.
              <br />
              <span className="text-brand">Real Impact.</span>
            </h2>
            <p className="text-gray-500 text-sm mb-5">
              Internships bridge the gap between academic environments and
              professional settings, giving students the opportunity to
              apply their knowledge to real-world challenges.
            </p>

            <ul className="space-y-3">
              {experiencePoints.map((point) => (
                <li key={point} className="flex items-start gap-2 text-sm text-gray-700">
                  <Check size={16} className="text-brand shrink-0 mt-0.5" />
                  {point}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Program highlights */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-8 lg:py-12 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div>
            <p className="text-brand text-xs font-bold uppercase tracking-wide mb-2">
              Program Highlights
            </p>
            <h2 className="text-2xl sm:text-3xl font-bold mb-4">Collaborative Excellence</h2>
            <p className="text-gray-500 text-sm mb-5">
              At BIIT, we foster an environment where students work together
              on real-world problems, guided by industry-standard practices
              and peer-to-peer mentorship.
            </p>

            <ul className="space-y-3">
              {collaborationPoints.map((point) => (
                <li key={point} className="flex items-start gap-2 text-sm text-gray-700">
                  <Check size={16} className="text-brand shrink-0 mt-0.5" />
                  {point}
                </li>
              ))}
            </ul>
          </div>

          <img
            src={groupPhoto}
            alt="Students collaborating"
            className="rounded-2xl w-full h-64 sm:h-72 object-cover"
          />
        </div>
      </section>
    </div>
  );
};

export default OpportunitiesPage;