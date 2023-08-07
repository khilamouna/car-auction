import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4 flex items-center justify-between">
      <div className="flex items-center space-x-4">
        <img src="/logo.png" alt="Logo" className="h-8 w-8" />
        <h2 className="text-white text-xl font-bold">Car Auctions</h2>
      </div>
    </nav>
  );
};

export default Navbar;
