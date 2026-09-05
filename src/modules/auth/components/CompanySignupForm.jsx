import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Building2 } from 'lucide-react';
import Button from '../../../components/common/Button';

const CompanySignupForm = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // TODO: Wire to company registration service
    console.log('Company signup:', { email });
  };

  return (
    <div className="px-6 py-8 sm:px-8 sm:py-10">

      {/* Company Icon - Same as Login Form */}
      <div
        className="mb-5 flex justify-start animate-fade-in-up"
        style={{ animationDelay: '400ms' }}
      >
        <div
          className="
            relative
            z-10
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
            hover:scale-105
            hover:bg-brand
            hover:text-white
          "
        >
          <Building2
            size={24}
            strokeWidth={2}
          />
        </div>
      </div>

      {/* Heading */}
      <div
        className="mb-6 text-left animate-fade-in-up"
        style={{ animationDelay: '450ms' }}
      >
        <h2 className="text-xl font-bold text-gray-900 sm:text-2xl">
          Company Signup
        </h2>

        <p className="mt-1.5 text-sm text-gray-500">
          Register your BIIT Internship System account
        </p>
      </div>

      {/* Form */}
      <form
        onSubmit={handleSubmit}
        className="space-y-5 animate-fade-in-up"
        style={{ animationDelay: '500ms' }}
      >
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

        <div
          className="pt-1 animate-fade-in-up"
          style={{ animationDelay: '550ms' }}
        >
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
            Sign Up
          </Button>
        </div>
      </form>

      {/* Login Link */}
      <p
        className="mt-6 text-center text-sm text-gray-500 animate-fade-in-up"
        style={{ animationDelay: '600ms' }}
      >
        Already have an account?{' '}
        <Link
          to="/company/login"
          className="font-semibold text-brand hover:text-brand-dark hover:underline"
        >
          Login
        </Link>
      </p>
    </div>
  );
};

export default CompanySignupForm;