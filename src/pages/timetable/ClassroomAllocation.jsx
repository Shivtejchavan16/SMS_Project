import React from "react";
import { classroomAllocation } from "../../mockdata/timetable";

const ClassroomAllocation = () => {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">
        Classroom Allocation
      </h1>

      <table className="w-full border border-gray-300">
        <thead className="bg-gray-200">
          <tr>
            <th className="border p-2">Room No</th>
            <th className="border p-2">Department</th>
            <th className="border p-2">Subject</th>
            <th className="border p-2">Teacher</th>
            <th className="border p-2">Time Slot</th>
          </tr>
        </thead>

        <tbody>
          {classroomAllocation.map((item) => (
            <tr key={item.id}>
              <td className="border p-2">{item.room}</td>
              <td className="border p-2">{item.department}</td>
              <td className="border p-2">{item.subject}</td>
              <td className="border p-2">{item.teacher}</td>
              <td className="border p-2">{item.time}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ClassroomAllocation;