const FilterDropdown = ({ department, setDepartment }) => {
  return (
    <select
      value={department}
      onChange={(e) => setDepartment(e.target.value)}
      className="border rounded-lg px-4 py-2 w-full md:w-60 focus:outline-none focus:ring-2 focus:ring-blue-500"
    >
      <option value="">All Departments</option>
      <option value="Computer Science">Computer Science</option>
      <option value="Information Technology">Information Technology</option>
      <option value="Electronics">Electronics</option>
    </select>
  );
};

export default FilterDropdown;