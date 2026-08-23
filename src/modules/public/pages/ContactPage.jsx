import { useState } from 'react';
import { Mail, Phone, Clock, MapPin } from 'lucide-react';
import Input from '../../../components/common/Input';
import Select from '../../../components/common/Select';
import Textarea from '../../../components/common/Textarea';
import Button from '../../../components/common/Button';

const contactInfo = [
  { icon: Mail, label: 'Email', value: 'career.services@biit.edu.pk' },
  { icon: Phone, label: 'Phone', value: '+92 300 1234567' },
  { icon: Clock, label: 'Office Hours', value: 'Mon-Fri: 9AM - 5PM' },
  { icon: MapPin, label: 'Location', value: 'CS Office, BIT Wah' },
];

const userTypeOptions = [
  { value: 'student', label: 'Student' },
  { value: 'company', label: 'Company' },
  { value: 'other', label: 'Other' },
];

const subjectOptions = [
  { value: 'general', label: 'General Inquiry' },
  { value: 'technical', label: 'Technical Issue' },
  { value: 'partnership', label: 'Partnership' },
];

const ContactPage = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    userType: '',
    subject: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: replace with real API call
    console.log('Contact form submitted:', formData);
    setSubmitted(true);
  };

  return (
    <div className="bg-white">
      {/* Green hero */}
      <section className="bg-brand px-4 sm:px-6 lg:px-10 py-14 sm:py-20 text-center">
        <h1 className="text-white text-3xl sm:text-4xl lg:text-5xl font-bold mb-3">
          Contact Career Services
        </h1>
        <p className="text-white/70 text-sm sm:text-base">
          Have a question? We're here to help.
        </p>
      </section>

      {/* Contact info cards */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 -mt-8 sm:-mt-10 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {contactInfo.map(({ icon: Icon, label, value }) => (
            <div key={label} className="bg-white rounded-xl shadow-md p-5 flex items-start gap-3">
              <div className="bg-brand-light rounded-full p-2.5 shrink-0">
                <Icon size={18} className="text-brand" />
              </div>
              <div>
                <p className="text-xs text-gray-400 mb-0.5">{label}</p>
                <p className="text-sm font-medium text-gray-800 break-words">{value}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Form + map */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-12 lg:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Send us a message */}
          <div>
            <h2 className="text-xl sm:text-2xl font-bold mb-5">Send us a message</h2>

            {submitted ? (
              <div className="bg-brand-light text-brand rounded-lg p-4 text-sm">
                Thanks for reaching out! We'll get back to you soon.
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <Input
                    label="Full Name"
                    name="fullName"
                    placeholder="Ali Khan"
                    value={formData.fullName}
                    onChange={handleChange}
                    required
                  />
                  <Input
                    label="Email Address"
                    type="email"
                    name="email"
                    placeholder="2023-ARID-1234@biit.edu.pk"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <Select
                    label="I am a"
                    name="userType"
                    options={userTypeOptions}
                    value={formData.userType}
                    onChange={handleChange}
                  />
                  <Select
                    label="Subject"
                    name="subject"
                    options={subjectOptions}
                    value={formData.subject}
                    onChange={handleChange}
                  />
                </div>

                <Textarea
                  label="Message"
                  name="message"
                  placeholder="How can we help you?"
                  value={formData.message}
                  onChange={handleChange}
                  required
                />

                <Button type="submit" icon={undefined} className="w-full sm:w-auto justify-center">
                  Send Message →
                </Button>
              </form>
            )}
          </div>

          {/* Campus location map */}
          <div>
            <h2 className="text-xl sm:text-2xl font-bold mb-2">Campus Location</h2>
            <p className="text-gray-500 text-sm mb-5">Visit us during office hours</p>

            <div className="rounded-2xl overflow-hidden h-64 sm:h-80 lg:h-full border border-gray-200">
              <iframe
                title="BIIT Campus Location"
                src="https://www.google.com/maps?q=Barani+Institute+of+Information+Technology,+Rawalpindi&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;