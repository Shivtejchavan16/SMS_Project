import {
  LayoutDashboard,
  GraduationCap,
  Users,
  BookOpen,
  Clock3,
  ClipboardCheck,
  CalendarDays,
  Megaphone,
  Settings,
  User,
} from "lucide-react";

export const sidebarLinks = [
  {
    title: "Dashboard",
    path: "/dashboard",
    icon: LayoutDashboard,
  },
  {
    title: "Students",
    path: "/students",
    icon: GraduationCap,
  },
  {
    title: "Teachers",
    path: "/teachers",
    icon: Users,
  },
  {
    title: "Courses",
    path: "/courses",
    icon: BookOpen,
  },
  {
    title: "Attendance",
    path: "/attendance",
    icon: Clock3,
  },
  {
    title: "Results",
    path: "/results",
    icon: ClipboardCheck,
  },
  {
    title: "Timetable",
    path: "/timetable",
    icon: CalendarDays,
  },
  {
    title: "Announcements",
    path: "/announcements",
    icon: Megaphone,
  },
  {
    title: "Settings",
    path: "/settings",
    icon: Settings,
  },
  {
    title: "Profile",
    path: "/profile",
    icon: User,
  },
];