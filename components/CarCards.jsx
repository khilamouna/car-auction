"use client";
import React, { useState } from "react";
import Chronometer from "./Chronometer";
import BidForm from "./BidForm";
import BidHistory from "./BidHistory";

const CarCards = () => {
  const [showModal, setShowModal] = useState(false);
  const [bidHistory, setBidHistory] = useState([]);
  const [isBiddingAllowed, setIsBiddingAllowed] = useState(true);

  const openModal = () => {
    if (isBiddingAllowed) {
      setShowModal(true);
    } else {
      alert("Too late! Bidding time has ended.");
    }
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const addBidToHistory = (bidData) => {
    setBidHistory((prevBidHistory) => [...prevBidHistory, bidData]);
    closeModal();
  };

  const handleTimeUp = () => {
    setIsBiddingAllowed(false);
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
      <Chronometer onTimeUp={handleTimeUp} />
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

      <button
        onClick={openModal}
        disabled={!isBiddingAllowed}
        className={`block mt-5 text-blue bg-green ${
          !isBiddingAllowed ? "bg-gray-400" : "bg-blue-800"
        } hover:bg-blue-400 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800`}
      >
        {isBiddingAllowed ? "Bid Now" : "Bidding Ended"}
      </button>

      {showModal && (
        <div>
          <h2>Place Your Bid</h2>
          <BidForm onClose={closeModal} onBidSubmit={addBidToHistory} />
        </div>
      )}
      <BidHistory bidHistory={bidHistory} />
    </div>
  );
};

export default CarCards;
