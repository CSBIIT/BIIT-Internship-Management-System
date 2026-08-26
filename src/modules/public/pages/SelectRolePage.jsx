import {
  GraduationCap,
  Building2,
  Sparkles,
  ArrowRight,
} from 'lucide-react';

import RoleCard from '../components/RoleCard';
import heroImageDesktop from '../../../assets/images/BIIT.jpeg';

const SelectRolePage = () => {
  return (
    <main className="min-h-[calc(100vh-120px)] bg-[#f7f6f2] overflow-hidden">

      {/* =====================================================
          HERO
      ====================================================== */}

      <section className="relative min-h-[calc(100vh-120px)]">

        {/* Background building image */}
        <div className="absolute inset-0">

          <img
            src={heroImageDesktop}
            alt="BIIT Building"
            className="
              h-full
              w-full
              object-cover
              object-center
              scale-105
              animate-fade-in
            "
          />

          {/* Light overlay - NOT dark */}
          <div className="absolute inset-0 bg-white/35" />

          {/* Left side readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#f7f6f2]/95 via-[#f7f6f2]/75 to-transparent" />

          {/* Bottom fade */}
          <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-[#f7f6f2] to-transparent" />

        </div>


        {/* =================================================
            DECORATIVE GREEN SHAPES
        ================================================== */}

        <div
          className="
            absolute
            -left-20
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
            absolute
            right-10
            top-24
            h-32
            w-32
            rounded-full
            border
            border-brand/20
            animate-spin
          "
          style={{
            animationDuration: '18s',
          }}
        />

        <div
          className="
            absolute
            right-20
            bottom-32
            h-20
            w-20
            rounded-full
            bg-emerald-400/15
            blur-2xl
            animate-pulse
          "
        />


        {/* =================================================
            CONTENT
        ================================================== */}

        <div className="relative z-10 mx-auto max-w-7xl px-5 py-12 sm:px-6 lg:px-10 lg:py-16">

          <div className="flex min-h-[calc(100vh-200px)] items-center">

            <div className="w-full lg:w-[62%]">


              {/* =================================================
                  LABEL
              ================================================== */}

              <div
                className="
                  mb-5
                  flex
                  items-center
                  gap-3
                  animate-fade-in-up
                "
                style={{
                  animationDelay: '100ms',
                }}
              >

                <span className="h-px w-10 bg-brand" />

                <div className="flex items-center gap-2">

                  <Sparkles
                    size={14}
                    className="text-brand"
                  />

                  <span
                    className="
                      text-xs
                      font-bold
                      uppercase
                      tracking-[0.18em]
                      text-brand
                    "
                  >
                    BIIT Career Services
                  </span>

                </div>

              </div>


              {/* =================================================
                  ORIGINAL HEADING
              ================================================== */}

              <h1
                className="
                  max-w-3xl
                  text-3xl
                  font-bold
                  leading-tight
                  tracking-tight
                  text-gray-900
                  animate-fade-in-up
                  sm:text-4xl
                  lg:text-5xl
                  xl:text-6xl
                "
                style={{
                  animationDelay: '180ms',
                }}
              >

                Bridging Education and

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
                  Professional Workforce
                </span>

              </h1>


              {/* =================================================
                  ORIGINAL SUBTITLE
              ================================================== */}

              <p
                className="
                  mt-5
                  max-w-2xl
                  text-sm
                  leading-relaxed
                  text-gray-600
                  animate-fade-in-up
                  sm:text-base
                "
                style={{
                  animationDelay: '260ms',
                }}
              >
                Welcome to the Portal
              </p>

              <p
                className="
                  mt-1
                  max-w-xl
                  text-xs
                  leading-relaxed
                  text-gray-500
                  animate-fade-in-up
                  sm:text-sm
                "
                style={{
                  animationDelay: '320ms',
                }}
              >
                Please select your role to continue to your tailored dashboard experience.
              </p>


              {/* =================================================
                  ROLE CARDS
              ================================================== */}

              <div
                className="
                  mt-8
                  grid
                  max-w-3xl
                  grid-cols-1
                  gap-5
                  sm:grid-cols-2
                "
              >

                {/* Student */}
                <div
                  className="
                    group
                    animate-fade-in-up
                  "
                  style={{
                    animationDelay: '400ms',
                  }}
                >

                  <div
                    className="
                      relative
                      overflow-hidden
                      rounded-2xl
                      border
                      border-white
                      bg-white/95
                      shadow-xl
                      shadow-gray-900/10
                      backdrop-blur-sm
                      transition-all
                      duration-500
                      group-hover:-translate-y-2
                      group-hover:shadow-2xl
                      group-hover:shadow-brand/20
                    "
                  >

                    {/* Green accent */}
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
                        group-hover:w-2
                      "
                    />

                    {/* Glow circle */}
                    <div
                      className="
                        absolute
                        -right-10
                        -top-10
                        h-28
                        w-28
                        rounded-full
                        bg-brand/5
                        transition-transform
                        duration-700
                        group-hover:scale-150
                      "
                    />

                    <div className="relative z-10 p-1">

                      <RoleCard
                        icon={GraduationCap}
                        title="Student"
                        description="Explore internship opportunities, manage your applications, and track your professional development journey."
                        buttonLabel="Login as Student"
                        to="/login"
                      />

                    </div>

                  </div>

                </div>


                {/* Company */}
                <div
                  className="
                    group
                    animate-fade-in-up
                  "
                  style={{
                    animationDelay: '520ms',
                  }}
                >

                  <div
                    className="
                      relative
                      overflow-hidden
                      rounded-2xl
                      border
                      border-white
                      bg-white/95
                      shadow-xl
                      shadow-gray-900/10
                      backdrop-blur-sm
                      transition-all
                      duration-500
                      group-hover:-translate-y-2
                      group-hover:shadow-2xl
                      group-hover:shadow-brand/20
                    "
                  >

                    {/* Green accent */}
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
                        group-hover:w-2
                      "
                    />

                    {/* Glow circle */}
                    <div
                      className="
                        absolute
                        -right-10
                        -top-10
                        h-28
                        w-28
                        rounded-full
                        bg-brand/5
                        transition-transform
                        duration-700
                        group-hover:scale-150
                      "
                    />

                    <div className="relative z-10 p-1">

                      <RoleCard
                        icon={Building2}
                        title="Company"
                        description="Post internship listings, review student profiles, and connect with emerging talent from BIT."
                        buttonLabel="Login as Company"
                        to="/company/login"
                      />

                    </div>

                  </div>

                </div>

              </div>


              {/* =================================================
                  BOTTOM INDICATOR
              ================================================== */}

              <div
                className="
                  mt-7
                  flex
                  items-center
                  gap-3
                  text-xs
                  text-gray-400
                  animate-fade-in-up
                "
                style={{
                  animationDelay: '650ms',
                }}
              >

                <div className="flex items-center gap-1.5">

                  <span className="h-1.5 w-8 rounded-full bg-brand" />

                  <span className="h-1.5 w-1.5 rounded-full bg-brand/30" />

                  <span className="h-1.5 w-1.5 rounded-full bg-brand/20" />

                </div>

                <span>
                  Select your role to continue
                </span>

                <ArrowRight
                  size={13}
                  className="text-brand"
                />

              </div>

            </div>

          </div>

        </div>


        {/* =================================================
            BUILDING LABEL
        ================================================== */}

        <div
          className="
            absolute
            bottom-7
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
          style={{
            animationDelay: '800ms',
          }}
        >

          <p className="text-[10px] font-bold uppercase tracking-widest text-brand">
            BIIT
          </p>

          <p className="mt-0.5 text-xs text-gray-600">
            Building the future
          </p>

        </div>

      </section>

    </main>
  );
};

export default SelectRolePage;