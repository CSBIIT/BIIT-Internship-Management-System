import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { GraduationCap, ArrowRight } from 'lucide-react';
import Input from '../../../components/common/Input';
import PasswordInput from '../../../components/common/PasswordInput';
import Button from '../../../components/common/Button';
import { useAuth } from '../../../context/AuthContext';

const LoginForm = () => {
  const navigate = useNavigate();
  const { login } = useAuth();

  const [formData, setFormData] = useState({ email: '', password: '' });
  const [rememberMe, setRememberMe] = useState(false);
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    if (errors[e.target.name]) {
      setErrors((prev) => ({ ...prev, [e.target.name]: '' }));
    }
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.email) newErrors.email = 'Email address is required';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Enter a valid email address';
    if (!formData.password) newErrors.password = 'Password is required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    setLoading(true);
    try {
      console.log('Logging in with', formData, 'Remember me:', rememberMe);
      login({ name: 'Ali Khan', email: formData.email, role: 'student' });
      navigate('/student/dashboard');
    } catch (err) {
      setErrors({ form: 'Invalid email or password. Please try again.' });
    } finally {
      setLoading(false);
    }
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
      {/* Left green accent */}
      <div className="absolute left-0 top-0 h-full w-1 bg-brand transition-all duration-500 group-hover:w-1.5" />

      {/* Decorative glow — top right */}
      <div className="pointer-events-none absolute -right-12 -top-12 h-32 w-32 rounded-full bg-brand/5 transition-transform duration-700 group-hover:scale-150" />

      {/* Decorative glow — bottom left */}
      <div className="pointer-events-none absolute -bottom-20 -left-20 h-40 w-40 rounded-full bg-emerald-100/35 transition-transform duration-700 group-hover:scale-110" />

      {/* Card content */}
      <div className="relative z-10 px-7 py-6 sm:px-8 sm:py-7">
        {/* Icon */}
        <div
          className="relative z-10 mb-5 flex h-12 w-12 items-center justify-center rounded-xl border border-brand/10 bg-brand/10 text-brand transition-all duration-500 group-hover:scale-105 group-hover:bg-brand group-hover:text-white animate-fade-in-up"
          style={{ animationDelay: '400ms' }}
        >
          <GraduationCap size={24} strokeWidth={2} className="transition-transform duration-500 group-hover:scale-110" />
        </div>

        {/* Title */}
        <div className="animate-fade-in-up" style={{ animationDelay: '450ms' }}>
          <h1 className="text-xl font-bold text-gray-900">Student</h1>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="mt-5 space-y-3.5 animate-fade-in-up" style={{ animationDelay: '500ms' }}>
          {errors.form && (
            <p className="rounded-lg bg-red-50 px-3 py-2 text-center text-xs text-red-500">
              {errors.form}
            </p>
          )}

          <Input
            label="Email Address"
            type="email"
            name="email"
            placeholder="2023-ARID-1234@biit.edu.pk"
            value={formData.email}
            onChange={handleChange}
            error={errors.email}
          />

          <PasswordInput
            label="Password"
            name="password"
            placeholder="Enter your password"
            value={formData.password}
            onChange={handleChange}
            error={errors.password}
          />

          {/* Remember / Forgot */}
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

            <Link to="/forgot-password" className="font-medium text-brand transition-colors duration-200 hover:text-brand-dark hover:underline">
              Forgot Password?
            </Link>
          </div>

          {/* Login button — mt-auto removed, natural spacing now */}
          <Button
            type="submit"
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
            disabled={loading}
          >
            {loading ? 'Logging in...' : 'Login'}

            <ArrowRight
              size={16}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </Button>

          {/* Signup */}
          <p className="pt-0.5 text-center text-xs text-gray-500">
            Don't have an account?{' '}
            <Link to="/signup" className="font-medium text-brand transition-colors duration-200 hover:text-brand-dark hover:underline">
              Sign up
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;