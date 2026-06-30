import { useLocation } from "react-router-dom";
import { ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Breadcrumb = () => {
  const location = useLocation();

  const paths = location.pathname
    .split("/")
    .filter(Boolean);

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.08,
      },
    },
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: -10,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 300,
      },
    },
  };

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        exit="hidden"
        className="flex items-center gap-2"
      >
        {paths.length === 0 ? (
          <motion.span
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            className="font-semibold text-lg cursor-default"
          >
            Dashboard
          </motion.span>
        ) : (
          paths.map((path, index) => (
            <motion.div
              key={`${path}-${index}`}
              variants={itemVariants}
              className="flex items-center gap-2"
            >
              {index > 0 && (
                <motion.div
                  initial={{ opacity: 0, rotate: -90 }}
                  animate={{ opacity: 1, rotate: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <ChevronRight size={16} />
                </motion.div>
              )}

              <motion.span
                whileHover={{
                  y: -2,
                  scale: 1.05,
                }}
                transition={{
                  type: "spring",
                  stiffness: 300,
                }}
                className="capitalize font-medium cursor-pointer"
              >
                {path.replace("-", " ")}
              </motion.span>
            </motion.div>
          ))
        )}
      </motion.div>
    </AnimatePresence>
  );
};

export default Breadcrumb;