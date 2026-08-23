import { Briefcase, Folder, FileText, Download, Upload, Code2, Calendar, MapPin } from 'lucide-react';

export const SectionCard = ({ title, icon: Icon, children, className = '' }) => (
  <div className={`bg-white rounded-2xl border border-gray-100 p-5 sm:p-6 ${className}`}>
    <h2 className="font-bold text-base flex items-center gap-2 mb-4">
      {Icon && <Icon size={16} className="text-brand" />}
      {title}
    </h2>
    {children}
  </div>
);

export const ProfessionalSummary = ({ summary }) => (
  <SectionCard title="Professional Summary">
    <p className="text-sm text-gray-600 leading-relaxed">{summary}</p>
  </SectionCard>
);

export const AcademicInfo = ({ degree, currentSemester, expectedGraduation }) => (
  <SectionCard title="Academic Information">
    <div>
      <p className="text-xs text-gray-400 mb-1">Degree</p>
      <p className="text-sm font-semibold mb-4">{degree}</p>
    </div>
    <div className="grid grid-cols-2 gap-4 border-t border-gray-50 pt-4">
      <div>
        <p className="text-xs text-gray-400 mb-1">Current Semester</p>
        <p className="text-sm font-semibold">{currentSemester}</p>
      </div>
      <div>
        <p className="text-xs text-gray-400 mb-1">Expected Graduation</p>
        <p className="text-sm font-semibold">{expectedGraduation}</p>
      </div>
    </div>
  </SectionCard>
);

export const SkillsList = ({ technicalSkills, softSkills }) => (
  <SectionCard title="Technical Skills" icon={Code2}>
    <div className="flex flex-wrap gap-2 mb-5">
      {technicalSkills.map((skill) => (
        <span key={skill} className="text-xs font-medium bg-brand-light text-brand px-3 py-1.5 rounded-full">
          {skill}
        </span>
      ))}
    </div>

    <h3 className="font-bold text-sm mb-3">Soft Skills</h3>
    <div className="flex flex-wrap gap-2">
      {softSkills.map((skill) => (
        <span key={skill} className="text-xs font-medium bg-gray-100 text-gray-600 px-3 py-1.5 rounded-full">
          {skill}
        </span>
      ))}
    </div>
  </SectionCard>
);

export const ExperienceList = ({ experiences }) => (
  <SectionCard title="Experience" icon={Briefcase}>
    <div className="space-y-5">
      {experiences.map((exp) => (
        <div key={exp.title} className="flex gap-3">
          <div className="w-2.5 h-2.5 rounded-full bg-brand mt-1.5 shrink-0" />
          <div>
            <p className="text-sm font-bold">{exp.title}</p>
            <p className="text-sm text-brand font-medium">{exp.company}</p>
            <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-gray-400 mt-1.5">
              <span className="flex items-center gap-1">
                <Calendar size={12} /> {exp.duration}
              </span>
              <span className="flex items-center gap-1">
                <MapPin size={12} /> {exp.location}
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>
  </SectionCard>
);

export const ProjectsList = ({ projects }) => (
  <SectionCard title="Featured Projects" icon={Folder}>
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      {projects.map((project) => (
        <div key={project.title} className="border border-gray-100 rounded-xl p-4">
          <div className="w-9 h-9 rounded-lg bg-brand-light flex items-center justify-center mb-3">
            <project.icon size={16} className="text-brand" />
          </div>
          <p className="text-sm font-bold mb-1">{project.title}</p>
          <p className="text-xs text-gray-500 mb-3 leading-relaxed">{project.description}</p>
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span key={tag} className="text-[11px] font-medium bg-gray-100 text-gray-600 px-2.5 py-1 rounded-md">
                {tag}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  </SectionCard>
);

export const ResumeCard = ({ fileName, updatedAgo, fileSize }) => (
  <div className="bg-white rounded-2xl border border-gray-100 p-4 sm:p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
    <div className="flex items-center gap-3 min-w-0">
      <div className="w-10 h-10 rounded-lg bg-red-50 flex items-center justify-center shrink-0">
        <FileText size={18} className="text-red-500" />
      </div>
      <div className="min-w-0">
        <p className="text-sm font-semibold truncate">{fileName}</p>
        <p className="text-xs text-gray-400">Updated {updatedAgo} &bull; {fileSize}</p>
      </div>
    </div>
    <div className="flex gap-2 shrink-0">
      <button className="flex items-center gap-1.5 text-xs font-medium border border-gray-200 rounded-lg px-3.5 py-2 hover:bg-gray-50">
        <Upload size={13} /> Replace
      </button>
      <button className="flex items-center gap-1.5 text-xs font-medium bg-brand text-white rounded-lg px-3.5 py-2 hover:bg-brand-dark">
        <Download size={13} /> Download
      </button>
    </div>
  </div>
);