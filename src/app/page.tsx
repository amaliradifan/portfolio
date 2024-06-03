import Image from "next/image";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
    <div className="flex items-center justify-center min-h-dvh mt-5">
    <img className="w-3/4" src="/asset/logo-dark.png" alt="landing page image" />
    </div>
    </main>
  );
}
