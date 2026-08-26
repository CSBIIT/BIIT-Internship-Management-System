import LoginForm from '../components/LoginForm';
import heroImageDesktop from '../../../assets/images/BIIT.jpeg';
import { Sparkles } from 'lucide-react';

const LoginPage = () => {
  return (
    <main className="relative min-h-[calc(100vh-120px)] overflow-hidden bg-[#f7f6f2] sm:min-h-[calc(100vh-140px)]">

      {/* =====================================================
          BACKGROUND
      ====================================================== */}

      <div className="absolute inset-0 overflow-hidden">

        <img
          src={heroImageDesktop}
          alt="BIIT Building"
          className="
            absolute
            inset-0
            h-full
            w-full
            object-cover
            object-center
            scale-105
            animate-fade-in
          "
        />

        {/* Soft light overlay */}
        <div className="absolute inset-0 bg-white/35" />

        {/* Warm left fade */}
        <div
          className="
            absolute
            inset-0
            bg-gradient-to-r
            from-[#f7f6f2]/90
            via-[#f7f6f2]/60
            to-transparent
          "
        />

        {/* Bottom fade */}
        <div
          className="
            absolute
            inset-x-0
            bottom-0
            h-48
            bg-gradient-to-t
            from-[#f7f6f2]
            to-transparent
          "
        />

      </div>


      {/* =====================================================
          DECORATIVE GREEN ORBS
      ====================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          -left-24
          top-16
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
          -right-20
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
          right-20
          top-20
          h-24
          w-24
          rounded-full
          border
          border-brand/20
          animate-spin
        "
        style={{
          animationDuration: '18s',
        }}
      />


      {/* =====================================================
          CONTENT
      ====================================================== */}

      <div
        className="
          relative
          z-10
          flex
          min-h-[calc(100vh-120px)]
          items-center
          justify-center
          px-4
          py-10
          sm:min-h-[calc(100vh-140px)]
          sm:px-6
          sm:py-14
        "
      >

        <div className="grid w-full max-w-6xl grid-cols-1 items-center gap-10 lg:grid-cols-2">


          {/* =================================================
              LEFT SIDE
          ================================================== */}

          <div
            className="
              hidden
              text-left
              lg:block
              animate-fade-in-up
            "
            style={{
              animationDelay: '100ms',
            }}
          >

            {/* Label */}
            <div className="mb-5 flex items-center gap-3">

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


            {/* Heading */}
            <h1
              className="
                max-w-xl
                text-4xl
                font-bold
                leading-tight
                tracking-tight
                text-gray-900
                xl:text-5xl
              "
            >

              Welcome Back to

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
                BIIT Career Services
              </span>

            </h1>


            {/* Description */}
            <p className="mt-5 max-w-lg text-sm leading-relaxed text-gray-600">
              Access your personalized career portal, explore opportunities,
              manage your applications, and take the next step toward your
              professional journey.
            </p>


            {/* Small feature points */}
            <div className="mt-7 space-y-3">

              <div className="flex items-center gap-3 text-sm text-gray-600">

                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-brand/10">
                  <span className="h-2 w-2 rounded-full bg-brand" />
                </span>

                Verified career opportunities

              </div>


              <div className="flex items-center gap-3 text-sm text-gray-600">

                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-brand/10">
                  <span className="h-2 w-2 rounded-full bg-brand" />
                </span>

                Connect with leading organizations

              </div>


              <div className="flex items-center gap-3 text-sm text-gray-600">

                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-brand/10">
                  <span className="h-2 w-2 rounded-full bg-brand" />
                </span>

                Build your professional future

              </div>

            </div>

          </div>


          {/* =================================================
              LOGIN AREA
          ================================================== */}

          <div
            className="
              flex
              w-full
              justify-center
              animate-fade-in-up
            "
            style={{
              animationDelay: '250ms',
            }}
          >

            <div className="w-full max-w-md">


              {/* Mobile heading */}
              <div className="mb-6 text-center lg:hidden">

                <div className="mb-3 flex items-center justify-center gap-2">

                  <span className="h-px w-7 bg-brand/60" />

                  <Sparkles
                    size={13}
                    className="text-brand"
                  />

                  <span
                    className="
                      text-[10px]
                      font-bold
                      uppercase
                      tracking-[0.18em]
                      text-brand
                    "
                  >
                    BIIT Career Services
                  </span>

                  <span className="h-px w-7 bg-brand/60" />

                </div>


                <h1
                  className="
                    text-2xl
                    font-bold
                    text-gray-900
                    sm:text-3xl
                  "
                >
                  Welcome Back
                </h1>

                <p className="mt-2 text-xs text-gray-500 sm:text-sm">
                  Sign in to continue to your career portal.
                </p>

              </div>


              {/* Login Form Container */}
              <div
                className="
                  relative
                  overflow-hidden
                  rounded-3xl
                  border
                  border-white/80
                  bg-white/95
                  p-2
                  shadow-2xl
                  shadow-gray-900/15
                  backdrop-blur-md
                  transition-all
                  duration-500
                  hover:shadow-brand/15
                "
              >

                {/* Green decorative circle */}
                <div
                  className="
                    pointer-events-none
                    absolute
                    -right-16
                    -top-16
                    h-40
                    w-40
                    rounded-full
                    bg-brand/5
                  "
                />

                {/* Second decorative circle */}
                <div
                  className="
                    pointer-events-none
                    absolute
                    -bottom-20
                    -left-20
                    h-40
                    w-40
                    rounded-full
                    bg-emerald-100/40
                  "
                />

                {/* Green top line */}
                <div
                  className="
                    absolute
                    left-8
                    right-8
                    top-0
                    h-1
                    rounded-b-full
                    bg-gradient-to-r
                    from-brand
                    via-emerald-400
                    to-brand
                  "
                />

                <div className="relative z-10">

                  <LoginForm />

                </div>

              </div>


              {/* Bottom text */}
              <p
                className="
                  mt-5
                  text-center
                  text-[11px]
                  text-gray-400
                "
              >
                Secure access to your BIIT Career Services account
              </p>

            </div>

          </div>

        </div>

      </div>


      {/* =====================================================
          BUILDING LABEL
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
        style={{
          animationDelay: '700ms',
        }}
      >

        <p className="text-[10px] font-bold uppercase tracking-widest text-brand">
          BIIT
        </p>

        <p className="mt-0.5 text-xs text-gray-600">
          Career Services Portal
        </p>

      </div>

    </main>
  );
};

export default LoginPage;