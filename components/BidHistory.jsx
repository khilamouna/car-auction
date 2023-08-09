import React from "react";

const BidHistory = ({ bidHistory }) => {
  return (
    <div>
      <h3 className="font-bold pb-5">Bid History</h3>
      <ul>
        {bidHistory?.map((bid, index) => (
          <li key={index}>
            Bid: ${bid.bid.toFixed(2)} by {bid.name} ({bid.email})
          </li>
        ))}
      </ul>
    </div>
  );
};
export default BidHistory;
