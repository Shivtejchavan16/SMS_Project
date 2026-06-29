import React from "react";
import { teacherSchedule } from "../../mockdata/timetable";

const TeacherSchedule = () => {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">
        Teacher Schedule
      </h1>

      <div className="flex gap-4 mb-6">
        <select className="border border-gray-300 rounded-md px-3 py-2">
          <option>Select Teacher</option>
          <option>Mr. Patil</option>
          <option>Mrs. Sharma</option>
          <option>Mr. Joshi</option>
        </select>

        <select className="border border-gray-300 rounded-md px-3 py-2">
          <option>Select Week</option>
          <option>Week 1</option>
          <option>Week 2</option>
        </select>
      </div>

      <table className="w-full border border-gray-300">
        <thead className="bg-gray-200">
          <tr>
            <th className="border p-2">Day</th>
            <th className="border p-2">Time</th>
            <th className="border p-2">Subject</th>
            <th className="border p-2">Class</th>
          </tr>
        </thead>

        <tbody>
          {teacherSchedule.map((item) => (
            <tr key={item.id}>
              <td className="border p-2">{item.day}</td>
              <td className="border p-2">{item.time}</td>
              <td className="border p-2">{item.subject}</td>
              <td className="border p-2">{item.className}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TeacherSchedule;