import React from "react";

const AttendanceReports = () => {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">
        Attendance Reports
      </h1>

      {/* Filters */}
      <div className="flex gap-4 mb-6">
        <input
          type="date"
          className="border border-gray-300 rounded-md px-3 py-2"
        />

        <select className="border border-gray-300 rounded-md px-3 py-2">
          <option>Select Department</option>
          <option>B.Tech CSE</option>
          <option>B.Tech IT</option>
          <option>BCA</option>
        </select>
      </div>

      {/* Report Cards */}
      <div className="grid grid-cols-3 gap-4 mb-6">
        <div className="border rounded-lg p-4 shadow">
          <h2 className="font-semibold">Total Students</h2>
          <p className="text-2xl mt-2">50</p>
        </div>

        <div className="border rounded-lg p-4 shadow">
          <h2 className="font-semibold">Present</h2>
          <p className="text-2xl text-green-600 mt-2">48</p>
        </div>

        <div className="border rounded-lg p-4 shadow">
          <h2 className="font-semibold">Absent</h2>
          <p className="text-2xl text-red-600 mt-2">2</p>
        </div>
      </div>

      {/* Reports Table */}
      <table className="w-full border border-gray-300">
        <thead className="bg-gray-200">
          <tr>
            <th className="border p-2">Department</th>
            <th className="border p-2">Total Students</th>
            <th className="border p-2">Present</th>
            <th className="border p-2">Absent</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td className="border p-2">B.Tech CSE</td>
            <td className="border p-2">50</td>
            <td className="border p-2 text-green-600">48</td>
            <td className="border p-2 text-red-600">2</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default AttendanceReports;