import Image from "next/image";
import Navbar from "../components/Navbar";
import Projects from "./projects/projects";
import About from "./about/about";
import ScrollToTopButton from "../components/ScrollToTopButton";

export default function Home() {
	return (
		<main className="flex min-h-screen flex-col items-center justify-between">
			<div className="flex items-center justify-center md:min-h-dvh mt-32 md:mt-0">
				<img
					className="xl:w-3/4 md:w-3/4 w-1/4"
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

