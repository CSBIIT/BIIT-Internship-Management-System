import { Link } from 'react-router-dom';
import { Pencil, Share2, MapPin, Camera } from 'lucide-react';
import Button from '../../../../components/common/Button';

const ProfileHeader = ({ profile, showActions = true }) => {
  const { name, degree, semester, university, location, photoUrl } = profile;

  return (
    <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden">
      <div className="h-16 sm:h-20 bg-gradient-to-r from-brand to-brand-dark" />

      <div className="px-5 sm:px-6 pb-6">
        {/* Photo overlaps the banner slightly */}
        <div className="relative w-24 h-24 sm:w-28 sm:h-28 -mt-12 sm:-mt-14">
          <div className="w-full h-full rounded-2xl ring-4 ring-white overflow-hidden bg-gray-100">
            {photoUrl ? (
              <img src={photoUrl} alt={name} className="w-full h-full object-cover" />
            ) : (
              <div className="w-full h-full flex items-center justify-center text-2xl font-bold text-brand bg-brand-light">
                {name.split(' ').map((w) => w[0]).join('').slice(0, 2).toUpperCase()}
              </div>
            )}
          </div>
          {showActions && (
            <button className="absolute -bottom-1 -right-1 w-7 h-7 rounded-full bg-white shadow-md flex items-center justify-center border border-gray-100 hover:bg-gray-50">
              <Camera size={13} className="text-gray-500" />
            </button>
          )}
        </div>

        {/* Name, details, and buttons sit below the photo, fully clear of the banner */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mt-4">
          <div>
            <h1 className="text-lg sm:text-xl font-bold">{name}</h1>
            <p className="text-sm text-gray-600 mt-0.5">
              {degree} &bull; {semester}
            </p>
            <p className="text-xs text-gray-400 flex items-center gap-1 mt-1">
              <MapPin size={12} /> {university}, {location}
            </p>
          </div>

          {showActions && (
            <div className="flex gap-2 shrink-0">
              <Link to="/student/my-profile/edit" className="flex-1 sm:flex-none">
                <Button icon={Pencil} variant="outline" className="text-xs px-4 py-2 w-full justify-center">
                  Edit Profile
                </Button>
              </Link>
              <Link to="/student/my-profile/share" className="flex-1 sm:flex-none">
                <Button icon={Share2} variant="outline" className="text-xs px-4 py-2 w-full justify-center">
                  Share Profile
                </Button>
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProfileHeader;