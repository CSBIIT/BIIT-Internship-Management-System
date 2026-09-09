import { useState } from 'react';
import { FileText, Download, Eye, UploadCloud, FileCheck } from 'lucide-react';

const ProfileResumeSection = ({
  resumeUrl,
  resumeName = 'My_Resume.pdf',
  fileSize = '1.2 MB',
  updatedAgo = '2 days ago',
  onUpload,
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [dragOver, setDragOver] = useState(false);

  const hasResume = Boolean(resumeUrl);

  const handleDownload = () => {
    if (!resumeUrl) return;

    // LinkedIn-style: fetch as blob then trigger save dialog
    fetch(resumeUrl)
      .then((response) => {
        if (!response.ok) throw new Error('Network response was not ok');
        return response.blob();
      })
      .then((blob) => {
        const url = window.URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.download = resumeName;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        window.URL.revokeObjectURL(url);
      })
      .catch((err) => {
        console.error('Download failed:', err);
        // Fallback: try opening in new tab
        window.open(resumeUrl, '_blank');
      });
  };

  const handleView = () => {
    if (resumeUrl) {
      window.open(resumeUrl, '_blank');
    }
  };

  const handleFileChange = (e) => {
    const file = e.target.files?.[0];
    if (file && file.type === 'application/pdf') {
      onUpload?.(file);
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setDragOver(false);
    const file = e.dataTransfer.files?.[0];
    if (file && file.type === 'application/pdf') {
      onUpload?.(file);
    }
  };

  return (
    <div className="bg-white rounded-2xl border border-gray-100 p-5 sm:p-6">
      {/* Header */}
      <div className="flex items-center justify-between mb-5">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-light text-brand">
            <FileText size={20} />
          </div>
          <div>
            <h2 className="text-lg font-bold text-gray-900">Resume</h2>
            <p className="text-xs text-gray-500">
              {hasResume
                ? 'Your resume is ready for recruiters'
                : 'Upload your resume to apply for internships'}
            </p>
          </div>
        </div>

        {hasResume && (
          <span className="hidden sm:flex items-center gap-1.5 rounded-full bg-emerald-50 px-3 py-1 text-xs font-medium text-emerald-600">
            <FileCheck size={12} />
            Uploaded
          </span>
        )}
      </div>

      {hasResume ? (
        <div
          className="group/card relative overflow-hidden rounded-xl border border-gray-200 bg-gray-50 p-5 transition-all hover:border-brand/30 hover:shadow-md"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div className="flex flex-col sm:flex-row sm:items-center gap-4">
            {/* PDF Icon */}
            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-lg bg-red-50 text-red-500">
              <FileText size={28} />
            </div>

            {/* File Info */}
            <div className="min-w-0 flex-1">
              <p className="truncate text-sm font-semibold text-gray-900">{resumeName}</p>
              <p className="mt-0.5 text-xs text-gray-500">
                PDF &middot; {fileSize} &middot; Updated {updatedAgo}
              </p>
            </div>

            {/* Actions — View & Download only (no Delete) */}
            <div className="flex items-center gap-2">
              <button
                onClick={handleView}
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-gray-200 bg-white text-gray-600 transition-all hover:border-brand hover:text-brand hover:shadow-sm"
                title="View Resume"
              >
                <Eye size={16} />
              </button>

              <button
                onClick={handleDownload}
                className="flex h-9 items-center gap-2 rounded-lg bg-brand px-4 text-sm font-medium text-white transition-all hover:bg-brand-dark hover:shadow-md active:scale-95"
                title="Download Resume"
              >
                <Download size={15} />
                <span className="hidden sm:inline">Download</span>
              </button>
            </div>
          </div>

          {/* Hover accent line */}
          <div
            className={`absolute inset-x-0 bottom-0 h-0.5 bg-brand transition-all duration-300 ${
              isHovered ? 'opacity-100' : 'opacity-0'
            }`}
          />
        </div>
      ) : (
        <label
          className={`flex cursor-pointer flex-col items-center justify-center rounded-xl border-2 border-dashed p-8 transition-all ${
            dragOver
              ? 'border-brand bg-brand-light/30'
              : 'border-gray-200 bg-gray-50 hover:border-brand/40 hover:bg-brand-light/30'
          }`}
          onDragOver={(e) => {
            e.preventDefault();
            setDragOver(true);
          }}
          onDragLeave={() => setDragOver(false)}
          onDrop={handleDrop}
        >
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-brand-light text-brand mb-3">
            <UploadCloud size={22} />
          </div>
          <p className="text-sm font-medium text-gray-700">Click to upload your resume</p>
          <p className="mt-1 text-xs text-gray-400">or drag and drop PDF here, max 5MB</p>
          <input
            type="file"
            accept=".pdf,application/pdf"
            onChange={handleFileChange}
            className="hidden"
          />
        </label>
      )}
    </div>
  );
};

export default ProfileResumeSection;