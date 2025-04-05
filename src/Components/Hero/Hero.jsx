import React, { useState } from "react";
import Book1 from "../../../assets/books/Book1.jpg";
import Book2 from "../../../assets/books/Book2.jpg";
import Book3 from "../../../assets/books/Book3.jpg";
import Vector from "../../../assets/website/blue-pattern.png";

const ImageList = [
  {
    id: 1,
    img: Book1,
    title: "The Calculating Stars",
    description:
      "The Calculating Stars by Mary Robinette Kowal starts with a bang! Literally, a giant meteor hits the Earth, completely wiping out the East Coast of the United States. This event begins the process of climate change, which some believe will eventually make the planet unlivable.",
  },

  {
    id: 2,
    img: Book2,
    title: "An Orphan's War",
    description:
      "An Orphan's War by Molly Green is a historical fiction novel set during World War II, focusing on Maxine Grey, a nurse who finds herself at a Dr. Barnardo's orphanage in Liverpool, where she befriends a half-German child, and the story explores themes of love, loss, and the impact of war on individuals and society. ",
  },

  {
    id: 3,
    img: Book3,
    title: "Children of Time",
    description:
      "Adrian Tchaikovksy's Arthur C. Clarke Award-winning novel Children of Time is the epic story of humanity's battle for survival on a terraformed planet. Who will inherit this new Earth? The last remnants of the human race left a dying Earth, desperate to find a new home among the stars.",
  },
];

const Hero = () => {
  const [selectedBook, setSelectedBook] = useState(ImageList[0]); // Initialize with the first book

  const bgImage = {
    backgroundImage: `url(${Vector})`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat", // Corrected value
    backgroundSize: "cover",
    width: "100%",
  };

  const handleThumbnailClick = (book) => {
    setSelectedBook(book);
  };

  return (
    <>
      <div
        className="min-h-[550px] sm:min-h-[650px] bg-gray-100 flex justify-center items-center dark:bg-gray-900 dark:text-white duration-200"
        style={bgImage}
      >
        <div className="container pb-8 sm:pb-0">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            <div className="flex flex-col justify-center gap-4 pt-12 sm:pt-0 text-center sm:text-left order-2 sm:order-1">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold">
                {selectedBook.title}
                <p className="bg-clip-text text-transparent bg-gradient-to-b from-primary to-secondary text-right text-sm">
                  by Anonymous
                </p>
              </h1>
              <p className="text-sm">{selectedBook.description}</p>
              <div>
                <button className="bg-gradient-to-r from-green-400 to-green-800 text-white px-4 py-2 rounded-full mt-4 hover:scale-105 duration-200 shadow-md">
                  Order Now
                </button>
              </div>
            </div>
            <div className="min-h-[450px] flex justify-center items-center relative order-1 sm:order-2">
              <div className="h-[300px] sm:h-[450px] overflow-hidden flex justify-center items-center">
                <img
                  src={selectedBook.img}
                  alt={selectedBook.title}
                  className="w-[300px] h-[300px] sm:h-[450px] sm:w-[450px] sm:scale-125 object-contain mx-auto rounded-lg shadow-xl"
                />
              </div>
              <div className="flex lg:flex-col lg:top-1/2 lg:-translate-y-1/2 lg:py-2 justify-center gap-2 absolute bottom-[20px] lg:-right-4 bg-white rounded-full shadow-md p-2">
                {ImageList.map((data) => (
                  <img
                    key={data.id} // Added key prop
                    src={data.img}
                    alt={data.title}
                    className="max-w-[70px] h-[70px] object-cover rounded-full inline-block hover:scale-110 duration-200 cursor-pointer"
                    onClick={() => handleThumbnailClick(data)} // Added onClick handler
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
