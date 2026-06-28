import React from "react";

const TeacherSchedule = () => {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">
        Teacher Schedule
      </h1>

      {/* Filters */}
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
          <tr>
            <td className="border p-2">Monday</td>
            <td className="border p-2">9:00 - 10:00</td>
            <td className="border p-2">Java</td>
            <td className="border p-2">B.Tech CSE</td>
          </tr>

          <tr>
            <td className="border p-2">Wednesday</td>
            <td className="border p-2">10:00 - 11:00</td>
            <td className="border p-2">DBMS</td>
            <td className="border p-2">B.Tech IT</td>
          </tr>

          <tr>
            <td className="border p-2">Friday</td>
            <td className="border p-2">2:00 - 3:00</td>
            <td className="border p-2">React</td>
            <td className="border p-2">BCA</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default TeacherSchedule;