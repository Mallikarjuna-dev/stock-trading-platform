"use client";

import { useEffect, useState } from "react";
import API from "../../utils/api";
import { useRouter } from "next/navigation";

export default function Dashboard() {
  const [stocks, setStocks] = useState([]);
  const [balance, setBalance] = useState(0);
  const router = useRouter();

  useEffect(() => {
    async function fetchData() {
      try {
        const { data } = await API.get("/trade/prices");
        setStocks(data);
        const userRes = await API.get("/auth/profile");
        setBalance(userRes.data.balance);
      } catch (err) {
        router.push("/auth/login");
      }
    }
    fetchData();
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
      <p className="mb-4">Balance: ₹{balance}</p>
      <div className="grid grid-cols-3 gap-4">
        {stocks.map((stock: any) => (
          <div key={stock.symbol} className="border p-4 rounded shadow">
            <h2 className="font-bold">{stock.symbol}</h2>
            <p>Price: ₹{stock.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
