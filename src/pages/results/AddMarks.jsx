export default function AddMarks() {
  return (
    <div className="bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 font-sans min-h-screen p-4 md:p-8">
      {/* Container Wrap */}
      <div className="max-w-5xl mx-auto bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl border border-slate-200/60 overflow-hidden p-6 md:p-8 transition-all duration-300 hover:shadow-2xl">

        {/* Module Header Badge */}
        <div className="flex justify-start mb-6">
          <span className="bg-gradient-to-r from-indigo-600 to-blue-600 text-white text-xs font-bold uppercase tracking-wider px-4 py-1.5 rounded-md shadow-lg shadow-indigo-500/30 animate-pulse">
             RESULTS MODULE
          </span>
        </div>

        {/* Title */}
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-2">
          Add Student Marks
        </h1>
        <p className="text-sm text-slate-500 mb-8">
          Select class and subject to enter marks for students
        </p>

        {/* Dropdown Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {/* Select Class Dropdown */}
          <div className="flex flex-col gap-2">
            <label className="text-xs font-bold text-slate-600 uppercase tracking-wide">
              Select Class
            </label>
            <div className="relative">
              <select className="w-full appearance-none px-4 py-3 bg-white border border-slate-300 rounded-xl text-sm font-medium text-slate-700 shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all cursor-pointer hover:border-indigo-400">
                <option>B.Tech - CSE (Sem 4)</option>
                <option>B.Tech - IT (Sem 4)</option>
                <option>M.Tech - CSE (Sem 2)</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-slate-500">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                </svg>
              </div>
            </div>
          </div>

          {/* Select Subject Dropdown */}
          <div className="flex flex-col gap-2">
            <label className="text-xs font-bold text-slate-600 uppercase tracking-wide">
              Select Subject
            </label>
            <div className="relative">
              <select className="w-full appearance-none px-4 py-3 bg-white border border-slate-300 rounded-xl text-sm font-medium text-slate-700 shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all cursor-pointer hover:border-indigo-400">
                <option>Data Structures</option>
                <option>Database Management Systems</option>
                <option>Operating Systems</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-slate-500">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* Student Marks Entry Table */}
        <div className="overflow-x-auto border border-slate-200 rounded-xl shadow-md mb-6 bg-white">
          <table className="w-full text-left border-collapse min-w-[600px]">
            <thead>
              <tr className="bg-gradient-to-r from-slate-50 to-slate-100 border-b border-slate-200">
                <th className="p-4 text-xs font-bold text-slate-600 uppercase tracking-wider w-24">Roll No.</th>
                <th className="p-4 text-xs font-bold text-slate-600 uppercase tracking-wider">Student Name</th>
                <th className="p-4 text-xs font-bold text-slate-600 uppercase tracking-wider w-48">Marks (Out of 100)</th>
                <th className="p-4 text-xs font-bold text-slate-600 uppercase tracking-wider w-28">Grade</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-sm font-medium text-slate-700">
              <tr className="hover:bg-indigo-50/50 transition-all duration-200 group">
                <td className="p-4 text-slate-500 group-hover:text-indigo-600 font-semibold">01</td>
                <td className="p-4 text-slate-800 font-semibold">Aarav Patil</td>
                <td className="p-4">
                  <input
                    type="number"
                    defaultValue="85"
                    min="0"
                    max="100"
                    className="w-24 px-3 py-2 bg-white border border-slate-300 rounded-lg text-center font-bold text-slate-700 shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all hover:border-indigo-400"
                  />
                </td>
                <td className="p-4">
                  <span className="px-3 py-1 bg-emerald-100 text-emerald-700 font-bold rounded-full text-xs">A</span>
                </td>
              </tr>
              <tr className="hover:bg-indigo-50/50 transition-all duration-200 group">
                <td className="p-4 text-slate-500 group-hover:text-indigo-600 font-semibold">02</td>
                <td className="p-4 text-slate-800 font-semibold">Sana Shaikh</td>
                <td className="p-4">
                  <input
                    type="number"
                    defaultValue="78"
                    min="0"
                    max="100"
                    className="w-24 px-3 py-2 bg-white border border-slate-300 rounded-lg text-center font-bold text-slate-700 shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all hover:border-indigo-400"
                  />
                </td>
                <td className="p-4">
                  <span className="px-3 py-1 bg-teal-100 text-teal-700 font-bold rounded-full text-xs">B+</span>
                </td>
              </tr>
              <tr className="hover:bg-indigo-50/50 transition-all duration-200 group">
                <td className="p-4 text-slate-500 group-hover:text-indigo-600 font-semibold">03</td>
                <td className="p-4 text-slate-800 font-semibold">Rohan Deshmukh</td>
                <td className="p-4">
                  <input
                    type="number"
                    defaultValue="92"
                    min="0"
                    max="100"
                    className="w-24 px-3 py-2 bg-white border border-slate-300 rounded-lg text-center font-bold text-slate-700 shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all hover:border-indigo-400"
                  />
                </td>
                <td className="p-4">
                  <span className="px-3 py-1 bg-emerald-100 text-emerald-700 font-bold rounded-full text-xs">A+</span>
                </td>
              </tr>
              <tr className="hover:bg-indigo-50/50 transition-all duration-200 group">
                <td className="p-4 text-slate-500 group-hover:text-indigo-600 font-semibold">04</td>
                <td className="p-4 text-slate-800 font-semibold">Isha More</td>
                <td className="p-4">
                  <input
                    type="number"
                    defaultValue="64"
                    min="0"
                    max="100"
                    className="w-24 px-3 py-2 bg-white border border-slate-300 rounded-lg text-center font-bold text-slate-700 shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all hover:border-indigo-400"
                  />
                </td>
                <td className="p-4">
                  <span className="px-3 py-1 bg-amber-100 text-amber-700 font-bold rounded-full text-xs">B</span>
                </td>
              </tr>
              <tr className="hover:bg-indigo-50/50 transition-all duration-200 group">
                <td className="p-4 text-slate-500 group-hover:text-indigo-600 font-semibold">05</td>
                <td className="p-4 text-slate-800 font-semibold">Vihaan Kulkarni</td>
                <td className="p-4">
                  <input
                    type="number"
                    defaultValue="73"
                    min="0"
                    max="100"
                    className="w-24 px-3 py-2 bg-white border border-slate-300 rounded-lg text-center font-bold text-slate-700 shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all hover:border-indigo-400"
                  />
                </td>
                <td className="p-4">
                  <span className="px-3 py-1 bg-teal-100 text-teal-700 font-bold rounded-full text-xs">B+</span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Save Button Section */}
        <div className="flex justify-end gap-3">
          <button className="px-6 py-2.5 bg-white text-slate-700 font-semibold text-sm rounded-xl border border-slate-300 hover:bg-slate-50 shadow-sm transition-all">
            Cancel
          </button>
          <button className="px-6 py-2.5 bg-gradient-to-r from-indigo-600 to-blue-600 text-white font-semibold text-sm rounded-xl hover:from-indigo-700 hover:to-blue-700 shadow-lg shadow-indigo-500/30 transition-all flex items-center gap-2 hover:scale-105 active:scale-95">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
            </svg>
            Save Marks
          </button>
        </div>

      </div>
    </div>
  );
}