const LogoBanner = () => {
  return (
    <div className="bg-white py-8 m-auto">
      {/* Large screens: Row layout */}
      <div className="hidden lg:flex justify-center items-center flex-wrap gap-6">
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
          className="h-12 object-contain"
        />
        <img
          src="/images/logo-06.svg"
          alt="Logo 6"
          className="h-12 object-contain"
        />
        <img
          src="/images/logo-07.svg"
          alt="Logo 7"
          className="h-12 object-contain"
        />
      </div>

      {/* Medium and small screens: Grid layout */}
      <div className="lg:hidden grid grid-cols-2 sm:grid-cols-3 gap-4 mx-4">
        <img
          src="/images/logo-01.svg"
          alt="Logo 1"
          className="h-6 sm:h-8 object-contain"
        />
        <img
          src="/images/logo-02.svg"
          alt="Logo 2"
          className="h-9 sm:h-12 object-contain"
        />
        <img
          src="/images/logo-03.svg"
          alt="Logo 3"
          className="h-8 sm:h-10 object-contain"
        />
        <img
          src="/images/logo-04.svg"
          alt="Logo 4"
          className="h-8 sm:h-10 object-contain"
        />
        <img
          src="/images/logo-05.svg"
          alt="Logo 5"
          className="h-9 sm:h-12 object-contain"
        />
        <img
          src="/images/logo-06.svg"
          alt="Logo 6"
          className="h-9 sm:h-12 object-contain"
        />
        <img
          src="/images/logo-07.svg"
          alt="Logo 7"
          className="h-9 sm:h-12 object-contain"
        />
      </div>
    </div>
  );
};

export default LogoBanner;
