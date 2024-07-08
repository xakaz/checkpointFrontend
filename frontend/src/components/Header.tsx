import Link from "next/link";

export default function Header() {
  return (
    <header className="w-100 bg-pink-600 text-white flex flex-col justify-around h-20 items-center">
      <h1 className="text-2xl font-bold">Checkpoint : frontend</h1>
      <Link href="/">Countries</Link>
    </header>
  );
}
