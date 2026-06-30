import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import teachersData from "../../mockdata/teachers";

const EditTeacher = () => {
  const { id } = useParams();
  const navigate = useNavigate();

const selectedTeacher = teachersData.find(
  (teacher) => teacher.id === Number(id)
);

const [teacher, setTeacher] = useState({...selectedTeacher});

const handleChange = (e) =>{
  setTeacher({...teacher,
    [e.target.name]:e.target.value,
  });
};

  const handleCancel = () => {
    setTeacher({...selectedTeacher});
    navigate("/teachers");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Updated Teacher:", teacher);
    alert("teacher updated successfully!");
    navigate("/teachers");
  };
  return (
    <div className="min-h-screen bg-gray-100 p-4">

      

      {/* Form Card */}
      <div className="bg-white rounded-2xl shadow-lg p-5">

        <form onSubmit={handleSubmit}>

  <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

    {/* Left Side */}
    <div className="bg-gray-50 rounded-xl p-6 flex flex-col items-center h-fit">
<h1 className="text-3xl font-bold text-gray-800">
          Edit Teacher
        </h1>
        <p className="text-gray-500 mt-1">
          Update teacher information 
        </p>
      <br/>
      <br/>
      <img
        src={teacher.image}
        alt={teacher.name}
        className="w-32 h-32 rounded-full object-cover border-2 border-blue-500"
      />

      <label
        htmlFor="teacherImage"
        className="mt-4 w-full text-center bg-blue-600 text-white py-2 rounded-lg cursor-pointer hover:bg-blue-700"
      >
        Change Photo
      </label>

      <input
        id="teacherImage"
        type="file"
        accept="image/*"
        hidden
        onChange={(e) => {
          const file = e.target.files[0];

          if (file) {
            setTeacher({
              ...teacher,
              image: URL.createObjectURL(file),
            });
          }
        }}
      />

      

    </div>

    {/* Right Side */}
    <div className="lg:col-span-2 bg-white">

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

        <Input
          label="Name"
          name="name"
          value={teacher.name}
          onChange={handleChange}
        />

        <Input
          label="Teacher ID"
          name="teacherId"
          value={teacher.teacherId}
          onChange={handleChange}
        />

        <Input
          label="Email"
          type="email"
          name="email"
          value={teacher.email}
          onChange={handleChange}
        />

        <Input
          label="Phone"
          name="phone"
          value={teacher.phone}
          onChange={handleChange}
        />

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

      <div className="mt-6">
        <label className="block mb-2 font-medium">
          Address
        </label>

        <textarea
          rows="2"
          name="address"
          value={teacher.address}
          onChange={handleChange}
          required
          className="w-full border rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none"
        />
      </div>

      <div className="flex justify-end gap-4 mt-8">

        <button
          type="button"
          onClick={handleCancel}
          className="px-6 py-2 border rounded-lg hover:bg-gray-100"
        >
          Cancel
        </button>

        <button
          type="submit"
          className="px-8 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
        >
          Save Changes
        </button>

      </div>

    </div>

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
      {label}
    </label>

    <input
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder ||` Enter ${label}`}
      required={required}
      className="w-full border rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none"
    />
  </div>
);

export default EditTeacher
