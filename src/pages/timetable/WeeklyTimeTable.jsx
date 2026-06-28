import React from "react";

const WeeklyTimetable = () => {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">
        Weekly Timetable
      </h1>

      <table className="w-full border border-gray-300">
        <thead className="bg-gray-200">
          <tr>
            <th className="border p-2">Time</th>
            <th className="border p-2">Monday</th>
            <th className="border p-2">Tuesday</th>
            <th className="border p-2">Wednesday</th>
            <th className="border p-2">Thursday</th>
            <th className="border p-2">Friday</th>
            <th className="border p-2">Saturday</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td className="border p-2">9:00 - 10:00</td>
            <td className="border p-2">Data Structures</td>
            <td className="border p-2">Java</td>
            <td className="border p-2">DBMS</td>
            <td className="border p-2">OS</td>
            <td className="border p-2">React</td>
            <td className="border p-2">AI</td>
          </tr>

          <tr>
            <td className="border p-2">10:00 - 11:00</td>
            <td className="border p-2">Java</td>
            <td className="border p-2">DBMS</td>
            <td className="border p-2">React</td>
            <td className="border p-2">CN</td>
            <td className="border p-2">OS</td>
            <td className="border p-2">DS</td>
          </tr>

          <tr>
            <td className="border p-2">11:00 - 12:00</td>
            <td className="border p-2">CN</td>
            <td className="border p-2">React</td>
            <td className="border p-2">Java</td>
            <td className="border p-2">DBMS</td>
            <td className="border p-2">AI</td>
            <td className="border p-2">OS</td>
          </tr>

          <tr>
            <td className="border p-2">1:00 - 2:00</td>
            <td className="border p-2 text-center" colSpan="6">
              Lunch Break
            </td>
          </tr>

          <tr>
            <td className="border p-2">2:00 - 3:00</td>
            <td className="border p-2">React</td>
            <td className="border p-2">Java</td>
            <td className="border p-2">DS</td>
            <td className="border p-2">AI</td>
            <td className="border p-2">DBMS</td>
            <td className="border p-2">CN</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default WeeklyTimetable;