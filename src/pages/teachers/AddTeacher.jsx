import { useState,useRef } from "react";
import { useNavigate } from "react-router-dom";

const AddTeacher = () => {
  const navigate =useNavigate();
  const initialTeacher = {
    Name: "",
    teacherId: "",
    email: "",
    phone: "",
    department: "",
    subject: "",
    address: "",
    
  };
  const [teacher, setTeacher] = useState(initialTeacher);
const fileInputRef = useRef(null);
const handleCancel = () => {
  setTeacher(initialTeacher);
  navigate("/teachers");
  if (fileInputRef.current) {
    fileInputRef.current.value = "";
  }
};
  const handleChange = (e) => {
    setTeacher({
      ...teacher,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
  e.preventDefault();

  console.log("Teacher Saved:", teacher);

  alert("Teacher added successfully!");
navigate("/teachers");
  setTeacher(initialTeacher);
};

const handleImageChange = (e) => {
  const file = e.target.files[0];

  if (file) {
    setTeacher((prev) => ({
      ...prev,
      image: URL.createObjectURL(file),
    }));
  }
};



  return (
    <div className="min-h-screen bg-gray-100 py-6 px-4">

      

      {/* Form Card */}
      <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-md p-6">

        <form onSubmit={handleSubmit}>
          <h1 className="text-3xl font-bold text-gray-800">
          Add Teacher
        </h1>
        <p className="text-gray-500 mt-1">
          Fill in the teacher information below.
        </p>

          {/* Profile */}
          <div className="flex flex-col items-center mb-6">

            <div className="w-20 h-20 rounded-full bg-blue-100 border-2 border-blue-500 flex items-center justify-center text-3xl">
              👤
            </div>

            <input
  type="file"
  id="teacherImage"
  accept="image/*"
  ref={fileInputRef}
  hidden
  required
  onChange={handleImageChange}
/>

<label
  htmlFor="teacherImage"
  className="mt-4 px-5 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 cursor-pointer"
>
  Upload Photo
</label>

          </div>

          {/* Personal Information */}
          <h2 className="text-xl font-semibold text-gray-700 border-b pb-2 mb-6">
            Personal Information
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

            <Input
              label="Name"
              name="Name"
              value={teacher.name}
              onChange={handleChange}
            />

            

            <Input
              label="Teacher ID"
              name="teacherId"
              value={teacher.teacherId}
              onChange={handleChange}
            />

            

          </div>

          {/* Contact */}
          <h2 className="text-xl font-semibold text-gray-700 border-b pb-2 mt-6 mb-4">
            Contact Information
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

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

            
            

            

          </div>

          {/* Address */}
          <h2 className="text-xl font-semibold text-gray-700 border-b pb-2 mt-10 mb-6">
            Address
          </h2>

          <textarea
            rows="2"
            name="address"
            value={teacher.address}
            onChange={handleChange}
            required
            placeholder="Enter Address"
            className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
          />

          {/* Buttons */}
          <div className="flex justify-end gap-4 mt-10">

            <button
  type="button"
  onClick={handleCancel}
  className="px-5 py-2 border rounded-lg hover:bg-gray-100"
>
  Cancel
</button>

            <button
              type="submit"
              className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium shadow"
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
  required = true,
}) => (
  <div>
    <label className="block mb-2 font-medium">
      {label} <span className="text-red-500">*</span>
    </label>

    <input
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder || `Enter ${label}`}
      required={required}
      className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
    />
  </div>
);
  


export default AddTeacher
