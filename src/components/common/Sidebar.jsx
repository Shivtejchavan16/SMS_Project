import { NavLink } from "react-router-dom";
import { LogOut, GraduationCap, Menu } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

import { sidebarLinks } from "../../constants/sidebarLinks";
import { useTheme } from "../../context/ThemeContext";

const Sidebar = ({ isOpen, toggleSidebar }) => {
  const { darkMode } = useTheme();

  return (
    <motion.aside
      animate={{
        width: isOpen ? 288 : 80,
      }}
      transition={{
        type: "spring",
        stiffness: 250,
        damping: 25,
      }}
      className={`
        h-screen
        sticky top-0 left-0
        hidden md:flex
        flex-col justify-between
        overflow-hidden

        ${
          darkMode
            ? "bg-gray-900 text-white border-r border-gray-700"
            : "bg-white text-gray-800 border-r border-gray-200 shadow-lg"
        }
      `}
    >
      {/* TOP SECTION */}
      <div>
        {/* Toggle Button */}
        <div className="flex p-2 justify-end w-full">
          <motion.button
            whileHover={{ scale: 1.1, rotate: 90 }}
            whileTap={{ scale: 0.9 }}
            onClick={toggleSidebar}
            className={`
              p-2 rounded-xl transition
              ${
                darkMode
                  ? "hover:bg-gray-800"
                  : "hover:bg-gray-100"
              }
            `}
          >
            <Menu size={24} />
          </motion.button>
        </div>

        {/* Logo */}
        <div
          className={`
            h-20 flex items-center gap-3 px-5 border-b
            ${
              darkMode
                ? "border-gray-700"
                : "border-gray-200"
            }
          `}
        >
          <motion.div
            whileHover={{
              rotate: [0, -10, 10, 0],
              scale: 1.05,
            }}
            transition={{ duration: 0.4 }}
            className="w-12 h-12 rounded-xl bg-blue-600 flex items-center justify-center text-white"
          >
            <GraduationCap size={28} />
          </motion.div>

          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.2 }}
              >
                <h2 className="font-bold text-2xl">
                  SMS
                </h2>

                <p
                  className={`text-xs ${
                    darkMode
                      ? "text-gray-400"
                      : "text-gray-500"
                  }`}
                >
                  Student Management System
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Navigation Links */}
        <nav className="mt-6 px-3">
          {sidebarLinks.map((link, index) => {
            const Icon = link.icon;

            return (
              <motion.div
                key={link.title}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{
                  delay: index * 0.05,
                }}
              >
                <NavLink
                  to={link.path}
                  className={({ isActive }) =>
                    `
                    flex items-center gap-4
                    px-4 py-3 mb-2
                    rounded-2xl
                    transition-all duration-200

                    ${
                      isActive
                        ? "bg-blue-600 text-white shadow-lg"
                        : darkMode
                        ? "hover:bg-gray-800 text-gray-200"
                        : "hover:bg-gray-100 text-gray-700"
                    }
                  `
                  }
                >
                  {({ isActive }) => (
                    <motion.div
                      whileHover={{
                        x: 5,
                        scale: 1.02,
                      }}
                      whileTap={{ scale: 0.97 }}
                      animate={{
                        scale: isActive ? 1.02 : 1,
                      }}
                      className="flex items-center gap-4 w-full"
                    >
                      <motion.div
                        animate={{
                          rotate: isActive ? 360 : 0,
                        }}
                        transition={{
                          duration: 0.4,
                        }}
                      >
                        <Icon size={22} />
                      </motion.div>

                      <AnimatePresence>
                        {isOpen && (
                          <motion.span
                            initial={{
                              opacity: 0,
                              x: -10,
                            }}
                            animate={{
                              opacity: 1,
                              x: 0,
                            }}
                            exit={{
                              opacity: 0,
                              x: -10,
                            }}
                            className="font-medium whitespace-nowrap"
                          >
                            {link.title}
                          </motion.span>
                        )}
                      </AnimatePresence>
                    </motion.div>
                  )}
                </NavLink>
              </motion.div>
            );
          })}
        </nav>
      </div>

      {/* Logout */}
      <div
        className={`
          p-4 border-t
          ${
            darkMode
              ? "border-gray-700"
              : "border-gray-200"
          }
        `}
      >
        <motion.button
          whileHover={{
            scale: 1.03,
            x: 5,
          }}
          whileTap={{ scale: 0.95 }}
          className={`
            w-full flex items-center gap-4
            px-4 py-3 rounded-2xl
            text-red-500 transition

            ${
              darkMode
                ? "hover:bg-red-900/20"
                : "hover:bg-red-100"
            }
          `}
        >
          <motion.div
            whileHover={{ rotate: 15 }}
          >
            <LogOut size={22} />
          </motion.div>

          <AnimatePresence>
            {isOpen && (
              <motion.span
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -10 }}
                className="font-medium"
              >
                Logout
              </motion.span>
            )}
          </AnimatePresence>
        </motion.button>
      </div>
    </motion.aside>
  );
};

export default Sidebar;