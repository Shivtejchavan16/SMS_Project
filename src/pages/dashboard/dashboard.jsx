import React, { useState } from "react";
import Table from "../../components/ui/Table";
import SearchBar from "../../components/ui/SearchBar";
import EmptyState from "../../components/ui/EmptyState";

const Users = () => {
  const [search, setSearch] = useState("");

  const data = [
    { name: "Sakshi", email: "sakshi@gmail.com" },
    { name: "Rahul", email: "rahul@gmail.com" },
    { name: "Priya", email: "priya@gmail.com" },
  ];

  const columns = [
    { header: "Name", accessor: "name" },
    { header: "Email", accessor: "email" },
  ];

  const filteredData = data.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      
      {/* 🔹 Card */}
      <div className="bg-white shadow-md rounded-xl p-6">

        <h2 className="text-2xl font-semibold mb-4">Users</h2>

        {/* 🔍 Search */}
        <div className="mb-4">
          <SearchBar
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        {/* 📋 Table / Empty */}
        {filteredData.length > 0 ? (
          <Table columns={columns} data={filteredData} />
        ) : (
          <EmptyState message="No users found 😢" />
        )}
      </div>

    </div>
  );
};

export default Users;