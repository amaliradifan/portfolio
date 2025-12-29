"use client";
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleUp } from "@fortawesome/free-solid-svg-icons";

function ScrollToTopButton() {
	const [isVisible, setIsVisible] = useState(false);

	const toggleVisibility = () => {
		if (window.scrollY > 300) {
			setIsVisible(true);
		} else {
			setIsVisible(false);
		}
	};

	const scrollToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: "smooth",
		});
	};

	useEffect(() => {
		window.addEventListener("scroll", toggleVisibility);
		return () => window.removeEventListener("scroll", toggleVisibility);
	}, []);

	return (
		<div className="fixed bottom-4 right-4">
			{isVisible && (
				<button
					onClick={scrollToTop}
					className=" z-100 bg-light-brand text-white py-2 px-4 rounded-full shadow-lg hover:bg-light-brand/80 transition-all duration-200 shadow-md"
				>
					Back To Top <FontAwesomeIcon icon={faCircleUp} />
				</button>
			)}
		</div>
	);
}

export default ScrollToTopButton;

