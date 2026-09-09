import { useState, useRef } from 'react';
import { Camera, Image, Plus, Pencil, Trash2, Upload, X, Search } from 'lucide-react';
import Input from '../../../../components/common/Input';
import Select from '../../../../components/common/Select';
import Textarea from '../../../../components/common/Textarea';
import Button from '../../../../components/common/Button';
import { useProfilePhoto } from '../../../../context/ProfilePhotoContext';

/* ===== Shared Footer with Next / Prev / Save Controls ===== */
const FormFooter = ({ onCancel, onPrev, onNext, onSave, isFirstTab, isLastTab }) => (
  <div className="flex items-center justify-between pt-4 border-t border-gray-100">
    <button
      type="button"
      onClick={onCancel}
      className="text-sm font-medium text-gray-500 px-3 py-2 hover:text-gray-700"
    >
      Cancel
    </button>

    <div className="flex items-center gap-3">
      {!isFirstTab && (
        <button
          type="button"
          onClick={onPrev}
          className="rounded-xl border border-gray-200 px-4 py-2 text-sm font-semibold text-gray-600 hover:bg-gray-50 transition-colors"
        >
          Previous
        </button>
      )}

      {!isLastTab ? (
        <Button onClick={onNext} className="text-sm">
          Next
        </Button>
      ) : (
        <Button onClick={onSave} className="text-sm bg-brand text-white">
          Save Changes
        </Button>
      )}
    </div>
  </div>
);

const InfoBanner = ({ text }) => (
  <div className="bg-brand-light text-brand text-xs rounded-lg px-4 py-3 flex items-start gap-2">
    <span className="mt-0.5">ⓘ</span>
    {text}
  </div>
);

/* ===== Basic Information ===== */
export const BasicInfoSection = ({
  draftData,
  onUpdateDraft,
  onCancel,
  onNext,
  onPrev,
  onSave,
  isFirstTab,
  isLastTab,
}) => {
  const basic = draftData?.basic || {};
  const { photoUrl, coverPhotoUrl } = useProfilePhoto();

  const [form, setForm] = useState({
    fullName: basic.name || 'Ali Khan',
    email: basic.email || '2023-ARID-0000@biit.edu.pk',
    countryCode: '+92',
    phone: basic.phone || '312 3456789',
    dob: '2002-08-15',
    gender: 'male',
    cnic: '35201-1234567-1',
    address: 'House 123, Street 4, Sector H-8, Rawalpindi, Pakistan',
    city: basic.location?.split(',')[0] || 'Rawalpindi',
    province: 'punjab',
    country: 'pakistan',
    summary: basic.summary || '',
  });

  // Local temporary previews — does NOT trigger context until Save Changes
  const [profilePhoto, setProfilePhoto] = useState(
    basic.pendingProfilePhoto !== undefined ? basic.pendingProfilePhoto : photoUrl
  );
  const [coverPhoto, setCoverPhoto] = useState(
    basic.pendingCoverPhoto !== undefined ? basic.pendingCoverPhoto : coverPhotoUrl
  );
  const [coverPhotoName, setCoverPhotoName] = useState(null);

  const profileInputRef = useRef(null);
  const coverInputRef = useRef(null);

  const handleChange = (e) => {
    const updatedForm = { ...form, [e.target.name]: e.target.value };
    setForm(updatedForm);

    onUpdateDraft('basic', {
      ...basic,
      name: updatedForm.fullName,
      email: updatedForm.email,
      phone: updatedForm.phone,
      location: `${updatedForm.city}, Pakistan`,
      summary: updatedForm.summary,
      pendingProfilePhoto: profilePhoto,
      pendingCoverPhoto: coverPhoto,
    });
  };

  const handleProfilePhotoChange = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      const tempUrl = URL.createObjectURL(file);
      setProfilePhoto(tempUrl);

      onUpdateDraft('basic', {
        ...basic,
        name: form.fullName,
        email: form.email,
        phone: form.phone,
        location: `${form.city}, Pakistan`,
        summary: form.summary,
        pendingProfilePhoto: tempUrl,
      });
    }
  };

  const handleCoverPhotoChange = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      const tempUrl = URL.createObjectURL(file);
      setCoverPhoto(tempUrl);
      setCoverPhotoName(file.name);

      onUpdateDraft('basic', {
        ...basic,
        name: form.fullName,
        email: form.email,
        phone: form.phone,
        location: `${form.city}, Pakistan`,
        summary: form.summary,
        pendingCoverPhoto: tempUrl,
      });
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
        <div>
          <h2 className="font-bold text-base">Basic Information</h2>
          <p className="text-xs text-gray-400 mt-0.5">Update your basic personal details.</p>
        </div>

        <input
          ref={coverInputRef}
          type="file"
          accept="image/jpeg,image/png"
          className="hidden"
          onChange={handleCoverPhotoChange}
        />
        <button
          type="button"
          onClick={() => coverInputRef.current?.click()}
          className="flex items-center gap-1.5 text-xs font-medium border border-gray-200 rounded-lg px-3.5 py-2 hover:bg-gray-50 shrink-0"
        >
          <Image size={13} />
          {coverPhotoName ? 'Change Cover Photo ✓' : 'Change Cover Photo'}
        </button>
      </div>

      {coverPhotoName && (
        <p className="text-xs text-gray-400 -mt-4">Selected: {coverPhotoName}</p>
      )}

      <div className="flex flex-col sm:flex-row gap-6">
        <input
          ref={profileInputRef}
          type="file"
          accept="image/jpeg,image/png"
          className="hidden"
          onChange={handleProfilePhotoChange}
        />
        <button
          type="button"
          onClick={() => profileInputRef.current?.click()}
          className="w-28 h-28 rounded-xl border-2 border-dashed border-gray-200 flex flex-col items-center justify-center gap-1 text-center shrink-0 overflow-hidden hover:border-brand transition-colors"
        >
          {profilePhoto ? (
            <img
              src={profilePhoto}
              alt="Profile preview"
              className="w-full h-full object-cover"
            />
          ) : (
            <>
              <Camera size={18} className="text-gray-400" />
              <p className="text-[11px] font-medium text-gray-500">Upload Photo</p>
              <p className="text-[9px] text-gray-400 px-2">JPG, PNG (Max 5MB)</p>
            </>
          )}
        </button>

        <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Input label="Full Name *" name="fullName" value={form.fullName} onChange={handleChange} className="sm:col-span-2" />
          
          <div className="sm:col-span-2">
            <Textarea
              label="Professional Summary"
              name="summary"
              value={form.summary}
              onChange={handleChange}
              rows={4}
              placeholder="Write a brief professional summary about yourself..."
            />
          </div>

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

      <FormFooter
        onCancel={onCancel}
        onPrev={onPrev}
        onNext={onNext}
        onSave={onSave}
        isFirstTab={isFirstTab}
        isLastTab={isLastTab}
      />
      <InfoBanner text="Make sure your information is accurate and up-to-date. This information will be visible to potential employers." />
    </div>
  );
};

/* ===== Academic Information ===== */
export const AcademicInfoSection = ({
  draftData,
  onUpdateDraft,
  onCancel,
  onNext,
  onPrev,
  onSave,
  isFirstTab,
  isLastTab,
}) => {
  const academic = draftData?.academic || {};
  const [semester, setSemester] = useState(academic.currentSemester || '5th');

  const handleSemesterChange = (e) => {
    const value = e.target.value;
    setSemester(value);
    onUpdateDraft('academic', {
      ...academic,
      currentSemester: value,
    });
  };

  return (
    <div className="space-y-6">
      <div>
        <h2 className="font-bold text-base">Academic Information</h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div>
          <p className="text-xs text-gray-400 mb-1">Degree</p>
          <p className="text-sm font-semibold">{academic.degree || 'BS Software Engineering'}</p>
        </div>
        <Select
          label="Current Semester"
          value={semester}
          onChange={handleSemesterChange}
          options={['1st', '2nd', '3rd', '4th', '5th', '6th', '7th', '8th'].map((s) => ({ value: s, label: s }))}
        />
        <div>
          <p className="text-xs text-gray-400 mb-1">Expected Graduation</p>
          <p className="text-sm font-semibold">{academic.expectedGraduation || 'June 2027'}</p>
        </div>
      </div>

      <FormFooter
        onCancel={onCancel}
        onPrev={onPrev}
        onNext={onNext}
        onSave={onSave}
        isFirstTab={isFirstTab}
        isLastTab={isLastTab}
      />
      <InfoBanner text="Make sure your academic information is accurate and up-to-date. This information will be visible to potential employers." />
    </div>
  );
};

/* ===== Skills ===== */
export const SkillsSection = ({
  draftData,
  onUpdateDraft,
  onCancel,
  onNext,
  onPrev,
  onSave,
  isFirstTab,
  isLastTab,
}) => {
  const [technicalSkills, setTechnicalSkills] = useState(
    draftData?.technicalSkills || ['React.js', 'JavaScript']
  );
  const [softSkills, setSoftSkills] = useState(
    draftData?.softSkills || ['Problem Solving', 'Teamwork']
  );
  const [techInput, setTechInput] = useState('');
  const [softInput, setSoftInput] = useState('');

  const removeTechTag = (tag) => {
    const updated = technicalSkills.filter((t) => t !== tag);
    setTechnicalSkills(updated);
    onUpdateDraft('technicalSkills', updated);
  };

  const removeSoftTag = (tag) => {
    const updated = softSkills.filter((t) => t !== tag);
    setSoftSkills(updated);
    onUpdateDraft('softSkills', updated);
  };

  const addTech = () => {
    if (techInput.trim()) {
      const updated = [...technicalSkills, techInput.trim()];
      setTechnicalSkills(updated);
      onUpdateDraft('technicalSkills', updated);
      setTechInput('');
    }
  };

  const addSoft = () => {
    if (softInput.trim()) {
      const updated = [...softSkills, softInput.trim()];
      setSoftSkills(updated);
      onUpdateDraft('softSkills', updated);
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
              <button onClick={() => removeTechTag(skill)}>
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
              <button onClick={() => removeSoftTag(skill)}>
                <X size={12} />
              </button>
            </span>
          ))}
        </div>
      </div>

      <FormFooter
        onCancel={onCancel}
        onPrev={onPrev}
        onNext={onNext}
        onSave={onSave}
        isFirstTab={isFirstTab}
        isLastTab={isLastTab}
      />
      <InfoBanner text="Make sure your skills are accurate and up-to-date. This information will be visible to potential employers." />
    </div>
  );
};

/* ===== Experience Section with Date Validation ===== */
export const ExperienceSection = ({
  draftData,
  onUpdateDraft,
  onCancel,
  onNext,
  onPrev,
  onSave,
  isFirstTab,
  isLastTab,
}) => {
  const months = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];
  const years = Array.from({ length: 30 }, (_, i) => String(2026 - i));

  const [experiences, setExperiences] = useState(() => {
    const raw = draftData?.experiences || [
      {
        id: 'exp-1',
        title: 'Software Engineering Intern',
        company: 'XYZ Solutions',
        duration: 'June 2023 - Aug 2023',
        location: 'Islamabad, Pakistan',
        startMonth: 'June',
        startYear: '2023',
        endMonth: 'August',
        endYear: '2023',
        isPresent: false,
      },
    ];
    return raw.map((exp, idx) => ({
      ...exp,
      id: exp.id || `exp-${Date.now()}-${idx}`,
    }));
  });

  const [isFormOpen, setIsFormOpen] = useState(false);
  const [editingId, setEditingId] = useState(null);
  const [expForm, setExpForm] = useState({
    title: '',
    company: '',
    location: '',
    startMonth: 'January',
    startYear: '2024',
    endMonth: 'December',
    endYear: '2024',
    isPresent: false,
  });

  const isDateValid = () => {
    if (expForm.isPresent) return true;
    const startMIdx = months.indexOf(expForm.startMonth);
    const endMIdx = months.indexOf(expForm.endMonth);
    const startY = parseInt(expForm.startYear, 10);
    const endY = parseInt(expForm.endYear, 10);

    if (endY < startY) return false;
    if (endY === startY && endMIdx < startMIdx) return false;
    return true;
  };

  const handleOpenAdd = () => {
    setEditingId(null);
    setExpForm({
      title: '',
      company: '',
      location: '',
      startMonth: 'January',
      startYear: '2024',
      endMonth: 'December',
      endYear: '2024',
      isPresent: false,
    });
    setIsFormOpen(true);
  };

  const handleOpenEdit = (exp) => {
    setEditingId(exp.id);
    setExpForm({
      title: exp.title || '',
      company: exp.company || '',
      location: exp.location || '',
      startMonth: exp.startMonth || 'January',
      startYear: exp.startYear || '2024',
      endMonth: exp.endMonth || 'December',
      endYear: exp.endYear || '2024',
      isPresent: exp.isPresent || false,
    });
    setIsFormOpen(true);
  };

  const handleSaveExpItem = () => {
    if (!expForm.title || !expForm.company || !isDateValid()) return;

    const formattedDuration = expForm.isPresent
      ? `${expForm.startMonth} ${expForm.startYear} - Present`
      : `${expForm.startMonth} ${expForm.startYear} - ${expForm.endMonth} ${expForm.endYear}`;

    const newExpData = {
      ...expForm,
      duration: formattedDuration,
    };

    let updated;
    if (editingId) {
      updated = experiences.map((item) =>
        item.id === editingId ? { ...item, ...newExpData } : item
      );
    } else {
      updated = [...experiences, { id: `exp-${Date.now()}`, ...newExpData }];
    }

    setExperiences(updated);
    onUpdateDraft('experiences', updated);
    setIsFormOpen(false);
  };

  const removeExperience = (idToDelete) => {
    const updated = experiences.filter((e) => e.id !== idToDelete);
    setExperiences(updated);
    onUpdateDraft('experiences', updated);
  };

  const validDate = isDateValid();

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div>
          <h2 className="font-bold text-base">Experience</h2>
          <p className="text-xs text-gray-400 mt-0.5">Add your professional experience and internships.</p>
        </div>
        <Button onClick={handleOpenAdd} icon={Plus} variant="outline" className="text-xs px-4 py-2 w-full sm:w-auto shrink-0">
          Add Experience
        </Button>
      </div>

      {/* Inline Add / Edit Form */}
      {isFormOpen && (
        <div className="p-4 border border-brand/20 bg-brand/5 rounded-xl space-y-4">
          <h3 className="text-xs font-bold text-brand uppercase tracking-wider">
            {editingId ? 'Edit Experience' : 'Add New Experience'}
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <Input
              label="Job Title *"
              value={expForm.title}
              onChange={(e) => setExpForm({ ...expForm, title: e.target.value })}
              placeholder="e.g. Frontend Developer"
            />
            <Input
              label="Company *"
              value={expForm.company}
              onChange={(e) => setExpForm({ ...expForm, company: e.target.value })}
              placeholder="e.g. TechCorp"
            />
            <Input
              label="Location *"
              value={expForm.location}
              onChange={(e) => setExpForm({ ...expForm, location: e.target.value })}
              placeholder="e.g. Islamabad, Pakistan"
              className="sm:col-span-2"
            />
          </div>

          <div className="space-y-3 pt-2">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-semibold text-gray-700 mb-1">Starting Date *</label>
                <div className="flex gap-2">
                  <Select
                    value={expForm.startMonth}
                    onChange={(e) => setExpForm({ ...expForm, startMonth: e.target.value })}
                    options={months.map((m) => ({ value: m, label: m }))}
                    className="flex-1"
                  />
                  <Select
                    value={expForm.startYear}
                    onChange={(e) => setExpForm({ ...expForm, startYear: e.target.value })}
                    options={years.map((y) => ({ value: y, label: y }))}
                    className="w-28"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-700 mb-1">Ending Date</label>
                <div className="flex gap-2">
                  <Select
                    value={expForm.endMonth}
                    disabled={expForm.isPresent}
                    onChange={(e) => setExpForm({ ...expForm, endMonth: e.target.value })}
                    options={months.map((m) => ({ value: m, label: m }))}
                    className={`flex-1 ${expForm.isPresent ? 'bg-gray-100 opacity-60 cursor-not-allowed' : ''}`}
                  />
                  <Select
                    value={expForm.endYear}
                    disabled={expForm.isPresent}
                    onChange={(e) => setExpForm({ ...expForm, endYear: e.target.value })}
                    options={years.map((y) => ({ value: y, label: y }))}
                    className={`w-28 ${expForm.isPresent ? 'bg-gray-100 opacity-60 cursor-not-allowed' : ''}`}
                  />
                </div>
              </div>
            </div>

            <label className="flex items-center gap-2 cursor-pointer pt-1">
              <input
                type="checkbox"
                checked={expForm.isPresent}
                onChange={(e) => setExpForm({ ...expForm, isPresent: e.target.checked })}
                className="w-4 h-4 rounded border-gray-300 text-brand focus:ring-brand"
              />
              <span className="text-xs font-medium text-gray-700">I currently work here</span>
            </label>

            {!validDate && (
              <p className="text-xs text-red-500 font-medium">
                Ending date must be greater than or equal to the starting date.
              </p>
            )}
          </div>

          <div className="flex justify-end gap-2 pt-2">
            <button
              type="button"
              onClick={() => setIsFormOpen(false)}
              className="text-xs px-3 py-1.5 text-gray-500 hover:text-gray-700 font-medium"
            >
              Cancel
            </button>
            <Button
              type="button"
              onClick={handleSaveExpItem}
              disabled={!validDate || !expForm.title || !expForm.company}
              className={`text-xs px-4 py-1.5 ${!validDate ? 'opacity-50 cursor-not-allowed' : ''}`}
            >
              {editingId ? 'Update' : 'Add'}
            </Button>
          </div>
        </div>
      )}

      {/* Experiences List */}
      <div className="space-y-3">
        {experiences.map((exp) => (
          <div key={exp.id} className="border border-gray-100 rounded-xl p-4 flex items-start justify-between gap-3">
            <div>
              <p className="text-sm font-bold">{exp.title}</p>
              <p className="text-sm text-brand">{exp.company}</p>
              <p className="text-xs text-gray-400 mt-1">{exp.duration} &bull; {exp.location}</p>
            </div>
            <div className="flex gap-2 shrink-0">
              <button type="button" onClick={() => handleOpenEdit(exp)} className="text-gray-400 hover:text-brand">
                <Pencil size={15} />
              </button>
              <button type="button" onClick={() => removeExperience(exp.id)} className="text-gray-400 hover:text-red-500">
                <Trash2 size={15} />
              </button>
            </div>
          </div>
        ))}
      </div>

      <FormFooter
        onCancel={onCancel}
        onPrev={onPrev}
        onNext={onNext}
        onSave={onSave}
        isFirstTab={isFirstTab}
        isLastTab={isLastTab}
      />
      <InfoBanner text="Make sure your experience information is accurate and up-to-date. This information will be visible to potential employers." />
    </div>
  );
};

/* ===== Projects Section ===== */
export const ProjectsSection = ({
  draftData,
  onUpdateDraft,
  onCancel,
  onNext,
  onPrev,
  onSave,
  isFirstTab,
  isLastTab,
}) => {
  const [projects, setProjects] = useState(() => {
    const raw = draftData?.projects || [
      { id: 'proj-1', title: 'Student Attendance System', description: 'A desktop application for managing student attendance efficiently.', tags: ['Java', 'MySQL'] },
      { id: 'proj-2', title: 'Portfolio Website', description: 'A responsive personal portfolio website built to showcase my projects.', tags: ['HTML/CSS', 'Tailwind'] },
    ];
    return raw.map((proj, idx) => ({
      ...proj,
      id: proj.id || `proj-${Date.now()}-${idx}`,
    }));
  });

  const [isFormOpen, setIsFormOpen] = useState(false);
  const [editingId, setEditingId] = useState(null);
  const [projForm, setProjForm] = useState({ title: '', description: '', tagsStr: '' });

  const handleOpenAdd = () => {
    setEditingId(null);
    setProjForm({ title: '', description: '', tagsStr: '' });
    setIsFormOpen(true);
  };

  const handleOpenEdit = (proj) => {
    setEditingId(proj.id);
    setProjForm({
      title: proj.title,
      description: proj.description,
      tagsStr: Array.isArray(proj.tags) ? proj.tags.join(', ') : proj.tags || '',
    });
    setIsFormOpen(true);
  };

  const handleSaveProjItem = () => {
    if (!projForm.title) return;

    const parsedTags = projForm.tagsStr
      ? projForm.tagsStr.split(',').map((t) => t.trim()).filter(Boolean)
      : [];

    const newProjectData = {
      title: projForm.title,
      description: projForm.description,
      tags: parsedTags,
    };

    let updated;
    if (editingId) {
      updated = projects.map((item) => (item.id === editingId ? { ...item, ...newProjectData } : item));
    } else {
      updated = [...projects, { id: `proj-${Date.now()}`, ...newProjectData }];
    }

    setProjects(updated);
    onUpdateDraft('projects', updated);
    setIsFormOpen(false);
  };

  const removeProject = (idToDelete) => {
    const updated = projects.filter((p) => p.id !== idToDelete);
    setProjects(updated);
    onUpdateDraft('projects', updated);
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div>
          <h2 className="font-bold text-base">Projects</h2>
          <p className="text-xs text-gray-400 mt-0.5">Add your academic and personal projects to showcase your skills and practical experience.</p>
        </div>
        <Button onClick={handleOpenAdd} icon={Plus} variant="outline" className="text-xs px-4 py-2 w-full sm:w-auto shrink-0">
          Add Project
        </Button>
      </div>

      {/* Inline Add / Edit Form */}
      {isFormOpen && (
        <div className="p-4 border border-brand/20 bg-brand/5 rounded-xl space-y-4">
          <h3 className="text-xs font-bold text-brand uppercase tracking-wider">
            {editingId ? 'Edit Project' : 'Add New Project'}
          </h3>
          <div className="space-y-3">
            <Input
              label="Project Title *"
              value={projForm.title}
              onChange={(e) => setProjForm({ ...projForm, title: e.target.value })}
              placeholder="e.g. E-Commerce Web App"
            />
            <Textarea
              label="Description *"
              value={projForm.description}
              onChange={(e) => setProjForm({ ...projForm, description: e.target.value })}
              rows={2}
              placeholder="Brief overview of the project..."
            />
            <Input
              label="Technologies / Tags (comma separated)"
              value={projForm.tagsStr}
              onChange={(e) => setProjForm({ ...projForm, tagsStr: e.target.value })}
              placeholder="e.g. React, Node.js, MongoDB"
            />
          </div>
          <div className="flex justify-end gap-2">
            <button
              type="button"
              onClick={() => setIsFormOpen(false)}
              className="text-xs px-3 py-1.5 text-gray-500 hover:text-gray-700 font-medium"
            >
              Cancel
            </button>
            <Button type="button" onClick={handleSaveProjItem} className="text-xs px-4 py-1.5">
              {editingId ? 'Update' : 'Add'}
            </Button>
          </div>
        </div>
      )}

      {/* Projects List */}
      <div className="space-y-3">
        {projects.map((project) => (
          <div key={project.id} className="border border-gray-100 rounded-xl p-4 flex items-start justify-between gap-3">
            <div>
              <p className="text-sm font-bold">{project.title}</p>
              <p className="text-xs text-gray-500 mt-1">{project.description}</p>
              <div className="flex gap-2 mt-2 flex-wrap">
                {project.tags?.map((tag) => (
                  <span key={tag} className="text-[11px] bg-gray-100 text-gray-600 px-2.5 py-1 rounded-md">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            <div className="flex gap-2 shrink-0">
              <button type="button" onClick={() => handleOpenEdit(project)} className="text-gray-400 hover:text-brand">
                <Pencil size={15} />
              </button>
              <button type="button" onClick={() => removeProject(project.id)} className="text-gray-400 hover:text-red-500">
                <Trash2 size={15} />
              </button>
            </div>
          </div>
        ))}
      </div>

      <FormFooter
        onCancel={onCancel}
        onPrev={onPrev}
        onNext={onNext}
        onSave={onSave}
        isFirstTab={isFirstTab}
        isLastTab={isLastTab}
      />
      <InfoBanner text="Make sure your project information is accurate and up-to-date. This information will be visible to potential employers." />
    </div>
  );
};

/* ===== Resume ===== */
export const ResumeSection = ({
  onCancel,
  onNext,
  onPrev,
  onSave,
  isFirstTab,
  isLastTab,
}) => {
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

      <FormFooter
        onCancel={onCancel}
        onPrev={onPrev}
        onNext={onNext}
        onSave={onSave}
        isFirstTab={isFirstTab}
        isLastTab={isLastTab}
      />
      <InfoBanner text="Keep your resume updated to improve your visibility to potential employers." />
    </div>
  );
};