import CompanySignupForm from '../components/CompanySignupForm';
import heroImageDesktop from '../../../assets/images/BIIT.jpeg';
import { Sparkles, Building2, Users, Briefcase } from 'lucide-react';

const CompanySignupPage = () => {
  return (
    <main className="relative min-h-[calc(100vh-120px)] overflow-hidden bg-[#f7f6f2] sm:min-h-[calc(100vh-140px)]">

      {/* =====================================================
          BACKGROUND
      ====================================================== */}
      <div className="absolute inset-0 overflow-hidden">
        <img
          src={heroImageDesktop}
          alt="BIIT Building"
          className="absolute inset-0 h-full w-full object-cover object-center scale-105 animate-fade-in"
        />

        <div className="absolute inset-0 bg-white/35" />

        <div className="absolute inset-0 bg-gradient-to-r from-[#f7f6f2]/90 via-[#f7f6f2]/65 to-transparent" />

        <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-[#f7f6f2] to-transparent" />
      </div>

      {/* =====================================================
          DECORATIVE SHAPES
      ====================================================== */}
      <div
        className="
          pointer-events-none
          absolute
          -left-24
          top-20
          h-64
          w-64
          rounded-full
          bg-brand/10
          blur-3xl
          animate-pulse
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          -right-24
          bottom-10
          h-72
          w-72
          rounded-full
          bg-emerald-400/10
          blur-3xl
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          right-16
          top-20
          h-24
          w-24
          rounded-full
          border
          border-brand/20
          animate-spin
        "
        style={{ animationDuration: '18s' }}
      />

      {/* =====================================================
          CONTENT
      ====================================================== */}
      <div className="relative z-10 flex min-h-[calc(100vh-120px)] items-center justify-center px-4 py-10 sm:min-h-[calc(100vh-140px)] sm:px-6 sm:py-14">

        <div className="grid w-full max-w-6xl grid-cols-1 items-center gap-10 lg:grid-cols-2">

          {/* =================================================
              LEFT INFORMATION — Company Focused
          ================================================== */}
          <div
            className="
              hidden
              text-left
              lg:block
              animate-fade-in-up
            "
            style={{ animationDelay: '100ms' }}
          >

            {/* Brand label */}
            <div
              className="mb-5 flex items-center gap-3 animate-fade-in-up"
              style={{ animationDelay: '150ms' }}
            >
              <span className="h-px w-10 bg-brand" />

              <div className="flex items-center gap-2">
                <Sparkles size={14} className="text-brand" />

                <span className="text-xs font-bold uppercase tracking-[0.18em] text-brand">
                  BIIT Career Services
                </span>
              </div>
            </div>

            {/* Heading */}
            <h1
              className="
                max-w-xl
                text-4xl
                font-bold
                leading-tight
                tracking-tight
                text-gray-900
                animate-fade-in-up
                xl:text-5xl
              "
              style={{ animationDelay: '180ms' }}
            >
              Start Hiring
              <br />

              <span
                className="
                  bg-gradient-to-r
                  from-brand
                  via-emerald-400
                  to-brand
                  bg-[length:200%_auto]
                  bg-clip-text
                  text-transparent
                  animate-shimmer
                "
              >
                BIIT Talent
              </span>
            </h1>

            {/* Description */}
            <p
              className="
                mt-5
                max-w-lg
                text-sm
                leading-relaxed
                text-gray-600
                animate-fade-in-up
              "
              style={{ animationDelay: '260ms' }}
            >
              Register your company to post internships, review applications,
              and connect with skilled students from BIIT.
            </p>

            {/* Benefits */}
            <div className="mt-7 space-y-3">

              <div
                className="
                  flex
                  items-center
                  gap-3
                  text-sm
                  text-gray-600
                  animate-fade-in-up
                "
                style={{ animationDelay: '360ms' }}
              >
                <span
                  className="
                    flex
                    h-7
                    w-7
                    items-center
                    justify-center
                    rounded-full
                    bg-brand/10
                    transition-all
                    duration-300
                    hover:scale-110
                  "
                >
                  <Building2 size={14} className="text-brand" />
                </span>

                Post and manage internship opportunities
              </div>

              <div
                className="
                  flex
                  items-center
                  gap-3
                  text-sm
                  text-gray-600
                  animate-fade-in-up
                "
                style={{ animationDelay: '440ms' }}
              >
                <span
                  className="
                    flex
                    h-7
                    w-7
                    items-center
                    justify-center
                    rounded-full
                    bg-brand/10
                    transition-all
                    duration-300
                    hover:scale-110
                  "
                >
                  <Users size={14} className="text-brand" />
                </span>

                Review and shortlist top candidates
              </div>

              <div
                className="
                  flex
                  items-center
                  gap-3
                  text-sm
                  text-gray-600
                  animate-fade-in-up
                "
                style={{ animationDelay: '520ms' }}
              >
                <span
                  className="
                    flex
                    h-7
                    w-7
                    items-center
                    justify-center
                    rounded-full
                    bg-brand/10
                    transition-all
                    duration-300
                    hover:scale-110
                  "
                >
                  <Briefcase size={14} className="text-brand" />
                </span>

                Build your future talent pipeline
              </div>
            </div>
          </div>

          {/* =================================================
              SIGNUP FORM
          ================================================== */}
          <div
            className="
              flex
              w-full
              justify-center
              animate-fade-in-up
            "
            style={{ animationDelay: '300ms' }}
          >
            <div className="w-full max-w-md">

              {/* Mobile heading */}
              <div
                className="
                  mb-6
                  text-center
                  lg:hidden
                  animate-fade-in-up
                "
                style={{ animationDelay: '180ms' }}
              >
                <div className="mb-3 flex items-center justify-center gap-2">
                  <span className="h-px w-7 bg-brand/60" />

                  <Sparkles size={13} className="text-brand" />

                  <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-brand">
                    BIIT Career Services
                  </span>

                  <span className="h-px w-7 bg-brand/60" />
                </div>

                <h1 className="text-2xl font-bold text-gray-900 sm:text-3xl">
                  Company Registration
                </h1>

                <p className="mt-2 text-xs text-gray-500 sm:text-sm">
                  Register to access the company portal.
                </p>
              </div>

              {/* =================================================
                  SIGNUP CARD
                  Same animation style as Company Login
                  NO GREEN TOP LINE
              ================================================== */}
              <div
                className="
                  group
                  relative
                  overflow-hidden
                  rounded-2xl
                  border
                  border-white/80
                  bg-white/90
                  p-2
                  shadow-xl
                  shadow-gray-900/10
                  backdrop-blur-md
                  transition-all
                  duration-500
                  hover:-translate-y-2
                  hover:border-brand/30
                  hover:shadow-2xl
                  hover:shadow-brand/20
                  animate-fade-in-up
                "
                style={{ animationDelay: '350ms' }}
              >

                {/* LEFT GREEN ACCENT - Same as Login */}
                <div
                  className="
                    absolute
                    left-0
                    top-0
                    h-full
                    w-1
                    bg-brand
                    transition-all
                    duration-500
                    group-hover:w-1.5
                  "
                />

                {/* DECORATIVE GLOW — TOP RIGHT */}
                <div
                  className="
                    pointer-events-none
                    absolute
                    -right-12
                    -top-12
                    h-32
                    w-32
                    rounded-full
                    bg-brand/5
                    transition-transform
                    duration-700
                    group-hover:scale-150
                  "
                />

                {/* DECORATIVE GLOW — BOTTOM LEFT */}
                <div
                  className="
                    pointer-events-none
                    absolute
                    -bottom-20
                    -left-20
                    h-40
                    w-40
                    rounded-full
                    bg-emerald-100/35
                    transition-transform
                    duration-700
                    group-hover:scale-110
                  "
                />

                {/* FORM CONTENT */}
                <div className="relative z-10">
                  <CompanySignupForm />
                </div>
              </div>

              {/* Bottom text */}
              <p
                className="
                  mt-5
                  text-center
                  text-[11px]
                  text-gray-400
                  animate-fade-in-up
                "
                style={{ animationDelay: '700ms' }}
              >
                Register your company to access BIIT career services
              </p>

            </div>
          </div>
        </div>
      </div>

      {/* =====================================================
          BIIT LABEL
      ====================================================== */}
      <div
        className="
          absolute
          bottom-6
          right-6
          z-20
          hidden
          rounded-xl
          border
          border-white/70
          bg-white/80
          px-4
          py-3
          shadow-lg
          backdrop-blur-md
          lg:block
          animate-fade-in-up
        "
        style={{ animationDelay: '700ms' }}
      >
        <p className="text-[10px] font-bold uppercase tracking-widest text-brand">
          BIIT
        </p>

        <p className="mt-0.5 text-xs text-gray-600">
          Company Portal
        </p>
      </div>

    </main>
  );
};

export default CompanySignupPage;


