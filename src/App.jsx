import BestBook from "./Components/BestBook/BestBook";
import Hero from "./Components/Hero/Hero";
import Navbar from "./Components/Navbar/Navbar";

const App = () => {
  return (
    <div className="bg-white dark:bg-black">
      <Navbar />
      <Hero />
      <BestBook />
    </div>
  );
};

export default App;
