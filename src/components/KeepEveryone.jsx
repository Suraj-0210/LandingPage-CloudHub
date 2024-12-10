import { FaCirclePlus } from "react-icons/fa6";
function KeepEveryone() {
  return (
    <div className="bg-orange-600 pt-12">
      {/* Main Container with padding */}
      <div className="mx-auto max-w-[1200px] text-center">
        {/* Title */}
        <div className="flex flex-col">
          <h2 className="font-inter font-semibold md:text-[63px] text-left md:text-center text-[35px] mx-4 text-white mb-4">
            Keep everyone in the loop
          </h2>
        </div>
        {/* Description */}
        <div>
          <p className="font-inter font-normal text-[20px] text-white leading-[35px] text-left md:text-center mx-4">
            All good things start with a homepage. Get <br /> inspired without
            breaking your wallet.
          </p>
        </div>
        <div>
          <button className="bg-white text-black py-3 px-6 md:mx-auto my-[20px] font-semibold font-inter rounded-full text-lg hover:bg-slate-200 transition duration-300">
            Start for free
          </button>
        </div>
      </div>
      <div className="hidden md:flex justify-center">
        <div className="flex flex-col items-center">
          <div>
            <img
              src="/images/sclayout-02.svg"
              alt="codeimage-01"
              className=""
            />
          </div>
          <div className="flex">
            {/* Sidebar */}
            <div className="w-[166px] bg-[#202123] h-[630px]">
              <img
                src="/images/sclayout-03.svg"
                alt="codeimage-03"
                className="mx-auto pt-6"
              />
            </div>
            {/* Main Content */}
            <div className="w-[848px] bg-[#050505] h-[630px] flex flex-col gap-11">
              {/* Header */}
              <div className="flex p-4 justify-between">
                <div>
                  <h3 className="text-white font-inter font-medium text-[22px]">
                    Project
                  </h3>
                </div>
                <div className="flex gap-2 justify-center">
                  <FaCirclePlus className="text-orange-600 my-auto w-[22px] h-[22px]" />
                  <img
                    src="/images/notification-01.svg"
                    alt="codeimage-03"
                    className="mx-auto w-[20px] h-[20px] my-auto"
                  />
                  <img
                    src="/images/pplimg-01.png"
                    alt="codeimage-03"
                    className="mx-auto w-[28px] h-[28px] rounded-2xl my-auto"
                  />
                </div>
              </div>
              {/* Content */}
              <div className="flex flex-col w-[806px] h-[520px] bg-[#171819] mx-auto rounded-xl gap-[87px]">
                {/* Top Section */}
                <div className="flex justify-between p-6">
                  <div>
                    <img
                      src="/images/search-01.svg"
                      alt="codeimage-03"
                      className="my-auto"
                    />
                  </div>
                  <div>
                    <img
                      src="/images/sc-rectangle-01.svg"
                      alt="codeimage-03"
                      className="my-auto"
                    />
                  </div>
                  <div>
                    <img
                      src="/images/last30days-01.svg"
                      alt="codeimage-03"
                      className="my-auto"
                    />
                  </div>
                </div>
                {/* Cards Section */}
                <div className="flex gap-4">
                  <div className="mx-auto">
                    <img
                      src="/images/screen-card.svg"
                      alt="codeimage-03"
                      className=""
                    />
                  </div>
                  <div className="block rounded-[10px] border-[1px] border-dashed border-slate-500 overflow-visible relative">
                    <img
                      src="/images/screen-card-02.svg"
                      alt="codeimage-03"
                      className="relative rotate-10 transform scale-110"
                    />
                  </div>
                  <div className="mx-auto">
                    <img src="/images/screen-card-03.svg" alt="codeimage-03" />
                  </div>
                </div>
                {/* Footer Section */}
                <div className="">
                  <img
                    src="/images/downgroup.svg"
                    alt="codeimage-03"
                    className="mx-auto "
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default KeepEveryone;
