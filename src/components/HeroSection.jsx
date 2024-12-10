import { FaArrowRight } from "react-icons/fa6";
const HeroSection = () => {
  return (
    <section className="relative bg-white text-center py-16">
      {/* SVG Background */}
      <div
        className="absolute md:inset-0 md:z-0 flex justify-center items-center mt-[300px]"
        style={{ top: "100px" }}
      >
        <img
          src="/images/svgviewer-output.svg"
          alt="Background pattern"
          className="w-full h-auto hidden md:block"
        />

        {/* Additional Images on top of SVG */}
        <div className="absolute hidden inset-0 md:flex justify-center items-center">
          {/* Image 1 */}
          <img
            src="/images/image-02.png"
            alt="Icon 1"
            className="absolute w-20 h-20 top-60 left-40"
          />
          {/* Image 2 */}
          <img
            src="/images/image-01.png"
            alt="Icon 2"
            className="absolute w-20 h-20 bottom-[-800%] right-[30%]"
          />
          {/* Image 3 */}
          <img
            src="/images/image-03.png"
            alt="Icon 3"
            className="absolute w-20 h-20 top-[450%] left-[30%]"
          />
          {/* Image 4 */}
          <img
            src="/images/image-04.png"
            alt="Icon 4"
            className="absolute w-20 h-20 top-[-200%] left-[20%]"
          />
          {/* Image 5 */}
          <img
            src="/images/image-05.png"
            alt="Icon 4"
            className="absolute w-20 h-20 bottom-[-400%] right-[25%]"
          />
          {/* Image 6 */}
          <img
            src="/images/image-06.png"
            alt="Icon 4"
            className="absolute w-20 h-20 bottom-[150%] right-[15%]"
          />
        </div>
      </div>

      {/* Content Section */}
      <div className="relative z-10 max-w-4xl mx-auto">
        {/* Main Heading */}
        <h1 className="text-5xl font-semibold font-inter text-gray-900 leading-tight mb-6 mx-4 md:text-center text-left">
          Create, inspect, and apply synthetic surveillance broadly.
        </h1>

        {/* Subheading */}
        <p className="text-xl text-gray-600 mb-8 mx-4 md:text-center text-left">
          Start with a stunning homepage. Stay motivated without hurting your
          pocket.
        </p>

        {/* Call to Action Button */}
        <button className="bg-orange-500 float-left sm:float-none mx-4 text-white py-3 px-6 rounded-full text-lg hover:bg-orange-600 transition duration-300">
          Start for free
        </button>

        {/* Footer text link */}
        <p className="mt-4 text-gray-500 md:flex items-center justify-center hidden ">
          Want to talk or get a live demo?{" "}
          <b className="text-black flex items-center ml-2">
            <a href="#" className="hover:underline">
              Get in touch
            </a>
            <FaArrowRight className="ml-2 my-auto text-black" />
          </b>
        </p>
      </div>
    </section>
  );
};

export default HeroSection;
