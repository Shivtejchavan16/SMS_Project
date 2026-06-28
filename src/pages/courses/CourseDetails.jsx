import { Link, useParams } from "react-router-dom";
import courses from "../../mockdata/courses";

const CourseDetails = () => {
  const { id } = useParams();

  const course = courses.find(
    (item) => item.id === Number(id)
  );

  if (!course) {
    return (
      <div className="min-h-screen flex items-center justify-center text-2xl font-semibold">
        Course Not Found
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 p-6">

      {/* Header */}
      <div className="flex justify-between items-center mb-6">

        <div>
          <h1 className="text-3xl font-bold text-gray-800">
            Course Details
          </h1>

          <p className="text-gray-500">
            View complete course information.
          </p>
        </div>

        <Link
          to="/courses"
          className="bg-white border px-5 py-2 rounded-lg shadow hover:bg-gray-50"
        >
          ← Back
        </Link>

      </div>

      {/* Main Card */}
      <div className="bg-white rounded-2xl shadow-lg overflow-hidden">

        {/* Banner */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-700 p-8 text-white">

          <div className="flex justify-between items-start">

            <div>

              <div className="w-20 h-20 rounded-full bg-white text-blue-600 flex items-center justify-center text-4xl mb-5">
                📘
              </div>

              <h2 className="text-4xl font-bold">
                {course.courseName}
              </h2>

              <p className="mt-2 text-blue-100">
                Course Code : {course.courseCode}
              </p>

              <p className="text-blue-100">
                Department : {course.department}
              </p>

            </div>

            <span
              className={`px-5 py-2 rounded-full font-semibold ${
                course.status === "Active"
                  ? "bg-green-500"
                  : "bg-red-500"
              }`}
            >
              {course.status}
            </span>

          </div>

        </div>

        {/* Course Information */}

        <div className="p-8">

          <h2 className="text-2xl font-bold text-gray-800 mb-6">
            Course Information
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

            <InfoCard
              title="Course Name"
              value={course.courseName}
            />

            <InfoCard
              title="Course Code"
              value={course.courseCode}
            />

            <InfoCard
              title="Department"
              value={course.department}
            />

            <InfoCard
              title="Duration"
              value={course.duration}
            />

            <InfoCard
              title="Assigned Teacher"
              value={course.assignedTeacher}
            />
            <InfoCard
              title="Students Enrolled"
              value={course.students || "120"}
            />

          </div>

          {/* Description */}
          <div className="mt-10">

            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Course Description
            </h2>

            <div className="bg-gray-50 border rounded-xl p-6">
              <p className="text-gray-600 leading-7">
                {course.description ||
                  "This course provides comprehensive knowledge of the subject including theory, practical implementation, assignments, projects, and assessments. Students gain both conceptual understanding and hands-on experience throughout the course."}
              </p>
            </div>

          </div>

          {/* Statistics */}
          <div className="mt-10">

            <h2 className="text-2xl font-bold text-gray-800 mb-6">
              Course Statistics
            </h2>

            <div className="grid md:grid-cols-3 gap-6">

              <div className="bg-blue-50 rounded-xl p-6 text-center">
                <h3 className="text-4xl font-bold text-blue-600">
                  {course.students || "120"}
                </h3>
                <p className="text-gray-600 mt-2">
                  Students
                </p>
              </div>

              <div className="bg-green-50 rounded-xl p-6 text-center">
                <h3 className="text-4xl font-bold text-green-600">
                  {course.duration}
                </h3>
                <p className="text-gray-600 mt-2">
                  Duration
                </p>
              </div>

              <div className="bg-yellow-50 rounded-xl p-6 text-center">
                <h3 className="text-4xl font-bold text-yellow-600">
                  {course.status}
                </h3>
                <p className="text-gray-600 mt-2">
                  Status
                </p>
              </div>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
};

/* Reusable Info Card */

const InfoCard = ({ title, value }) => {
  return (
    <div className="bg-gray-50 border rounded-xl p-5 hover:shadow-md transition">
      <p className="text-sm text-gray-500">
        {title}
      </p>

      <h3 className="mt-2 text-lg font-semibold text-gray-800">
        {value}
      </h3>
    </div>
  );
};

export default CourseDetails;