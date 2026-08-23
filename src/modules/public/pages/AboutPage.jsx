import aboutPhoto from '../../../assets/images/AboutP.png';

const steps = [
  { number: '01', title: 'Register', description: 'Create your profile and verify your university credentials.' },
  { number: '02', title: 'Explore', description: 'Browse verified opportunities tailored to your major.' },
  { number: '03', title: 'Apply', description: 'Submit applications easily through our centralized system.' },
  { number: '04', title: 'Connect', description: 'Engage with employers and launch your professional career.' },
];

const AboutPage = () => {
  return (
    <div className="bg-white">
      {/* Green hero */}
      <section className="bg-brand px-4 sm:px-6 lg:px-10 py-14 sm:py-20 text-center">
        <p className="text-white/70 text-xs sm:text-sm font-semibold uppercase tracking-wide mb-3">
          About BIIT Career Services
        </p>
        <h1 className="text-white text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight max-w-3xl mx-auto">
          Bridging Education and
          <br className="hidden sm:block" /> Professional Workforce
        </h1>
      </section>

      {/* Empowering your professional journey */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-12 lg:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold mb-4">
              Empowering Your <span className="text-brand">Professional Journey</span>
            </h2>
            <p className="text-gray-500 text-sm sm:text-base mb-4 leading-relaxed">
              BIIT Career Services connects students with valuable internship
              opportunities and helps them gain practical experience in their
              chosen fields. Our Internship Management Portal provides a
              simple and organized platform for students to discover
              opportunities, apply online, and track their applications.
            </p>
            <p className="text-gray-500 text-sm sm:text-base leading-relaxed">
              We also help companies connect with talented students by
              providing a convenient platform for post-internship
              opportunities and hiring applications.
            </p>
          </div>

          <img
            src={aboutPhoto}
            alt="Students at BIIT Career Services"
            className="rounded-2xl w-full h-64 sm:h-80 object-cover"
          />
        </div>
      </section>

      {/* How it works */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 pb-16">
        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-10">How It Works</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step) => (
            <div key={step.number} className="text-center">
              <div className="w-14 h-14 rounded-full bg-brand text-white font-bold text-lg flex items-center justify-center mx-auto mb-4">
                {step.number}
              </div>
              <h3 className="font-bold text-base mb-2">{step.title}</h3>
              <p className="text-gray-500 text-sm">{step.description}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default AboutPage;