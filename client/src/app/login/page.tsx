"use client";
import { useState } from "react";
import { apiFetch } from "../../utils/api";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    const res = await apiFetch("/auth/login", {
      method: "POST",
      body: JSON.stringify({ email, password }),
    });

    if (res.token) {
      localStorage.setItem("token", res.token);
      router.push("/dashboard");
    } else {
      alert(res.error);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10">
      <h2 className="text-2xl font-bold mb-4">Login</h2>
      <form onSubmit={handleLogin}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="w-full p-2 border"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          className="w-full p-2 border mt-2"
        />
        <button
          type="submit"
          className="w-full bg-blue-500 text-white p-2 mt-4"
        >
          Login
        </button>
      </form>
      <p className="text-md my-2 text-center">
        New User?{" "}
        <Link href="/register" className="text-blue-600 font-semibold">
          Register Here.
        </Link>
      </p>
    </div>
  );
}
