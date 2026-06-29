import React from "react";
import { weeklyTimetable } from "../../mockdata/timetable";

const WeeklyTimetable = () => {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Weekly Timetable</h1>

      <table className="w-full border-collapse border border-gray-300">
        <thead className="bg-gray-200">
          <tr>
            <th className="border border-gray-300 p-2">Time</th>
            <th className="border border-gray-300 p-2">Monday</th>
            <th className="border border-gray-300 p-2">Tuesday</th>
            <th className="border border-gray-300 p-2">Wednesday</th>
            <th className="border border-gray-300 p-2">Thursday</th>
            <th className="border border-gray-300 p-2">Friday</th>
            <th className="border border-gray-300 p-2">Saturday</th>
          </tr>
        </thead>

        <tbody>
          {weeklyTimetable.map((item) => {
            // Lunch row
            if (item.lunch) {
              return (
                <tr key={item.id}>
                  <td className="border border-gray-300 p-2">
                    {item.time}
                  </td>

                  <td
                    colSpan={7}
                    className="border border-gray-300 p-2 text-center font-bold bg-yellow-100 text-yellow-800"
                  >
                    Lunch Break
                  </td>
                </tr>
              );
            }

            // Normal row
            return (
              <tr key={item.id}>
                <td className="border border-gray-300 p-2">
                  {item.time}
                </td>
                <td className="border border-gray-300 p-2">
                  {item.monday}
                </td>
                <td className="border border-gray-300 p-2">
                  {item.tuesday}
                </td>
                <td className="border border-gray-300 p-2">
                  {item.wednesday}
                </td>
                <td className="border border-gray-300 p-2">
                  {item.thursday}
                </td>
                <td className="border border-gray-300 p-2">
                  {item.friday}
                </td>
                <td className="border border-gray-300 p-2">
                  {item.saturday}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default WeeklyTimetable;