import React from "react";
import { dummyData } from "../../../data";
import SummaryBox from "../common/SummaryBox";
import Button from "../common/Button";

const ResultCard = () => {
  return (
    <div
      className="m-auto min-h-[512px] md:min-w-[739px] min-w-[100%] bg-white shadow-lg flex flex-col md:flex-row rounded-[40px]"
      style={{
        boxShadow: "5px 16px 60px 8px #3D2FEE1A",
      }}
    >
      <div
        className="flex-1 md:rounded-[40px] rounded-b-[40px] text-center pb-[40px] md:pb-0"
        style={{
          background:
            "linear-gradient(180deg, #6942FF 20.67%, #5037F5 49%, #312AEA 100%)",
        }}
      >
        <h3 className="md:text-[24px] text-[20px] font-bold md:mt-[38px] md:mb-[36px] mt-[34px] mb-[32px] text-[#D5C9FF]">
          Your Result
        </h3>

        <div
          className="rounded-[100%] flex md:h-[200px] md:w-[200px] h-[160px] w-[160px] m-auto"
          style={{
            background:
              "linear-gradient(180deg, #4923CD 0%, #462DE1 49.5%, #4733EC 100%)",
          }}
        >
          <div className="m-auto">
            <p className="text-[55px] md:text-[72px] font-extrabold leading-[77px]">
              76
            </p>
            <p className="text-[18px] font-bold text-[#9284FF] ">of 100</p>
          </div>
        </div>
        <h3 className="md:mt-[28px] mt-[25px] text-[27px] md:text-[30px] font-bold">
          Great
        </h3>
        <p className="mt-[16px]  max-w-[31ch] md:max-w-[26ch] md:text-[18px] text-[16px] font-semibold  m-auto text-[#BEB5FF]">
          You scored higher than 65% of the people who have taken these tests.
        </p>
      </div>
      <div className="flex-1 ">
        <div className="px-[41px] pt-[38px] pb-[47px] h-full">
          <h3 className="text-[#3C3C3C] font-bold text-[24px]">Summary</h3>
          <div className="flex flex-col gap-[18px] mt-[30px]">
            {dummyData.map((data, key) => (
              <SummaryBox key={key} {...data} />
            ))}
          </div>
          <Button text="Continue" />
        </div>
      </div>
    </div>
  );
};

export default ResultCard;
7   