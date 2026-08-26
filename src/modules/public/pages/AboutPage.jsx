import { useEffect, useRef } from 'react';
import { ArrowUpRight, Sparkles } from 'lucide-react';

import aboutPhoto from '../../../assets/images/AboutP1.jpeg';
import aboutPhoto2 from '../../../assets/images/AboutP2.jpeg';
import aboutPhoto3 from '../../../assets/images/AboutP3.jpeg';
import aboutPhoto4 from '../../../assets/images/AboutP4.jpeg';

const steps = [
  {
    number: '01',
    title: 'Register',
    description:
      'Create your profile and verify your university credentials.',
  },
  {
    number: '02',
    title: 'Explore',
    description:
      'Browse verified opportunities tailored to your major.',
  },
  {
    number: '03',
    title: 'Apply',
    description:
      'Submit applications easily through our centralized system.',
  },
  {
    number: '04',
    title: 'Connect',
    description:
      'Engage with employers and launch your professional career.',
  },
];

const AboutPage = () => {
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
    <main className="overflow-hidden bg-white">

      {/* =====================================================
          HERO
      ====================================================== */}
      <section className="opportunities-hero relative overflow-hidden">

        <div className="hero-orb hero-orb-one" />
        <div className="hero-orb hero-orb-two" />
        <div className="hero-orb hero-orb-three" />

        <div className="hero-grid-pattern" />

        <div className="relative z-10 mx-auto max-w-5xl px-5 sm:px-6 lg:px-8">
          <div className="text-center">

            <div className="hero-label-wrap">
              <span className="hero-label">
                ABOUT BIIT CAREER SERVICES
              </span>
            </div>

            <h1 className="hero-title">

              <span className="hero-title-line hero-title-white">
                Bridging Education and
              </span>

              <span className="hero-title-line hero-title-green">
                Professional Workforce
              </span>

            </h1>

            <p className="hero-description">
              We empower students to discover their potential and connect
              top-tier employers with the brightest minds from the BIIT
              academic ecosystem.
            </p>

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
        ref={setSectionRef('connecting')}
        className="reveal-section mx-auto max-w-7xl px-5 py-12 sm:px-6 lg:px-10 lg:py-16"
      >
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16">

          <div className="reveal-content reveal-left">

            <p className="section-kicker">
              Connecting Talent
            </p>

            <h2 className="section-heading">
              Connecting Talent
              <br />
              <span>with Opportunities</span>
            </h2>

            <p className="section-description">
              We bring together motivated students and leading organizations
              through meaningful interactions, career guidance sessions, and
              placement initiatives that open doors to professional success.
            </p>

          </div>

          <div className="reveal-content reveal-right image-wrapper">

            <div className="image-decoration" />

            <img
              src={aboutPhoto}
              alt="BIIT Career Services meeting"
              className="opportunity-image"
            />

            <div className="image-caption">
              <span>Connecting Talent</span>
              <ArrowUpRight size={17} />
            </div>

          </div>

        </div>
      </section>


      {/* =====================================================
          SECTION 2
      ====================================================== */}
      <section
        ref={setSectionRef('guidance')}
        className="reveal-section bg-gray-50/70"
      >
        <div className="mx-auto max-w-7xl px-5 py-12 sm:px-6 lg:px-10 lg:py-16">

          <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16">

            <div className="reveal-content reveal-left image-wrapper order-2 lg:order-1">

              <div className="image-decoration image-decoration-right" />

              <img
                src={aboutPhoto2}
                alt="BIIT career guidance session"
                className="opportunity-image"
              />

              <div className="image-caption">
                <span>Career Guidance</span>
                <ArrowUpRight size={17} />
              </div>

            </div>

            <div className="reveal-content reveal-right order-1 lg:order-2">

              <p className="section-kicker">
                Student Support
              </p>

              <h2 className="section-heading">
                Guidance for
                <br />
                <span>Every Step</span>
              </h2>

              <p className="section-description">
                From career counseling to resume building and interview
                preparation, we support students at every stage of their
                professional development with expert advice and resources.
              </p>

            </div>

          </div>
        </div>
      </section>


      {/* =====================================================
          SECTION 3
      ====================================================== */}
      <section
        ref={setSectionRef('collaboration')}
        className="reveal-section mx-auto max-w-7xl px-5 py-12 sm:px-6 lg:px-10 lg:py-16"
      >
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16">

          <div className="reveal-content reveal-left">

            <p className="section-kicker">
              Industry Partnerships
            </p>

            <h2 className="section-heading">
              Empowering Careers
              <br />
              <span>Through Collaboration</span>
            </h2>

            <p className="section-description">
              We collaborate with industry partners to provide internships,
              training opportunities, and real-world exposure that help
              students build skills, confidence, and a strong foundation
              for their future.
            </p>

          </div>

          <div className="reveal-content reveal-right image-wrapper">

            <div className="image-decoration" />

            <img
              src={aboutPhoto3}
              alt="Students and industry professionals collaborating"
              className="opportunity-image"
            />

            <div className="image-caption">
              <span>Industry Collaboration</span>
              <ArrowUpRight size={17} />
            </div>

          </div>

        </div>
      </section>


      {/* =====================================================
          SECTION 4
      ====================================================== */}
      <section
        ref={setSectionRef('leaders')}
        className="reveal-section bg-gray-50/70"
      >
        <div className="mx-auto max-w-7xl px-5 py-12 sm:px-6 lg:px-10 lg:py-16">

          <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16">

            <div className="reveal-content reveal-left image-wrapper order-2 lg:order-1">

              <div className="image-decoration image-decoration-right" />

              <img
                src={aboutPhoto4}
                alt="BIIT students building their careers"
                className="opportunity-image"
              />

              <div className="image-caption">
                <span>Future Leaders</span>
                <ArrowUpRight size={17} />
              </div>

            </div>

            <div className="reveal-content reveal-right order-1 lg:order-2">

              <p className="section-kicker">
                Our Vision
              </p>

              <h2 className="section-heading">
                Building Tomorrow's
                <br />
                <span>Leaders</span>
              </h2>

              <p className="section-description">
                We are committed to nurturing talent, encouraging innovation,
                and preparing students to become skilled professionals and
                future leaders in a dynamic global marketplace.
              </p>

            </div>

          </div>
        </div>
      </section>


      {/* =====================================================
          HOW IT WORKS
      ====================================================== */}
      <section
        ref={setSectionRef('howItWorks')}
        className="reveal-section bg-white"
      >
        <div className="mx-auto max-w-7xl px-5 py-14 sm:px-6 lg:px-10 lg:py-20">

          <div className="reveal-content reveal-up text-center">

            <p className="mb-3 text-sm font-bold uppercase tracking-[0.18em] text-emerald-600">
              Simple Process
            </p>

            <h2 className="how-it-works-title">
              How It Works
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-gray-500">
              Start your career journey with a simple and straightforward
              process designed around your goals.
            </p>

          </div>


          {/* Steps */}
          <div className="relative mt-14">

            {/* Connecting line desktop */}
            <div className="absolute left-[12.5%] right-[12.5%] top-8 hidden h-px bg-gradient-to-r from-transparent via-emerald-300 to-transparent lg:block" />

            <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">

              {steps.map((step, index) => (

                <div
                  key={step.number}
                  className="reveal-content reveal-up group relative text-center"
                  style={{
                    transitionDelay: `${index * 120}ms`,
                  }}
                >

                  {/* Number */}
                  <div className="relative z-10 mx-auto flex h-16 w-16 items-center justify-center rounded-full border-4 border-white bg-gray-900 text-lg font-extrabold text-white shadow-lg transition-all duration-500 group-hover:-translate-y-2 group-hover:bg-emerald-600 group-hover:shadow-emerald-200">
                    {step.number}
                  </div>

                  {/* Title */}
                  <h3 className="mt-6 text-xl font-bold text-gray-900 transition-colors duration-300 group-hover:text-emerald-600">
                    {step.title}
                  </h3>

                  {/* Description */}
                  <p className="mx-auto mt-3 max-w-xs text-sm leading-7 text-gray-500">
                    {step.description}
                  </p>

                </div>

              ))}

            </div>
          </div>

        </div>
      </section>



    </main>
  );
};

export default AboutPage;