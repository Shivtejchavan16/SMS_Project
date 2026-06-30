import { useState } from 'react';
import { students, subjects, marks } from '../../mockdata/students';

export default function ReportCard() {
  const allStudents = [
    {
      id: 1,
      name: 'Aarav Patil',
      rollNo: 'CSE-2024-01',
      class: 'B.Tech - CSE (Sem 4)',
      academicYear: '2025-26',
      photo: 'https://i.pravatar.cc/150?img=12',
      marks: [
        { subject: 'Data Structures', obtained: 85, total: 100 },
        { subject: 'Database Management', obtained: 78, total: 100 },
        { subject: 'Operating Systems', obtained: 92, total: 100 },
        { subject: 'Computer Networks', obtained: 74, total: 100 },
        { subject: 'Web Development', obtained: 88, total: 100 }
      ]
    },
    {
      id: 2,
      name: 'Sana Shaikh',
      rollNo: 'CSE-2024-02',
      class: 'B.Tech - CSE (Sem 4)',
      academicYear: '2025-26',
      photo: 'https://i.pravatar.cc/150?img=5',
      marks: [
        { subject: 'Data Structures', obtained: 78, total: 100 },
        { subject: 'Database Management', obtained: 82, total: 100 },
        { subject: 'Operating Systems', obtained: 88, total: 100 },
        { subject: 'Computer Networks', obtained: 80, total: 100 },
        { subject: 'Web Development', obtained: 90, total: 100 }
      ]
    },
    {
      id: 3,
      name: 'Rohan Deshmukh',
      rollNo: 'CSE-2024-03',
      class: 'B.Tech - CSE (Sem 4)',
      academicYear: '2025-26',
      photo: 'https://i.pravatar.cc/150?img=33',
      marks: [
        { subject: 'Data Structures', obtained: 92, total: 100 },
        { subject: 'Database Management', obtained: 95, total: 100 },
        { subject: 'Operating Systems', obtained: 89, total: 100 },
        { subject: 'Computer Networks', obtained: 91, total: 100 },
        { subject: 'Web Development', obtained: 94, total: 100 }
      ]
    },
    {
      id: 4,
      name: 'Isha More',
      rollNo: 'CSE-2024-04',
      class: 'B.Tech - CSE (Sem 4)',
      academicYear: '2025-26',
      photo: 'https://i.pravatar.cc/150?img=20',
      marks: [
        { subject: 'Data Structures', obtained: 64, total: 100 },
        { subject: 'Database Management', obtained: 70, total: 100 },
        { subject: 'Operating Systems', obtained: 68, total: 100 },
        { subject: 'Computer Networks', obtained: 72, total: 100 },
        { subject: 'Web Development', obtained: 75, total: 100 }
      ]
    },
    {
      id: 5,
      name: 'Vihaan Kulkarni',
      rollNo: 'CSE-2024-05',
      class: 'B.Tech - CSE (Sem 4)',
      academicYear: '2025-26',
      photo: 'https://i.pravatar.cc/150?img=60',
      marks: [
        { subject: 'Data Structures', obtained: 73, total: 100 },
        { subject: 'Database Management', obtained: 76, total: 100 },
        { subject: 'Operating Systems', obtained: 71, total: 100 },
        { subject: 'Computer Networks', obtained: 69, total: 100 },
        { subject: 'Web Development', obtained: 77, total: 100 }
      ]
    },
    {
      id: 6,
      name: 'Priya Sharma',
      rollNo: 'CSE-2024-06',
      class: 'B.Tech - CSE (Sem 4)',
      academicYear: '2025-26',
      photo: 'https://i.pravatar.cc/150?img=45',
      marks: [
        { subject: 'Data Structures', obtained: 88, total: 100 },
        { subject: 'Database Management', obtained: 84, total: 100 },
        { subject: 'Operating Systems', obtained: 90, total: 100 },
        { subject: 'Computer Networks', obtained: 86, total: 100 },
        { subject: 'Web Development', obtained: 89, total: 100 }
      ]
    }
  ];

  const [selectedStudentId, setSelectedStudentId] = useState(1);
  const studentData = allStudents.find(s => s.id === selectedStudentId);

  const totalObtained = studentData.marks.reduce((sum, m) => sum + m.obtained, 0);
  const totalMarks = studentData.marks.reduce((sum, m) => sum + m.total, 0);
  const percentage = ((totalObtained / totalMarks) * 100).toFixed(2);

  // FIXED: Direct classes return kar, variable nahi
  const getGradeStyle = (percent) => {
    if (percent >= 90) return { 
      grade: 'A+', 
      bgClass: 'bg-gradient-to-br from-emerald-50 to-emerald-100',
      borderClass: 'border-emerald-200',
      textClass: 'text-emerald-600',
      textBoldClass: 'text-emerald-700'
    };
    if (percent >= 80) return { 
      grade: 'A', 
      bgClass: 'bg-gradient-to-br from-green-50 to-green-100',
      borderClass: 'border-green-200',
      textClass: 'text-green-600',
      textBoldClass: 'text-green-700'
    };
    if (percent >= 70) return { 
      grade: 'B+', 
      bgClass: 'bg-gradient-to-br from-teal-50 to-teal-100',
      borderClass: 'border-teal-200',
      textClass: 'text-teal-600',
      textBoldClass: 'text-teal-700'
    };
    if (percent >= 60) return { 
      grade: 'B', 
      bgClass: 'bg-gradient-to-br from-blue-50 to-blue-100',
      borderClass: 'border-blue-200',
      textClass: 'text-blue-600',
      textBoldClass: 'text-blue-700'
    };
    if (percent >= 50) return { 
      grade: 'C', 
      bgClass: 'bg-gradient-to-br from-amber-50 to-amber-100',
      borderClass: 'border-amber-200',
      textClass: 'text-amber-600',
      textBoldClass: 'text-amber-700'
    };
    return { 
      grade: 'F', 
      bgClass: 'bg-gradient-to-br from-red-50 to-red-100',
      borderClass: 'border-red-200',
      textClass: 'text-red-600',
      textBoldClass: 'text-red-700'
    };
  };

  const gradeStyle = getGradeStyle(percentage);
  const resultStatus = percentage >= 40? 'PASS' : 'FAIL';

  return (
    <div className="bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 min-h-screen p-4 md:p-8 print:bg-white">
      <div className="max-w-4xl mx-auto mb-6 print:hidden">
        <div className="flex flex-col md:flex-row gap-4 items-start md:items-center justify-between">
          <div className="w-full md:w-80">
            <label className="text-xs font-bold text-slate-600 uppercase tracking-wide mb-2 block">
              Select Student
            </label>
            <div className="relative">
              <select
                value={selectedStudentId}
                onChange={(e) => setSelectedStudentId(Number(e.target.value))}
                className="w-full appearance-none px-4 py-3 bg-white border border-slate-300 rounded-xl text-sm font-semibold text-slate-700 shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all cursor-pointer hover:border-indigo-400"
              >
                {allStudents.map(student => (
                  <option key={student.id} value={student.id}>
                    {student.rollNo} - {student.name}
                  </option>
                ))}
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-slate-500">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                </svg>
              </div>
            </div>
          </div>

          <button
            onClick={() => window.print()}
            className="px-5 py-3 bg-gradient-to-r from-indigo-600 to-blue-600 text-white font-semibold text-sm rounded-xl hover:from-indigo-700 hover:to-blue-700 shadow-lg shadow-indigo-500/30 transition-all flex items-center gap-2 hover:scale-105 active:scale-95"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z"></path>
            </svg>
            Print Report Card
          </button>
        </div>
      </div>

      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden">

        <div className="bg-gradient-to-r from-indigo-600 to-blue-600 text-white p-6 md:p-8">
          <div className="text-center">
            <h1 className="text-2xl md:text-3xl font-bold mb-1">VidyaShkti Prbhodhan Aacadamy IT</h1>
            <p className="text-sm md:text-base opacity-90">pune, Maharashtra</p>
            <div className="mt-4 inline-block bg-white/20 backdrop-blur-sm px-6 py-2 rounded-lg">
              <h2 className="text-lg md:text-xl font-bold uppercase tracking-wider">Student Report Card</h2>
              <p className="text-xs md:text-sm mt-1">Academic Year {studentData.academicYear}</p>
            </div>
          </div>
        </div>

        <div className="p-6 md:p-8 border-b border-slate-200">
          <h3 className="text-lg font-bold text-slate-800 mb-4 flex items-center gap-2">
            <svg className="w-5 h-5 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
            </svg>
            Student Information
          </h3>
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <img src={studentData.photo} alt="Student" className="w-20 h-20 rounded-full border-4 border-indigo-100 shadow-md" />
              <div>
                <p className="text-sm text-slate-500">Student Name</p>
                <p className="text-lg font-bold text-slate-800">{studentData.name}</p>
              </div>
            </div>
            <div className="text-right">
              <p className="text-sm text-slate-500">ROLL NUMBER</p>
              <p className="text-lg font-bold text-indigo-600">{studentData.rollNo}</p>
            </div>
          </div>
        </div>

        <div className="p-6 md:p-8 border-b border-slate-200">
          <h3 className="text-lg font-bold text-slate-800 mb-4 flex items-center gap-2">
            <svg className="w-5 h-5 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"></path>
            </svg>
            Marks Obtained
          </h3>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-gradient-to-r from-slate-50 to-slate-100">
                  <th className="p-3 text-left text-xs font-bold text-slate-600 uppercase border border-slate-200">SR. NO.</th>
                  <th className="p-3 text-left text-xs font-bold text-slate-600 uppercase border border-slate-200">SUBJECT NAME</th>
                  <th className="p-3 text-center text-xs font-bold text-slate-600 uppercase border border-slate-200">MARKS OBTAINED</th>
                  <th className="p-3 text-center text-xs font-bold text-slate-600 uppercase border border-slate-200">TOTAL MARKS</th>
                </tr>
              </thead>
              <tbody>
                {studentData.marks.map((item, index) => (
                  <tr key={index} className="hover:bg-slate-50 transition-colors">
                    <td className="p-3 text-sm text-slate-600 font-medium border border-slate-200 text-center">{index + 1}</td>
                    <td className="p-3 text-sm text-slate-800 font-semibold border border-slate-200">{item.subject}</td>
                    <td className="p-3 text-sm text-center font-bold text-indigo-600 border border-slate-200">{item.obtained}</td>
                    <td className="p-3 text-sm text-center text-slate-600 border border-slate-200">{item.total}</td>
                  </tr>
                ))}
                <tr className="bg-slate-100 font-bold">
                  <td colSpan="2" className="p-3 text-sm text-slate-800 border border-slate-200 text-right">TOTAL</td>
                  <td className="p-3 text-sm text-center text-indigo-700 border border-slate-200">{totalObtained}</td>
                  <td className="p-3 text-sm text-center text-slate-700 border border-slate-200">{totalMarks}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="p-6 md:p-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-5 border border-blue-200">
              <p className="text-xs font-bold text-blue-600 uppercase mb-2">Overall Percentage</p>
              <div className="flex items-end gap-2">
                <span className="text-3xl font-bold text-blue-700">{percentage}</span>
                <span className="text-lg font-semibold text-blue-600 mb-1">%</span>
              </div>
            </div>

            {/* FIXED: Static classes use karayche */}
            <div className={`${gradeStyle.bgClass} rounded-xl p-5 border ${gradeStyle.borderClass}`}>
              <p className={`text-xs font-bold ${gradeStyle.textClass} uppercase mb-2`}>Grade</p>
              <span className={`text-3xl font-bold ${gradeStyle.textBoldClass}`}>{gradeStyle.grade}</span>
            </div>

            <div className={`${resultStatus === 'PASS'? 'bg-gradient-to-br from-emerald-50 to-green-50 border-emerald-200' : 'bg-gradient-to-br from-red-50 to-rose-50 border-red-200'} rounded-xl p-5 border`}>
              <p className={`text-xs font-bold ${resultStatus === 'PASS'? 'text-emerald-600' : 'text-red-600'} uppercase mb-2`}>Final Result</p>
              <span className={`text-3xl font-bold ${resultStatus === 'PASS'? 'text-emerald-700' : 'text-red-700'}`}>{resultStatus}</span>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}