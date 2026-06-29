import React from "react";
import { attendanceHistory } from "../../mockdata/attendance";

const AttendanceHistory = () => {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Attendance History</h1>

      <table className="w-full border border-gray-300">
        <thead className="bg-gray-200">
          <tr>
            <th className="border p-2">Date</th>
            <th className="border p-2">Class</th>
            <th className="border p-2">Present</th>
            <th className="border p-2">Absent</th>
          </tr>
        </thead>

        <tbody>
          {attendanceHistory.map((item) => (
            <tr key={item.id}>
              <td className="border p-2">{item.date}</td>
              <td className="border p-2">{item.className}</td>
              <td className="border p-2">{item.present}</td>
              <td className="border p-2">{item.absent}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AttendanceHistory;