import { GraduationCap, Building2 } from 'lucide-react';
import RoleCard from '../components/RoleCard';
import heroImageDesktop from '../../../assets/images/BIIT.jpeg';

const SelectRolePage = () => {
  return (
    <div className="relative min-h-[calc(100vh-120px)] sm:min-h-[calc(100vh-140px)] flex items-center justify-center py-10 sm:py-14 px-4 sm:px-6">
      <div className="absolute inset-0">
        <img
          src={heroImageDesktop}
          alt=""
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/60" />
      </div>

      <div className="relative z-10 text-center max-w-3xl w-full">
        <h1 className="text-white text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight mb-2">
          Bridging Education and
          <br className="hidden sm:block" /> Professional Workforce
        </h1>
        <p className="text-white/80 text-sm sm:text-base mb-2">Welcome to the Portal</p>
        <p className="text-white/60 text-xs sm:text-sm mb-10">
          Please select your role to continue to your tailored dashboard experience.
        </p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <RoleCard
            icon={GraduationCap}
            title="Student"
            description="Explore internship opportunities, manage your applications, and track your professional development journey."
            buttonLabel="Login as Student"
            to="/login"
          />
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
  );
};

export default SelectRolePage;