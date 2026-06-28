import React from "react";

const AttendanceHistory = () => {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">
        Attendance History
      </h1>

      {/* Filters */}
      <div className="flex gap-4 mb-6">
        <input
          type="date"
          className="border border-gray-300 rounded-md px-3 py-2"
        />

        <select className="border border-gray-300 rounded-md px-3 py-2">
          <option>All Departments</option>
          <option>B.Tech CSE</option>
          <option>B.Tech IT</option>
          <option>BCA</option>
        </select>
      </div>

      {/* History Table */}
      <table className="w-full border border-gray-300">
        <thead className="bg-gray-200">
          <tr>
            <th className="border p-2">Date</th>
            <th className="border p-2">Department</th>
            <th className="border p-2">Present</th>
            <th className="border p-2">Absent</th>
            <th className="border p-2">Action</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td className="border p-2">27/06/2026</td>
            <td className="border p-2">B.Tech CSE</td>
            <td className="border p-2 text-green-600 font-semibold">48</td>
            <td className="border p-2 text-red-600 font-semibold">2</td>
            <td className="border p-2">
              <button className="bg-blue-600 text-white px-3 py-1 rounded">
                View
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default AttendanceHistory;