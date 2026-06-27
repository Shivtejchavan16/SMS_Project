const Dashboard = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-8">

      {/* Welcome Banner */}
      <div className="mb-8 rounded-2xl bg-gradient-to-r from-blue-600 to-blue-800 p-8 text-white shadow-lg">
        <h1 className="text-4xl font-bold">Welcome Back, Admin 👋</h1>
        <p className="mt-3 text-lg text-blue-100">
          Here's what's happening in your Student Management System today.
        </p>
      </div>

      {/* Statistics Cards */}
      <div className="mb-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">

        <div className="rounded-xl bg-white p-6 shadow-md transition hover:-translate-y-1 hover:shadow-xl">
          <h4 className="text-gray-500 font-semibold">👨‍🎓 Total Students</h4>
          <h2 className="mt-3 text-4xl font-bold text-blue-600">1,500</h2>
        </div>

        <div className="rounded-xl bg-white p-6 shadow-md transition hover:-translate-y-1 hover:shadow-xl">
          <h4 className="text-gray-500 font-semibold">👩‍🏫 Total Teachers</h4>
          <h2 className="mt-3 text-4xl font-bold text-green-600">120</h2>
        </div>

        <div className="rounded-xl bg-white p-6 shadow-md transition hover:-translate-y-1 hover:shadow-xl">
          <h4 className="text-gray-500 font-semibold">📚 Total Courses</h4>
          <h2 className="mt-3 text-4xl font-bold text-purple-600">50</h2>
        </div>

        <div className="rounded-xl bg-white p-6 shadow-md transition hover:-translate-y-1 hover:shadow-xl">
          <h4 className="text-gray-500 font-semibold">💰 Total Revenue</h4>
          <h2 className="mt-3 text-4xl font-bold text-orange-500">₹4,50,000</h2>
        </div>

      </div>

      {/* Charts Section */}
      <div className="mb-8 grid gap-6 lg:grid-cols-2">

        <div className="flex h-72 items-center justify-center rounded-xl border-2 border-dashed border-gray-300 bg-white text-xl font-semibold text-gray-500 shadow-md">
          📈 Student Growth Chart Placeholder
        </div>

        <div className="flex h-72 items-center justify-center rounded-xl border-2 border-dashed border-gray-300 bg-white text-xl font-semibold text-gray-500 shadow-md">
          📊 Attendance Chart Placeholder
        </div>

      </div>

      {/* Recent Admissions */}
      <div className="mb-6 rounded-xl bg-white p-6 shadow-md">
        <h2 className="mb-4 text-2xl font-bold text-gray-800">
          Recent Admissions
        </h2>

        <div className="border-b py-3">👨‍🎓 Rahul Sharma enrolled in BCA</div>
        <div className="border-b py-3">👩 Priya Patil enrolled in B.Com</div>
        <div className="py-3">👨 Amit Kumar enrolled in MCA</div>
      </div>

      {/* Upcoming Events */}
      <div className="mb-6 rounded-xl bg-white p-6 shadow-md">
        <h2 className="mb-4 text-2xl font-bold text-gray-800">
          Upcoming Events
        </h2>

        <div className="border-b py-3">📅 Annual Sports Day - 15 July</div>
        <div className="border-b py-3">📅 Mid Semester Exams - 20 July</div>
        <div className="py-3">📅 Placement Drive - 28 July</div>
      </div>

      {/* Recent Activities */}
      <div className="rounded-xl bg-white p-6 shadow-md">
        <h2 className="mb-4 text-2xl font-bold text-gray-800">
          Recent Activities
        </h2>

        <div className="border-b py-3">✅ New student registered</div>
        <div className="border-b py-3">✅ Teacher added new course</div>
        <div className="border-b py-3">✅ Exam results published</div>
        <div className="py-3">✅ Attendance updated</div>
      </div>

    </div>
  );
};

export default Dashboard;