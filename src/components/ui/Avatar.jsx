import React from 'react'

const Avatar = ({ name }) => {
  return (
    <div className="w-10 h-10 bg-gray-400 text-white flex items-center justify-center rounded-full">
      {name?.charAt(0)}
    </div>
  );
};

export default Avatar;