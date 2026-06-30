import { useParams,useNavigate } from "react-router-dom";
import teachersData from "../../mockdata/teachers";


const TeacherProfile = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const teacher = teachersData.find(
    (t) => t.id === Number(id)
  );

  if (!teacher) {
    return <h2 className="text-center mt-10">Teacher Not Found</h2>;
  }

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-lg p-8">

  {/* Back Button */}
  <div className="mb-6">
    <button
      onClick={() => navigate(-1)}
      className="inline-flex items-center gap-2 px-4 py-2 bg-gray-200 hover:bg-gray-300 text-gray-700 rounded-lg transition"
    >
      ← Back
    </button>
  </div>

  {/* Profile Section */}
  <div className="flex flex-col items-center">
    <img
      src={teacher.image}
      
      className="w-32 h-32 rounded-full border-4 border-blue-500 object-cover"
    />

    <h2 className="text-3xl font-bold mt-4">
      {teacher.name}
    </h2>

    <p className="text-gray-500">
      {teacher.department}
    </p>
  </div>

        <div className="grid grid-cols-2 gap-6 mt-10">

          <div>
            <h4 className="font-semibold">Teacher ID</h4>
            <p>{teacher.teacherId}</p>
          </div>

          <div>
            <h4 className="font-semibold">Subject</h4>
            <p>{teacher.subject}</p>
          </div>

          <div>
            <h4 className="font-semibold">Email</h4>
            <p>{teacher.email}</p>
          </div>

          <div>
            <h4 className="font-semibold">Phone</h4>
            <p>{teacher.phone}</p>
          </div>

          <div>
            <h4 className="font-semibold">Address</h4>
            <p>{teacher.address}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TeacherProfile
