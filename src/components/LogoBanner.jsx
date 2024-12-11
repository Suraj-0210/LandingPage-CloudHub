const LogoBanner = () => {
  return (
    <div className="bg-white py-8 m-auto">
      {/* Large screens: Row layout */}
      <div className="hidden lg:flex justify-center items-center flex-wrap gap-8">
        {[
          "/images/logo-01.svg",
          "/images/logo-02.svg",
          "/images/logo-03.svg",
          "/images/logo-04.svg",
          "/images/logo-05.svg",
          "/images/logo-06.svg",
          "/images/logo-07.svg",
        ].map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`Logo ${index + 1}`}
            className="h-10 object-contain transform transition-transform duration-300 hover:scale-110"
          />
        ))}
      </div>

      {/* Medium and small screens: Grid layout */}
      <div className="lg:hidden grid grid-cols-2 sm:grid-cols-3 gap-4 mx-4">
        {[
          "/images/logo-01.svg",
          "/images/logo-02.svg",
          "/images/logo-03.svg",
          "/images/logo-04.svg",
          "/images/logo-05.svg",
          "/images/logo-06.svg",
          "/images/logo-07.svg",
        ].map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`Logo ${index + 1}`}
            className="h-9 sm:h-12 object-contain transform transition-transform duration-300 hover:scale-110"
          />
        ))}
      </div>
    </div>
  );
};

export default LogoBanner;
