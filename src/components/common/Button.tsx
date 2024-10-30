import React from "react";

const Button = ({ text }: { text: string }) => {
  return (
    <button className="px-[106] py-[17px] custom-bg-gradient text-white text-[18px] font-bold rounded-[60px] mt-[41px] w-full">
      {text}
    </button>
  );
};

export default Button;
