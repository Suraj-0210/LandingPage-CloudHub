const LogoBanner = () => {
  return (
    <div className="bg-white py-8 m-auto">
      {/* Container for the banner */}
      <div className=" hidden lg:flex md:flex-row flex-col md:justify-center items-center space-x-12">
        {/* Logo Images */}
        <img
          src="/images/logo-01.svg"
          alt="Logo 1"
          className="h-8 object-contain"
        />
        <img
          src="/images/logo-02.svg"
          alt="Logo 2"
          className="h-14 object-contain"
        />
        <img
          src="/images/logo-03.svg"
          alt="Logo 3"
          className="h-10 object-contain"
        />
        <img
          src="/images/logo-04.svg"
          alt="Logo 4"
          className="h-10 object-contain"
        />
        <img
          src="/images/logo-05.svg"
          alt="Logo 5"
          className="h-12 object-contain hidden md:block"
        />
        <img
          src="/images/logo-06.svg"
          alt="Logo 6"
          className="h-12 object-contain hidden md:block"
        />
        <img
          src="/images/logo-07.svg"
          alt="Logo 7"
          className="h-12 object-contain hidden md:block"
        />
      </div>
      <div className="flex flex-col lg:hidden mx-[20px] gap-3">
        {/* Logo Images */}
        <div className="grid grid-cols-2 justify-center">
          <img
            src="/images/logo-01.svg"
            alt="Logo 1"
            className="h-6 object-contain"
          />
          <img
            src="/images/logo-02.svg"
            alt="Logo 2"
            className="h-9 object-contain my-auto"
          />
        </div>
        <div className="grid grid-cols-2">
          <img
            src="/images/logo-03.svg"
            alt="Logo 3"
            className="h-8 object-contain"
          />
          <img
            src="/images/logo-04.svg"
            alt="Logo 4"
            className="h-8 object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default LogoBanner;
