function RedFeedback() {
  return (
    <div className="bg-red-500 p-4 flex flex-col gap-[75px] pb-20">
      <div className="flex flex-col gap-2">
        <div className="mt-[75px]">
          <p className="font-inter font-semibold text-sm text-white text-center">
            Best time here
          </p>
        </div>
        <div>
          <p className="font-inter font-semibold text-4xl text-white text-center">
            Better feedback at the right time.
          </p>
        </div>
      </div>
      <div className="flex flex-col gap-1">
        <div>
          {/* Image for larger screens */}
          <img
            src="/images/feedback-02.svg"
            alt="codeimage-01"
            className="rounded-lg mx-auto hidden md:block"
          />

          {/* Image for smaller and medium screens */}
          <img
            src="/images/feedback-06.svg"
            alt="codeimage-02"
            className="rounded-lg mx-auto block md:hidden"
          />
        </div>

        <div className="flex md:flex-row flex-col gap-1 mx-auto">
          <div>
            <img
              src="/images/feedback-03.svg"
              alt="codeimage-01"
              className="rounded-lg mx-auto"
            />
          </div>
          <div>
            <img
              src="/images/feedback-04.svg"
              alt="codeimage-01"
              className="rounded-lg mx-auto"
            />
          </div>
          <div>
            <img
              src="/images/feedback-05.svg"
              alt="codeimage-01"
              className="rounded-lg mx-auto"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default RedFeedback;
