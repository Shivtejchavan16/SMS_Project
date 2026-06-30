import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import {
  Bell,
  Search,
  User,
  Settings,
  LogOut,
  Lock,
  ChevronDown,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

import Breadcrumb from "./Breadcrumb";
import ThemeToggle from "./ThemeToggle";
import { useTheme } from "../../context/ThemeContext";

const Navbar = () => {
  const [showNotifications, setShowNotifications] = useState(false);
  const [showProfileMenu, setShowProfileMenu] = useState(false);

  const { darkMode } = useTheme();

  const notificationRef = useRef(null);
  const profileRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        notificationRef.current &&
        !notificationRef.current.contains(e.target)
      ) {
        setShowNotifications(false);
      }

      if (
        profileRef.current &&
        !profileRef.current.contains(e.target)
      ) {
        setShowProfileMenu(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener(
        "mousedown",
        handleClickOutside
      );
    };
  }, []);

  const notifications = [
    {
      id: 1,
      title: "New student registered",
      time: "2 mins ago",
    },
    {
      id: 2,
      title: "Attendance marked successfully",
      time: "15 mins ago",
    },
    {
      id: 3,
      title: "New notice published",
      time: "1 hour ago",
    },
  ];

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4 }}
      className={`
        sticky top-0 z-50
        px-4 md:px-6 py-3
        shadow-2xl border-b
        ${
          darkMode
            ? "bg-gray-900 text-white border-gray-700"
            : "bg-white text-gray-800 border-gray-200"
        }
      `}
    >
      <div className="flex items-center justify-between">
        {/* LEFT SECTION */}
        <div className="flex items-center gap-4">
          <div className="hidden md:block">
            <Breadcrumb />
          </div>
        </div>

        {/* SEARCH BAR */}
        <motion.div
          whileHover={{ scale: 1.02 }}
          transition={{ type: "spring", stiffness: 300 }}
          className={`
            hidden lg:flex
            items-center
            w-[380px]
            rounded-xl
            px-4 py-3
            ${
              darkMode
                ? "bg-gray-800"
                : "bg-gray-100"
            }
          `}
        >
          <Search
            size={18}
            className="text-gray-500"
          />

          <input
            type="text"
            placeholder="Search anything..."
            className={`
              w-full ml-3
              bg-transparent
              outline-none
              text-sm
              ${
                darkMode
                  ? "text-gray-200 placeholder:text-gray-400"
                  : "text-gray-700 placeholder:text-gray-500"
              }
            `}
          />
        </motion.div>

        {/* RIGHT SECTION */}
        <div className="flex items-center gap-4">
          {/* NOTIFICATIONS */}
          <div
            className="relative"
            ref={notificationRef}
          >
            <motion.button
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.9 }}
              onClick={() =>
                setShowNotifications(
                  !showNotifications
                )
              }
              className={`
                relative
                p-2 rounded-xl transition
                ${
                  darkMode
                    ? "hover:bg-gray-800"
                    : "hover:bg-gray-100"
                }
              `}
            >
              <Bell size={22} />

              <motion.span
                animate={{
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                }}
                className="
                  absolute -top-1 -right-1
                  bg-red-500 text-white
                  text-[10px]
                  w-5 h-5 rounded-full
                  flex items-center justify-center
                "
              >
                {notifications.length}
              </motion.span>
            </motion.button>

            <AnimatePresence>
              {showNotifications && (
                <motion.div
                  initial={{
                    opacity: 0,
                    y: -10,
                    scale: 0.95,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                    scale: 1,
                  }}
                  exit={{
                    opacity: 0,
                    y: -10,
                    scale: 0.95,
                  }}
                  transition={{ duration: 0.2 }}
                  className={`
                    absolute right-0 top-14
                    z-[100]
                    w-80 rounded-2xl
                    shadow-2xl overflow-hidden
                    ${
                      darkMode
                        ? "bg-gray-900 border border-gray-700"
                        : "bg-white border border-gray-200"
                    }
                  `}
                >
                  <div
                    className={`
                      px-5 py-4 border-b
                      ${
                        darkMode
                          ? "border-gray-700"
                          : "border-gray-200"
                      }
                    `}
                  >
                    <h3 className="font-semibold">
                      Notifications
                    </h3>
                  </div>

                  <div className="max-h-80 overflow-y-auto">
                    {notifications.map(
                      (item, index) => (
                        <motion.div
                          key={item.id}
                          initial={{
                            opacity: 0,
                            x: -20,
                          }}
                          animate={{
                            opacity: 1,
                            x: 0,
                          }}
                          transition={{
                            delay: index * 0.1,
                          }}
                          whileHover={{ x: 5 }}
                          className={`
                            px-5 py-4 cursor-pointer border-b
                            ${
                              darkMode
                                ? "hover:bg-gray-800 border-gray-700"
                                : "hover:bg-gray-50 border-gray-200"
                            }
                          `}
                        >
                          <p className="text-sm font-medium">
                            {item.title}
                          </p>

                          <span className="text-xs text-gray-500">
                            {item.time}
                          </span>
                        </motion.div>
                      )
                    )}
                  </div>

                  <button
                    className={`
                      w-full py-3 text-sm font-medium
                      ${
                        darkMode
                          ? "hover:bg-gray-800 text-blue-400"
                          : "hover:bg-gray-50 text-blue-600"
                      }
                    `}
                  >
                    View All
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* THEME TOGGLE */}
          <ThemeToggle />

          {/* DIVIDER */}
          <div
            className={`
              hidden md:block
              w-px h-8
              ${
                darkMode
                  ? "bg-gray-700"
                  : "bg-gray-300"
              }
            `}
          />

          {/* PROFILE */}
          <div
            className="relative"
            ref={profileRef}
          >
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              onClick={() =>
                setShowProfileMenu(
                  !showProfileMenu
                )
              }
              className="flex items-center gap-3"
            >
              <motion.img
                whileHover={{ rotate: 5 }}
                src="https://i.pravatar.cc/150?img=12"
                alt="Admin"
                className="
                  w-11 h-11 rounded-full
                  border-2 border-blue-500
                "
              />

              <div className="hidden lg:block text-left">
                <h4 className="font-semibold text-sm">
                  Admin User
                </h4>

                <p className="text-xs text-gray-500">
                  Super Admin
                </p>
              </div>

              <motion.div
                animate={{
                  rotate: showProfileMenu
                    ? 180
                    : 0,
                }}
              >
                <ChevronDown
                  size={18}
                  className="hidden lg:block"
                />
              </motion.div>
            </motion.button>

            <AnimatePresence>
              {showProfileMenu && (
                <motion.div
                  initial={{
                    opacity: 0,
                    y: -10,
                    scale: 0.95,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                    scale: 1,
                  }}
                  exit={{
                    opacity: 0,
                    y: -10,
                    scale: 0.95,
                  }}
                  transition={{ duration: 0.2 }}
                  className={`
                    absolute right-0 top-14
                    z-[100]
                    w-64 rounded-2xl
                    shadow-2xl overflow-hidden
                    ${
                      darkMode
                        ? "bg-gray-900 border border-gray-700"
                        : "bg-white border border-gray-200"
                    }
                  `}
                >
                  {[
                    {
                      to: "/profile",
                      icon: User,
                      label: "My Profile",
                    },
                    {
                      to: "/settings",
                      icon: Settings,
                      label: "Settings",
                    },
                  ].map((item) => (
                    <motion.div
                      key={item.label}
                      whileHover={{ x: 6 }}
                    >
                      <Link
                        to={item.to}
                        className={`
                          flex items-center gap-3
                          px-5 py-4
                          ${
                            darkMode
                              ? "hover:bg-gray-800"
                              : "hover:bg-gray-50"
                          }
                        `}
                      >
                        <item.icon size={18} />
                        {item.label}
                      </Link>
                    </motion.div>
                  ))}

                  <motion.button
                    whileHover={{ x: 6 }}
                    className={`
                      w-full text-left
                      flex items-center gap-3
                      px-5 py-4
                      ${
                        darkMode
                          ? "hover:bg-gray-800"
                          : "hover:bg-gray-50"
                      }
                    `}
                  >
                    <Lock size={18} />
                    Change Password
                  </motion.button>

                  <motion.button
                    whileHover={{ x: 6 }}
                    className={`
                      w-full text-left
                      flex items-center gap-3
                      px-5 py-4 text-red-500
                      ${
                        darkMode
                          ? "hover:bg-red-900/20"
                          : "hover:bg-red-50"
                      }
                    `}
                  >
                    <LogOut size={18} />
                    Logout
                  </motion.button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </motion.header>
  );
};

export default Navbar;