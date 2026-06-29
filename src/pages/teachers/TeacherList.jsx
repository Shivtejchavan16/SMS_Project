import { useState } from "react";
import { useNavigate } from "react-router-dom";
import teachersData from "../../mockdata/teachers";

const TeacherList = () => {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const filteredTeachers = teachersData.filter((teacher) =>
    [teacher.name, teacher.teacherId, teacher.department, teacher.subject]
      .join(" ")
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-6">
        <div>
          <h1 className="text-3xl font-bold text-gray-800">Teachers</h1>
          <p className="text-gray-500 mt-1">
            Manage all registered teachers.
          </p>
        </div>

        <button className="mt-4 md:mt-0 bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 rounded-lg font-medium shadow"
         onClick={() => navigate("/teachers/add")}>
          + Add Teacher
        </button>
      </div>

      {/* Search */}
      <div className="bg-white rounded-xl shadow p-4 mb-6">
        <input
          type="text"
          placeholder="Search teachers..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full border border-gray-300 rounded-lg px-4 py-2 outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Table */}
      <div className="bg-white rounded-xl shadow overflow-x-auto">
        <table className="w-full">
          <thead className="bg-gray-50">
            <tr className="text-gray-700 text-sm">
              <th className="px-5 py-4 text-left">Teacher Name</th>
              <th className="px-5 py-4 text-left">Teacher ID</th>
              <th className="px-5 py-4 text-left">Department</th>
              <th className="px-5 py-4 text-left">Subject</th>
              <th className="px-5 py-4 text-left">Email</th>
              <th className="px-5 py-4 text-left">Phone</th>
              
              <th className="px-5 py-4 text-center">Actions</th>
            </tr>
          </thead>

          <tbody>
            {filteredTeachers.length > 0 ? (
              filteredTeachers.map((teacher) => (
                <tr
                  key={teacher.id}
                  className="border-t hover:bg-gray-50 transition"
                >
                  <td className="px-5 py-4">
  <div className="flex flex-col items-center">
    <img
      src={teacher.image}
      alt={teacher.name}
      className="w-14 h-14 rounded-full object-cover cursor-pointer border-2 border-blue-500 hover:scale-105 transition"
      onClick={() =>
        navigate(`/teachers/${teacher.id}`)
      }
    />

    <p className="mt-2 font-medium text-gray-800">
      {teacher.name}
    </p>
  </div>
</td>
                  <td className="px-5 py-4">{teacher.teacherId}</td>
                  <td className="px-5 py-4">{teacher.department}</td>
                  <td className="px-5 py-4">{teacher.subject}</td>
                  <td className="px-5 py-4">{teacher.email}</td>
                  <td className="px-5 py-4">{teacher.phone}</td>

                  

                  <td className="px-5 py-4">
                    <div className="flex justify-center gap-2">
                      

                      <button className="bg-yellow-100 hover:bg-yellow-200 text-yellow-700 px-3 py-1 rounded"
                      onClick={() =>
                               navigate(`/teachers/edit/${teacher.id}`)}>
                        Edit
                      </button>

                      <button className="bg-red-100 hover:bg-red-200 text-red-600 px-3 py-1 rounded">
                        Delete
                      </button>
                    </div>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td
                  colSpan="8"
                  className="text-center py-8 text-gray-500"
                >
                  No teachers found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TeacherList;