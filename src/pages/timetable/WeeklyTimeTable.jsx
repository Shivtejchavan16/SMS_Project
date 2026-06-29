import React from "react";
import { weeklyTimetable } from "../../mockdata/timetable";

const WeeklyTimetable = () => {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Weekly Timetable</h1>

      <table className="w-full border">
        <thead className="bg-gray-200">
          <tr>
            <th className="border p-2">Time</th>
            <th className="border p-2">Mon</th>
            <th className="border p-2">Tue</th>
            <th className="border p-2">Wed</th>
            <th className="border p-2">Thu</th>
            <th className="border p-2">Fri</th>
            <th className="border p-2">Sat</th>
          </tr>
        </thead>

        <tbody>
          {weeklyTimetable.map((item) =>
            item.lunch ? (
              <tr key={item.id}>
                <td className="border p-2">{item.time}</td>
                <td
                  colSpan={6}
                  className="border p-2 text-center bg-yellow-200 font-bold"
                >
                  Lunch Break 🍴
                </td>
              </tr>
            ) : (
              <tr key={item.id} className="text-center hover:bg-gray-100">
                <td className="border p-2">{item.time}</td>
                <td className="border p-2">{item.monday}</td>
                <td className="border p-2">{item.tuesday}</td>
                <td className="border p-2">{item.wednesday}</td>
                <td className="border p-2">{item.thursday}</td>
                <td className="border p-2">{item.friday}</td>
                <td className="border p-2">{item.saturday}</td>
              </tr>
            )
          )}
        </tbody>
      </table>
    </div>
  );
};

export default WeeklyTimetable;