"use client";

import { useState } from "react";
import API from "../../utils/api";

export default function Trade() {
  const [stock, setStock] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [type, setType] = useState("BUY");

  const handleTrade = async () => {
    try {
      await API.post(`/trade/${type.toLowerCase()}`, { stock, quantity });
      alert("Trade successful!");
    } catch (error) {
      alert("Trade failed!");
    }
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Trade Stocks</h1>
      <input
        type="text"
        placeholder="Stock Symbol"
        className="w-full p-2 border rounded mb-3"
        value={stock}
        onChange={(e) => setStock(e.target.value)}
      />
      <input
        type="number"
        placeholder="Quantity"
        className="w-full p-2 border rounded mb-3"
        value={quantity}
        onChange={(e) => setQuantity(Number(e.target.value))}
      />
      <select
        className="w-full p-2 border rounded mb-3"
        value={type}
        onChange={(e) => setType(e.target.value)}
      >
        <option value="BUY">Buy</option>
        <option value="SELL">Sell</option>
      </select>
      <button
        className="w-full bg-green-500 text-white p-2 rounded"
        onClick={handleTrade}
      >
        Submit Trade
      </button>
    </div>
  );
}
