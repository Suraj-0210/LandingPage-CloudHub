function PersonReview() {
  return (
    <div className="bg-slate-50 lg:p-[40px] p-4">
      <div className="flex lg:flex-row flex-col lg:mx-[200px] lg:my-[60px] gap-8 ">
        <div className="flex flex-col gap-4">
          <img
            src="/images/reviewimg-01.svg"
            alt="reviewimg-01"
            className="rounded-lg h-[51.99px] w-[51.99px]"
          />
          <p className="leading-[30px] font-normal font-inter">
            Cloudhub has emerged as an essential asset for the team at Patreon
            design. Amidst an accelerated expanding organization in which the
            product undergoes rapid changes, Campsite enables us to maintain
            visibility on what&apos;s transpiring across various teams —
            impeccably aligning with our pre-existing procedures.
          </p>
          <div className="flex gap-2">
            <div className="my-auto">
              <img
                src="/images/pplimg-01.png"
                alt="reviewimg-01"
                className="h-[40px] w-[40px] rounded-[9999px]"
              />
            </div>
            <div className="flex flex-col gap-1">
              <h2 className="font-inter font-semibold">Gabriel Valdivia</h2>
              <p>Principal Product Designer, Patreon</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <img
            src="/images/reviewimg-02.svg"
            alt="reviewimg-01"
            className="rounded-lg h-[51.99px] w-[51.99px]"
          />
          <p className="leading-[30px] font-normal font-inter">
            Cloudhub has emerged as an essential asset for the team at Patreon
            design. Amidst an accelerated expanding organization in which the
            product undergoes rapid changes, Campsite enables us to maintain
            visibility on what&apos;s transpiring across various teams —
            impeccably aligning with our pre-existing procedures.
          </p>
          <div className="flex gap-2">
            <div className="my-auto">
              <img
                src="/images/pplimg-02.png"
                alt="reviewimg-01"
                className="h-[40px] w-[40px] rounded-[9999px]"
              />
            </div>
            <div className="flex flex-col gap-1">
              <h2 className="font-semibold font-inter">Gabriel Valdivia</h2>
              <p>Principal Product Designer, Patreon</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PersonReview;
