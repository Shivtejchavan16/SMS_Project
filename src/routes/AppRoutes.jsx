import { Routes, Route } from "react-router-dom";

// Layouts
import PublicLayout from "../layout/PublicLayout";
import AuthLayout from "../layout/AuthLayout";
import AdminLayout from "../layout/AdminLayout";

// Public Pages
import Home from "../pages/public/Home";
import About from "../pages/public/About";
import Courses from "../pages/public/Courses";
import Contact from "../pages/public/Contact";

// Auth Pages
import Login from "../pages/auth/Login";
import Register from "../pages/auth/Register";
import ForgotPassword from "../pages/auth/ForgotPassword";

// Dashboard
import Dashboard from "../pages/dashboard/Dashboard";

// Students
import StudentList from "../pages/students/StudentList";
import AddStudent from "../pages/students/AddStudent";
import EditStudent from "../pages/students/EditStudent";
import StudentDetails from "../pages/students/StudentDetails";

// Teachers
import TeacherList from "../pages/teachers/TeacherList";
import AddTeacher from "../pages/teachers/AddTeacher";
import EditTeacher from "../pages/teachers/EditTeacher";
import TeacherProfile from "../pages/teachers/TeacherProfile";

// Courses
import CourseList from "../pages/courses/CourseList";
import AddCourse from "../pages/courses/AddCourse";
import CourseDetails from "../pages/courses/CourseDetails";

// Attendance
import MarkAttendance from "../pages/attendance/MarkAttendance";
import AttendanceHistory from "../pages/attendance/AttendanceHistory";
import AttendanceReports from "../pages/attendance/AttendanceReports";

// Results
import AddMarks from "../pages/results/AddMarks";
import GradeCalculator from "../pages/results/GradeCalculator";
import ReportCard from "../pages/results/ReportCard";

// Timetable
import WeeklyTimetable from "../pages/timetable/WeeklyTimetable";
import TeacherSchedule from "../pages/timetable/TeacherSchedule";


// Announcements
import CreateNotice from "../pages/announcement/CreateNotice";
import NoticeList from "../pages/announcement/NoticeList";

// Settings
import Settings from "../pages/setting/Setting";
import Profile from "../pages/setting/Profile";

// Not Found
import NotFound from "../pages/not-found/NotFound";

const AppRoutes = () => {
  return (
    <Routes>

      {/* Public Routes */}

      <Route path="/" element={<PublicLayout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="courses" element={<Courses />} />
        <Route path="contact" element={<Contact />} />
      </Route>


      {/* Auth Routes */}

      <Route path="/auth" element={<AuthLayout />}>
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route
          path="forgot-password"
          element={<ForgotPassword />}
        />
      </Route>


      {/* Admin Routes */}

      <Route path="/admin" element={<AdminLayout />}>

        <Route path="dashboard" element={<Dashboard />} />


        {/* Students */}

        <Route path="students" element={<StudentList />} />
        <Route path="students/add" element={<AddStudent />} />
        <Route
          path="students/edit/:id"
          element={<EditStudent />}
        />
        <Route
          path="students/:id"
          element={<StudentDetails />}
        />


        {/* Teachers */}

        <Route path="teachers" element={<TeacherList />} />
        <Route path="teachers/add" element={<AddTeacher />} />
        <Route
          path="teachers/edit/:id"
          element={<EditTeacher />}
        />
        <Route
          path="teachers/:id"
          element={<TeacherProfile />}
        />


        {/* Courses */}

        <Route path="courses" element={<CourseList />} />
        <Route path="courses/add" element={<AddCourse />} />
        <Route
          path="courses/:id"
          element={<CourseDetails />}
        />


        {/* Attendance */}

        <Route
          path="attendance"
          element={<MarkAttendance />}
        />

        <Route
          path="attendance/history"
          element={<AttendanceHistory />}
        />

        <Route
          path="attendance/reports"
          element={<AttendanceReports />}
        />


        {/* Results */}

        <Route
          path="results/add-marks"
          element={<AddMarks />}
        />

        <Route
          path="results/grade-calculator"
          element={<GradeCalculator />}
        />

        <Route
          path="results/report-card"
          element={<ReportCard />}
        />


        {/* Timetable */}

        <Route
          path="timetable"
          element={<WeeklyTimetable />}
        />

        <Route
          path="timetable/teacher-schedule"
          element={<TeacherSchedule />}
        />


        {/* Announcements */}

        <Route
          path="announcements"
          element={<NoticeList />}
        />

        <Route
          path="announcements/create"
          element={<CreateNotice />}
        />


        {/* Settings */}

        <Route path="settings" element={<Settings />} />
        <Route path="profile" element={<Profile />} />

      </Route>

      <Route path="*" element={<NotFound />} />

    </Routes>
  );
};

export default AppRoutes;