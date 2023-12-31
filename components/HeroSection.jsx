"use client";
import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Image from "next/image";
import { BiStopwatch } from "react-icons/bi";

const HeroSection = () => {
  return (
    <div className="hero-section w-full h-80 md:h-500 relative">
      <Carousel
        showArrows={false}
        showStatus={false}
        showThumbs={false}
        autoPlay
        infiniteLoop
        interval={3000}
      >
        <div className="h-80 sm:h-96 xl:h-[80vh] 2xl:h-[80vh] group ">
          <div className="w-full h-72">
            <Image
              src="/auctions1.jpg"
              alt="Slide 1"
              width={1250}
              height={550}
            />
          </div>
          <div className="carousel-caption absolute top-10 left-0 right-0 p-4 text-blue-800 text-4xl text-left">
            <h3 className="text-5xl font-bold">Welcome to Car Auctions</h3>
            <p className="flex items-center text-black">
              Time is ticking <BiStopwatch className="text-blue-800 ml-2" />
            </p>
            <button
              type="submit"
              aria-label="submit"
              className="text-white bg-green bg-blue-800 hover:bg-blue-400 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Bid Now
            </button>
          </div>
        </div>

        <div className="h-80 sm:h-96 xl:h-[80vh] 2xl:h-[80vh] group ">
          <div className="w-full h-72">
            <Image
              src="/auctions2.jpg"
              alt="Slide 2"
              width={1200}
              height={200}
              objectFit="cover"
              objectPosition="center"
            />
          </div>
          <div className="carousel-caption absolute top-10 left-0 right-0 p-4 text-blue-800 text-4xl text-left">
            <h3 className="text-7xl font-bold text-black">Opportunity</h3>
            <p>Don't miss it !</p>
            <button
              type="submit"
              aria-label="submit"
              className="text-white bg-green bg-blue-800 hover:bg-blue-400 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Bid Now
            </button>
          </div>
        </div>
      </Carousel>
    </div>
  );
};

export default HeroSection;
