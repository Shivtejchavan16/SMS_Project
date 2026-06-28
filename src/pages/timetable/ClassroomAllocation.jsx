import React from "react";

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
          <tr>
            <td className="border p-2">A-101</td>
            <td className="border p-2">B.Tech CSE</td>
            <td className="border p-2">Java</td>
            <td className="border p-2">Mr. Patil</td>
            <td className="border p-2">9:00 - 10:00</td>
          </tr>

          <tr>
            <td className="border p-2">B-202</td>
            <td className="border p-2">B.Tech IT</td>
            <td className="border p-2">DBMS</td>
            <td className="border p-2">Mrs. Sharma</td>
            <td className="border p-2">10:00 - 11:00</td>
          </tr>

          <tr>
            <td className="border p-2">C-303</td>
            <td className="border p-2">BCA</td>
            <td className="border p-2">React</td>
            <td className="border p-2">Mr. Joshi</td>
            <td className="border p-2">2:00 - 3:00</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default ClassroomAllocation;