import React, { useState } from "react";
import { attendanceData } from "../../mockdata/attendance";

const MarkAttendance = () => {
  const [data, setData] = useState(attendanceData);

  const handleChange = (id, status) => {
    setData((prev) =>
      prev.map((s) =>
        s.id === id ? { ...s, status } : s
      )
    );
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Mark Attendance</h1>

      <table className="w-full border border-gray-300">
        <thead className="bg-gray-200">
          <tr>
            <th className="border p-2">Roll No</th>
            <th className="border p-2">Student</th>
            <th className="border p-2">Present</th>
            <th className="border p-2">Absent</th>
            <th className="border p-2">Status</th>
          </tr>
        </thead>

        <tbody>
          {data.map((student) => (
            <tr key={student.id} className="text-center">
              <td className="border p-2">{student.rollNo}</td>
              <td className="border p-2">{student.name}</td>

              <td className="border p-2">
                <input
                  type="radio"
                  name={`att-${student.id}`}
                  onChange={() => handleChange(student.id, "Present")}
                />
              </td>

              <td className="border p-2">
                <input
                  type="radio"
                  name={`att-${student.id}`}
                  onChange={() => handleChange(student.id, "Absent")}
                />
              </td>

              <td className="border p-2">
                {student.status && (
                  <span
                    className={`px-2 py-1 rounded text-white text-sm ${
                      student.status === "Present"
                        ? "bg-green-500"
                        : "bg-red-500"
                    }`}
                  >
                    {student.status}
                  </span>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MarkAttendance;