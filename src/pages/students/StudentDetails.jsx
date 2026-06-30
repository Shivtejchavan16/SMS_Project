import students from "../../mockdata/students";
import { ArrowLeft, Pencil } from "lucide-react";
import { useNavigate, useParams } from "react-router-dom";

const StudentDetails = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  // Find the student based on URL id
  const student = students.find(
    (student) => student.id === Number(id)
  );

  // If student not found
  if (!student) {
    return (
      <div className="p-6">
        <h2 className="text-2xl font-bold text-red-600">
          Student Not Found
        </h2>
      </div>
    );
  }

  return (
    <div className="p-6">
      {/* Heading */}
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-gray-800">
          Student Details
        </h1>
        <p className="text-gray-500 mt-1">
          View complete information about the student.
        </p>
      </div>

      {/* Details Card */}
      <div className="bg-white rounded-xl shadow-md p-8">

        {/* Top Section */}
        <div className="flex flex-col md:flex-row items-center md:items-start gap-8">

          <img
            src={student.profilePhoto}
            alt={student.studentName}
            className="w-36 h-36 rounded-full object-cover border-4 border-blue-100"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 flex-1">

            <div>
              <p className="text-sm text-gray-500">Student Name</p>
              <h3 className="font-semibold text-lg">
                {student.studentName}
              </h3>
            </div>

            <div>
              <p className="text-sm text-gray-500">Student ID</p>
              <h3 className="font-semibold">
                {student.studentId}
              </h3>
            </div>

            <div>
              <p className="text-sm text-gray-500">Department</p>
              <h3 className="font-semibold">
                {student.department}
              </h3>
            </div>

            <div>
              <p className="text-sm text-gray-500">Course</p>
              <h3 className="font-semibold">
                {student.course}
              </h3>
            </div>

            <div>
              <p className="text-sm text-gray-500">Email</p>
              <h3 className="font-semibold">
                {student.email}
              </h3>
            </div>

            <div>
              <p className="text-sm text-gray-500">Phone Number</p>
              <h3 className="font-semibold">
                {student.phoneNumber}
              </h3>
            </div>

            <div className="md:col-span-2">
              <p className="text-sm text-gray-500">Address</p>
              <h3 className="font-semibold">
                {student.address}
              </h3>
            </div>

            <div>
              <p className="text-sm text-gray-500">Status</p>

              <span className="inline-block px-3 py-1 rounded-full bg-green-100 text-green-700 text-sm font-medium">
                {student.status}
              </span>
            </div>

          </div>

        </div>

        {/* Buttons */}
        <div className="flex justify-end gap-4 mt-10">

          <button
  onClick={() => navigate("/admin/students")}
  className="flex items-center gap-2 border px-5 py-2 rounded-lg hover:bg-gray-100 transition"
>
            <ArrowLeft size={18} />
            Back
          </button>

          <button
  onClick={() => navigate(`/admin/students/edit/${student.id}`)}
  className="flex items-center gap-2 bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 transition"
>
            <Pencil size={18} />
            Edit Student
          </button>

        </div>

      </div>
    </div>
  );
};

export default StudentDetails;