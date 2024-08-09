"use client";
import { useState, useEffect, useRef } from "react";
import {
  BsFillArrowLeftCircleFill,
  BsFillArrowRightCircleFill,
} from "react-icons/bs";

export default function Carousel({ slides }) {
  let [current, setCurrent] = useState(0);
  const touchStartX = useRef(null);
  const touchEndX = useRef(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 1024px)");
    setIsMobile(mediaQuery.matches);

    const handleResize = () => {
      setIsMobile(mediaQuery.matches);
    };

    mediaQuery.addEventListener("change", handleResize);

    return () => {
      mediaQuery.removeEventListener("change", handleResize);
    };
  }, []);

  let previousSlide = () => {
    setCurrent(current === 0 ? slides.length - 1 : current - 1);
  };

  let nextSlide = () => {
    setCurrent(current === slides.length - 1 ? 0 : current + 1);
  };

  const handleTouchStart = (e) => {
    if (isMobile) {
      touchStartX.current = e.changedTouches[0].clientX;
    }
  };

  const handleTouchEnd = (e) => {
    if (isMobile) {
      touchEndX.current = e.changedTouches[0].clientX;
      handleSwipe();
    }
  };

  const handleSwipe = () => {
    const swipeDistance = touchStartX.current - touchEndX.current;
    const minSwipeDistance = 50; // Define a distância mínima para reconhecer o swipe

    if (swipeDistance > minSwipeDistance) {
      nextSlide();
    } else if (swipeDistance < -minSwipeDistance) {
      previousSlide();
    }
  };

  return (
    <>
      <div
        className="relative overflow-hidden pb-20"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        <div
          className="flex transition-transform duration-500 ease-in-out"
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

        <div className="absolute top-0 h-full w-full flex justify-between items-center text-white px-10 text-3xl max-lg:hidden max-lg:text-lg">
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
