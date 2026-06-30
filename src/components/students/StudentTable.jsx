// import students from "../../mockdata/students";
import { Eye, Pencil, Trash2 } from "lucide-react";
import { useNavigate } from "react-router-dom";

const StudentTable = ({ students, onDelete }) => {
  const navigate = useNavigate();

  return (
    <div className="overflow-x-auto bg-white rounded-xl shadow-md">
      <table className="min-w-full">
        <thead className="bg-gray-100">
          <tr>
            <th className="px-4 py-3 text-left">Profile</th>
            <th className="px-4 py-3 text-left">Student Name</th>
            <th className="px-4 py-3 text-left">Student ID</th>
            <th className="px-4 py-3 text-left">Department</th>
            <th className="px-4 py-3 text-left">Course</th>
            <th className="px-4 py-3 text-left">Email</th>
            <th className="px-4 py-3 text-left">Phone</th>
            <th className="px-4 py-3 text-center">Actions</th>
          </tr>
        </thead>

        <tbody>
          {students.map((student) => (
            <tr key={student.id} className="border-b hover:bg-gray-50">
              <td className="px-4 py-3">
                <img
                  src={student.profilePhoto}
                  alt={student.studentName}
                  className="w-10 h-10 rounded-full object-cover"
                />
              </td>

              <td className="px-4 py-3">{student.studentName}</td>
              <td className="px-4 py-3">{student.studentId}</td>
              <td className="px-4 py-3">{student.department}</td>
              <td className="px-4 py-3">{student.course}</td>
              <td className="px-4 py-3">{student.email}</td>
              <td className="px-4 py-3">{student.phoneNumber}</td>

              <td className="px-4 py-3">
                <div className="flex justify-center gap-3">
                  {/* View */}
                  <Eye
                    className="w-5 h-5 text-blue-600 cursor-pointer hover:text-blue-800"
                    onClick={() => navigate(`/admin/students/${student.id}`)}
                  />

                  {/* Edit */}
                  <Pencil
                    className="w-5 h-5 text-green-600 cursor-pointer hover:text-green-800"
                    onClick={() =>
                      navigate(`/admin/students/edit/${student.id}`)
                    }
                  />

                  {/* Delete (Placeholder) */}
                  <Trash2
  className="w-5 h-5 text-red-600 cursor-pointer hover:text-red-800"
onClick={() => {
  if (window.confirm("Delete this student?")) {
    onDelete(student.id);
  }
}}
/>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default StudentTable;