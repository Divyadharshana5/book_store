import React from "react";

const BestBook = () => {
  return (
    <>
      <div className="py-10">
        <div className="container">
          <div className="text-center mb-20 max-w-[400px] mx-auto">
            <p className="text-sm bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
              Trending Books
            </p>
            <h1 className="text-3xl font-bold">Best Books</h1>
            <p className="text-xs text-gray-400">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Et
              eligendi ad fugiat aut saepe labore, libero modi fuga alias
              obcaecati{" "}
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 md:gap-5 place-items-center"></div>
        </div>
      </div>
    </>
  );
};

export default BestBook;
