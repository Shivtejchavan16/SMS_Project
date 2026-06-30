// src/mockdata/students.js

// Students Data
export const students = [
  {
    id: 1,
    name: 'Aarav Patil',
    rollNo: 'CSE-2024-01',
    class: 'B.Tech - CSE (Sem 4)',
    academicYear: '2025-26',
    photo: 'https://i.pravatar.cc/150?img=12',
    email: 'aarav.patil@example.com',
    phone: '9876543210'
  },
  {
    id: 2,
    name: 'Sana Shaikh',
    rollNo: 'CSE-2024-02',
    class: 'B.Tech - CSE (Sem 4)',
    academicYear: '2025-26',
    photo: 'https://i.pravatar.cc/150?img=5',
    email: 'sana.shaikh@example.com',
    phone: '9876543211'
  },
  {
    id: 3,
    name: 'Rohan Deshmukh',
    rollNo: 'CSE-2024-03',
    class: 'B.Tech - CSE (Sem 4)',
    academicYear: '2025-26',
    photo: 'https://i.pravatar.cc/150?img=33',
    email: 'rohan.deshmukh@example.com',
    phone: '9876543212'
  },
  {
    id: 4,
    name: 'Isha More',
    rollNo: 'CSE-2024-04',
    class: 'B.Tech - CSE (Sem 4)',
    academicYear: '2025-26',
    photo: 'https://i.pravatar.cc/150?img=20',
    email: 'isha.more@example.com',
    phone: '9876543213'
  },
  {
    id: 5,
    name: 'Vihaan Kulkarni',
    rollNo: 'CSE-2024-05',
    class: 'B.Tech - CSE (Sem 4)',
    academicYear: '2025-26',
    photo: 'https://i.pravatar.cc/150?img=60',
    email: 'vihaan.kulkarni@example.com',
    phone: '9876543214'
  },
  {
    id: 6,
    name: 'Priya Sharma',
    rollNo: 'CSE-2024-06',
    class: 'B.Tech - CSE (Sem 4)',
    academicYear: '2025-26',
    photo: 'https://i.pravatar.cc/150?img=45',
    email: 'priya.sharma@example.com',
    phone: '9876543215'
  }
];

// Subjects Data
export const subjects = [
  { id: 1, code: 'CS401', name: 'Data Structures', total: 100, credits: 4 },
  { id: 2, code: 'CS402', name: 'Database Management', total: 100, credits: 4 },
  { id: 3, code: 'CS403', name: 'Operating Systems', total: 100, credits: 3 },
  { id: 4, code: 'CS404', name: 'Computer Networks', total: 100, credits: 3 },
  { id: 5, code: 'CS405', name: 'Web Development', total: 100, credits: 3 }
];

// Marks Data
export const marks = [
  // Aarav Patil - id: 1
  { id: 1, studentId: 1, subjectId: 1, obtained: 85, examType: 'Final' },
  { id: 2, studentId: 1, subjectId: 2, obtained: 78, examType: 'Final' },
  { id: 3, studentId: 1, subjectId: 3, obtained: 92, examType: 'Final' },
  { id: 4, studentId: 1, subjectId: 4, obtained: 74, examType: 'Final' },
  { id: 5, studentId: 1, subjectId: 5, obtained: 88, examType: 'Final' },
  
  // Sana Shaikh - id: 2
  { id: 6, studentId: 2, subjectId: 1, obtained: 78, examType: 'Final' },
  { id: 7, studentId: 2, subjectId: 2, obtained: 82, examType: 'Final' },
  { id: 8, studentId: 2, subjectId: 3, obtained: 88, examType: 'Final' },
  { id: 9, studentId: 2, subjectId: 4, obtained: 80, examType: 'Final' },
  { id: 10, studentId: 2, subjectId: 5, obtained: 90, examType: 'Final' },
  
  // Rohan Deshmukh - id: 3
  { id: 11, studentId: 3, subjectId: 1, obtained: 92, examType: 'Final' },
  { id: 12, studentId: 3, subjectId: 2, obtained: 95, examType: 'Final' },
  { id: 13, studentId: 3, subjectId: 3, obtained: 89, examType: 'Final' },
  { id: 14, studentId: 3, subjectId: 4, obtained: 91, examType: 'Final' },
  { id: 15, studentId: 3, subjectId: 5, obtained: 94, examType: 'Final' },
  
  // Isha More - id: 4
  { id: 16, studentId: 4, subjectId: 1, obtained: 64, examType: 'Final' },
  { id: 17, studentId: 4, subjectId: 2, obtained: 70, examType: 'Final' },
  { id: 18, studentId: 4, subjectId: 3, obtained: 68, examType: 'Final' },
  { id: 19, studentId: 4, subjectId: 4, obtained: 72, examType: 'Final' },
  { id: 20, studentId: 4, subjectId: 5, obtained: 75, examType: 'Final' },
  
  // Vihaan Kulkarni - id: 5
  { id: 21, studentId: 5, subjectId: 1, obtained: 73, examType: 'Final' },
  { id: 22, studentId: 5, subjectId: 2, obtained: 76, examType: 'Final' },
  { id: 23, studentId: 5, subjectId: 3, obtained: 71, examType: 'Final' },
  { id: 24, studentId: 5, subjectId: 4, obtained: 69, examType: 'Final' },
  { id: 25, studentId: 5, subjectId: 5, obtained: 77, examType: 'Final' },
  
  // Priya Sharma - id: 6
  { id: 26, studentId: 6, subjectId: 1, obtained: 88, examType: 'Final' },
  { id: 27, studentId: 6, subjectId: 2, obtained: 84, examType: 'Final' },
  { id: 28, studentId: 6, subjectId: 3, obtained: 90, examType: 'Final' },
  { id: 29, studentId: 6, subjectId: 4, obtained: 86, examType: 'Final' },
  { id: 30, studentId: 6, subjectId: 5, obtained: 89, examType: 'Final' }
];

// Helper Functions - Optional
export const getStudentById = (id) => {
  return students.find(s => s.id === id);
};

export const getMarksByStudentId = (studentId) => {
  return marks.filter(m => m.studentId === studentId).map(mark => {
    const subject = subjects.find(s => s.id === mark.subjectId);
    return {
      ...mark,
      subjectName: subject.name,
      subjectCode: subject.code,
      total: subject.total
    };
  });
};