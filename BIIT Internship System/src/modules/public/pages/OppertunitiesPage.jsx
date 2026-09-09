import { useEffect, useRef } from 'react';
import { Check, ArrowUpRight } from 'lucide-react';

import teamPhoto from '../../../assets/images/OppertunitiesP1.jpeg';
import meetingPhoto from '../../../assets/images/OppertunitiesP2.jpeg';
import groupPhoto from '../../../assets/images/OppertunitiesP3.jpeg';

const stats = [
  {
    value: '750+',
    label: 'Internships',
  },
  {
    value: '120+',
    label: 'Partner Companies',
  },
  {
    value: '95%',
    label: 'Placement Rate',
  },
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
  const sectionRefs = useRef({});

  useEffect(() => {
    const elements = Object.values(sectionRefs.current);

    if (!elements.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.15,
        rootMargin: '0px 0px -60px 0px',
      }
    );

    elements.forEach((element) => {
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  const setSectionRef = (name) => (element) => {
    sectionRefs.current[name] = element;
  };

  return (
    <main className="bg-white overflow-hidden">

      {/* =====================================================
          HERO SECTION
      ====================================================== */}
      <section className="opportunities-hero relative overflow-hidden">

        {/* Animated background shapes */}
        <div className="hero-orb hero-orb-one" />
        <div className="hero-orb hero-orb-two" />
        <div className="hero-orb hero-orb-three" />

        <div className="hero-grid-pattern" />

        <div className="relative z-10 max-w-5xl mx-auto px-5 sm:px-6 lg:px-8">
          <div className="text-center">

            {/* Small animated label */}
            <div className="hero-label-wrap">
              <span className="hero-label">
                OPPORTUNITIES AT BIIT
              </span>
            </div>

            {/* Main heading */}
            <h1 className="hero-title">
              <span className="hero-title-line hero-title-white">
                Explore Opportunities.
              </span>

              <span className="hero-title-line hero-title-green">
                Build Your Future.
              </span>
            </h1>

            {/* Description */}
            <p className="hero-description">
              BIIT Career Services connects talented students with meaningful
              internship and career opportunities, industry collaborations,
              and resources that empower you to achieve your professional goals.
            </p>

            {/* Small animated indicators */}
            <div className="hero-indicators">
              <span className="hero-indicator" />
              <span className="hero-indicator hero-indicator-delay-one" />
              <span className="hero-indicator hero-indicator-delay-two" />
            </div>

          </div>
        </div>
      </section>


      {/* =====================================================
          SECTION 1
      ====================================================== */}
      <section
        ref={setSectionRef('intro')}
        className="reveal-section max-w-7xl mx-auto px-5 sm:px-6 lg:px-10 py-12 lg:py-16"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">

          {/* Text */}
          <div className="reveal-content reveal-left">

            <p className="section-kicker">
              New Opportunities
            </p>

            <h2 className="section-heading">
              Explore Opportunities.
              <br />
              <span>Build Your Future.</span>
            </h2>

            <p className="section-description">
              BIIT Career Services connects talented students with meaningful
              internship opportunities that help transform academic knowledge
              into practical professional experience. Students gain exposure
              to real workplaces, industry expectations, and valuable career
              pathways.
            </p>

            {/* Stats */}
            <div className="flex flex-wrap gap-7 sm:gap-10 mt-7">
              {stats.map((stat, index) => (
                <div
                  key={stat.label}
                  className="stat-item"
                  style={{
                    animationDelay: `${index * 120}ms`,
                  }}
                >
                  <p className="stat-value">
                    {stat.value}
                  </p>

                  <p className="stat-label">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>

          </div>

          {/* Image */}
          <div className="reveal-content reveal-right image-wrapper">
            <div className="image-decoration" />

            <img
              src={teamPhoto}
              alt="BIIT Career Services team"
              className="opportunity-image"
            />

            <div className="image-caption">
              <span>Career Opportunities</span>
              <ArrowUpRight size={17} />
            </div>
          </div>

        </div>
      </section>


      {/* =====================================================
          SECTION 2
      ====================================================== */}
      <section
        ref={setSectionRef('experience')}
        className="reveal-section bg-gray-50/70"
      >
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-10 py-12 lg:py-16">

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">

            {/* Image */}
            <div className="reveal-content reveal-left image-wrapper order-2 lg:order-1">
              <div className="image-decoration image-decoration-right" />

              <img
                src={meetingPhoto}
                alt="Career mentorship meeting"
                className="opportunity-image"
              />

              <div className="image-caption">
                <span>Industry Mentorship</span>
                <ArrowUpRight size={17} />
              </div>
            </div>

            {/* Text */}
            <div className="reveal-content reveal-right order-1 lg:order-2">

              <p className="section-kicker">
                Why Internships Matter
              </p>

              <h2 className="section-heading">
                Real Experience.
                <br />
                <span>Real Impact.</span>
              </h2>

              <p className="section-description">
                Internships bridge the gap between academic environments and
                professional settings, giving students the opportunity to
                apply their knowledge to real-world challenges while building
                confidence and professional connections.
              </p>

              <ul className="space-y-3.5 mt-6">
                {experiencePoints.map((point, index) => (
                  <li
                    key={point}
                    className="feature-item"
                    style={{
                      transitionDelay: `${index * 80}ms`,
                    }}
                  >
                    <span className="feature-icon">
                      <Check size={15} />
                    </span>

                    <span>{point}</span>
                  </li>
                ))}
              </ul>

            </div>

          </div>

        </div>
      </section>


      {/* =====================================================
          SECTION 3
      ====================================================== */}
      <section
        ref={setSectionRef('collaboration')}
        className="reveal-section max-w-7xl mx-auto px-5 sm:px-6 lg:px-10 py-12 lg:py-16"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">

          {/* Text */}
          <div className="reveal-content reveal-left">

            <p className="section-kicker">
              Program Highlights
            </p>

            <h2 className="section-heading">
              Collaborative Excellence
            </h2>

            <p className="section-description">
              At BIIT, students are encouraged to work together on real-world
              problems while learning from peers, mentors, and industry
              professionals. These experiences create a strong environment
              for learning, innovation, and professional growth.
            </p>

            <ul className="space-y-3.5 mt-6">
              {collaborationPoints.map((point, index) => (
                <li
                  key={point}
                  className="feature-item"
                  style={{
                    transitionDelay: `${index * 80}ms`,
                  }}
                >
                  <span className="feature-icon">
                    <Check size={15} />
                  </span>

                  <span>{point}</span>
                </li>
              ))}
            </ul>

          </div>

          {/* Image */}
          <div className="reveal-content reveal-right image-wrapper">

            <div className="image-decoration" />

            <img
              src={groupPhoto}
              alt="Students collaborating"
              className="opportunity-image"
            />

            <div className="image-caption">
              <span>Collaborative Learning</span>
              <ArrowUpRight size={17} />
            </div>

          </div>

        </div>
      </section>

    </main>
  );
};

export default OpportunitiesPage;