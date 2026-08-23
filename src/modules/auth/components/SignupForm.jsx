import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Logo from '../../../components/common/Logo';
import Input from '../../../components/common/Input';
import Button from '../../../components/common/Button';

const SignupForm = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ email: '' });
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
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    setLoading(true);
    try {
      // TODO: replace with real API call via services/authService.js
      // const res = await authService.signup(formData);
      console.log('Signing up with', formData);
      navigate('/login');
    } catch (err) {
      setErrors({ form: 'Something went wrong. Please try again.' });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white rounded-2xl shadow-xl w-full max-w-[340px] sm:max-w-sm p-6 sm:p-8">
      <div className="flex justify-center mb-4">
        <Logo className="h-8 sm:h-10" />
      </div>

      <h1 className="text-lg sm:text-xl font-bold text-brand text-center mb-1">Student Signup</h1>
      <p className="text-gray-500 text-xs text-center mb-5 sm:mb-6">
        Register your BIIT Internship System account
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

        <Button type="submit" className="w-full justify-center" disabled={loading}>
          {loading ? 'Signing up...' : 'Sign Up'}
        </Button>

        <p className="text-center text-xs text-gray-500">
          Already have an account?{' '}
          <Link to="/login" className="text-brand font-medium hover:underline">
            Login
          </Link>
        </p>
      </form>
    </div>
  );
};

export default SignupForm;