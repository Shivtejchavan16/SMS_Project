import React from "react";
import { attendanceReports } from "../../mockdata/attendance";

const AttendanceReports = () => {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Attendance Reports</h1>

      <table className="w-full border border-gray-300">
        <thead className="bg-gray-200">
          <tr>
            <th className="border p-2">Student Name</th>
            <th className="border p-2">Attendance %</th>
          </tr>
        </thead>

        <tbody>
          {attendanceReports.map((item) => (
            <tr key={item.id}>
              <td className="border p-2">{item.student}</td>
              <td className="border p-2">{item.attendance}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AttendanceReports;