import { useState } from "react";

const AddTeacher = () => {
  const [teacher, setTeacher] = useState({
    firstName: "",
    lastName: "",
    teacherId: "",
    email: "",
    phone: "",
    gender: "",
    department: "",
    subject: "",
    qualification: "",
    experience: "",
    joiningDate: "",
    address: "",
    status: "Active",
  });

  const handleChange = (e) => {
    setTeacher({
      ...teacher,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(teacher);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">

      {/* Header */}
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-gray-800">
          Add Teacher
        </h1>
        <p className="text-gray-500 mt-1">
          Fill in the teacher information below.
        </p>
      </div>

      {/* Form Card */}
      <div className="bg-white rounded-2xl shadow-lg p-8">

        <form onSubmit={handleSubmit}>

          {/* Profile */}
          <div className="flex flex-col items-center mb-10">

            <div className="w-28 h-28 rounded-full bg-blue-100 border-4 border-blue-500 flex items-center justify-center text-4xl">
              👤
            </div>

            <button
              type="button"
              className="mt-4 px-5 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
            >
              Upload Photo
            </button>

          </div>

          {/* Personal Information */}
          <h2 className="text-xl font-semibold text-gray-700 border-b pb-2 mb-6">
            Personal Information
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

            <Input
              label="First Name"
              name="firstName"
              value={teacher.firstName}
              onChange={handleChange}
            />

            <Input
              label="Last Name"
              name="lastName"
              value={teacher.lastName}
              onChange={handleChange}
            />

            <Input
              label="Teacher ID"
              name="teacherId"
              value={teacher.teacherId}
              onChange={handleChange}
            />

            <div>
              <label className="block mb-2 font-medium">
                Gender
              </label>

              <select
                name="gender"
                value={teacher.gender}
                onChange={handleChange}
                className="w-full border rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none"
              >
                <option value="">Select Gender</option>
                <option>Male</option>
                <option>Female</option>
                <option>Other</option>
              </select>
            </div>

          </div>

          {/* Contact */}
          <h2 className="text-xl font-semibold text-gray-700 border-b pb-2 mt-10 mb-6">
            Contact Information
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

            <Input
              label="Email"
              type="email"
              name="email"
              value={teacher.email}
              onChange={handleChange}
            />

            <Input
              label="Phone Number"
              name="phone"
              value={teacher.phone}
              onChange={handleChange}
            />

          </div>

          {/* Professional */}
          <h2 className="text-xl font-semibold text-gray-700 border-b pb-2 mt-10 mb-6">
            Professional Information
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

            <Input
              label="Department"
              name="department"
              value={teacher.department}
              onChange={handleChange}
            />

            <Input
              label="Subject"
              name="subject"
              value={teacher.subject}
              onChange={handleChange}
            />

            <Input
              label="Qualification"
              name="qualification"
              value={teacher.qualification}
              onChange={handleChange}
            />

            <Input
              label="Experience"
              name="experience"
              placeholder="e.g. 5 Years"
              value={teacher.experience}
              onChange={handleChange}
            />

            <div>
              <label className="block mb-2 font-medium">
                Joining Date
              </label>

              <input
                type="date"
                name="joiningDate"
                value={teacher.joiningDate}
                onChange={handleChange}
                className="w-full border rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none"
              />
            </div>

            <div>
              <label className="block mb-2 font-medium">
                Status
              </label>

              <select
                name="status"
                value={teacher.status}
                onChange={handleChange}
                className="w-full border rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none"
              >
                <option>Active</option>
                <option>Inactive</option>
              </select>
            </div>

          </div>

          {/* Address */}
          <h2 className="text-xl font-semibold text-gray-700 border-b pb-2 mt-10 mb-6">
            Address
          </h2>

          <textarea
            rows="4"
            name="address"
            value={teacher.address}
            onChange={handleChange}
            placeholder="Enter Address"
            className="w-full border rounded-lg px-4 py-3 resize-none focus:ring-2 focus:ring-blue-500 outline-none"
          />

          {/* Buttons */}
          <div className="flex justify-end gap-4 mt-10">

            <button
              type="reset"
              className="px-6 py-3 border rounded-lg hover:bg-gray-100"
            >
              Cancel
            </button>

            <button
              type="submit"
              className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold shadow"
            >
              Save Teacher
            </button>

          </div>

        </form>

      </div>
    </div>
  );
};

const Input = ({
  label,
  type = "text",
  name,
  value,
  onChange,
  placeholder,
}) => (
  <div>
    <label className="block mb-2 font-medium">
      {label}
    </label>

    <input
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder ||` Enter ${label}`}
      className="w-full border rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none"
    />
  </div>
);

export default AddTeacher;