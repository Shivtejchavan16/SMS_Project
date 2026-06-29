import { useState } from "react";
import { useNavigate } from "react-router-dom";
import courses from "../../mockdata/courses";

const CourseList = () => {
  const navigate = useNavigate();
  const [search, setSearch] = useState("");
  const [departmentFilter, setDepartmentFilter] = useState("");
  const [statusFilter, setStatusFilter] = useState("");

  const filteredCourses = courses.filter((course) => {
  const matchesSearch = [
    course.courseName,
    course.courseCode,
    course.department,
    course.assignedTeacher,
  ]
    .join(" ")
    .toLowerCase()
    .includes(search.toLowerCase());

  const matchesDepartment =
    departmentFilter === "" || course.department === departmentFilter;

  const matchesStatus =
    statusFilter === "" || course.status === statusFilter;

  return matchesSearch && matchesDepartment && matchesStatus;
});

  return (
    <div className="min-h-screen bg-gray-100 p-6">

      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-800">
            Course Management
          </h1>
          <p className="text-gray-500 mt-1">
            Manage all courses from one place.
          </p>
        </div>

        <button
          onClick={() => navigate("/courses/add")}
          className="mt-4 md:mt-0 bg-blue-600 hover:bg-blue-700 text-white px-5 py-3 rounded-lg shadow"
        >
          + Add Course
        </button>
      </div>

      <div className="bg-white rounded-xl shadow p-5 mb-8">
  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

    {/* Search */}
    <input
      type="text"
      placeholder="Search by course name, code, department or teacher..."
      value={search}
      onChange={(e) => setSearch(e.target.value)}
      className="w-full border rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none"
    />

    {/* Department Filter */}
    <select
      value={departmentFilter}
      onChange={(e) => setDepartmentFilter(e.target.value)}
      className="w-full border rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none"
    >
      <option value="">All Departments</option>
      <option value="Computer Science">Computer Science</option>
      <option value="Information Technology">Information Technology</option>
      <option value="Mechanical">Mechanical</option>
      <option value="Electronics">Electronics</option>
      <option value="Civil">Civil</option>
    </select>

    {/* Status Filter */}
    <select
      value={statusFilter}
      onChange={(e) => setStatusFilter(e.target.value)}
      className="w-full border rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none"
    >
      <option value="">All Status</option>
      <option value="Active">Active</option>
      <option value="Inactive">Inactive</option>
    </select>

  </div>
</div>

      {/* Course Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">

        {filteredCourses.map((course) => (
          <div
            key={course.id}
            onClick={() => navigate(`/courses/details/${course.id}`)}
            className="bg-white rounded-2xl shadow-md hover:shadow-xl transition duration-300 cursor-pointer overflow-hidden"
          >

            {/* Top */}
            <div className="bg-blue-600 text-white p-6">

              <div className="flex justify-between items-center">

                <div className="w-14 h-14 rounded-full bg-white text-blue-600 flex items-center justify-center text-2xl">
                  📘
                </div>

                <span className="bg-white text-blue-600 px-3 py-1 rounded-full text-sm font-medium">
                  {course.courseCode}
                </span>

              </div>

              <h2 className="text-2xl font-bold mt-5">
                {course.courseName}
              </h2>

            </div>

            {/* Details */}
            <div className="p-6">

              <div className="space-y-3">

                <div className="flex justify-between">
                  <span className="text-gray-500">
                    Department
                  </span>

                  <span className="font-semibold">
                    {course.department}
                  </span>
                </div>

                <div className="flex justify-between">
                  <span className="text-gray-500">
                    Duration
                  </span>

                  <span className="font-semibold">
                    {course.duration}
                  </span>
                </div>

                <div className="flex justify-between">
                  <span className="text-gray-500">
                    Teacher
                  </span>

                  <span className="font-semibold text-right">
                    {course.assignedTeacher}
                  </span>
                </div>

              </div>
              {/* Bottom Section */}
              <div className="mt-6 pt-4 border-t border-gray-200 flex justify-between items-center">

                <span
                  className={`px-3 py-1 rounded-full text-sm font-medium ${
                    course.status === "Active"
                      ? "bg-green-100 text-green-700"
                      : "bg-red-100 text-red-700"
                  }`}
                >
                  {course.status}
                </span>

                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    navigate(`/courses/${course.id}`);
                  }}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition"
                >
                  View Details →
                </button>

              </div>

            </div>
          </div>
        ))}

        {/* Empty State */}
        {filteredCourses.length === 0 && (
          <div className="col-span-full bg-white rounded-xl shadow p-10 text-center">
            <h2 className="text-xl font-semibold text-gray-700">
              No Courses Found
            </h2>
            <p className="text-gray-500 mt-2">
              Try searching with another course name or code.
            </p>
          </div>
        )}

      </div>

    </div>
  );
};

export default CourseList;