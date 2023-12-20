import React from "react";
import { twMerge } from "tailwind-merge";
import { Loading } from "./Utilites";

function Surah({ data, setstate, setsurah }) {
  return (
    <>
      {data.map((x, i) => {
        return (
          <div
            className="py-7 md:py-10 lg:py-7 cursor-pointer hover:bg-gray-100 transition duration-150"
            key={i}
            onClick={() => {
              setsurah(x.number);
              setstate((prev) => !prev);
            }}
          >
            <div
              className={twMerge(
                "mx-auto flex justify-center items-center space-x-5 sm:space-x-10 lg:space-x-5",
                "w-60 sm:w-96"
              )}
            >
              <div className="gradient_color w-[63px] sm:w-[60px] h-[60px] lg:w-[40px] lg:h-[40px] text-white_custom rounded-full flex justify-center items-center">
                <h1 className="text-2xl lg:text-xl">{x.number}</h1>
              </div>

              <div className="w-[70%] lg:w-[50%]">
                <h1 className="font-bold text-2xl lg:text-xl">
                  {x.name.transliteration.id}
                </h1>
                <p className="font-normal">{x.name.translation.id}</p>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
}

export default function List({ data, active, setactive, setsurah }) {
  if (!active && window.innerWidth < 1024) data = [];
  return (
    <div className="relative lg:border-r border border-transparent">
      <div className="hidden lg:block py-10 text-center">
        <h1 className="lg:text-5xl text-transparent bg-clip-text gradient_color font-bold">
          Quran
        </h1>
        <p className="font-semibold my-3">Quran Website Application</p>
      </div>

      <div
        className={twMerge(
          active ? "left-0" : "-left-[1000px]",
          "absolute top-0 bg-white divide-y w-full",
          "transition-all duration-200 z-10",
          "lg:relative lg:block lg:left-0 lg:w-fit"
        )}
      >
        {data ? (
          <Surah data={data} setstate={setactive} setsurah={setsurah} />
        ) : (
          <Loading />
        )}
      </div>
    </div>
  );
}
