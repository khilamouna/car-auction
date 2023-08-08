"use client";
import React from "react";

const CarCards = () => {
  const carsData = [
    {
      imageSrc: "/logo.png",
      description: "Mileage: 152970 mi",
    },
    {
      imageSrc: "/auctions1.jpg",
      description: "Color: White",
    },
    {
      imageSrc: "/auctions2.jpg",
      description: "Title Type: Clean vehicle",
    },
  ];

  return (
    <div className="mt-80 text-center">
      <h1 className="text-2xl font-bold">OUR CAR'S DETAILS</h1>
      <div className="car-section grid grid-cols-1 md:grid-cols-3 gap-4 mt-20">
        {carsData.map((car, index) => (
          <div key={index} className="car-item">
            <img
              src={car.imageSrc}
              alt={`Car ${index + 1}`}
              className="w-full h-64 md:h-80 object-cover"
            />
            <div className="p-2">
              <h3 className="text-l font-bold">
                2015 Hyundai ELANTRA GLS 4 Doors
              </h3>
              <p>{car.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default CarCards;
