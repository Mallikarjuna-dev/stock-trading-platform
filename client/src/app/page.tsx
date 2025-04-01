import Link from "next/link";

export default function Home() {
  return (
    // <main className="flex flex-col items-center justify-center min-h-screen p-4">
    //   <h1 className="text-3xl font-bold">Stock Trading Platform</h1>
    //   <Link
    //     href="/login"
    //     className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md"
    //   >
    //     Get Started
    //   </Link>
    // </main>
    <main className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-3xl font-bold">Welcome to Stock Trading Platform</h1>
      <Link
        href="/login"
        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
      >
        Login
      </Link>
    </main>
  );
}
