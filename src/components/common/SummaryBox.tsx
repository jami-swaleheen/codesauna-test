import React from "react";
import clsx from "clsx";
function SummaryBox({
  category,
  score,
  icon,
  background,
  textColor,
}: {
  category: string;
  score: number;
  icon: string;
  background: string;
  textColor: string;
}) {
  return (
    <div
      className={clsx("flex justify-between h-[54px] p-[17px] rounded-[12px]")}
      style={{
        backgroundColor: background,
      }}
    >
      <div className="flex gap-[12px] items-center">
        <img src={icon} alt="icon" />
        <p
          className="text-[18px] font-semibold"
          style={{
            color: textColor,
          }}
        >
          {category}
        </p>
      </div>
      <div>
        <p className="text-[#292929] text-[18px] font-bold">
          {score} <span className="text-[#7D7D7D]">/ 100</span>
        </p>
      </div>
    </div>
  );
}

export default SummaryBox;
