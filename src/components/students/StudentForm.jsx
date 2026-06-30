import { useNavigate } from "react-router-dom";

const StudentForm = ({ mode = "add" }) => {
  const navigate = useNavigate();
  return (
    <div className="bg-white rounded-xl shadow-md p-6">
      <form className="grid grid-cols-1 md:grid-cols-2 gap-6">

        {/* Profile Photo */}
        <div className="md:col-span-2">
          <label className="block text-sm font-medium mb-2">
            Profile Photo
          </label>

          <input
            type="file"
            className="w-full border rounded-lg px-4 py-2"
          />
        </div>

        {/* Student Name */}
        <div>
          <label className="block text-sm font-medium mb-2">
            Student Name
          </label>

          <input
            type="text"
            defaultValue={
              mode === "edit" ? "Rahul Sharma" : ""
            }
            placeholder="Enter Student Name"
            className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
          />
        </div>

        {/* Student ID */}
        <div>
          <label className="block text-sm font-medium mb-2">
            Student ID
          </label>

          <input
            type="text"
            defaultValue={
              mode === "edit" ? "STU001" : ""
            }
            placeholder="Enter Student ID"
            className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
          />
        </div>

        {/* Department */}
        <div>
          <label className="block text-sm font-medium mb-2">
            Department
          </label>

          <select className="w-full border rounded-lg px-4 py-2">
            <option>Computer Science</option>
            <option>Information Technology</option>
            <option>Electronics</option>
          </select>
        </div>

        {/* Course */}
        <div>
          <label className="block text-sm font-medium mb-2">
            Course
          </label>

          <select className="w-full border rounded-lg px-4 py-2">
            <option>BCA</option>
            <option>MCA</option>
            <option>B.Tech</option>
          </select>
        </div>

        {/* Email */}
        <div>
          <label className="block text-sm font-medium mb-2">
            Email
          </label>

          <input
            type="email"
            defaultValue={
              mode === "edit" ? "rahul@example.com" : ""
            }
            placeholder="Enter Email"
            className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
          />
        </div>

        {/* Phone */}
        <div>
          <label className="block text-sm font-medium mb-2">
            Phone Number
          </label>

          <input
            type="text"
            defaultValue={
              mode === "edit" ? "9876543210" : ""
            }
            placeholder="Enter Phone Number"
            className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
          />
        </div>

        {/* Address */}
        <div className="md:col-span-2">
          <label className="block text-sm font-medium mb-2">
            Address
          </label>

          <textarea
            rows="4"
            defaultValue={
              mode === "edit" ? "Pune, Maharashtra" : ""
            }
            placeholder="Enter Address"
            className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
          />
        </div>

        {/* Buttons */}
        <div className="md:col-span-2 flex justify-end gap-4">
          <button
  type="button"
  onClick={() => navigate("/admin/students")}
  className="px-5 py-2 border rounded-lg hover:bg-gray-100 transition"
>
  Cancel
</button>
          <button
            type="submit"
            className="px-5 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
          >
            {mode === "edit" ? "Update Student" : "Save Student"}
          </button>
        </div>

      </form>
    </div>
  );
};

export default StudentForm;