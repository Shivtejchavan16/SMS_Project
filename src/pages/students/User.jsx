import React, { useState } from "react";
import Table from "../../components/ui/Table";
import SearchBar from "../../components/ui/SearchBar";
import EmptyState from "../../components/ui/EmptyState";

const User = () => {
  const [search, setSearch] = useState("");

  const users = [
    { id: 1, name: "Sakshi Desai", email: "sakshi@gmail.com", role: "Admin" },
    { id: 2, name: "Rahul Patil", email: "rahul@gmail.com", role: "Student" },
    { id: 3, name: "Priya Sharma", email: "priya@gmail.com", role: "Teacher" },
  ];

  // 🔍 Filter logic
  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(search.toLowerCase())
  );

  // 🧱 Table columns
  const columns = ["ID", "Name", "Email", "Role", "Action"];

  // 📊 Table rows
  const rows = filteredUsers.map((user) => [
    user.id,
    user.name,
    user.email,
    user.role,
    <>
      <button className="bg-blue-500 text-white px-2 py-1 rounded mr-2">
        Edit
      </button>
      <button className="bg-red-500 text-white px-2 py-1 rounded">
        Delete
      </button>
    </>,
  ]);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Users</h1>

      {/* 🔍 Search */}
      <SearchBar value={search} onChange={(e) => setSearch(e.target.value)} />

      {/* 📭 Empty State */}
      {filteredUsers.length === 0 ? (
        <EmptyState message="No users found" />
      ) : (
        <Table columns={columns} rows={rows} />
      )}
    </div>
  );
};

export default User;