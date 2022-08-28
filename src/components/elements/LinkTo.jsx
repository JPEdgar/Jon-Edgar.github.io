import React from "react";

const LinkTo = ({ href, text, icon, insertClass, gap = false, spaceLeft = false, spaceRight = false, }) => {
  let paddingClass;

  if (spaceLeft && spaceRight) paddingClass = "mx-1";
  else if (spaceLeft) paddingClass = "ml-1";
  else if (spaceRight) paddingClass = "mr-1";
  else paddingClass = "";

  return (
    <a target="_blank" rel="noreferrer" href={href} className={`${icon} ${insertClass} ${paddingClass}`} >
      <span className={gap ? "ms-2" : ""}>{text}</span>
    </a>
  );
};

export default LinkTo;
