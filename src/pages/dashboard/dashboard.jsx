import {
  FaUserGraduate,
  FaChalkboardTeacher,
  FaBookOpen,
  FaBell,
  FaSearch,
  FaUserCircle,
} from "react-icons/fa";

import { FaIndianRupeeSign } from "react-icons/fa6";

import {
  stats,
  admissions,
  studentGrowth,
  attendance,
  quickActions,
  events,
  activities,
} from "../../mockData/dashboard";
const Dashboard = () => {
const today = new Date().toLocaleDateString("en-IN", {
  weekday: "long",
  day: "numeric",
  month: "long",
  year: "numeric",
});
const getIcon = (icon) => {
  switch (icon) {
    case "students":
      return <FaUserGraduate className="text-3xl text-blue-600" />;

    case "teachers":
      return <FaChalkboardTeacher className="text-3xl text-green-600" />;

    case "courses":
      return <FaBookOpen className="text-3xl text-purple-600" />;

    case "revenue":
      return <FaIndianRupeeSign className="text-3xl text-orange-500" />;

    default:
      return null;
  }
};
  
  return (
    <div className="min-h-screen bg-slate-100 p-6 lg:p-8">

      {/* Header */}

<div className="flex flex-col lg:flex-row justify-between items-center gap-6 mb-8">

  <div>

    <h1 className="text-4xl font-bold text-slate-800">
      Dashboard
    </h1>

    <p className="text-gray-500 mt-2">
      Welcome back! Manage your institution efficiently.
    </p>

    <p className="text-sm text-blue-600 mt-1">
      {today}
    </p>

  </div>

  <div className="flex items-center gap-4">

    {/* Search */}

    <div className="relative">

      <FaSearch className="absolute left-4 top-3.5 text-gray-400" />

      <input
        type="text"
        placeholder="Search..."
        className="pl-11 pr-4 py-3 rounded-xl border focus:outline-none focus:ring-2 focus:ring-blue-500"
      />

    </div>

    {/* Notification */}

    <button className="relative bg-white shadow rounded-xl p-3 hover:bg-gray-100">

      <FaBell className="text-xl text-gray-700" />

      <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
        3
      </span>

    </button>

    {/* Profile */}

    <div className="flex items-center gap-3 bg-white rounded-xl shadow px-4 py-2">

      <FaUserCircle className="text-4xl text-blue-600" />

      <div>

        <h4 className="font-semibold">
          Admin
        </h4>

        <p className="text-xs text-gray-500">
          Administrator
        </p>

      </div>

    </div>

  </div>

</div>
      {/* Welcome Banner */}

<div className="rounded-3xl bg-gradient-to-r from-blue-700 via-indigo-700 to-purple-700 p-8 text-white shadow-xl">

  <div className="flex flex-col lg:flex-row justify-between items-center">

    <div>

      <p className="text-blue-200 text-lg">
        Good Morning 👋
      </p>

      <h2 className="text-5xl font-bold mt-2">
        Welcome Back, Admin
      </h2>

      <p className="mt-4 max-w-xl text-blue-100 leading-7">
        Monitor student records, teacher activities, attendance,
        admissions and reports from one centralized dashboard.
      </p>

      <button className="mt-6 bg-white text-blue-700 font-semibold px-6 py-3 rounded-xl hover:bg-blue-100 transition">

        + New Admission

      </button>

    </div>

    <div className="mt-8 lg:mt-0 text-center">

      <div className="w-36 h-36 rounded-full bg-white/20 flex items-center justify-center backdrop-blur">

        <FaUserGraduate className="text-7xl" />

      </div>

      <p className="mt-5 text-blue-100 text-lg">

        Student Management System

      </p>

    </div>

  </div>

</div>

  {/* Statistics */}

<div className="grid gap-6 mt-8 sm:grid-cols-2 xl:grid-cols-4">

  {stats.map((item, index) => (

    <div
      key={index}
      className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-2xl hover:-translate-y-2 transition duration-300 border border-gray-100"
    >

      <div className="flex justify-between items-center">

        <div>

          <p className="text-gray-500 font-medium">
            {item.title}
          </p>

          <h2 className={`text-4xl font-bold mt-3 ${item.color}`}>
            {item.value}
          </h2>

          <p className="text-green-600 text-sm mt-3 font-medium">
            {item.change} this month
          </p>

        </div>

        <div
          className={`w-16 h-16 rounded-full ${item.bg} flex justify-center items-center`}
        >
          {getIcon(item.icon)}
        </div>

      </div>

    </div>

  ))}

</div>

      
            {/* Charts & Right Side */}

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6 mt-8">

        {/* Student Growth Chart */}

       <div className="xl:col-span-2 bg-white rounded-2xl shadow-lg p-6">

  <div className="flex justify-between items-center mb-8">

    <h2 className="text-2xl font-bold text-gray-800">
      Student Growth
    </h2>

    <span className="text-sm text-blue-600 bg-blue-100 px-3 py-1 rounded-full">
      Last 6 Months
    </span>

  </div>

  <div className="flex items-end justify-between h-72">

    {studentGrowth.map((item, index) => (

      <div
        key={index}
        className="flex flex-col items-center w-full"
      >

        <div
          className="w-12 rounded-t-xl bg-gradient-to-t from-blue-700 via-blue-500 to-cyan-400 hover:scale-110 transition duration-300"
          style={{
            height: item.value,
          }}
        ></div>

        <span className="mt-3 text-gray-600 font-medium">
          {item.month}
        </span>

      </div>

    ))}

  </div>
</div>
</div>

        {/* Attendance Overview */}

        <div className="bg-white rounded-2xl shadow-md p-6">

          <h2 className="text-2xl font-bold mb-6 text-gray-800">
  Attendance Overview
</h2>

          <div className="flex justify-center">

            <div className="relative">

              <svg width="180" height="180">

                <circle
                  cx="90"
                  cy="90"
                  r="70"
                  stroke="#E5E7EB"
                  strokeWidth="15"
                  fill="none"
                />

                <circle
                  cx="90"
                  cy="90"
                  r="70"
                  stroke="#2563EB"
                  strokeWidth="15"
                  fill="none"
                  strokeDasharray="440"
                  strokeDashoffset="65"
                  strokeLinecap="round"
                  transform="rotate(-90 90 90)"
                />

              </svg>

              <div className="absolute inset-0 flex flex-col justify-center items-center">

                <h2 className="text-4xl font-bold text-blue-600">
                  {attendance.percentage}
                </h2>

                <p className="text-gray-500">
                  Attendance
                </p>

              </div>

            </div>

          </div>

          <div className="mt-8 grid grid-cols-3 gap-3">

  <div className="bg-green-100 rounded-xl p-4 text-center">

    <h3 className="text-green-600 font-bold text-2xl">
      {attendance.present}
    </h3>

    <p className="text-gray-600 text-sm">
      Present
    </p>

  </div>

  <div className="bg-red-100 rounded-xl p-4 text-center">

    <h3 className="text-red-500 font-bold text-2xl">
      {attendance.absent}
    </h3>

    <p className="text-gray-600 text-sm">
      Absent
    </p>

  </div>

  <div className="bg-blue-100 rounded-xl p-4 text-center">

    <h3 className="text-blue-600 font-bold text-2xl">
      {attendance.total}
    </h3>

    <p className="text-gray-600 text-sm">
      Total
    </p>

  </div>

</div>
</div>
      {/* Quick Actions & System Status */}

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-8">

       {/* Quick Actions */}

<div className="bg-white rounded-2xl shadow-lg p-6">

  <div className="flex justify-between items-center mb-6">

    <h2 className="text-2xl font-bold text-gray-800">
      Quick Actions
    </h2>

    <span className="text-sm text-blue-600">
      Frequently Used
    </span>

  </div>

  <div className="grid grid-cols-2 gap-4">

    {quickActions.map((item, index) => (

      <button
        key={index}
        className="flex items-center justify-center gap-3 bg-blue-600 hover:bg-blue-700 text-white rounded-xl py-4 font-semibold shadow hover:shadow-lg transition duration-300"
      >

        <span className="text-xl">+</span>

        {item}

      </button>

    ))}

  </div>

</div>
</div>

       {/* System Status */}

<div className="bg-white rounded-2xl shadow-lg p-6">

  <h2 className="text-2xl font-bold mb-6 text-gray-800">
    System Status
  </h2>

  <div className="space-y-6">

    <div>

      <div className="flex justify-between">

        <span>Server</span>

        <span className="text-green-600 font-semibold">
          ● Online
        </span>

      </div>

      <div className="w-full bg-gray-200 rounded-full h-2 mt-2">

        <div className="bg-green-500 h-2 rounded-full w-full"></div>

      </div>

    </div>

    <div>

      <div className="flex justify-between">

        <span>Database</span>

        <span className="text-blue-600 font-semibold">
          ● Healthy
        </span>

      </div>

      <div className="w-full bg-gray-200 rounded-full h-2 mt-2">

        <div className="bg-blue-500 h-2 rounded-full w-11/12"></div>

      </div>

    </div>

    <div>

      <div className="flex justify-between">

        <span>Storage</span>

        <span className="text-orange-500 font-semibold">
          72%
        </span>

      </div>

      <div className="w-full bg-gray-200 rounded-full h-2 mt-2">

        <div className="bg-orange-500 h-2 rounded-full w-3/4"></div>

      </div>

    </div>

  </div>

</div>
            {/* Bottom Section */}

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6 mt-8">

        {/* Recent Admissions */}

<div className="bg-white rounded-2xl shadow-lg p-6">

  <div className="flex justify-between items-center mb-6">

    <h2 className="text-2xl font-bold text-gray-800">
      Recent Admissions
    </h2>

    <button className="text-blue-600 font-medium hover:underline">
      View All
    </button>

  </div>

  <div className="space-y-4">

    {admissions.map((student, index) => (

      <div
        key={index}
        className="flex items-center justify-between p-3 rounded-xl hover:bg-gray-50 transition"
      >

        <div className="flex items-center gap-4">

          <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white flex items-center justify-center font-bold">
            {student.avatar}
          </div>

          <div>

            <h4 className="font-semibold text-gray-800">
              {student.name}
            </h4>

            <p className="text-sm text-gray-500">
              {student.course}
            </p>

          </div>

        </div>

        <span className="text-xs bg-blue-100 text-blue-700 px-3 py-1 rounded-full">
          {student.date}
        </span>

      </div>

    ))}

  </div>

</div>

        {/* Upcoming Events */}

<div className="bg-white rounded-2xl shadow-lg p-6">

  <div className="flex justify-between items-center mb-6">

    <h2 className="text-2xl font-bold text-gray-800">
      Upcoming Events
    </h2>

    <button className="text-blue-600 hover:underline">
      Calendar
    </button>

  </div>

  <div className="space-y-4">

    {events.map((event, index) => (

      <div
        key={index}
        className="flex items-center justify-between border rounded-xl p-4 hover:shadow-md hover:border-blue-400 transition"
      >

        <div className="flex items-center gap-4">

          <div className={`w-4 h-4 rounded-full ${event.color}`}></div>

          <div>

            <h4 className="font-semibold text-gray-800">
              {event.title}
            </h4>

            <p className="text-sm text-gray-500">
              {event.date}
            </p>

          </div>

        </div>

        <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-medium">
          Upcoming
        </span>

      </div>

    ))}

  </div>

</div>

        {/* Recent Activities */}

<div className="bg-white rounded-2xl shadow-lg p-6">

  <div className="flex justify-between items-center mb-6">

    <h2 className="text-2xl font-bold text-gray-800">
      Recent Activities
    </h2>

    <button className="text-blue-600 hover:underline">
      View History
    </button>

  </div>

  <div className="space-y-5">

    {activities.map((activity, index) => (

      <div
        key={index}
        className="flex gap-4"
      >

        <div className="flex flex-col items-center">

          <div className="w-4 h-4 rounded-full bg-blue-600 border-4 border-blue-100"></div>

          {index !== activities.length - 1 && (

            <div className="w-1 h-10 bg-gray-200"></div>

          )}

        </div>

        <div className="flex-1">

          <h4 className="font-semibold text-gray-800">
            {activity}
          </h4>

          <p className="text-sm text-gray-500">
            Today • Admin Panel
          </p>

        </div>

      </div>

    ))}

  </div>

</div>

     {/* Footer */}

<div className="mt-10 bg-white rounded-2xl shadow-lg p-6 flex flex-col lg:flex-row justify-between items-center">

  <div>

    <h3 className="font-bold text-xl text-gray-800">
      Student Management System
    </h3>

    <p className="text-gray-500 mt-2">
      Dashboard Version 1.0 • Built with React & Tailwind CSS
    </p>

  </div>

  <div className="flex gap-4 mt-5 lg:mt-0">

    <span className="px-4 py-2 rounded-full bg-green-100 text-green-700 font-semibold">

      🟢 Server Online

    </span>

    <span className="px-4 py-2 rounded-full bg-blue-100 text-blue-700 font-semibold">

      💾 Database Connected

    </span>

  </div>

</div>
</div>
</div> 

  );
};

export default Dashboard;




