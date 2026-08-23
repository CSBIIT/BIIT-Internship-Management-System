import SignupForm from '../components/SignupForm';
import heroImageDesktop from '../../../assets/images/BIIT.jpeg';

const SignupPage = () => {
  return (
    <div className="relative min-h-[calc(100vh-120px)] sm:min-h-[calc(100vh-140px)] flex items-center justify-center py-8 sm:py-12 px-4 sm:px-6">
      <div className="absolute inset-0">
        <img
          src={heroImageDesktop}
          alt=""
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/60" />
      </div>

      <div className="relative z-10 w-full flex justify-center">
        <SignupForm />
      </div>
    </div>
  );
};

export default SignupPage;