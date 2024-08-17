import DiscountBanner from "./Components/UI/DiscountBanner";
import Header from "./Components/UI/Header";
import LetUsSection from "./Components/UI/LetUsSection";
import PopularCourse from "./Components/UI/PopularCourse";
import PymentSection from "./Components/UI/PymentSection";
import TrustedSection from "./Components/UI/TrustedSection";
import WhatDoWeExist from "./Components/UI/WhatDoWeExist";

function App() {
  return (
    <>
      <Header />
      <TrustedSection />
      <PymentSection />
      <DiscountBanner />
      <WhatDoWeExist />
      <PopularCourse />
      <LetUsSection />
    </>
  );
}

export default App;
