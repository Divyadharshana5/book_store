import React from "react";
import LibraryImg from "../../../assets/website/library.jpg";
import { GrSecure } from "react-icons/gr";
import { IoFastFood } from "react-icons/io5";
import { GiFoodTruck } from "react-icons/gi";

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
                className="max-w-[400px] block mx-auto h-[350px] w-full drop-shadow-[-10px_10px_12px_rgba(0,0,0,1)] 
                object-cover"
              />
            </div>

            <div className="flex flex-col justify-center gap-6 sm:pt-0">
              <h1 className="text-3xl sm:text-4xl font-bold">
                Library at Your Fingertips!
              </h1>
              <p className="text-sm text-gray-500 tracking-wide leading-5">
                "You want weapons? We're in a library. Books are the best weapon
                in the world. This room's the greatest arsenal we could have.
                Arm yourself!".
              </p>
              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-4">
                  <GrSecure className="text-4xl h" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
