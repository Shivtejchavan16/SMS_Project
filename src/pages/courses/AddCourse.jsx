import { useState } from "react";

const AddCourse = () => {
  const [course, setCourse] = useState({
    courseName: "",
    courseCode: "",
    duration: "",
    department: "",
    assignedTeacher: "",
    totalSeats: "",
    startDate: "",
    endDate: "",
    description: "",
    status: "Active",
  });

  const handleChange = (e) => {
    setCourse({
      ...course,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(course);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">

      {/* Header */}
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-gray-800">
          Add Course
        </h1>
        <p className="text-gray-500 mt-1">
          Create a new course for your institution.
        </p>
      </div>

      {/* Form Card */}
      <div className="bg-white rounded-xl shadow-lg p-8">

        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >

          {/* Course Name */}
          <div>
            <label className="block text-sm font-medium mb-2">
              Course Name
            </label>
            <input
              type="text"
              name="courseName"
              value={course.courseName}
              onChange={handleChange}
              placeholder="Enter Course Name"
              className="w-full border rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none"
            />
          </div>

          {/* Course Code */}
          <div>
            <label className="block text-sm font-medium mb-2">
              Course Code
            </label>
            <input
              type="text"
              name="courseCode"
              value={course.courseCode}
              onChange={handleChange}
              placeholder="Enter Course Code"
              className="w-full border rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none"
            />
          </div>

          {/* Duration */}
          <div>
            <label className="block text-sm font-medium mb-2">
              Duration
            </label>
            <input
              type="text"
              name="duration"
              value={course.duration}
              onChange={handleChange}
              placeholder="Example: 6 Months"
              className="w-full border rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none"
            />
          </div>

          {/* Department */}
          <div>
            <label className="block text-sm font-medium mb-2">
              Department
            </label>

            <select
              name="department"
              value={course.department}
              onChange={handleChange}
              className="w-full border rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none"
            >
              <option value="">Select Department</option>
              <option>Computer Science</option>
              <option>Information Technology</option>
              <option>Mechanical</option>
              <option>Electronics</option>
              <option>Civil</option>
            </select>
          </div>

          {/* Assigned Teacher */}
         <div>
  <label className="block text-sm font-medium mb-2">
    Assigned Teacher
  </label>

  <input
    type="text"
    name="assignedTeacher"
    value={course.assignedTeacher}
    onChange={handleChange}
    placeholder="Enter Teacher Name"
    className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
  />
</div>
          {/* Total Seats */}
          <div>
            <label className="block text-sm font-medium mb-2">
              Total Seats
            </label>
            <input
              type="number"
              name="totalSeats"
              value={course.totalSeats}
              onChange={handleChange}
              placeholder="Enter Seats"
              className="w-full border rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none"
            />
          </div>

          {/* Start Date */}
          <div>
            <label className="block text-sm font-medium mb-2">
              Start Date
            </label>

            <input
              type="date"
              name="startDate"
              value={course.startDate}
              onChange={handleChange}
              className="w-full border rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none"
            />
          </div>

          {/* End Date */}
          <div>
            <label className="block text-sm font-medium mb-2">
              End Date
            </label>

            <input
              type="date"
              name="endDate"
              value={course.endDate}
              onChange={handleChange}
              className="w-full border rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none"
            />
          </div>

          {/* Status */}
          <div className="md:col-span-2">
            <label className="block text-sm font-medium mb-2">
              Status
            </label>

            <select
              name="status"
              value={course.status}
              onChange={handleChange}
              className="w-full border rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none"
            >
              <option>Active</option>
              <option>Inactive</option>
            </select>
          </div>

          {/* Description */}
          <div className="md:col-span-2">
            <label className="block text-sm font-medium mb-2">
              Course Description
            </label>

            <textarea
              rows="5"
              name="description"
              value={course.description}
              onChange={handleChange}
              placeholder="Write course description..."
              className="w-full border rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none resize-none"
            ></textarea>
          </div>

          {/* Buttons */}
          <div className="md:col-span-2 flex justify-end gap-4 pt-4">

            <button
              type="reset"
              className="px-6 py-3 rounded-lg border border-gray-300 hover:bg-gray-100 transition"
            >
              Cancel
            </button>

            <button
              type="submit"
              className="px-8 py-3 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-semibold shadow"
            >
              Save Course
            </button>

          </div>

        </form>

      </div>

    </div>
  );
};

export default AddCourse;