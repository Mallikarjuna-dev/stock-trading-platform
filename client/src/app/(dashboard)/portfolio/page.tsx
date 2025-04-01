"use client";
import { useEffect, useState } from "react";

export default function Portfolio() {
  const [stocks, setStocks] = useState([]);

  useEffect(() => {
    fetch("/api/trade")
      .then((res) => res.json())
      .then((data) => setStocks(data));
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">My Portfolio</h1>
      <div className="grid grid-cols-3 gap-4">
        {stocks.map((stock, index) => (
          <div key={index} className="border p-4 rounded-md shadow-md">
            <h2 className="text-lg font-semibold">{stock.name}</h2>
            <p>Shares: {stock.shares}</p>
            <p>Price: ${stock.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
