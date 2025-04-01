"use client";
import { useState } from "react";
import { apiFetch } from "../../utils/api";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    const res = await apiFetch("/auth/register", {
      method: "POST",
      body: JSON.stringify({ name, email, password }),
    });

    if (res.message === "User registered") {
      router.push("/auth/login");
    } else {
      alert(res.error);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10">
      <h2 className="text-2xl font-bold mb-4">Register</h2>
      <form onSubmit={handleRegister}>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          className="w-full p-2 border"
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="w-full p-2 border mt-2"
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
          className="w-full bg-green-500 text-white p-2 mt-4"
        >
          Register
        </button>
      </form>
      <p className="text-md my-2 text-center">
        Back to Login{" "}
        <Link href="/login" className="text-blue-600 font-semibold">
          Click Here.
        </Link>
      </p>
    </div>
  );
}
