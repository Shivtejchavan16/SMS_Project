import StudentForm from "../../components/students/StudentForm";

const AddStudent = () => {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-2">
        Add Student
      </h1>

      <p className="text-gray-500 mb-6">
        Fill in the details to add a new student.
      </p>

      <StudentForm mode="add" />
    </div>
  );
};

export default AddStudent;