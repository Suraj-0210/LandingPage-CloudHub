import { FaCirclePlay } from "react-icons/fa6";

function Feedback() {
  return (
    <div className="md:m-[115px] m-4">
      <div className="flex flex-col lg:flex-row lg:gap-[250px]">
        <img
          src="/images/feedback-01.svg"
          alt="feedback-01"
          className="rounded-lg my-auto"
        />
        <div className="flex flex-col gap-4 my-auto">
          <div className="py-4 flex flex-col gap-4">
            <div className="flex gap-4 flex-col">
              <button className="flex justify-center items-center px-10 py-3 gap-1 w-[68px] h-[30px] bg-gradient-to-br from-[#FB432C] to-[#FF591E] text-white text-sm font-medium rounded-full hover:opacity-90">
                Feedback
              </button>
              <h1 className="text-5xl font-medium">
                Better feedback at the right time.
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
          <div className="flex gap-3">
            <FaCirclePlay className="text-[#FB432C]  text-2xl transition-transform duration-300 ease-in-out hover:scale-110 hover:rotate-90 animate-spin-slow" />
            <p className="font-semibold text-[16px]">See how it works</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Feedback;
