import React, { useState } from "react";
import Table from "../../components/ui/Table";
import SearchBar from "../../components/ui/SearchBar";
import EmptyState from "../../components/ui/EmptyState";

const StudentList = () => {
  const [search, setSearch] = useState("");

  const data = [
    { name: "Sakshi", email: "sakshi@gmail.com" },
    { name: "Rahul", email: "rahul@gmail.com" }
  ];

  const filteredData = data.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <h2 className="text-xl font-bold mb-3">Students</h2>

      <SearchBar value={search} onChange={(e) => setSearch(e.target.value)} />

      {filteredData.length > 0 ? (
        <Table data={filteredData} />
      ) : (
        <EmptyState message="No students found" />
      )}
    </div>
  );
};

export default StudentList;