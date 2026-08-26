import { useState } from 'react';
import { Camera, Image, Plus, Pencil, Trash2, Upload, X, Search } from 'lucide-react';
import Input from '../../../../components/common/Input';
import Select from '../../../../components/common/Select';
import Textarea from '../../../../components/common/Textarea';
import Button from '../../../../components/common/Button';

const FormFooter = ({ onCancel, onSave }) => (
  <div className="flex justify-end gap-3 pt-2">
    <button onClick={onCancel} className="text-sm font-medium text-gray-500 px-4 py-2 hover:text-gray-700">
      Cancel
    </button>
    <Button onClick={onSave} className="text-sm">
      Save Changes
    </Button>
  </div>
);

const InfoBanner = ({ text }) => (
  <div className="bg-brand-light text-brand text-xs rounded-lg px-4 py-3 flex items-start gap-2">
    <span className="mt-0.5">ⓘ</span>
    {text}
  </div>
);

/* ===== Basic Information ===== */
export const BasicInfoSection = ({ onCancel, onSave }) => {
  const [form, setForm] = useState({
    fullName: 'Ali Khan',
    email: '2023-ARID-0000@biit.edu.pk',
    countryCode: '+92',
    phone: '312 3456789',
    dob: '2002-08-15',
    gender: 'male',
    cnic: '35201-1234567-1',
    address: 'House 123, Street 4, Sector H-8, Rawalpindi, Pakistan',
    city: 'Rawalpindi',
    province: 'punjab',
    country: 'pakistan',
  });

  const handleChange = (e) => setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
        <div>
          <h2 className="font-bold text-base">Basic Information</h2>
          <p className="text-xs text-gray-400 mt-0.5">Update your basic personal details.</p>
        </div>
        <button className="flex items-center gap-1.5 text-xs font-medium border border-gray-200 rounded-lg px-3.5 py-2 hover:bg-gray-50 shrink-0">
          <Image size={13} /> Change Cover Photo
        </button>
      </div>

      <div className="flex flex-col sm:flex-row gap-6">
        <div className="w-28 h-28 rounded-xl border-2 border-dashed border-gray-200 flex flex-col items-center justify-center gap-1 text-center shrink-0">
          <Camera size={18} className="text-gray-400" />
          <p className="text-[11px] font-medium text-gray-500">Upload Photo</p>
          <p className="text-[9px] text-gray-400 px-2">JPG, PNG (Max 5MB)</p>
        </div>

        <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Input label="Full Name *" name="fullName" value={form.fullName} onChange={handleChange} className="sm:col-span-2" />
          <div className="sm:col-span-2">
            <Input label="Email Address *" name="email" value={form.email} disabled className="bg-gray-50" />
            <p className="text-[11px] text-gray-400 mt-1">Email address cannot be changed.</p>
          </div>
          <Input label="Phone Number *" name="phone" value={form.phone} onChange={handleChange} className="sm:col-span-2" />
          <Input label="Date of Birth *" type="date" name="dob" value={form.dob} onChange={handleChange} />
          <Select
            label="Gender *"
            name="gender"
            value={form.gender}
            onChange={handleChange}
            options={[
              { value: 'male', label: 'Male' },
              { value: 'female', label: 'Female' },
              { value: 'other', label: 'Other' },
            ]}
          />
          <Input label="CNIC *" name="cnic" value={form.cnic} onChange={handleChange} className="sm:col-span-2" />
          <Textarea label="Current Address *" name="address" value={form.address} onChange={handleChange} rows={2} className="sm:col-span-2" />
          <Input label="City *" name="city" value={form.city} onChange={handleChange} />
          <Select
            label="State / Province *"
            name="province"
            value={form.province}
            onChange={handleChange}
            options={[{ value: 'punjab', label: 'Punjab' }, { value: 'sindh', label: 'Sindh' }]}
          />
          <Select
            label="Country *"
            name="country"
            value={form.country}
            onChange={handleChange}
            options={[{ value: 'pakistan', label: 'Pakistan' }]}
          />
        </div>
      </div>

      <FormFooter onCancel={onCancel} onSave={onSave} />
      <InfoBanner text="Make sure your information is accurate and up-to-date. This information will be visible to potential employers." />
    </div>
  );
};

/* ===== Academic Information ===== */
export const AcademicInfoSection = ({ onCancel, onSave }) => {
  const [semester, setSemester] = useState('5th');

  return (
    <div className="space-y-6">
      <div>
        <h2 className="font-bold text-base">Academic Information</h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div>
          <p className="text-xs text-gray-400 mb-1">Degree</p>
          <p className="text-sm font-semibold">BS Software Engineering</p>
        </div>
        <Select
          label="Current Semester"
          value={semester}
          onChange={(e) => setSemester(e.target.value)}
          options={['1st', '2nd', '3rd', '4th', '5th', '6th', '7th', '8th'].map((s) => ({ value: s, label: s }))}
        />
        <div>
          <p className="text-xs text-gray-400 mb-1">Expected Graduation</p>
          <p className="text-sm font-semibold">June 2027</p>
        </div>
      </div>

      <FormFooter onCancel={onCancel} onSave={onSave} />
      <InfoBanner text="Make sure your academic information is accurate and up-to-date. This information will be visible to potential employers." />
    </div>
  );
};

/* ===== Skills ===== */
export const SkillsSection = ({ onCancel, onSave }) => {
  const [technicalSkills, setTechnicalSkills] = useState(['React.js', 'JavaScript']);
  const [softSkills, setSoftSkills] = useState(['Problem Solving', 'Teamwork']);
  const [techInput, setTechInput] = useState('');
  const [softInput, setSoftInput] = useState('');

  const removeTag = (list, setList, tag) => setList(list.filter((t) => t !== tag));
  const addTech = () => {
    if (techInput.trim()) {
      setTechnicalSkills((prev) => [...prev, techInput.trim()]);
      setTechInput('');
    }
  };
  const addSoft = () => {
    if (softInput.trim()) {
      setSoftSkills((prev) => [...prev, softInput.trim()]);
      setSoftInput('');
    }
  };

  return (
    <div className="space-y-6">
      <div>
        <h2 className="font-bold text-base">Skills</h2>
        <p className="text-xs text-gray-400 mt-0.5">Add your technical and soft skills to help employers understand your capabilities.</p>
      </div>

      <div>
        <p className="text-sm font-semibold mb-2">1. Technical Skills</p>
        <div className="relative mb-3">
          <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
          <input
            value={techInput}
            onChange={(e) => setTechInput(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && (e.preventDefault(), addTech())}
            placeholder="Search and add your skills..."
            className="w-full pl-9 pr-4 py-2.5 rounded-lg border border-gray-300 text-sm outline-none focus:border-brand"
          />
        </div>
        <div className="flex flex-wrap gap-2">
          {technicalSkills.map((skill) => (
            <span key={skill} className="flex items-center gap-1.5 text-xs bg-brand-light text-brand px-3 py-1.5 rounded-full">
              {skill}
              <button onClick={() => removeTag(technicalSkills, setTechnicalSkills, skill)}>
                <X size={12} />
              </button>
            </span>
          ))}
        </div>
      </div>

      <div>
        <p className="text-sm font-semibold mb-2">2. Soft Skills</p>
        <div className="flex flex-col sm:flex-row gap-2 mb-3">
          <Select
            className="flex-1"
            placeholder="Select Soft Skills"
            value={softInput}
            onChange={(e) => setSoftInput(e.target.value)}
            options={['Communication', 'Leadership', 'Time Management', 'Adaptability'].map((s) => ({ value: s, label: s }))}
          />
          <Input
            className="flex-1"
            placeholder="Enter another skill"
            value={softInput}
            onChange={(e) => setSoftInput(e.target.value)}
          />
          <Button icon={Plus} onClick={addSoft} variant="outline" className="text-xs px-4 shrink-0">
            Add
          </Button>
        </div>
        <div className="flex flex-wrap gap-2">
          {softSkills.map((skill) => (
            <span key={skill} className="flex items-center gap-1.5 text-xs bg-gray-100 text-gray-600 px-3 py-1.5 rounded-full">
              {skill}
              <button onClick={() => removeTag(softSkills, setSoftSkills, skill)}>
                <X size={12} />
              </button>
            </span>
          ))}
        </div>
      </div>

      <FormFooter onCancel={onCancel} onSave={onSave} />
      <InfoBanner text="Make sure your skills are accurate and up-to-date. This information will be visible to potential employers." />
    </div>
  );
};

/* ===== Experience ===== */
export const ExperienceSection = ({ onCancel, onSave }) => {
  const [experiences, setExperiences] = useState([
    { id: 1, title: 'Software Engineering Intern', company: 'XYZ Solutions', duration: 'June 2023 - Aug 2023', location: 'Islamabad, Pakistan' },
  ]);

  const removeExperience = (id) => setExperiences((prev) => prev.filter((e) => e.id !== id));

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="font-bold text-base">Experience</h2>
          <p className="text-xs text-gray-400 mt-0.5">Add your professional experience and internships.</p>
        </div>
        <Button icon={Plus} variant="outline" className="text-xs px-4 py-2 shrink-0">
          Add Experience
        </Button>
      </div>

      <div className="space-y-3">
        {experiences.map((exp) => (
          <div key={exp.id} className="border border-gray-100 rounded-xl p-4 flex items-start justify-between gap-3">
            <div>
              <p className="text-sm font-bold">{exp.title}</p>
              <p className="text-sm text-brand">{exp.company}</p>
              <p className="text-xs text-gray-400 mt-1">{exp.duration} &bull; {exp.location}</p>
            </div>
            <div className="flex gap-2 shrink-0">
              <button className="text-gray-400 hover:text-brand">
                <Pencil size={15} />
              </button>
              <button onClick={() => removeExperience(exp.id)} className="text-gray-400 hover:text-red-500">
                <Trash2 size={15} />
              </button>
            </div>
          </div>
        ))}
      </div>

      <FormFooter onCancel={onCancel} onSave={onSave} />
      <InfoBanner text="Make sure your experience information is accurate and up-to-date. This information will be visible to potential employers." />
    </div>
  );
};

/* ===== Projects ===== */
export const ProjectsSection = ({ onCancel, onSave }) => {
  const [projects, setProjects] = useState([
    { id: 1, title: 'Student Attendance System', description: 'A desktop application for managing student attendance efficiently.', tags: ['Java', 'MySQL'] },
  ]);

  const removeProject = (id) => setProjects((prev) => prev.filter((p) => p.id !== id));

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="font-bold text-base">Projects</h2>
          <p className="text-xs text-gray-400 mt-0.5">Add your academic and personal projects to showcase your skills and practical experience.</p>
        </div>
        <Button icon={Plus} variant="outline" className="text-xs px-4 py-2 shrink-0">
          Add Project
        </Button>
      </div>

      <div className="space-y-3">
        {projects.map((project) => (
          <div key={project.id} className="border border-gray-100 rounded-xl p-4 flex items-start justify-between gap-3">
            <div>
              <p className="text-sm font-bold">{project.title}</p>
              <p className="text-xs text-gray-500 mt-1">{project.description}</p>
              <div className="flex gap-2 mt-2">
                {project.tags.map((tag) => (
                  <span key={tag} className="text-[11px] bg-gray-100 text-gray-600 px-2.5 py-1 rounded-md">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            <div className="flex gap-2 shrink-0">
              <button className="text-gray-400 hover:text-brand">
                <Pencil size={15} />
              </button>
              <button onClick={() => removeProject(project.id)} className="text-gray-400 hover:text-red-500">
                <Trash2 size={15} />
              </button>
            </div>
          </div>
        ))}
      </div>

      <FormFooter onCancel={onCancel} onSave={onSave} />
      <InfoBanner text="Make sure your project information is accurate and up-to-date. This information will be visible to potential employers." />
    </div>
  );
};

/* ===== Resume ===== */
export const ResumeSection = ({ onCancel, onSave }) => {
  const [fileName, setFileName] = useState(null);

  const handleFileChange = (e) => {
    if (e.target.files?.[0]) setFileName(e.target.files[0].name);
  };

  return (
    <div className="space-y-6">
      <div>
        <h2 className="font-bold text-base">Resume</h2>
        <p className="text-xs text-gray-400 mt-0.5">Upload and manage your resume.</p>
      </div>

      <label className="block border-2 border-dashed border-gray-200 rounded-xl py-12 text-center cursor-pointer hover:border-brand transition-colors">
        <input type="file" accept=".pdf,.doc,.docx" className="hidden" onChange={handleFileChange} />
        <Upload size={24} className="mx-auto text-gray-400 mb-3" />
        <p className="text-sm font-semibold mb-1">{fileName || 'Upload your resume'}</p>
        <p className="text-xs text-gray-400 mb-4">PDF, DOC or DOCX (Max 5 MB)</p>
        <span className="inline-block text-xs font-medium border border-gray-200 rounded-lg px-4 py-2 hover:bg-gray-50">
          Browse Files
        </span>
      </label>

      <FormFooter onCancel={onCancel} onSave={onSave} />
      <InfoBanner text="Keep your resume updated to improve your visibility to potential employers." />
    </div>
  );
};