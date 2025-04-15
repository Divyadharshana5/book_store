import React from "react";
import LibraryImg from "../../../assets/website/library.jpg";

const Banner = () => {
  return (
    <>
      <div className="py-10">
        <div className="container">
          <div
            className="grid grid-cols-2 sm:grid-cols-2
          items-center gap-6"
          >
            <div>
              <img
                src={LibraryImg}
                alt=""
                className="max-w-[400px] block mx-auto h-
                [350px] w-full drop-shadow-
                [-10px_10px_12px_ rgba(0,0,0,1)] 
                object-cover"
              />
            </div>

            <div>
              <h1 className="text-3xl sm:text-4xl font-bold">
                Library at Your Fingertips!
              </h1>
              <p className="text-sm text-gray-500 tracking-wide leading-5">
                "You want weapons? We're in a library. Books are the best weapon
                in the world. This room's the greatest arsenal we could have.
                Arm yourself!".
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
