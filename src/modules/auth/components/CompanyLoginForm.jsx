import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Eye, EyeOff, Building2, ArrowRight } from 'lucide-react';
import Button from '../../../components/common/Button';
import { useAuth } from '../../../context/AuthContext';

const CompanyLoginForm = () => {
  const navigate = useNavigate();
  const { login } = useAuth();
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    const companyUser = {
      name: 'TechCorp',
      email: email || 'techcorp@example.com',
      role: 'company',
      token: 'demo-token-123',
    };

    login(companyUser);
    navigate('/company/dashboard', { replace: true });
  };

  return (
    <div
      className="
        group
        relative
        w-full
        overflow-hidden
        rounded-2xl
        border
        border-white/80
        bg-white/90
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
      {/* =====================================================
          LEFT GREEN ACCENT
      ====================================================== */}
      <div className="absolute left-0 top-0 h-full w-1 bg-brand transition-all duration-500 group-hover:w-1.5" />

      {/* =====================================================
          DECORATIVE GLOW — TOP RIGHT
      ====================================================== */}
      <div className="pointer-events-none absolute -right-12 -top-12 h-32 w-32 rounded-full bg-brand/5 transition-transform duration-700 group-hover:scale-150" />

      {/* =====================================================
          DECORATIVE GLOW — BOTTOM LEFT
      ====================================================== */}
      <div className="pointer-events-none absolute -bottom-20 -left-20 h-40 w-40 rounded-full bg-emerald-100/35 transition-transform duration-700 group-hover:scale-110" />

      {/* =====================================================
          CARD CONTENT
      ====================================================== */}
      <div className="relative z-10 px-7 py-6 sm:px-8 sm:py-7">

        {/* =================================================
            ICON
        ================================================== */}
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
            animate-fade-in-up
          "
          style={{ animationDelay: '400ms' }}
        >
          <Building2
            size={24}
            strokeWidth={2}
            className="transition-transform duration-500 group-hover:scale-110"
          />
        </div>

        {/* =================================================
            TITLE + DESCRIPTION
        ================================================== */}
        <div className="animate-fade-in-up" style={{ animationDelay: '450ms' }}>
          <h1 className="text-xl font-bold text-gray-900">Company</h1>
          <p className="mt-2 min-h-[48px] text-sm leading-6 text-gray-500">
            Access the Internship Management System
          </p>
        </div>

        {/* =================================================
            FORM
        ================================================== */}
        <form onSubmit={handleSubmit} className="mt-5 space-y-3.5 animate-fade-in-up" style={{ animationDelay: '500ms' }}>

          <div>
            <label className="mb-1.5 block text-[11px] font-bold uppercase tracking-wider text-gray-700">
              Email Address
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="ABC@gmail.com"
              className="w-full rounded-lg border border-gray-200 bg-brand-light/40 px-4 py-2.5 text-sm text-gray-900 outline-none transition-all placeholder:text-gray-400 focus:border-brand focus:bg-white focus:ring-2 focus:ring-brand/10"
              required
            />
          </div>

          <div>
            <label className="mb-1.5 block text-[11px] font-bold uppercase tracking-wider text-gray-700">
              Password
            </label>
            <div className="relative">
              <input
                type={showPassword ? 'text' : 'password'}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
                className="w-full rounded-lg border border-gray-200 bg-brand-light/40 px-4 py-2.5 pr-10 text-sm text-gray-900 outline-none transition-all placeholder:text-gray-400 focus:border-brand focus:bg-white focus:ring-2 focus:ring-brand/10"
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 transition-colors hover:text-gray-600"
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>
          </div>

          <div className="flex items-center justify-between gap-3 text-xs">
            <label className="flex cursor-pointer items-center gap-2 text-gray-600">
              <input
                type="checkbox"
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
                className="h-4 w-4 rounded border-gray-300 text-brand focus:ring-brand"
              />
              <span>Remember Me</span>
            </label>
            <Link
              to="/forgot-password"
              className="font-medium text-brand transition-colors duration-200 hover:text-brand-dark hover:underline"
            >
              Forgot Password?
            </Link>
          </div>

          {/* =================================================
              LOGIN BUTTON
          ================================================== */}
          <Button
            type="submit"
            variant="primary"
            className="
              flex
              h-11
              w-full
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
            Login
            <ArrowRight
              size={16}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </Button>
        </form>

        <p className="mt-6 text-center text-sm text-gray-500">
          Don't have an account?{' '}
          <Link
            to="/company/signup"
            className="font-semibold text-brand hover:text-brand-dark hover:underline"
          >
            Signup
          </Link>
        </p>
      </div>
    </div>
  );
};

export default CompanyLoginForm;