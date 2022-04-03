import React from "react";

const Avatar = ({ url, className }) => {
  return (
    <img
      loading="lazy"
      className={`h-10 rounded-full cursor-pointer transition dration-150 transform hover:scale-110 ${className}`}
      src={url}
      alt="profile picture"
    />
  );
};

export default Avatar;
