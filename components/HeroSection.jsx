"use client";
import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Image from "next/image";

const HeroSection = () => {
  return (
    <div className="hero-section w-full h-96 md:h-500 relative">
      <Carousel
        showArrows={false}
        showStatus={false}
        showThumbs={false}
        autoPlay
        infiniteLoop
        interval={3000}
      >
        <div className="relative h-full">
          <div className="w-full h-96">
            <Image
              src="/auctions1.jpg"
              alt="Slide 1"
              width={1200}
              height={500}
              objectFit="cover"
              objectPosition="center"
            />
          </div>
          <div className="carousel-caption absolute bottom-0 left-0 right-0 p-4 bg-black bg-opacity-50 text-white">
            <h3 className="text-xl font-bold">Welcome to Car Auctions</h3>
            <p>Description</p>
          </div>
        </div>

        <div className="relative h-full">
          <div className="w-full h-96">
            <Image
              src="/auctions2.jpg"
              alt="Slide 2"
              width={1200}
              height={500}
              objectFit="cover"
              objectPosition="center"
            />
          </div>
          <div className="carousel-caption absolute bottom-0 left-0 right-0 p-4 bg-black bg-opacity-50 text-white">
            <h3 className="text-xl font-bold">Some Text</h3>
            <p>Description</p>
          </div>
        </div>
      </Carousel>
    </div>
  );
};

export default HeroSection;
