import { FaCirclePlus } from "react-icons/fa6";
function KeepEveryone() {
  return (
    <div className="bg-orange-600 pt-12">
      {/* Main Container with padding */}
      <div className="mx-auto max-w-[1200px] text-center">
        {/* Title */}
        <div>
          <h2 className="font-inter font-semibold md:text-[63px] text-[35px] text-white mb-4">
            Keep everyone in the loop
          </h2>
        </div>
        {/* Description */}
        <div>
          <p className="font-inter font-normal text-[20px] text-white leading-[35px] max-w-[600px] mx-auto">
            All good things start with a homepage. Get inspired without breaking
            your wallet.
          </p>
        </div>
        <div>
          <button className="bg-white text-black py-3 px-6 mx-auto my-[20px] font-semibold font-inter rounded-full text-lg hover:bg-slate-200 transition duration-300">
            Start for free
          </button>
        </div>
      </div>
      <div className="mx-[250px]">
        <div>
          <img src="/images/sclayout-02.svg" alt="codeimage-01" className="" />
        </div>
        <div className="flex">
          <div className="w-[166px] bg-[#202123] h-[630px]">
            <img
              src="/images/sclayout-03.svg"
              alt="codeimage-03"
              className="mx-auto pt-6"
            />
          </div>
          <div className="w-[848px] bg-[#050505] h-[630px] flex flex-col gap-11">
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
            <div className="flex flex-col w-[806px] h-[520px] bg-[#171819] mx-auto rounded-xl gap-[87px]">
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
              <div className=" flex gap-4">
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
  );
}

export default KeepEveryone;
