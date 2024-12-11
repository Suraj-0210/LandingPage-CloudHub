import { FaCirclePlay } from "react-icons/fa6";
import { TiTick } from "react-icons/ti";

function ShareAnything() {
  return (
    <div className="md:m-[115px] m-4">
      <div className="flex flex-col-reverse lg:flex-row lg:gap-[100px]">
        <div className="flex flex-col gap-4">
          <div className="py-4 flex flex-col gap-4">
            <div className="flex gap-4 flex-col">
              <button className="flex justify-center items-center px-5 py-2.5 gap-1 w-[68px] h-[30px] bg-gradient-to-br from-[#FB432C] to-[#FF591E] text-white text-sm font-medium rounded-full hover:opacity-90">
                Share
              </button>
              <h1 className="text-5xl font-medium">
                Share anything you’re working on.
              </h1>
            </div>
            <div>
              <p className="font-inter font-normal text-[18px] text-gray-500">
                Campsite has been instrumental in keeping designers aware of
                each others&apos; work-in-progress in a way that was previously
                slowing us down. It&apos;s also one of the only channels where.
              </p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="flex gap-2 items-center">
              {/* Tick Icon Animation */}
              <TiTick className="rounded-md text-xl my-auto  transition-transform duration-300 ease-in-out hover:scale-125 animate-bounce" />
              <p className="font-inter font-normal text-[18px]">Coded</p>
            </div>
            <div className="flex gap-2 items-center">
              <TiTick className="rounded-md text-xl my-auto transition-transform duration-300 ease-in-out hover:scale-125 animate-bounce" />
              <p className="font-inter font-normal text-[18px]">100 % Secure</p>
            </div>
          </div>
          <div className="flex gap-3 items-center">
            {/* Circle Play Animation */}
            <FaCirclePlay className="text-[#FB432C] text-2xl transition-transform duration-300 ease-in-out hover:scale-110 hover:rotate-90 animate-spin-slow" />
            <p className="font-semibold text-[16px]">See how it works</p>
          </div>
        </div>

        <img
          src="/images/codeimage-01.svg"
          alt="codeimage-01"
          className="rounded-lg"
        />
      </div>
    </div>
  );
}

export default ShareAnything;
