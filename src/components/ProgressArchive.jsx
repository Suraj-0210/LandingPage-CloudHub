function ProgressArchive() {
  return (
    <div className="pb-[75px]">
      <div className="mt-[75px]">
        <p className="font-semibold font-inter text-[34px] md:text-[54px] text-center">
          Your Archive of progress
        </p>
      </div>
      <div className="flex md:flex-row flex-col mx-auto justify-center gap-4">
        <div className="flex flex-col gap-4 rounded-lg bg-slate-50">
          <div className="mt-10">
            <h1 className="text-center font-semibold font-inter">Projects</h1>
            <p className="text-center">Organize, follow, and archive.</p>
          </div>
          <div>
            <img
              src="/images/progress-01.svg"
              alt="feedback-01"
              className="rounded-lg my-auto"
            />
          </div>
        </div>
        <div className="flex flex-col md:gap-20 gap-4 rounded-lg bg-slate-50">
          <div className="mt-10">
            <h1 className="text-center font-semibold font-inter">
              Member profiles
            </h1>
            <p className="text-center">Automatic portfolios of your work.</p>
          </div>
          <div>
            <img
              src="/images/progress-02.svg"
              alt="feedback-01"
              className="rounded-lg my-auto"
            />
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
}

export default ProgressArchive;
