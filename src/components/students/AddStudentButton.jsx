import { useNavigate } from "react-router-dom";

const AddStudentButton = () => {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => navigate("/admin/students/add")}
      className="bg-blue-600 text-white px-5 py-3 rounded-lg hover:bg-blue-700 transition"
    >
      + Add Student
    </button>
  );
};

export default AddStudentButton;