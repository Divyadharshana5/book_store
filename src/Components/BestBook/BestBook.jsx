import React from "react";
import Img1 from "../../../assets/books/Book1.jpg";
import Img2 from "../../../assets/books/Book2.jpg";
import Img3 from "../../../assets/books/Book3.jpg";
import { FaStar } from "react-icons/fa";

const BooksData = [
  {
    id: 1,
    img: Img1,
    title: "The Calculating Stars",
    description:
      "The Calculating Stars by Mary Robinette Kowal starts with a bang! Literally, a giant meteor hits the Earth, completely wiping out the East Coast of the United States. This event begins the process of climate change, which some believe will eventually make the planet unlivable.",
  },

  {
    id: 2,
    img: Img2,
    title: "An Orphan's War",
    description:
      "An Orphan's War by Molly Green is a historical fiction novel set during World War II, focusing on Maxine Grey, a nurse who finds herself at a Dr. Barnardo's orphanage in Liverpool, where she befriends a half-German child, and the story explores themes of love, loss, and the impact of war on individuals and society. ",
  },

  {
    id: 3,
    img: Img3,
    title: "Children of Time",
    description:
      "Adrian Tchaikovksy's Arthur C. Clarke Award-winning novel Children of Time is the epic story of humanity's battle for survival on a terraformed planet. Who will inherit this new Earth? The last remnants of the human race left a dying Earth, desperate to find a new home among the stars.",
  },
];

const BestBook = () => {
  return (
    <>
      <div className="py-10">
        <div className="container">
          <div className="text-center mb-20 max-w-[400px] mx-auto">
            <p className="text-sm font-bold bg-clip-text bg-gradient-to-r text-blue-400">
              Trending Books
            </p>
            <h1 className="text-3xl font-bold">Best Books</h1>
            <p className="text-xs text-gray-400">
              There is a wisdom that is woe; but there is a woe that is
              madness...
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 md:gap-5 place-items-center">
            {BooksData.map((book) => (
              <div className="">
                <div className="h-[100px]">
                  <img src={book.img} alt="" />
                </div>
                <div>
                  <div></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default BestBook;
