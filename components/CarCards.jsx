"use client";
import React, { useState } from "react";
import Chronometer from "./Chronometer";
import BidForm from "./BidForm";
import BidHistory from "./BidHistory";

const CarCards = () => {
  const [showModal, setShowModal] = useState(false);
  const [bidHistory, setBidHistory] = useState([]);

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };
  // CarCards.js

  const addBidToHistory = (bidData) => {
    setBidHistory((prevBidHistory) => [...prevBidHistory, bidData]);
    closeModal();
  };

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
    <div className="mt-20 text-center sm:mt-20 xl:mt-60 ">
      <h1 className="text-2xl font-bold text-blue-800 pb-2">
        OUR CAR'S DETAILS
      </h1>
      <h1 className="text-xl font-bold mb-2">
        {" "}
        2015 Hyundai ELANTRA GLS 4 Doors
      </h1>
      <Chronometer />
      <div className="car-section grid grid-cols-1 md:grid-cols-3 gap-4  mt-10 p-4">
        {carsData.map((car, index) => (
          <div key={index} className="car-item">
            <img
              src={car.imageSrc}
              alt={`Car ${index + 1}`}
              className="w-full h-64 md:h-80 object-cover"
            />
            <div className="p-2">
              <h3 className="text-l font-bold bg-red-600">On sale</h3>
              <p>{car.description}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center items-center m-10">
        <button
          onClick={openModal}
          className="text-blue bg-green bg-blue-800 hover:bg-blue-400 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Bid Now
        </button>
      </div>

      {showModal && (
        <div>
          <h2>Place Your Bid</h2>

          <BidForm onClose={closeModal} onBidSubmit={addBidToHistory} />
        </div>
      )}
      <div className="flex justify-center items-center m-10 p-10 bg-gray-200">
        {" "}
        <BidHistory bidHistory={bidHistory} />
      </div>
    </div>
  );
};
export default CarCards;
