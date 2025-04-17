import React from "react";
import Book1 from "../../../assets/books/Book1.jpg";
import Book2 from "../../../assets/books/Book2.jpg";
import Book3 from "../../../assets/books/Book3.jpg";
import Book4 from "../../../assets/books/Book1.jpg";
import Book5 from "../../../assets/books/Book2.jpg";
import Book6 from "../../../assets/books/Book3.jpg";
import Book7 from "../../../assets/books/Book1.jpg";
import Book8 from "../../../assets/books/Book2.jpg";
import { FaStar } from "react-icons/fa";

const BooksData = [
  {
    id: 1,
    img: Book1,
    title: "The Calculating Stars",
    rating: 5.0,
    author: "Mary Robinette Kowal",
  },

  {
    id: 2,
    img: Book2,
    title: "An Orphan War",
    rating: 4.0,
    author: "Merry Green",
  },

  {
    id: 3,
    img: Book3,
    title: "Children of Time",
    rating: 4.5,
    author: "Adrian Tchaikovshy",
  },

  {
    id: 4,
    img: Book4,
    title: "The Truth can be Adjusted",
    rating: 3.8,
    author: "Michael Clayton",
  },

  {
    id: 5,
    img: Book5,
    title: "The House",
    rating: 4.3,
    author: "Paul Carro",
  },

  {
    id: 6,
    img: Book6,
    title: "The Devil's Cat",
    rating: 4.0,
    author: "William W.JohnStone",
  },

  {
    id: 7,
    img: Book7,
    title: "Six Scary Stories",
    rating: 5.0,
    author: "Stephen King",
  },

  {
    id: 8,
    img: Book8,
    title: "Pet Sematary",
    rating: 4.6,
    author: "Stephen King",
  },
];

const AllBooks = () => {
  return (
    <>
      <div>
        <div className="container placeholder-gray-100">
          <div className="text-center mb-20 max-w-[400px] mx-auto">
            <p className="text-sm font-bold bg-clip-text bg-gradient-to-r text-blue-400">
              Top Books for You!!
            </p>
            <h1 className="text-3xl font-bold">Top Books</h1>
            <p className="text-xs text-gray-400">
              There is a wisdom that is woe; but there is a woe that is
              madness...
            </p>
          </div>
          <div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 place-items-center gap-5">
              {BooksData.map((data) => (
                <div>
                  <img
                    src={data.img}
                    alt=""
                    className="h-[220px] w-[150px] object-cover rounded-md"
                  />
                  <div>
                    <h2 className="font-semibold">{data.title}</h2>

                    <p className="text-sm text-gray-700">{data.author}</p>
                    <div className="flex items-center gap-1">
                      <FaStar className="text-yellow-500" />
                      <span>{data.rating}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AllBooks;
