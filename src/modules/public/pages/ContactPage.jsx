import { useEffect, useRef, useState } from 'react';
import {
  Mail,
  Phone,
  Clock,
  MapPin,
  ArrowUpRight,
  Send,
} from 'lucide-react';

import Input from '../../../components/common/Input';
import Select from '../../../components/common/Select';
import Textarea from '../../../components/common/Textarea';
import Button from '../../../components/common/Button';

const contactInfo = [
  {
    icon: Mail,
    label: 'Email',
    value: 'career.services@biit.edu.pk',
  },
  {
    icon: Phone,
    label: 'Phone',
    value: '+92 300 1234567',
  },
  {
    icon: Clock,
    label: 'Office Hours',
    value: 'Mon-Fri: 9AM - 5PM',
  },
  {
    icon: MapPin,
    label: 'Location',
    value: 'CS Office, BIT Wah',
  },
];

const userTypeOptions = [
  { value: 'student', label: 'Student' },
  { value: 'company', label: 'Company' },
  { value: 'other', label: 'Other' },
];

const subjectOptions = [
  { value: 'general', label: 'General Inquiry' },
  { value: 'technical', label: 'Technical Issue' },
  { value: 'partnership', label: 'Partnership' },
];

const ContactPage = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    userType: '',
    subject: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

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
      if (element) {
        observer.observe(element);
      }
    });

    return () => observer.disconnect();
  }, []);

  const setSectionRef = (name) => (element) => {
    sectionRefs.current[name] = element;
  };

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log('Contact form submitted:', formData);

    setSubmitted(true);
  };

  return (
    <main className="overflow-hidden bg-white">

      {/* =====================================================
          HERO SECTION
          SAME HERO DESIGN AS ABOUT / OPPORTUNITIES
      ====================================================== */}
      <section className="opportunities-hero relative overflow-hidden">

        {/* Animated background shapes */}
        <div className="hero-orb hero-orb-one" />
        <div className="hero-orb hero-orb-two" />
        <div className="hero-orb hero-orb-three" />

        {/* Animated grid */}
        <div className="hero-grid-pattern" />

        <div className="relative z-10 mx-auto max-w-5xl px-5 sm:px-6 lg:px-8">

          <div className="text-center">

            {/* Animated label */}
            <div className="hero-label-wrap">
              <span className="hero-label">
                BIIT CAREER SERVICES
              </span>
            </div>

            {/* Main heading */}
            <h1 className="hero-title">

              <span className="hero-title-line hero-title-white">
                We're Here to
              </span>

              <span className="hero-title-line hero-title-green">
                Help You Succeed
              </span>

            </h1>

            {/* Description */}
            <p className="hero-description">
              Have a question about internships, career opportunities,
              partnerships, or our services? Get in touch with the BIIT
              Career Services team.
            </p>

            {/* Animated indicators */}
            <div className="hero-indicators">

              <span className="hero-indicator" />

              <span className="hero-indicator hero-indicator-delay-one" />

              <span className="hero-indicator hero-indicator-delay-two" />

            </div>

          </div>

        </div>
      </section>


      {/* =====================================================
          CONTACT INFORMATION CARDS
      ====================================================== */}
      <section className="relative z-20 -mt-8 px-5 sm:-mt-10 sm:px-6 lg:px-10">

        <div className="mx-auto max-w-7xl">

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">

            {contactInfo.map(
              ({ icon: Icon, label, value }, index) => (

                <div
                  key={label}
                  className="
                    group relative overflow-hidden
                    rounded-2xl border border-gray-100
                    bg-white p-5
                    shadow-lg shadow-gray-200/50
                    transition-all duration-500
                    hover:-translate-y-2
                    hover:shadow-xl hover:shadow-emerald-900/10
                  "
                  style={{
                    transitionDelay: `${index * 80}ms`,
                  }}
                >

                  {/* Decorative hover circle */}
                  <div
                    className="
                      pointer-events-none absolute
                      -right-8 -top-8
                      h-24 w-24 rounded-full
                      bg-emerald-50
                      transition-transform duration-500
                      group-hover:scale-[2.5]
                    "
                  />

                  <div className="relative z-10 flex items-start gap-4">

                    {/* Icon */}
                    <div
                      className="
                        flex h-12 w-12 shrink-0
                        items-center justify-center
                        rounded-xl bg-emerald-50
                        transition-all duration-500
                        group-hover:rotate-3
                        group-hover:bg-emerald-600
                      "
                    >
                      <Icon
                        size={20}
                        className="
                          text-emerald-600
                          transition-colors duration-300
                          group-hover:text-white
                        "
                      />
                    </div>

                    {/* Text */}
                    <div className="min-w-0">

                      <p className="mb-1 text-xs font-medium uppercase tracking-wider text-gray-400">
                        {label}
                      </p>

                      <p className="break-words text-sm font-semibold text-gray-800">
                        {value}
                      </p>

                    </div>

                  </div>

                </div>

              )
            )}

          </div>

        </div>
      </section>


      {/* =====================================================
          FORM + MAP SECTION
      ====================================================== */}
      <section
        ref={setSectionRef('contactContent')}
        className="reveal-section mx-auto max-w-7xl px-5 py-14 sm:px-6 lg:px-10 lg:py-20"
      >

        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-16">

          {/* =================================================
              SEND MESSAGE
          ================================================== */}
          <div className="reveal-content reveal-left">

            <div className="
              rounded-3xl
              border border-gray-100
              bg-white
              p-6
              shadow-lg shadow-gray-200/40
              transition-all duration-500
              hover:shadow-xl
              sm:p-8
              lg:p-10
            ">

              {/* Heading */}
              <div className="mb-8">

                <div className="
                  mb-4 flex h-11 w-11
                  items-center justify-center
                  rounded-xl bg-emerald-50
                ">
                  <Send
                    size={19}
                    className="text-emerald-600"
                  />
                </div>

                <p className="section-kicker">
                  Get In Touch
                </p>

                <h2 className="section-heading">
                  Send us a
                  <br />
                  <span>Message</span>
                </h2>

                <p className="mt-4 max-w-lg text-sm leading-7 text-gray-500">
                  Have a question or need assistance? Fill out the form
                  below and our Career Services team will get back to you.
                </p>

              </div>


              {/* =================================================
                  SUCCESS MESSAGE
              ================================================== */}
              {submitted ? (

                <div className="
                  flex min-h-[300px]
                  flex-col items-center
                  justify-center
                  rounded-2xl
                  bg-emerald-50
                  px-6 text-center
                ">

                  <div className="
                    mb-5 flex h-16 w-16
                    items-center justify-center
                    rounded-full bg-emerald-100
                  ">
                    <span className="text-2xl font-bold text-emerald-600">
                      ✓
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-gray-900">
                    Message Sent!
                  </h3>

                  <p className="mt-2 max-w-sm text-sm leading-6 text-gray-500">
                    Thanks for reaching out! We'll get back to you soon.
                  </p>

                  <button
                    type="button"
                    onClick={() => setSubmitted(false)}
                    className="
                      mt-6 rounded-full
                      border border-emerald-200
                      px-5 py-2
                      text-sm font-semibold
                      text-emerald-700
                      transition-all duration-300
                      hover:bg-emerald-600
                      hover:text-white
                    "
                  >
                    Send Another Message
                  </button>

                </div>

              ) : (

                /* =================================================
                    FORM
                ================================================== */
                <form
                  onSubmit={handleSubmit}
                  className="space-y-5"
                >

                  {/* Name + Email */}
                  <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">

                    <Input
                      label="Full Name"
                      name="fullName"
                      placeholder="Ali Khan"
                      value={formData.fullName}
                      onChange={handleChange}
                      required
                    />

                    <Input
                      label="Email Address"
                      type="email"
                      name="email"
                      placeholder="2023-ARID-1234@biit.edu.pk"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />

                  </div>


                  {/* User Type + Subject */}
                  <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">

                    <Select
                      label="I am a"
                      name="userType"
                      options={userTypeOptions}
                      value={formData.userType}
                      onChange={handleChange}
                    />

                    <Select
                      label="Subject"
                      name="subject"
                      options={subjectOptions}
                      value={formData.subject}
                      onChange={handleChange}
                    />

                  </div>


                  {/* Message */}
                  <Textarea
                    label="Message"
                    name="message"
                    placeholder="How can we help you?"
                    value={formData.message}
                    onChange={handleChange}
                    required
                  />


                  {/* Submit */}
                  <Button
                    type="submit"
                    icon={undefined}
                    className="
                      w-full justify-center
                      transition-all duration-300
                      hover:-translate-y-1
                      hover:shadow-lg
                      sm:w-auto
                    "
                  >
                    Send Message →
                  </Button>

                </form>

              )}

            </div>

          </div>


          {/* =================================================
              CAMPUS LOCATION
          ================================================== */}
          <div className="reveal-content reveal-right">

            {/* Heading */}
            <div className="mb-6">

              <p className="section-kicker">
                Find Us
              </p>

              <h2 className="section-heading">
                Campus
                <br />
                <span>Location</span>
              </h2>

              <p className="section-description">
                Visit us during office hours at the BIIT Career Services
                office. Our team is available to assist students and
                industry partners.
              </p>

            </div>


            {/* Map */}
            <div className="
              group relative
              overflow-hidden
              rounded-3xl
              border border-gray-200
              bg-gray-100
              shadow-lg shadow-gray-200/40
            ">

              <iframe
                title="BIIT Campus Location"
                src="https://www.google.com/maps?q=Barani+Institute+of+Information+Technology,+Rawalpindi&output=embed"
                width="100%"
                height="380"
                style={{
                  border: 0,
                }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="
                  block w-full
                  transition-transform duration-700
                  group-hover:scale-[1.02]
                "
              />

              {/* Floating location card */}
              <div className="absolute bottom-4 left-4 right-4">

                <div className="
                  flex items-center gap-3
                  rounded-2xl
                  border border-white/40
                  bg-white/95
                  p-4
                  shadow-xl
                  backdrop-blur-md
                ">

                  <div className="
                    flex h-10 w-10 shrink-0
                    items-center justify-center
                    rounded-full
                    bg-emerald-600
                  ">
                    <MapPin
                      size={18}
                      className="text-white"
                    />
                  </div>

                  <div>

                    <p className="text-xs font-medium text-gray-400">
                      Visit Us
                    </p>

                    <p className="text-sm font-bold text-gray-800">
                      CS Office, BIT Wah
                    </p>

                  </div>

                  <ArrowUpRight
                    size={18}
                    className="ml-auto text-emerald-600"
                  />

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>

    </main>
  );
};

export default ContactPage;