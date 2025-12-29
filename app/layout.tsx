import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import Footer from "../components/Footer";
config.autoAddCss = false;

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Amali Radifan",
	description: "Muhammad Amali Radifan Portfolio",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<head>
				<style>
					{`
					 html {
						scroll-behavior: smooth;
					  }
					body::-webkit-scrollbar {
						width: 16px;
					}

					body::-webkit-scrollbar-track {
						background-color: transparent;
						border-radius: 100px;
					}

					body::-webkit-scrollbar-thumb {
						background-color: #24282B;
						border-radius: 50px;
					}

					body::-webkit-scrollbar-thumb:hover {
						background-color: #669BBC;
						border-radius: 50px;
					}
					@font-face {
    					font-family: FOT-Yuruka Std;
    					src: url(https://db.onlinewebfonts.com/t/2b3966678f6a1c8c8be202caeb49d95a.eot);
    					src: url(https://db.onlinewebfonts.com/t/2b3966678f6a1c8c8be202caeb49d95a.eot?#iefix)format(embedded-opentype),
    					url(https://db.onlinewebfonts.com/t/2b3966678f6a1c8c8be202caeb49d95a.woff2)format(woff2),
    					url(https://db.onlinewebfonts.com/t/2b3966678f6a1c8c8be202caeb49d95a.woff)format(woff),
    					url(https://db.onlinewebfonts.com/t/2b3966678f6a1c8c8be202caeb49d95a.ttf)format(truetype),
    					url(https://db.onlinewebfonts.com/t/2b3966678f6a1c8c8be202caeb49d95a.svg#FOT-Yuruka Std)format(svg);
					}`}
				</style>
			</head>
			<body
				className={`bg-dark-invert ${inter.className} text-light-invert overscroll-x-hidden cursor-default`}
				style={{ fontFamily: "FOT-Yuruka Std" }}
			>
				<Navbar />
				{children}
				<Footer />
			</body>
		</html>
	);
}

