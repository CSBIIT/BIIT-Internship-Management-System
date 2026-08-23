import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Logo from '../../../components/common/Logo';
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
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.email) {
      newErrors.email = 'Email address is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Enter a valid email address';
    }
    if (!formData.password) {
      newErrors.password = 'Password is required';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    setLoading(true);
    try {
      // TODO: replace with real API call via services/authService.js
      // const res = await authService.login(formData);
      console.log('Logging in with', formData, 'Remember me:', rememberMe);

      // Temporary: simulate a successful login until a real backend exists
      login({ name: 'Ali Khan', email: formData.email, role: 'student' });

      navigate('/student/dashboard');
    } catch (err) {
      setErrors({ form: 'Invalid email or password. Please try again.' });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white rounded-2xl shadow-xl w-full max-w-[340px] sm:max-w-sm p-6 sm:p-8">
      <div className="flex justify-center mb-4">
        <Logo className="h-8 sm:h-10" />
      </div>

      <h1 className="text-lg sm:text-xl font-bold text-brand text-center mb-1">Student Login</h1>
      <p className="text-gray-500 text-xs text-center mb-5 sm:mb-6">
        Access for the Internship Management System
      </p>

      <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4">
        {errors.form && (
          <p className="text-red-500 text-xs text-center bg-red-50 py-2 rounded-lg">
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

        <div className="flex items-center justify-between text-xs">
          <label className="flex items-center gap-2 text-gray-600 cursor-pointer">
            <input
              type="checkbox"
              checked={rememberMe}
              onChange={(e) => setRememberMe(e.target.checked)}
              className="rounded border-gray-300 text-brand focus:ring-brand"
            />
            Remember Me
          </label>
          <Link to="/forgot-password" className="text-brand hover:underline">
            Forgot Password?
          </Link>
        </div>

        <Button type="submit" className="w-full justify-center" disabled={loading}>
          {loading ? 'Logging in...' : 'Login'}
        </Button>

        <p className="text-center text-xs text-gray-500">
          Don't have an account?{' '}
          <Link to="/signup" className="text-brand font-medium hover:underline">
            Sign up
          </Link>
        </p>
      </form>
    </div>
  );
};

export default LoginForm;