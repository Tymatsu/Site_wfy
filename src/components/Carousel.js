"use client";
import { useState } from "react";
import {
  BsFillArrowLeftCircleFill,
  BsFillArrowRightCircleFill,
} from "react-icons/bs";

export default function Carousel({ slides }) {
  let [current, setCurrent] = useState(0);

  let previousSlide = () => {
    setCurrent(current === 0 ? slides.length - 1 : current - 1);
  };

  let nextSlide = () => {
    setCurrent(current === slides.length - 1 ? 0 : current + 1);
  };

  return (
    <>
      <div className="relative overflow-hidden pb-20">
        <div
          className="flex transition-transform duration-500 ease-in-out" // Ajusta a transição para ser mais suave e visível
          style={{ transform: `translateX(-${current * 100}%)` }}
        >
          {slides.map((s, index) => {
            return (
              <div
                key={index}
                className="w-full flex-shrink-0 flex justify-center"
              >
                {s}
              </div>
            );
          })}
        </div>

        <div className="absolute top-0 h-full w-full flex justify-between items-center text-white px-10 text-3xl">
          <button onClick={previousSlide} aria-label="Previous Slide">
            <BsFillArrowLeftCircleFill />
          </button>
          <button onClick={nextSlide} aria-label="Next Slide">
            <BsFillArrowRightCircleFill />
          </button>
        </div>

        <div className="absolute bottom-0 py-4 flex justify-center gap-3 w-full">
          {slides.map((_, i) => {
            return (
              <div
                onClick={() => {
                  setCurrent(i);
                }}
                key={"circle" + i}
                className={`rounded-full w-4 h-4 cursor-pointer ${
                  i === current ? "bg-custom-laranja3" : "bg-white"
                }`}
              ></div>
            );
          })}
        </div>
      </div>
    </>
  );
}
