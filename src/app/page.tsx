import Image from "next/image";
import Navbar from "./components/Navbar";
import Projects from "./projects/Projects";
import About from "./about/About";
import ScrollToTopButton from "./components/ScrollToTopButton";

export default function Home() {
	return (
		<main className="flex min-h-screen flex-col items-center justify-between">
			<div className="flex items-center justify-center md:min-h-dvh mt-32 md:mt-0">
				<img
					className="w-3/4"
					src="/assets/logo-dark.png"
					alt="landing page image"
				/>
			</div>
			<About />
			<Projects />
			<ScrollToTopButton />
		</main>
	);
}
