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
  
  return (
    <div className="min-h-screen bg-slate-100 p-6 lg:p-8">

      {/* Header */}

      <div className="flex flex-col md:flex-row justify-between items-center mb-8">

        <div>

          <h1 className="text-4xl font-bold text-slate-800">
            Dashboard
          </h1>

          <p className="text-gray-500 mt-2">
            Welcome back! Here's what's happening today.
          </p>

        </div>

        <div className="mt-4 md:mt-0">

          <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl shadow-lg transition">
            + New Admission
          </button>

        </div>

      </div>

      {/* Welcome Banner */}

      <div className="rounded-3xl bg-gradient-to-r from-blue-700 via-blue-600 to-indigo-700 p-8 text-white shadow-xl">

        <div className="flex flex-col lg:flex-row justify-between items-center">

          <div>

            <h2 className="text-4xl font-bold">
              Welcome Back, Admin 👋
            </h2>

            <p className="mt-3 text-blue-100 max-w-xl">
              Manage students, teachers, attendance, courses and reports
              from one central dashboard.
            </p>

          </div>

          <div className="mt-6 lg:mt-0 text-center">

            <div className="text-5xl">
              📚
            </div>

            <p className="mt-3 text-blue-100">
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
            className="bg-white rounded-2xl shadow-md hover:shadow-xl transition duration-300 p-6 hover:-translate-y-2"
          >

            <div className="flex justify-between">

              <div>

                <p className="text-gray-500">
                  {item.title}
                </p>

                <h2 className={`text-4xl font-bold mt-3 ${item.color}`}>
                  {item.value}
                </h2>

                <p className="text-green-600 text-sm mt-3">
                  {item.change} this month
                </p>

              </div>

              <div
                className={`w-16 h-16 rounded-full ${item.bg} flex items-center justify-center text-3xl`}
              >
                {item.icon}
              </div>

            </div>

          </div>

        ))}

      </div>
            {/* Charts & Right Side */}

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6 mt-8">

        {/* Student Growth Chart */}

        <div className="flex items-end justify-between h-72">
  {studentGrowth.map((item, index) => (
    <div
      key={index}
      className="flex flex-col items-center w-full"
    >
      <div
        className="w-10 rounded-t-lg bg-gradient-to-t from-blue-600 to-blue-400 hover:scale-105 transition"
        style={{
          height: item.value,
        }}
      ></div>

      <span className="mt-3 text-gray-600 text-sm">
        {item.month}
      </span>
    </div>
  ))}
</div>

        {/* Attendance Overview */}

        <div className="bg-white rounded-2xl shadow-md p-6">

          <h2 className="text-2xl font-bold mb-6 text-gray-800">
            Attendance
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

          <div className="mt-6 space-y-3">

            <div className="flex justify-between">
              <span>Present</span>
              <span className="font-semibold text-green-600">
              {attendance.present}
              </span>
            </div>

            <div className="flex justify-between">
              <span>Absent</span>
              <span className="font-semibold text-red-500">
               {attendance.absent}
              </span>
            </div>

            <div className="flex justify-between">
              <span>Total</span>
              <span className="font-semibold">
               {attendance.total}
              </span>
            </div>

          </div>

        </div>

      </div>

      {/* Quick Actions & System Status */}

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-8">

        {/* Quick Actions */}

        <div className="bg-white rounded-2xl shadow-md p-6">

          <h2 className="text-2xl font-bold mb-6 text-gray-800">
            Quick Actions
          </h2>

          <div className="grid grid-cols-2 gap-4">

            {quickActions.map((item, index) => (

              <button
                key={index}
                className="bg-blue-600 hover:bg-blue-700 text-white rounded-xl py-4 font-semibold transition"
              >
                {item}
              </button>

            ))}

          </div>

        </div>

        {/* System Status */}

        <div className="bg-white rounded-2xl shadow-md p-6">

          <h2 className="text-2xl font-bold mb-6 text-gray-800">
            System Status
          </h2>

          <div className="space-y-5">

            <div>

              <div className="flex justify-between mb-2">
                <span>Server</span>
                <span className="text-green-600 font-semibold">
                  Online
                </span>
              </div>

              <div className="w-full bg-gray-200 rounded-full h-3">

                <div className="bg-green-500 h-3 rounded-full w-full"></div>

              </div>

            </div>

            <div>

              <div className="flex justify-between mb-2">
                <span>Database</span>
                <span className="text-blue-600 font-semibold">
                  Healthy
                </span>
              </div>

              <div className="w-full bg-gray-200 rounded-full h-3">

                <div className="bg-blue-500 h-3 rounded-full w-11/12"></div>

              </div>

            </div>

            <div>

              <div className="flex justify-between mb-2">
                <span>Storage</span>
                <span className="text-orange-500 font-semibold">
                  72%
                </span>
              </div>

              <div className="w-full bg-gray-200 rounded-full h-3">

                <div className="bg-orange-500 h-3 rounded-full w-3/4"></div>

              </div>

            </div>

          </div>

        </div>

      </div>
            {/* Bottom Section */}

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6 mt-8">

        {/* Recent Admissions */}

        <div className="bg-white rounded-2xl shadow-md p-6">

          <div className="flex justify-between items-center mb-6">

            <h2 className="text-2xl font-bold text-gray-800">
              Recent Admissions
            </h2>

            <button className="text-blue-600 text-sm font-semibold hover:underline">
              View All
            </button>

          </div>

          <div className="space-y-5">

            {admissions.map((student, index) => (

              <div
                key={index}
                className="flex items-center justify-between"
              >

                <div className="flex items-center gap-4">

                  <div className="w-12 h-12 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center font-bold">
                    {student.avatar}
                  </div>

                  <div>

                    <h4 className="font-semibold text-gray-800">
                      {student.name}
                    </h4>

                    <p className="text-gray-500 text-sm">
                      {student.course}
                    </p>

                  </div>

                </div>

                <span className="text-xs text-gray-400">
                  {student.date}
                </span>

              </div>

            ))}

          </div>

        </div>

        {/* Upcoming Events */}

        <div className="bg-white rounded-2xl shadow-md p-6">

          <div className="flex justify-between items-center mb-6">

            <h2 className="text-2xl font-bold text-gray-800">
              Upcoming Events
            </h2>

            <button className="text-blue-600 text-sm font-semibold hover:underline">
              Calendar
            </button>

          </div>

          <div className="space-y-4">

            {events.map((event, index) => (

              <div
                key={index}
                className="flex items-center justify-between border rounded-xl p-4 hover:bg-gray-50 transition"
              >

                <div className="flex items-center gap-3">

                  <div className={`w-4 h-4 rounded-full ${event.color}`}></div>

                  <div>

                    <h4 className="font-semibold text-gray-800">
                      {event.title}
                    </h4>

                    <p className="text-gray-500 text-sm">
                      {event.date}
                    </p>

                  </div>

                </div>

                <span className="bg-blue-100 text-blue-700 text-xs px-3 py-1 rounded-full">
                  Upcoming
                </span>

              </div>

            ))}

          </div>

        </div>

        {/* Recent Activities */}

        <div className="bg-white rounded-2xl shadow-md p-6">

          <div className="flex justify-between items-center mb-6">

            <h2 className="text-2xl font-bold text-gray-800">
              Recent Activities
            </h2>

            <button className="text-blue-600 text-sm font-semibold hover:underline">
              View History
            </button>

          </div>

          <div className="space-y-6">

            {activities.map((activity, index) => (

              <div
                key={index}
                className="flex gap-4"
              >

                <div className="flex flex-col items-center">

                  <div className="w-4 h-4 rounded-full bg-blue-600 border-4 border-blue-100"></div>

                  {index !== activities.length - 1 && (

                    <div className="w-1 h-12 bg-gray-200"></div>

                  )}

                </div>

                <div>

                  <h4 className="font-semibold text-gray-800">
                    {activity}
                  </h4>

                  <p className="text-gray-500 text-sm">
                    Today • Admin Panel
                  </p>

                </div>

              </div>

            ))}

          </div>

        </div>

      </div>

      {/* Footer */}

      <div className="mt-10 bg-white rounded-2xl shadow-md p-6 flex flex-col md:flex-row justify-between items-center">

        <div>

          <h3 className="font-bold text-lg text-gray-800">
            Student Management System
          </h3>

          <p className="text-gray-500 mt-1">
            Dashboard Version 1.0 • Ready for Backend Integration
          </p>

        </div>

        <div className="mt-4 md:mt-0 flex gap-3">

          <span className="px-4 py-2 rounded-full bg-green-100 text-green-700 font-semibold">
            Server Online
          </span>

          <span className="px-4 py-2 rounded-full bg-blue-100 text-blue-700 font-semibold">
            Database Connected
          </span>

        </div>

      </div>

    </div>
  );
};

export default Dashboard;

