import React from "react";
import { attendanceReports } from "../../mockdata/attendance";

const AttendanceReports = () => {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Attendance Reports</h1>

      <div className="grid grid-cols-2 gap-4">
        {attendanceReports.map((item) => (
          <div
            key={item.id}
            className="p-4 rounded shadow bg-gray-50"
          >
            <h2 className="font-bold">{item.student}</h2>
            <p className="text-blue-600 font-semibold">
              {item.attendance}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AttendanceReports;