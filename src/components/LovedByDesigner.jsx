function LovedByDesigner() {
  return (
    <div className="text-center py-8 mt-[30px]">
      <h2 className="text-2xl lg:text-[54px] font-bold mb-10 md:mb-[70px]">
        Loved By Designers At
      </h2>
      {/* Container for the logos */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-10 px-4 sm:px-8 lg:px-[200px]">
        {/* Logo 1 */}
        <div className="w-full h-[130px] flex items-center justify-center bg-slate-100 rounded-2xl p-4">
          <img
            src="/images/LVD-01.png"
            alt="Crowdstrike logo"
            className="max-w-full max-h-full object-contain"
          />
        </div>
        {/* Logo 2 */}
        <div className="w-full h-[130px] flex items-center justify-center bg-slate-100 rounded-2xl p-4">
          <img
            src="/images/LVD-02.png"
            alt="Airbus logo"
            className="max-w-full max-h-full object-contain"
          />
        </div>
        {/* Logo 3 */}
        <div className="w-full h-[130px] flex items-center justify-center bg-slate-100 rounded-2xl p-7">
          <img
            src="/images/LVD-03.png"
            alt="Hays logo"
            className="max-w-full max-h-full object-contain"
          />
        </div>
        {/* Logo 4 */}
        <div className="w-full h-[130px] flex items-center justify-center bg-slate-100 rounded-2xl p-6">
          <img
            src="/images/LVD-04.svg"
            alt="Sentry logo"
            className="max-w-full max-h-full object-contain"
          />
        </div>
        {/* Logo 5 */}
        <div className="w-full h-[130px] flex items-center justify-center bg-slate-100 rounded-2xl p-4">
          <img
            src="/images/LVD-05.png"
            alt="Medwing logo"
            className="max-w-full max-h-full object-contain"
          />
        </div>
        {/* Logo 6 */}
        <div className="w-full h-[130px] flex items-center justify-center bg-slate-100 rounded-2xl p-4">
          <img
            src="/images/LVD-06.png"
            alt="Cathay Pacific logo"
            className="max-w-full max-h-full object-contain"
          />
        </div>
        {/* Logo 7 */}
        <div className="w-full h-[130px] flex items-center justify-center bg-slate-100 rounded-2xl p-4">
          <img
            src="/images/LVD-07.png"
            alt="Liquid Web logo"
            className="max-w-full max-h-full object-contain"
          />
        </div>
        {/* Logo 8 */}
        <div className="w-full h-[130px] flex items-center justify-center bg-slate-100 rounded-2xl p-4">
          <img
            src="/images/LVD-08.png"
            alt="AutoTrader logo"
            className="max-w-full max-h-full object-contain"
          />
        </div>
      </div>
    </div>
  );
}

export default LovedByDesigner;
