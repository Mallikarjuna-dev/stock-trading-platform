"use client";

import { useEffect, useState } from "react";
import API from "../../utils/api";

export default function Leaderboard() {
  const [leaders, setLeaders] = useState([]);

  useEffect(() => {
    async function fetchLeaderboard() {
      const { data } = await API.get("/trade/leaderboard");
      setLeaders(data);
    }
    fetchLeaderboard();
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Leaderboard</h1>
      <ul>
        {leaders.map((user: any, index) => (
          <li key={index} className="border p-2 rounded mb-2">
            {index + 1}. {user.name} - ₹{user.portfolioValue}
          </li>
        ))}
      </ul>
    </div>
  );
}
