import React from "react";

function IncreaseVisibility() {
  return (
    <div>
      <div className="my-[100px] flex flex-col justify-center gap-[20px] mx-[50px]">
        <div>
          <img
            src="/images/iconTM-01.svg"
            alt="codeimage-01"
            className="rounded-lg mx-auto"
          />
        </div>
        <div>
          <h3 className="font-inter font-semibold text-center text-[26px]">
            Increase your team’s visibility and alignment
          </h3>
        </div>
        <div>
          <p className="font-normal text-[20px] font-inter text-center">
            Start for free, flexible for all teams.
          </p>
        </div>
        <div className="flex gap-2 justify-center">
          <p className="my-auto">Request a demo</p>
          <button className="flex justify-center items-center px-5 py-2.5 gap-1 w-32 h-11 bg-gradient-to-br from-[#FB432C] to-[#FF591E]  text-white text-sm font-medium rounded-full hover:opacity-90">
            Start for free
          </button>
        </div>
      </div>
    </div>
  );
}

export default IncreaseVisibility;
