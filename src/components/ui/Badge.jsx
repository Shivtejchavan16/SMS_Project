import React from 'react'

const Badge = ({ children, variant = "success" }) => {

  const styles = {
    success: "bg-green-500 text-white px-2 py-1 rounded",
    warning: "bg-yellow-500 text-white px-2 py-1 rounded",
    error: "bg-red-500 text-white px-2 py-1 rounded",
  };

  return <span className={styles[variant]}>{children}</span>;
};

export default Badge;
