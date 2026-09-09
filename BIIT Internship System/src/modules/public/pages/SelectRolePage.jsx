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
    <main className="min-h-[calc(100vh-80px)] bg-[#f7f6f2] overflow-hidden">

      {/* =====================================================
          HERO
      ====================================================== */}

      <section className="relative min-h-[calc(100vh-80px)]">

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

          {/* Light overlay */}
          <div className="absolute inset-0 bg-white/35" />

          {/* Left readability */}
          <div
            className="
              absolute
              inset-0
              bg-gradient-to-r
              from-[#f7f6f2]/95
              via-[#f7f6f2]/80
              to-transparent
            "
          />

          {/* Right soft overlay */}
          <div
            className="
              absolute
              inset-0
              bg-gradient-to-l
              from-white/15
              via-transparent
              to-transparent
            "
          />

          {/* Bottom fade */}
          <div
            className="
              absolute
              inset-x-0
              bottom-0
              h-32
              bg-gradient-to-t
              from-[#f7f6f2]
              to-transparent
            "
          />

        </div>


        {/* =================================================
    DECORATIVE GREEN SHAPES
================================================== */}

<div
  className="
    absolute
    -left-20
    top-16
    h-60
    w-60
    rounded-full
    bg-brand/10
    blur-3xl
    animate-pulse
  "
/>

<div
  className="
    absolute
    right-[20%]
    bottom-24
    h-24
    w-24
    rounded-full
    bg-emerald-400/15
    blur-2xl
    animate-pulse
  "
/>

        {/* =================================================
            MAIN CONTENT
        ================================================== */}

        <div
          className="
            relative
            z-10
            mx-auto
            flex
            min-h-[calc(100vh-80px)]
            max-w-7xl
            items-center
            px-5
            py-8
            sm:px-6
            lg:px-10
            lg:py-10
          "
        >

          <div
            className="
              grid
              w-full
              items-center
              gap-10
              lg:grid-cols-[1fr_1fr]
              xl:gap-14
            "
          >

            {/* =================================================
                LEFT — ORIGINAL HERO CONTENT
            ================================================== */}

            <div className="max-w-xl">

              {/* Label */}

              <div
                className="
                  mb-4
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
                  max-w-2xl
                  text-3xl
                  font-bold
                  leading-[1.08]
                  tracking-tight
                  text-gray-900
                  animate-fade-in-up
                  sm:text-4xl
                  lg:text-[2.9rem]
                  xl:text-5xl
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
                  mt-4
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
                Please select your role to continue to your tailored
                dashboard experience.
              </p>


              {/* =================================================
                  SMALL ROLE INDICATOR
              ================================================== */}

              <div
                className="
                  mt-6
                  flex
                  items-center
                  gap-3
                  text-xs
                  text-gray-400
                  animate-fade-in-up
                "
                style={{
                  animationDelay: '620ms',
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


            {/* =================================================
                RIGHT — ROLE SELECTION
            ================================================== */}

            <div className="w-full">

              {/* Small heading */}

              <div
                className="
                  mb-5
                  text-center
                  animate-fade-in-up
                "
                style={{
                  animationDelay: '300ms',
                }}
              >

                <p
                  className="
                    text-[11px]
                    font-bold
                    uppercase
                    tracking-[0.2em]
                    text-brand
                  "
                >
                  Get Started
                </p>

                <h2
                  className="
                    mt-1
                    text-2xl
                    font-bold
                    tracking-tight
                    text-gray-900
                    sm:text-3xl
                  "
                >
                  Choose Your Role
                </h2>

                <p className="mt-1 text-sm text-gray-500">
                  Select your account type to continue
                </p>

              </div>


              {/* =================================================
                  TWO IDENTICAL ROLE CARDS
              ================================================== */}

              <div
                className="
                  grid
                  grid-cols-1
                  gap-5
                  sm:grid-cols-2
                "
              >

                {/* =================================================
                    STUDENT
                ================================================== */}

                <div
                  className="group animate-fade-in-up"
                  style={{
                    animationDelay: '400ms',
                  }}
                >

                  <div
                    className="
                      relative
                      flex
                      h-full
                      min-h-[265px]
                      flex-col
                      overflow-hidden
                      rounded-2xl
                      border
                      border-white/80
                      bg-white/90
                      p-6
                      shadow-xl
                      shadow-gray-900/10
                      backdrop-blur-md
                      transition-all
                      duration-500
                      group-hover:-translate-y-2
                      group-hover:border-brand/30
                      group-hover:shadow-2xl
                      group-hover:shadow-brand/20
                    "
                  >

                    {/* Left green accent */}

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

                    {/* Decorative glow */}

                    <div
                      className="
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

                    {/* Icon */}

                    <div
                      className="
                        relative
                        z-10
                        mb-5
                        flex
                        h-12
                        w-12
                        items-center
                        justify-center
                        rounded-xl
                        border
                        border-brand/10
                        bg-brand/10
                        text-brand
                        transition-all
                        duration-500
                        group-hover:scale-105
                        group-hover:bg-brand
                        group-hover:text-white
                      "
                    >
                      <GraduationCap size={24} />
                    </div>


                    {/* Title */}

                    <h3
                      className="
                        relative
                        z-10
                        text-xl
                        font-bold
                        text-gray-900
                      "
                    >
                      Student
                    </h3>


                    {/* Description */}

                    <p
                      className="
                        relative
                        z-10
                        mt-2
                        min-h-[72px]
                        text-sm
                        leading-6
                        text-gray-500
                      "
                    >
                      Explore internship opportunities, manage your
                      applications, and track your professional
                      journey.

                    </p>
                    <br/>


                    {/* Login button */}

                    <a
                      href="/login"
                      className="
                        relative
                        z-10
                        mt-auto
                        flex
                        h-11
                        items-center
                        justify-center
                        gap-2
                        rounded-xl
                        bg-brand
                        px-4
                        text-sm
                        font-semibold
                        text-white
                        transition-all
                        duration-300
                        hover:bg-brand-dark
                        hover:shadow-lg
                        hover:shadow-brand/20
                      "
                    >
                      Login as Student

                      <ArrowRight
                        size={16}
                        className="
                          transition-transform
                          duration-300
                          group-hover:translate-x-1
                        "
                      />
                    </a>

                  </div>

                </div>


                {/* =================================================
                    COMPANY
                ================================================== */}

                <div
                  className="group animate-fade-in-up"
                  style={{
                    animationDelay: '520ms',
                  }}
                >

                  <div
                    className="
                      relative
                      flex
                      h-full
                      min-h-[265px]
                      flex-col
                      overflow-hidden
                      rounded-2xl
                      border
                      border-white/80
                      bg-white/90
                      p-6
                      shadow-xl
                      shadow-gray-900/10
                      backdrop-blur-md
                      transition-all
                      duration-500
                      group-hover:-translate-y-2
                      group-hover:border-brand/30
                      group-hover:shadow-2xl
                      group-hover:shadow-brand/20
                    "
                  >

                    {/* Left green accent */}

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

                    {/* Decorative glow */}

                    <div
                      className="
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

                    {/* Icon */}

                    <div
                      className="
                        relative
                        z-10
                        mb-5
                        flex
                        h-12
                        w-12
                        items-center
                        justify-center
                        rounded-xl
                        border
                        border-brand/10
                        bg-brand/10
                        text-brand
                        transition-all
                        duration-500
                        group-hover:scale-105
                        group-hover:bg-brand
                        group-hover:text-white
                      "
                    >
                      <Building2 size={24} />
                    </div>


                    {/* Title */}

                    <h3
                      className="
                        relative
                        z-10
                        text-xl
                        font-bold
                        text-gray-900
                      "
                    >
                      Company
                    </h3>


                    {/* Description */}

                    <p
                      className="
                        relative
                        z-10
                        mt-2
                        min-h-[72px]
                        text-sm
                        leading-6
                        text-gray-500
                      "
                    >
                      Post internship listings, review student profiles,
                      and connect with emerging talent from BIIT.
                    </p>
                    <br/>


                    {/* Login button */}

                    <a
                      href="/company/login"
                      className="
                        relative
                        z-10
                        mt-auto
                        flex
                        h-11
                        items-center
                        justify-center
                        gap-2
                        rounded-xl
                        bg-brand
                        px-4
                        text-sm
                        font-semibold
                        text-white
                        transition-all
                        duration-300
                        hover:bg-brand-dark
                        hover:shadow-lg
                        hover:shadow-brand/20
                      "
                    >
                      Login as Company

                      <ArrowRight
                        size={16}
                        className="
                          transition-transform
                          duration-300
                          group-hover:translate-x-1
                        "
                      />
                    </a>

                  </div>

                </div>

              </div>


              {/* Secure access */}

              <div
                className="
                  mt-5
                  flex
                  items-center
                  justify-center
                  gap-2
                  text-[11px]
                  text-gray-400
                  animate-fade-in-up
                "
                style={{
                  animationDelay: '650ms',
                }}
              >

                <span className="h-1.5 w-1.5 rounded-full bg-brand" />

                <span>
                  Secure access to BIIT Career Services
                </span>

              </div>

            </div>

          </div>

        </div>


       
      </section>

    </main>
  );
};

export default SelectRolePage;