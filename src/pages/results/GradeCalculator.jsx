import { useState } from 'react';

export default function GradeCalculator() {
  const [subjects, setSubjects] = useState([
    { id: 1, name: '', marks: '', total: 100 }
  ]);

  const addSubject = () => {
    setSubjects([...subjects, {
      id: subjects.length + 1,
      name: '',
      marks: '',
      total: 100
    }]);
  };

  const removeSubject = (id) => {
    if (subjects.length > 1) {
      setSubjects(subjects.filter(s => s.id!== id));
    }
  };

  const updateSubject = (id, field, value) => {
    setSubjects(subjects.map(s =>
      s.id === id? {...s, [field]: value } : s
    ));
  };

  // Calculate Results
  const validSubjects = subjects.filter(s => s.name && s.marks);
  const totalObtained = validSubjects.reduce((sum, s) => sum + Number(s.marks || 0), 0);
  const totalMarks = validSubjects.reduce((sum, s) => sum + Number(s.total || 0), 0);
  const percentage = totalMarks > 0? ((totalObtained / totalMarks) * 100).toFixed(2) : 0;

  const getGradeInfo = (percent) => {
    if (percent >= 90) return { grade: 'A+', color: 'emerald', remark: 'Outstanding' };
    if (percent >= 80) return { grade: 'A', color: 'green', remark: 'Excellent' };
    if (percent >= 70) return { grade: 'B+', color: 'teal', remark: 'Very Good' };
    if (percent >= 60) return { grade: 'B', color: 'blue', remark: 'Good' };
    if (percent >= 50) return { grade: 'C', color: 'amber', remark: 'Average' };
    if (percent >= 40) return { grade: 'D', color: 'orange', remark: 'Pass' };
    return { grade: 'F', color: 'red', remark: 'Fail' };
  };

  const gradeInfo = getGradeInfo(percentage);
  const resultStatus = percentage >= 40? 'PASS' : 'FAIL';

  return (
    <div className="bg-gradient-to-br from-slate-50 via-purple-50 to-pink-50 min-h-screen p-4 md:p-8">
      <div className="max-w-5xl mx-auto">

        {/* Header */}
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl border border-slate-200/60 overflow-hidden p-6 md:p-8 mb-6">
          <div className="flex items-center gap-3 mb-2">
            <div className="bg-gradient-to-r from-purple-600 to-pink-600 p-3 rounded-xl">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"></path>
              </svg>
            </div>
            <div>
              <h1 className="text-2xl md:text-3xl font-bold text-slate-800">Grade Calculator</h1>
              <p className="text-sm text-slate-500 mt-1">Calculate percentage and grade instantly</p>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

          {/* Left - Input Section */}
          <div className="lg:col-span-2 bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl border border-slate-200/60 overflow-hidden p-6 md:p-8">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-lg font-bold text-slate-800 flex items-center gap-2">
                <svg className="w-5 h-5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"></path>
                </svg>
                Enter Subject Details
              </h2>
              <button
                onClick={addSubject}
                className="px-4 py-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold text-sm rounded-lg hover:from-purple-700 hover:to-pink-700 shadow-md shadow-purple-500/30 transition-all flex items-center gap-2 hover:scale-105"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4"></path>
                </svg>
                Add Subject
              </button>
            </div>

            {/* Subjects List */}
            <div className="space-y-4">
              {subjects.map((subject, index) => (
                <div key={subject.id} className="bg-slate-50 rounded-xl p-4 border border-slate-200 hover:border-purple-300 transition-all">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-bold text-purple-600 uppercase tracking-wider">
                      Subject {index + 1}
                    </span>
                    {subjects.length > 1 && (
                      <button
                        onClick={() => removeSubject(subject.id)}
                        className="text-red-500 hover:text-red-700 transition-colors"
                      >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path>
                        </svg>
                      </button>
                    )}
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                    <div>
                      <label className="text-xs font-semibold text-slate-600 mb-1 block">Subject Name</label>
                      <input
                        type="text"
                        placeholder="e.g. Mathematics"
                        value={subject.name}
                        onChange={(e) => updateSubject(subject.id, 'name', e.target.value)}
                        className="w-full px-3 py-2 bg-white border border-slate-300 rounded-lg text-sm font-medium text-slate-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                      />
                    </div>
                    <div>
                      <label className="text-xs font-semibold text-slate-600 mb-1 block">Marks Obtained</label>
                      <input
                        type="number"
                        placeholder="85"
                        value={subject.marks}
                        onChange={(e) => updateSubject(subject.id, 'marks', e.target.value)}
                        min="0"
                        max={subject.total}
                        className="w-full px-3 py-2 bg-white border border-slate-300 rounded-lg text-sm font-bold text-slate-700 text-center focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                      />
                    </div>
                    <div>
                      <label className="text-xs font-semibold text-slate-600 mb-1 block">Total Marks</label>
                      <input
                        type="number"
                        value={subject.total}
                        onChange={(e) => updateSubject(subject.id, 'total', e.target.value)}
                        min="1"
                        className="w-full px-3 py-2 bg-white border border-slate-300 rounded-lg text-sm font-medium text-slate-700 text-center focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right - Results Section */}
          <div className="space-y-4">
            {/* Total Card */}
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl border border-slate-200/60 overflow-hidden p-6">
              <h3 className="text-sm font-bold text-slate-600 uppercase tracking-wide mb-4">Total Summary</h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-slate-600">Marks Obtained:</span>
                  <span className="text-lg font-bold text-indigo-600">{totalObtained}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-slate-600">Total Marks:</span>
                  <span className="text-lg font-bold text-slate-700">{totalMarks}</span>
                </div>
                <div className="border-t border-slate-200 pt-3 mt-3">
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-semibold text-slate-700">Percentage:</span>
                    <span className="text-2xl font-bold text-purple-600">{percentage}%</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Grade Card */}
            <div className={`${gradeInfo.bgClass} rounded-2xl shadow-xl border ${gradeInfo.borderClass} overflow-hidden p-6 transition-all duration-300`}>
              <h3 className={`text-sm font-bold ${gradeInfo.textClass} uppercase tracking-wide mb-2`}>Your Grade</h3>
              <div className="text-center py-4">
                <span className={`text-6xl font-bold ${gradeInfo.textBoldClass}`}>{gradeInfo.grade}</span>
                <p className={`text-sm font-semibold ${gradeInfo.textClass} mt-2`}>{gradeInfo.remark}</p>
              </div>
            </div>

            {/* Result Status Card */}
            <div className={`${resultStatus === 'PASS'? 'bg-gradient-to-br from-emerald-50 to-green-50 border-emerald-200' : 'bg-gradient-to-br from-red-50 to-rose-50 border-red-200'} rounded-2xl shadow-xl border overflow-hidden p-6`}>
              <h3 className={`text-sm font-bold ${resultStatus === 'PASS'? 'text-emerald-600' : 'text-red-600'} uppercase tracking-wide mb-2`}>Final Result</h3>
              <div className="flex items-center justify-center gap-3 py-4">
                <span className={`text-4xl font-bold ${resultStatus === 'PASS'? 'text-emerald-700' : 'text-red-700'}`}>
                  {resultStatus}
                </span>
                {resultStatus === 'PASS' && (
                  <svg className="w-8 h-8 text-emerald-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                )}
                {resultStatus === 'FAIL' && (
                  <svg className="w-8 h-8 text-red-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd"></path>
                  </svg>
                )}
              </div>
            </div>

            {/* Reset Button */}
            <button
              onClick={() => setSubjects([{ id: 1, name: '', marks: '', total: 100 }])}
              className="w-full px-5 py-3 bg-slate-600 text-white font-semibold text-sm rounded-xl hover:bg-slate-700 shadow-md transition-all flex items-center justify-center gap-2"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"></path>
              </svg>
              Reset All
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}