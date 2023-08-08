import { useState } from "react";

const BidForm = () => {
  const [bidAmount, setBidAmount] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [bidHistory, setBidHistory] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (bidAmount && name && email) {
      setBidHistory([
        ...bidHistory,
        { name, email, bid: parseFloat(bidAmount) },
      ]);
      setBidAmount("");
      setName("");
      setEmail("");
    }
  };

  return (
    <div className="bg-white p-6 rounded shadow-md">
      <h2 className="text-2xl font-bold mb-4">Bid Now</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          placeholder="Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="block w-full p-2 border rounded"
        />
        <input
          type="email"
          placeholder="Your Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="block w-full p-2 border rounded"
        />
        <input
          type="number"
          placeholder="Enter your bid amount"
          value={bidAmount}
          onChange={(e) => setBidAmount(e.target.value)}
          className="block w-full p-2 border rounded"
        />
        <button
          type="submit"
          className="block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-800"
        >
          Place Bid
        </button>
      </form>
      <div className="mt-6">
        <h3 className="text-xl font-bold mb-2">Bid History</h3>
        <ul className="list-disc list-inside">
          {bidHistory.map((bid, index) => (
            <li key={index}>
              Bid: ${bid.bid.toFixed(2)} by {bid.name} ({bid.email})
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default BidForm;
