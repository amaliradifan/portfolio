import Image from "next/image";

const Navbar = () => {
	return (
		<div className="flex justify-center">
			<nav className="absolute flex rounded-full w-10/12 mt-5 p-4 bg-dark-primary items-center">
				{/* Konten Navbar */}
				<a href="/"><Image className="ml-8 hover:animate-wiggle transition-all duration-300" style={{width: "126px"}} src="/asset/logo-light.png" alt="" /></a>
                <ul className="flex ml-auto space-x-8 text-2xl mr-10 text-dark-invert font-bold">
                    <a className="hover:text-3xl hover:animate-wiggle transition-all duration-300"  href=""><li>About</li></a>
                    <a className="hover:text-3xl hover:animate-wiggle transition-all duration-300" href=""><li>Project</li></a>
                    <a className="hover:text-3xl hover:animate-wiggle transition-all duration-300" href=""><li>Contact</li></a>
                </ul>
			</nav>
		</div>
	);
};

export default Navbar;
