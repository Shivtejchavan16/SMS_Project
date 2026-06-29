import React from "react";
import { attendanceData } from "../../mockdata/attendance";

const MarkAttendance = () => {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Mark Attendance</h1>

      <div className="flex gap-4 mb-6">
        <input
          type="date"
          className="border border-gray-300 rounded-md px-3 py-2"
        />

        <select className="border border-gray-300 rounded-md px-3 py-2">
          <option>Select Class</option>
          <option>B.Tech CSE</option>
          <option>B.Tech IT</option>
          <option>BCA</option>
        </select>
      </div>

      <table className="w-full border border-gray-300">
        <thead className="bg-gray-200">
          <tr>
            <th className="border p-2">Roll No</th>
            <th className="border p-2">Student Name</th>
            <th className="border p-2">Present</th>
            <th className="border p-2">Absent</th>
          </tr>
        </thead>

        <tbody>
          {attendanceData.map((student) => (
            <tr key={student.id}>
              <td className="border p-2">{student.rollNo}</td>
              <td className="border p-2">{student.name}</td>
              <td className="border p-2">
                <input type="radio" name={`attendance-${student.id}`} />
              </td>
              <td className="border p-2">
                <input type="radio" name={`attendance-${student.id}`} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MarkAttendance;