import AllBooks from "./Components/AllBooks/AllBooks";
import AppStoreBanner from "./Components/AppStoreBanner/AppStoreBanner";
import Banner from "./Components/Banner/Banner";
import BestBook from "./Components/BestBook/BestBook";
import Footer from "./Components/Footer/Footer";
import Hero from "./Components/Hero/Hero";
import Navbar from "./Components/Navbar/Navbar";
import TestiMonial from "./Components/TestiMonial/TestiMonial";

const App = () => {
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
