import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, MapPin, Clock, Briefcase, ExternalLink } from 'lucide-react';
import Button from '../../../components/common/Button';

// Static placeholder data — will be replaced with a real API call using the :id param
const jobDetails = {
  title: 'Android Developer Intern',
  company: 'Monique InfoTech',
  location: 'Islamabad',
  type: 'Internship - Paid',
  postedAgo: 'Posted 1 day ago',
  description:
    "We're looking for an Android Developer Intern to join our team and work alongside real-world projects. If you're passionate about mobile development and eager to learn, this internship is for you.",
  responsibilities: [
    'Collaborate with cross-functional teams to define and build new features',
    'Work on bug fixing and improving application performance',
    'Continually discover, evaluate, and implement new technologies to maximize development efficiency',
    'Unit-test code for robustness, including edge cases, usability, and general reliability',
  ],
  requirements: [
    'Basic understanding of Android SDK and different versions of Android',
    'Familiarity with RESTful APIs to connect Android applications to back-end services',
    'Strong knowledge of Android UI design principles, patterns, and best practices',
    'Experience with offline storage, threading, and performance tuning',
  ],
  skills: ['Java', 'Kotlin', 'Android SDK', 'REST API', 'Git'],
  aboutCompany:
    'Monique InfoTech is a leading technology solutions provider specializing in mobile and web application development. We work with clients across various industries, delivering innovative solutions with the latest technologies.',
};

const JobDescriptionPage = () => {
  const { jobId } = useParams();

  return (
    <div className="space-y-6 max-w-3xl">
      <Link
        to="/student/find-jobs"
        className="flex items-center gap-1 text-sm text-gray-500 hover:text-brand w-fit"
      >
        <ArrowLeft size={14} /> Back to Jobs
      </Link>

      <div className="bg-white rounded-2xl border border-gray-100 p-5 sm:p-6">
        <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
          <div>
            <h1 className="text-xl sm:text-2xl font-bold mb-1">{jobDetails.title}</h1>
            <p className="text-gray-500 text-sm mb-3">{jobDetails.company}</p>

            <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-gray-500">
              <span className="flex items-center gap-1">
                <MapPin size={12} /> {jobDetails.location}
              </span>
              <span className="flex items-center gap-1">
                <Briefcase size={12} /> {jobDetails.type}
              </span>
              <span className="flex items-center gap-1">
                <Clock size={12} /> {jobDetails.postedAgo}
              </span>
            </div>
          </div>

          <Button icon={ExternalLink} className="shrink-0 w-full sm:w-auto justify-center">
            Apply Now
          </Button>
        </div>
      </div>

      <div className="bg-white rounded-2xl border border-gray-100 p-5 sm:p-6 space-y-6">
        <div>
          <h2 className="font-bold text-base mb-2">Job Description</h2>
          <p className="text-sm text-gray-600 leading-relaxed">{jobDetails.description}</p>
        </div>

        <div>
          <h2 className="font-bold text-base mb-2">Responsibilities</h2>
          <ul className="space-y-2">
            {jobDetails.responsibilities.map((item) => (
              <li key={item} className="text-sm text-gray-600 flex gap-2">
                <span className="text-brand shrink-0">•</span> {item}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="font-bold text-base mb-2">Requirements</h2>
          <ul className="space-y-2">
            {jobDetails.requirements.map((item) => (
              <li key={item} className="text-sm text-gray-600 flex gap-2">
                <span className="text-brand shrink-0">•</span> {item}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="font-bold text-base mb-2">Skills</h2>
          <div className="flex flex-wrap gap-2">
            {jobDetails.skills.map((skill) => (
              <span key={skill} className="text-xs bg-brand-light text-brand px-3 py-1 rounded-full">
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-white rounded-2xl border border-gray-100 p-5 sm:p-6">
        <div className="flex items-center justify-between mb-2">
          <h2 className="font-bold text-base">About {jobDetails.company}</h2>
          <button className="text-xs text-brand hover:underline shrink-0">View Company</button>
        </div>
        <p className="text-sm text-gray-600 leading-relaxed">{jobDetails.aboutCompany}</p>
      </div>
    </div>
  );
};

export default JobDescriptionPage;