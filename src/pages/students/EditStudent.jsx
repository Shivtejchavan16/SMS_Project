import StudentForm from "../../components/students/StudentForm";

const EditStudent = () => {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-2">
        Edit Student
      </h1>

      <p className="text-gray-500 mb-6">
        Update the student details.
      </p>

      <StudentForm mode="edit" />
    </div>
  );
};

export default EditStudent;