import React from "react";

const CustomButton = ({ btntype, title, handleClick, styles }) => {
  return (
    <button
      type={btntype}
      className={`font-epilouge font-sembold text-[16px] leading-[26px] text-white min-h-[52px] px-4 rounded-[10px] ${styles}`}
      onClick={handleClick}
    >
      {title}
    </button>
  );
};

export default CustomButton;
