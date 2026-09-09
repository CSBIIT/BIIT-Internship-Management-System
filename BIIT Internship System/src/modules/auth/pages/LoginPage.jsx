import LoginForm from '../components/LoginForm';
import heroImageDesktop from '../../../assets/images/BIIT.jpeg';
import { Sparkles, CheckCircle, ArrowRight } from 'lucide-react';

const LoginPage = () => {
  return (
    <main className="relative min-h-[calc(100vh-80px)] bg-[#f7f6f2]">
      {/* =====================================================
          BACKGROUND + DECORATIONS (clipped together)
      ====================================================== */}
      <div className="absolute inset-0 overflow-hidden">
        <img
          src={heroImageDesktop}
          alt="BIIT Building"
          className="absolute inset-0 h-full w-full scale-105 object-cover object-center animate-fade-in"
        />

        <div className="absolute inset-0 bg-white/35" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#f7f6f2]/95 via-[#f7f6f2]/80 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-l from-white/15 via-transparent to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#f7f6f2] to-transparent" />

        {/* Decorative blobs — inside overflow-hidden so they never cause scroll */}
        <div className="pointer-events-none absolute -left-20 top-16 h-60 w-60 rounded-full bg-brand/10 blur-3xl animate-pulse" />
        <div className="pointer-events-none absolute right-[20%] bottom-24 h-24 w-24 rounded-full bg-emerald-400/15 blur-2xl animate-pulse" />
      </div>

      {/* =====================================================
          CONTENT
      ====================================================== */}
      <div className="relative z-10 mx-auto max-w-7xl px-5 py-8 pb-20 sm:px-6 sm:pb-24 lg:px-10 lg:py-10">
        <div className="grid w-full items-center gap-10 lg:grid-cols-[1fr_430px] xl:grid-cols-[1fr_450px] xl:gap-14">

          {/* LEFT SIDE */}
          <div className="hidden max-w-xl lg:block animate-fade-in-up" style={{ animationDelay: '100ms' }}>
            <div className="mb-4 flex items-center gap-3 animate-fade-in-up" style={{ animationDelay: '150ms' }}>
              <span className="h-px w-10 bg-brand" />
              <div className="flex items-center gap-2">
                <Sparkles size={14} className="text-brand" />
                <span className="text-xs font-bold uppercase tracking-[0.18em] text-brand">
                  BIIT Career Services
                </span>
              </div>
            </div>

            <h1
              className="max-w-2xl text-3xl font-bold leading-[1.08] tracking-tight text-gray-900 animate-fade-in-up sm:text-4xl lg:text-[2.9rem] xl:text-5xl"
              style={{ animationDelay: '200ms' }}
            >
              Welcome to
              <br />
              <span className="bg-gradient-to-r from-brand via-emerald-400 to-brand bg-[length:200%_auto] bg-clip-text text-transparent animate-shimmer">
                BIIT Career Services
              </span>
            </h1>

            <div className="mt-5 space-y-2.5">
              <div className="flex items-center gap-3 text-sm text-gray-600 animate-fade-in-up" style={{ animationDelay: '360ms' }}>
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-brand/10 transition-all duration-300 hover:scale-110">
                  <CheckCircle size={14} className="text-brand" />
                </span>
                Verified career opportunities
              </div>

              <div className="flex items-center gap-3 text-sm text-gray-600 animate-fade-in-up" style={{ animationDelay: '440ms' }}>
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-brand/10 transition-all duration-300 hover:scale-110">
                  <CheckCircle size={14} className="text-brand" />
                </span>
                Connect with leading organizations
              </div>

              <div className="flex items-center gap-3 text-sm text-gray-600 animate-fade-in-up" style={{ animationDelay: '520ms' }}>
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-brand/10 transition-all duration-300 hover:scale-110">
                  <CheckCircle size={14} className="text-brand" />
                </span>
                Build your professional future
              </div>
            </div>

            <div className="mt-6 flex items-center gap-3 text-xs text-gray-400 animate-fade-in-up" style={{ animationDelay: '620ms' }}>
              <div className="flex items-center gap-1.5">
                <span className="h-1.5 w-8 rounded-full bg-brand" />
                <span className="h-1.5 w-1.5 rounded-full bg-brand/30" />
                <span className="h-1.5 w-1.5 rounded-full bg-brand/20" />
              </div>
              <span>Your career journey starts here</span>
              <ArrowRight size={13} className="text-brand" />
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="flex w-full justify-center animate-fade-in-up" style={{ animationDelay: '300ms' }}>
            <div className="w-full max-w-[430px]">
              {/* Mobile header */}
              <div className="mb-5 text-center lg:hidden animate-fade-in-up" style={{ animationDelay: '180ms' }}>
                <div className="mb-2 flex items-center justify-center gap-2">
                  <span className="h-px w-7 bg-brand" />
                  <Sparkles size={12} className="text-brand" />
                  <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-brand">
                    BIIT Career Services
                  </span>
                  <span className="h-px w-7 bg-brand" />
                </div>

                <h1 className="text-2xl font-bold text-gray-900">Welcome Back</h1>
                <p className="mt-1 text-xs text-gray-500">Sign in to continue to your career portal.</p>
              </div>

              <LoginForm />

              <div className="mt-5 flex items-center justify-center gap-2 text-[11px] text-gray-400 animate-fade-in-up" style={{ animationDelay: '700ms' }}>
                <span className="h-1.5 w-1.5 rounded-full bg-brand" />
                <span>Secure access to your BIIT Career Services account</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </main>
  );
};

export default LoginPage;