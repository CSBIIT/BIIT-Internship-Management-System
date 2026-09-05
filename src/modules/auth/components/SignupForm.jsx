import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { GraduationCap, ArrowRight } from 'lucide-react';
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
      console.log('Signing up with', formData);
      navigate('/login');
    } catch (err) {
      setErrors({ form: 'Something went wrong. Please try again.' });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="
        group
        relative
        flex
        w-full
        flex-col
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
        group-hover:-translate-y-2
        group-hover:border-brand/30
        group-hover:shadow-2xl
        group-hover:shadow-brand/20
        animate-fade-in-up
      "
      style={{ animationDelay: '350ms' }}
    >
      {/* =====================================================
          LEFT GREEN ACCENT
      ====================================================== */}
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

      {/* =====================================================
          DECORATIVE GLOW — TOP RIGHT
      ====================================================== */}
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

      {/* =====================================================
          DECORATIVE GLOW — BOTTOM LEFT
      ====================================================== */}
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

      {/* =====================================================
          CARD CONTENT
      ====================================================== */}
      <div
        className="
          relative
          z-10
          flex
          flex-col
          px-7
          py-6
          sm:px-8
          sm:py-7
        "
      >
        {/* =================================================
            GRADUATION CAP ICON (same as LoginForm)
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
          <GraduationCap
            size={24}
            strokeWidth={2}
            className="
              transition-transform
              duration-500
              group-hover:scale-110
            "
          />
        </div>

        {/* =================================================
            TITLE + DESCRIPTION
        ================================================== */}
        <div
          className="animate-fade-in-up"
          style={{ animationDelay: '450ms' }}
        >
          <h1
            className="
              text-xl
              font-bold
              text-gray-900
            "
          >
            Student Signup
          </h1>

          <p
            className="
              mt-2
              min-h-[48px]
              text-sm
              leading-6
              text-gray-500
            "
          >
            Register your BIIT Internship System account
          </p>
        </div>

        {/* =================================================
            FORM
        ================================================== */}
        <form
          onSubmit={handleSubmit}
          className="
            mt-5
            space-y-3.5
            animate-fade-in-up
          "
          style={{ animationDelay: '500ms' }}
        >
          {/* Form error */}
          {errors.form && (
            <p
              className="
                rounded-lg
                bg-red-50
                px-3
                py-2
                text-center
                text-xs
                text-red-500
              "
            >
              {errors.form}
            </p>
          )}

          {/* Email */}
          <Input
            label="Email Address"
            type="email"
            name="email"
            placeholder="2023-ARID-1234@biit.edu.pk"
            value={formData.email}
            onChange={handleChange}
            error={errors.email}
          />

          {/* =================================================
              SIGNUP BUTTON
          ================================================== */}
          <Button
            type="submit"
            className="
              relative
              z-10
              mt-auto
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
            {loading ? 'Signing up...' : 'Sign Up'}

            <ArrowRight
              size={16}
              className="
                transition-transform
                duration-300
                group-hover:translate-x-1
              "
            />
          </Button>

          {/* Login link */}
          <p
            className="
              pt-0.5
              text-center
              text-xs
              text-gray-500
            "
          >
            Already have an account?{' '}
            <Link
              to="/login"
              className="
                font-medium
                text-brand
                transition-colors
                duration-200
                hover:text-brand-dark
                hover:underline
              "
            >
              Login
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default SignupForm;