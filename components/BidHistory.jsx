import React from "react";

const BidHistory = ({ bidHistory }) => {
  const sortedBidHistory = [...bidHistory].sort((a, b) => b.bid - a.bid);
  return (
    <div>
      <h3 className="font-bold pb-5">Bid History</h3>
      <ul className="pl-0">
        {sortedBidHistory.map((bid, index) => (
          <li className="text-sm font-semibold" key={index}>
            Bid{index + 1}: ${bid.bid.toFixed(2)} by {bid.name} ({bid.email})
          </li>
        ))}
      </ul>
    </div>
  );
};
export default BidHistory;
