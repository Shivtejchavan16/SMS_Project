
import {teacher} from "../../mockdata/teachers";

// Reusable Info Component
const Info = ({ label, value }) => (
  <div>
    <p className="text-gray-500 font-medium">{label}</p>
    <p className="mt-1 text-gray-800">{value}</p>
  </div>
);

const TeacherProfile = () => {
  const profile = teacher[0];
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-5xl mx-auto">

        {/* Back Button */}
        <div className="flex justify-between items-center mb-6">
          <button
            onClick={() => window.history.back()}
            className="px-4 py-2 bg-white border rounded-lg shadow hover:bg-gray-50"
          >
            ← Back
          </button>
          <button className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
    Edit Profile
  </button>
        </div>

        {/* Profile Card */}
        <div className="bg-white rounded-2xl shadow-lg p-8">

          {/* Header */}
          <div className="flex flex-col md:flex-row items-center md:items-start gap-6">

            <img
              src={profile.image}
              
              className="w-36 h-36 rounded-full object-cover border-4 border-blue-500"
            />

            <div className="flex-1">
              <div className="flex flex-wrap items-center gap-3">
                <h1 className="text-4xl font-bold text-gray-800">
                  {profile.name}
                </h1>

                <span className="px-4 py-1 rounded-full bg-blue-100 text-blue-700 font-medium">
                  Teacher
                </span>
              </div>

              <p className="text-gray-500 mt-2">
                {profile.teacherId} | {profile.department}
              </p>
            </div>

          </div>

          {/* Profile Information */}
          <div className="mt-10 border rounded-xl p-6">
            <h2 className="text-2xl font-semibold mb-6">
              Profile Information
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-y-6 gap-x-12">
              <Info label="Email" value={profile.email} />
              <Info label="Phone" value={profile.phone} />
              <Info label="Address" value={profile.address} />
              <Info label="Qualification" value={profile.qualification} />
              <Info label="Experience" value={profile.experience} />
              <Info label="Subject" value={profile.subject} />
              <Info label="Date of Joining" value={profile.joiningDate} />
              <Info label="About" value={profile.about} />
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default TeacherProfile;
