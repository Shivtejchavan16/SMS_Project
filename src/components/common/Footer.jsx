import { motion } from "framer-motion";
import { useTheme } from "../../context/ThemeContext";

const Footer = () => {
  const { darkMode } = useTheme();

  return (
    <motion.footer
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={`
        py-4 px-6 border-t
        ${
          darkMode
            ? "bg-gray-900 border-gray-700 text-gray-400"
            : "bg-white border-gray-200 text-gray-600"
        }
      `}
    >
      <div className="flex flex-col md:flex-row items-center justify-between gap-3">
        {/* Copyright */}
        <motion.p
          whileHover={{ scale: 1.02 }}
          className="text-sm cursor-default"
        >
          © 2025 Student Management System. All rights reserved.
        </motion.p>

        {/* Footer Links */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.1,
              },
            },
          }}
          className="flex gap-6 text-sm"
        >
          {["Privacy Policy", "Terms", "Support"].map(
            (item) => (
              <motion.button
                key={item}
                variants={{
                  hidden: { opacity: 0, y: 10 },
                  visible: { opacity: 1, y: 0 },
                }}
                whileHover={{
                  y: -2,
                  scale: 1.05,
                }}
                whileTap={{ scale: 0.95 }}
                transition={{
                  type: "spring",
                  stiffness: 300,
                }}
                className="hover:text-blue-500 transition"
              >
                {item}
              </motion.button>
            )
          )}
        </motion.div>
      </div>
    </motion.footer>
  );
};

export default Footer;