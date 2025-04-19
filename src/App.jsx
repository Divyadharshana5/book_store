import { useEffect } from "react";
import AllBooks from "./Components/AllBooks/AllBooks";
import AppStoreBanner from "./Components/AppStoreBanner/AppStoreBanner";
import Banner from "./Components/Banner/Banner";
import BestBook from "./Components/BestBook/BestBook";
import Footer from "./Components/Footer/Footer";
import Hero from "./Components/Hero/Hero";
import Navbar from "./Components/Navbar/Navbar";
import TestiMonial from "./Components/TestiMonial/TestiMonial";

import AOS from "aos";
import "aos/dist/aos.css";

const App = () => {
  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
    });
    AOS.refresh();
  }, []);

  return (
    <>
      <div className="bg-white dark:bg-gray-900 dark:text-white duration-200">
        <Navbar />
        <Hero />
        <BestBook />
        <Banner />
        <AppStoreBanner />
        <AllBooks />
        <TestiMonial />
        <Footer />
      </div>
    </>
  );
};

export default App;
