import Feedback from "./components/Feedback";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import IncreaseVisibility from "./components/IncreaseVisibility";
import KeepEveryone from "./components/KeepEveryone";
import LogoBanner from "./components/LogoBanner";
import LovedByDesigner from "./components/LovedByDesigner";
import Navbar from "./components/Navbar";
import PersonReview from "./components/PersonReview";
import ProgressArchive from "./components/ProgressArchive";
import RedFeedback from "./components/RedFeedback";
import ShareAnything from "./components/ShareAnything";

export default function App() {
  return (
    <>
      <Navbar />
      {/* Wrapper with margin to ensure no overlap */}
      <div className="relative mx-auto">
        {/* HeroSection */}
        <HeroSection />
      </div>
      {/* Spacer div to push content below the absolutely positioned content */}
      <div className="md:h-[400px] h-[100px]"></div>
      {/* LogoBanner */}
      <LogoBanner />
      <ShareAnything />
      <Feedback />
      <RedFeedback />
      <ProgressArchive />
      <PersonReview />
      <LovedByDesigner />
      <KeepEveryone />

      <IncreaseVisibility />
      <Footer />
    </>
  );
}
