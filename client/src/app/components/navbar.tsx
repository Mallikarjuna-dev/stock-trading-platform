export default function Navbar() {
  return (
    <nav className="bg-blue-600 text-white p-4 flex justify-between">
      <a href="/dashboard">Dashboard</a>
      <a href="/trade">Trade</a>
      <a href="/leaderboard">Leaderboard</a>
    </nav>
  );
}
