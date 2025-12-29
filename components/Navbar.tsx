import Image from "next/image";

const Navbar = () => {
	return (
		<>
			<div className="md:hidden flex justify-center">
				<nav className="absolute flex rounded-full w-10/12 mt-5 p-4 bg-dark-primary justify-center items-center">
					{/* Konten Navbar */}
					<ul className="flex justify-evenly space-x-8 text text-dark-invert font-bold">
						<a
							className=" hover:animate-wiggle transition-all duration-300"
							href="#about"
						>
							<li>About</li>
						</a>
						<a
							className=" hover:animate-wiggle transition-all duration-300"
							href="#projects"
						>
							<li>Project</li>
						</a>
						<a
							className=" hover:animate-wiggle transition-all duration-300"
							href="#contact"
						>
							<li>Contact</li>
						</a>
					</ul>
				</nav>
			</div>

			<div className="hidden md:flex justify-center">
				<nav className="absolute flex rounded-full w-10/12 mt-5 p-4 bg-dark-primary items-center">
					{/* Konten Navbar */}
					<a href="/">
						<img
							className="ml-8 hover:animate-wiggle transition-all duration-300"
							style={{ width: "126px" }}
							src="/assets/logo-light.png"
							alt=""
						/>
					</a>
					<ul className="flex ml-auto space-x-8 text-2xl mr-10 text-dark-invert font-bold">
						<a
							className="hover:text-3xl hover:animate-wiggle transition-all duration-300 hover:text-light-brand"
							href="#about"
						>
							<li>About</li>
						</a>
						<a
							className="hover:text-3xl hover:animate-wiggle transition-all duration-300 hover:text-light-brand"
							href="#projects"
						>
							<li>Project</li>
						</a>
						<a
							className="hover:text-3xl hover:animate-wiggle transition-all duration-300 hover:text-light-brand"
							href="#contact"
						>
							<li>Contact</li>
						</a>
					</ul>
				</nav>
			</div>
		</>
	);
};

export default Navbar;

