import {useMemo, useState } from "react";
import studentsData from "../../mockdata/students";

import SearchBar from "../../components/students/SearchBar";
import FilterDropdown from "../../components/students/FilterDropdown";
import AddStudentButton from "../../components/students/AddStudentButton";
import StudentTable from "../../components/students/StudentTable";


const StudentList = () => {
  const [students, setStudents] = useState(studentsData);
const [searchTerm, setSearchTerm] = useState("");
const [department, setDepartment] = useState("");
  const handleDelete = (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this student?"
    );

    if (confirmDelete) {
      setStudents((prevStudents) =>
        prevStudents.filter((student) => student.id !== id)
      );
    }
  };

const filteredStudents = useMemo(() => {
  return students.filter((student) => {
    const search = searchTerm.toLowerCase();

    const matchesSearch =
      student.studentName.toLowerCase().includes(search) ||
      student.studentId.toLowerCase().includes(search) ||
      student.email.toLowerCase().includes(search);

    const matchesDepartment =
      department === "" || student.department === department;

    return matchesSearch && matchesDepartment;
  });
}, [students, searchTerm, department]);

  return (
    <div className="p-6">
      {/* Heading */}
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-gray-800">
          Student Management
        </h1>
        <p className="text-gray-500">
          Manage all students from one place.
        </p>
      </div>

      {/* Search + Filter + Button */}
      <div className="flex flex-col md:flex-row justify-between gap-4 mb-6">
        <div className="flex flex-col md:flex-row gap-4">
        <SearchBar
  searchTerm={searchTerm}
  setSearchTerm={setSearchTerm}
/>
         <FilterDropdown
  department={department}
  setDepartment={setDepartment}
/>
        </div>

        <AddStudentButton />
      </div>

      {/* Table */}
      <StudentTable
  students={filteredStudents}
  onDelete={handleDelete}
/>
    </div>
  );
};

export default StudentList;