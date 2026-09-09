import { useEffect } from 'react';
import { useLocation, useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../../../context/AuthContext';
import Logo from '../../../components/common/Logo';
import Button from '../../../components/common/Button';
import {
  ArrowLeft,
  HelpCircle,
  User,
  GraduationCap,
  Briefcase,
  Building2,
  Settings,
  CheckCircle,
  AlertTriangle,
  FileText,
  Mail,
  Phone,
  MapPin,
  Clock,
  Check,
  X,
  Lock,
  Shield,
  Globe,
  MessageSquare,
  Search,
  PenTool,
  MessageCircle,
  ChevronRight,
  Users,
} from 'lucide-react';

const cardClass = `
  group
  relative
  overflow-hidden
  rounded-2xl
  border
  border-gray-100
  bg-white
  shadow-sm
  transition-all
  duration-300
  ease-out
  hover:-translate-y-1
  hover:shadow-lg
`;

const greenTopLine = `
  pointer-events-none
  absolute
  left-0
  top-0
  z-20
  h-0.5
  w-0
  bg-brand
  transition-all
  duration-300
  group-hover:w-full
`;

const SectionTitle = ({ icon: Icon, title, subtitle }) => (
  <div className="mb-6 animate-fade-in-up">
    <div className="flex items-center gap-3">
      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-light text-brand">
        <Icon size={20} />
      </div>
      <div>
        <h2 className="text-xl font-bold text-gray-900 sm:text-2xl">{title}</h2>
        {subtitle && <p className="mt-0.5 text-sm text-gray-500">{subtitle}</p>}
      </div>
    </div>
  </div>
);

const InfoCard = ({ icon: Icon, title, children, delay = 0, variant = 'default' }) => {
  const isGreen = variant === 'green';
  return (
    <div className={`${isGreen ? 'rounded-2xl bg-brand p-5 sm:p-6 text-white' : cardClass} animate-fade-in-up`} style={{ animationDelay: `${delay}ms` }}>
      {!isGreen && <div className={greenTopLine} />}
      <div className={`relative z-10 ${isGreen ? '' : 'p-5 sm:p-6'}`}>
        <div className="mb-4 flex items-center gap-2.5">
          <div className={`flex h-9 w-9 items-center justify-center rounded-lg ${isGreen ? 'bg-white/15 text-white' : 'bg-brand-light text-brand'}`}>
            <Icon size={16} />
          </div>
          <h3 className={`text-sm font-bold ${isGreen ? 'text-white' : 'text-gray-900'}`}>{title}</h3>
        </div>
        <div className={`space-y-3 text-xs leading-relaxed ${isGreen ? 'text-white/85' : 'text-gray-600'}`}>
          {children}
        </div>
      </div>
    </div>
  );
};

const Tag = ({ children }) => (
  <span className="inline-block rounded-md border border-gray-200 bg-gray-50 px-2.5 py-1 text-[11px] font-medium text-gray-600">
    {children}
  </span>
);

const ListItem = ({ children, type = 'check' }) => (
  <div className="flex items-start gap-2">
    {type === 'check' ? (
      <Check size={14} className="mt-0.5 shrink-0 text-brand" />
    ) : type === 'bullet' ? (
      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand" />
    ) : (
      <X size={14} className="mt-0.5 shrink-0 text-red-500" />
    )}
    <span>{children}</span>
  </div>
);

const FooterInfoPage = () => {
  const { hash } = useLocation();
  const navigate = useNavigate();
  const { user } = useAuth();

  const getDashboardLink = () => {
    if (!user) return '/';
    if (user.role === 'student') return '/student/dashboard';
    if (user.role === 'company') return '/company/dashboard';
    if (user.role === 'admin') return '/admin/dashboard';
    return '/';
  };

  useEffect(() => {
    if (hash) {
      const id = hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 100);
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [hash]);

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      {/* Minimal Header */}
      <header className="sticky top-0 z-30 border-b border-gray-100 bg-white/95 px-4 py-3 backdrop-blur-sm sm:px-6">
        <div className="mx-auto flex max-w-6xl items-center justify-between">
          <Link to={getDashboardLink()} className="transition-opacity hover:opacity-80">
            <Logo className="h-8" />
          </Link>
          <button
            onClick={() => navigate(-1)}
            className="flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium text-gray-600 transition-all hover:bg-gray-100 hover:text-brand"
          >
            <ArrowLeft size={16} />
            Back
          </button>
        </div>
      </header>

      {/* =====================================================
          HERO — Same as Opportunities / About / Contact
      ====================================================== */}
      <section className="opportunities-hero relative overflow-hidden">
        {/* Animated grid pattern */}
        <div className="hero-grid-pattern" />

        {/* Floating orbs */}
        <div className="hero-orb hero-orb-one" />
        <div className="hero-orb hero-orb-two" />
        <div className="hero-orb hero-orb-three" />

        {/* Content */}
        <div className="relative z-10 mx-auto max-w-5xl px-4 text-center sm:px-6">
          <div className="hero-label-wrap">
            <span className="hero-label">BIIT Career Services</span>
          </div>

          <h1 className="hero-title">
            <span className="hero-title-line hero-title-white">Help &</span>
            <span className="hero-title-line hero-title-green">Information Center</span>
          </h1>

          <p className="hero-description">
            Everything you need to know about navigating the BIIT Internship Management System, understanding our policies, and getting support.
          </p>

          <div className="hero-indicators">
            <span className="hero-indicator" />
            <span className="hero-indicator hero-indicator-delay-one" />
            <span className="hero-indicator hero-indicator-delay-two" />
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6 lg:px-10">
        {/* =====================================================
            SUPPORT CENTER
        ====================================================== */}
        <section id="support" className="scroll-mt-24 pt-8">
          <SectionTitle
            icon={HelpCircle}
            title="Support Center"
            subtitle="Need help with the BIIT Internship Management System?"
          />

          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
            <InfoCard icon={User} title="Account & Login" delay={0}>
              <ListItem>Email/password verification required.</ListItem>
              <ListItem>Forgot password flow available via email.</ListItem>
              <ListItem>Distinct Student, Company, and Admin account types.</ListItem>
              <div className="mt-3 rounded-lg bg-red-50 p-2.5 text-[11px] font-semibold text-red-600">
                <AlertTriangle size={12} className="mb-1 inline" /> Never share your account passwords.
              </div>
            </InfoCard>

            <InfoCard icon={GraduationCap} title="Student Profile" delay={100}>
              <p>Keep your information up-to-date to attract top companies.</p>
              <ListItem>Upload latest CV/Resume (PDF).</ListItem>
              <ListItem>Update technical and soft skills regularly.</ListItem>
              <div className="mt-3 rounded-lg bg-amber-50 p-2.5 text-[11px] text-amber-700">
                <Clock size={12} className="mb-1 inline" /> You must complete your profile 100% before participating in internship drives.
              </div>
            </InfoCard>

            <InfoCard icon={Briefcase} title="Internship Applications" delay={200}>
              <p>Navigate the process from finding opportunities to securing a role.</p>
              <div className="mt-3 flex flex-wrap gap-1.5">
                <Tag>Applied</Tag>
                <Tag>Shortlisted</Tag>
                <Tag>Interview Scheduled</Tag>
                <Tag>Selected</Tag>
                <Tag>Rejected</Tag>
              </div>
            </InfoCard>

            <InfoCard icon={Building2} title="Company Recruitment" delay={300}>
              <ListItem type="bullet">Review student profiles and comprehensive resumes.</ListItem>
              <ListItem type="bullet">Efficient shortlisting tools and applicant tracking.</ListItem>
              <ListItem type="bullet">Maintain recruitment history and statistics.</ListItem>
            </InfoCard>

            <InfoCard icon={Settings} title="Technical Support" delay={400} variant="green">
              <p>Encountering bugs or technical issues? Our support team is available during regular academic hours to assist you.</p>
              <div className="mt-4 flex items-center gap-2 rounded-lg bg-white/15 px-3 py-2 text-xs font-medium">
                <Clock size={14} /> Support Hours: Mon-Fri, 9:00 AM - 5:00 PM
              </div>
            </InfoCard>
          </div>
        </section>

        {/* =====================================================
            PRIVACY POLICY
        ====================================================== */}
        <section id="privacy" className="scroll-mt-24 pt-16">
          <SectionTitle
            icon={Lock}
            title="Privacy Policy"
            subtitle="Your privacy and personal information are important to us."
          />

          <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
            <InfoCard icon={User} title="Student Information Collected" delay={0}>
              <div className="flex flex-wrap gap-1.5">
                <Tag>Full Name</Tag>
                <Tag>Student ID (ARID)</Tag>
                <Tag>Email</Tag>
                <Tag>Academic Info</Tag>
                <Tag>Skills</Tag>
                <Tag>Resume/CV</Tag>
                <Tag>Enrollment Status</Tag>
              </div>
            </InfoCard>

            <InfoCard icon={Globe} title="Closed BIIT Ecosystem" delay={100}>
              <p>This platform operates as a closed ecosystem exclusively for BIIT students, administration, and verified industry partners. Data is not shared with third-party marketers or external public job boards.</p>
            </InfoCard>

            <InfoCard icon={Building2} title="Company Information Collected" delay={200}>
              <ListItem type="bullet">Representative contact information.</ListItem>
              <ListItem type="bullet">Company profile and technical requirements.</ListItem>
              <ListItem type="bullet">Recruitment records and history within the portal.</ListItem>
            </InfoCard>

            <InfoCard icon={Shield} title="Information Security" delay={300}>
              <p>We implement industry-standard security measures to protect against unauthorized access, alteration, or destruction of your personal information.</p>
              <p className="mt-2 font-semibold text-gray-800">Role-Based Access:</p>
              <div className="mt-2 space-y-2 rounded-lg bg-gray-50 p-3">
                <div className="flex justify-between text-xs">
                  <span className="font-medium text-gray-700">Students</span>
                  <span className="text-gray-500">Manage own profile & applications</span>
                </div>
                <div className="flex justify-between text-xs">
                  <span className="font-medium text-gray-700">Companies</span>
                  <span className="text-gray-500">View only applied/shortlisted profiles</span>
                </div>
                <div className="flex justify-between text-xs">
                  <span className="font-medium text-gray-700">Admin</span>
                  <span className="text-gray-500">Full oversight & moderation</span>
                </div>
              </div>
            </InfoCard>
          </div>

          <p className="mt-6 text-right text-xs text-gray-400">Last Updated: October 24, 2024</p>
        </section>

        {/* =====================================================
            TERMS OF SERVICE
        ====================================================== */}
        <section id="terms" className="scroll-mt-24 pt-16">
          <SectionTitle
            icon={FileText}
            title="Terms of Service"
            subtitle="Welcome to the BIIT Internship Management System."
          />

          <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
            <InfoCard icon={GraduationCap} title="Student Responsibilities" delay={0}>
              <ListItem type="bullet">Provide accurate academic and personal information.</ListItem>
              <ListItem type="bullet">Upload genuine resumes outlining verifiable skills.</ListItem>
              <ListItem type="bullet">Maintain professional communication at all times.</ListItem>
              <ListItem type="bullet">Meet all BIIT eligibility criteria before applying.</ListItem>
            </InfoCard>

            <InfoCard icon={AlertTriangle} title="Prohibited Activities" delay={100}>
              <p className="text-red-600">Users may not engage in falsification of records, unauthorized scraping of data, sharing platform access credentials, or using the platform for non-academic/non-internship purposes. Violations may result in disciplinary action from BIIT.</p>
            </InfoCard>

            <InfoCard icon={Building2} title="Company Responsibilities" delay={200}>
              <p>Provide accurate job descriptions, conduct fair assessments, and communicate decisions in a timely manner through the portal.</p>
            </InfoCard>

            <InfoCard icon={FileText} title="Application Disclaimer" delay={300}>
              <div className="rounded-lg bg-gray-50 p-4 text-center">
                <h4 className="text-sm font-bold text-gray-900">No Guarantee of Selection</h4>
                <p className="mt-2 text-xs text-gray-500">Submitting an application through this portal does not guarantee selection, interview, or placement.</p>
              </div>
              <div className="mt-4">
                <p className="mb-2 text-xs font-semibold text-gray-700">Visual Recruitment Timeline:</p>
                <div className="flex items-center justify-between rounded-lg bg-gray-50 p-3">
                  <div className="flex flex-col items-center gap-1">
                    <div className="flex h-6 w-6 items-center justify-center rounded-full bg-gray-200 text-gray-500">
                      <Clock size={12} />
                    </div>
                    <span className="text-[10px] text-gray-500">Applied</span>
                  </div>
                  <ChevronRight size={12} className="text-gray-300" />
                  <div className="flex flex-col items-center gap-1">
                    <div className="flex h-6 w-6 items-center justify-center rounded-full bg-gray-200 text-gray-500">
                      <Check size={12} />
                    </div>
                    <span className="text-[10px] text-gray-500">Shortlisted</span>
                  </div>
                  <ChevronRight size={12} className="text-gray-300" />
                  <div className="flex flex-col items-center gap-1">
                    <div className="flex h-6 w-6 items-center justify-center rounded-full bg-gray-200 text-gray-500">
                      <Users size={12} />
                    </div>
                    <span className="text-[10px] text-gray-500">Interview</span>
                  </div>
                  <ChevronRight size={12} className="text-gray-300" />
                  <div className="flex flex-col items-center gap-1">
                    <div className="flex h-6 w-6 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
                      <CheckCircle size={12} />
                    </div>
                    <span className="text-[10px] font-medium text-emerald-700">Selected</span>
                  </div>
                </div>
              </div>
              <div className="mt-4 flex items-start gap-2 rounded-lg bg-brand-light p-3 text-brand">
                <CheckCircle size={14} className="mt-0.5 shrink-0" />
                <span className="text-[11px]">By using this system, you agree to abide by all institutional rules regarding internship completion and account security.</span>
              </div>
            </InfoCard>

            <InfoCard icon={Settings} title="Admin Responsibilities" delay={400}>
              <p>Verify company profiles, monitor platform usage, and facilitate dispute resolution between parties.</p>
            </InfoCard>
          </div>
        </section>

        {/* =====================================================
            CONTACT CAREER SERVICES
        ====================================================== */}
        <section id="contact" className="scroll-mt-24 pt-16">
          <SectionTitle
            icon={MessageSquare}
            title="Contact Career Services"
            subtitle="Need assistance with your internship or career development process?"
          />

          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
            {/* Left: Areas of Assistance */}
            <div className="space-y-4">
              <h3 className="text-sm font-bold text-gray-900">Areas of Assistance</h3>
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                {[
                  { icon: CheckCircle, label: 'Internship Eligibility' },
                  { icon: Search, label: 'Finding Opportunities' },
                  { icon: PenTool, label: 'Resume & Profile Review' },
                  { icon: MessageCircle, label: 'Interview Preparation' },
                ].map((item, index) => (
                  <div
                    key={item.label}
                    className={`${cardClass} flex items-center gap-3 p-4 animate-fade-in-up`}
                    style={{ animationDelay: `${index * 75}ms` }}
                  >
                    <div className={greenTopLine} />
                    <div className="relative z-10 flex items-center gap-3">
                      <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-brand-light text-brand">
                        <item.icon size={16} />
                      </div>
                      <span className="text-xs font-semibold text-gray-800">{item.label}</span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Referral Flow */}
              <div className={`${cardClass} p-5 animate-fade-in-up`} style={{ animationDelay: '300ms' }}>
                <div className={greenTopLine} />
                <div className="relative z-10">
                  <div className="mb-3 flex items-center gap-2 text-brand">
                    <Users size={16} />
                    <span className="text-xs font-bold">Student Referral Flow</span>
                  </div>
                  <div className="flex flex-wrap items-center gap-1 text-[10px] font-medium uppercase tracking-wider text-gray-400">
                    <span className="rounded bg-gray-100 px-2 py-1">Student</span>
                    <ChevronRight size={12} />
                    <span className="rounded bg-gray-100 px-2 py-1">Career Services</span>
                    <ChevronRight size={12} />
                    <span className="rounded bg-gray-100 px-2 py-1">Verification</span>
                    <ChevronRight size={12} />
                    <span className="rounded bg-gray-100 px-2 py-1">Company Referral</span>
                    <ChevronRight size={12} />
                    <span className="rounded bg-gray-100 px-2 py-1">Review</span>
                    <ChevronRight size={12} />
                    <span className="rounded bg-gray-100 px-2 py-1">Interview</span>
                    <ChevronRight size={12} />
                    <span className="rounded bg-brand-light px-2 py-1 text-brand">Decision</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Contact Card */}
            <div className={`${cardClass} animate-fade-in-up`} style={{ animationDelay: '200ms' }}>
              <div className={greenTopLine} />
              <div className="relative z-10 p-5 sm:p-6">
                <div className="mb-1 h-1 w-16 rounded-full bg-brand" />
                <h3 className="mt-3 text-lg font-bold text-gray-900">BIIT Career Services</h3>
                <p className="text-xs text-gray-500">Industrial Linkages Office</p>

                <div className="mt-6 space-y-4">
                  <div className="flex items-start gap-3">
                    <MapPin size={16} className="mt-0.5 shrink-0 text-gray-400" />
                    <div>
                      <p className="text-xs font-semibold text-gray-700">Address</p>
                      <p className="text-xs text-gray-500">108-A/1 Murree Rd, Block A Satellite Town, Rawalpindi</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Phone size={16} className="mt-0.5 shrink-0 text-gray-400" />
                    <div>
                      <p className="text-xs font-semibold text-gray-700">Phone</p>
                      <p className="text-xs text-gray-500">(+92) 336-0572652</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Mail size={16} className="mt-0.5 shrink-0 text-gray-400" />
                    <div>
                      <p className="text-xs font-semibold text-gray-700">Email</p>
                      <p className="text-xs text-gray-500">admissions@biit.edu.pk</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Clock size={16} className="mt-0.5 shrink-0 text-gray-400" />
                    <div>
                      <p className="text-xs font-semibold text-gray-700">Office Hours</p>
                      <p className="text-xs text-gray-500">Mon-Fri, 9:00 AM - 5:00 PM</p>
                    </div>
                  </div>
                </div>

                <div className="mt-6 grid grid-cols-2 gap-3">
                  <a href="tel:+923360572652">
                    <Button variant="primary" className="w-full py-2.5 text-xs">
                      <Phone size={14} className="mr-1" /> Call Now
                    </Button>
                  </a>
                  <a href="mailto:admissions@biit.edu.pk">
                    <Button variant="outline" className="w-full py-2.5 text-xs">
                      <Mail size={14} className="mr-1" /> Send Email
                    </Button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default FooterInfoPage;