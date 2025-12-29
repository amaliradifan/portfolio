import React from "react";
import Marquee from "react-fast-marquee";
import { PrismaClient } from "@prisma/client";
import TechStackImage from "./TechStackImage";

const prisma = new PrismaClient();

interface TechStack {
	id: string;
	name: string;
	image: string;
	category: string;
}

const TechStackMarquee = async () => {
	const techStacks: any = await prisma.stack.findMany();
	const ITEMS_PER_ROW = 6;
	const placeholderImage = "/assets/logo-light.png";

	const chunkArray = (array: TechStack[], size: number): TechStack[][] => {
		const result: TechStack[][] = [];
		for (let i = 0; i < array.length; i += size) {
			result.push(array.slice(i, i + size));
		}
		return result;
	};

	const techStackGroups = chunkArray(techStacks, ITEMS_PER_ROW);

	return (
		<div className="w-full z-0">
			{techStackGroups.map((group, index) => (
				<Marquee
					direction={index % 2 === 0 ? "left" : "right"}
					autoFill={true}
					key={index}
					gradient={false}
					className="mb-10 overflow-y-hidden"
					pauseOnHover={true}
				>
					{group.map((stack) => (
						<div key={stack.id} style={{ margin: "0 20px" }}>
							<TechStackImage
								imageUrl={
									stack.image
										? `/assets/stack/${stack.image}`
										: placeholderImage
								}
								altText={stack.name}
								placeholderImage={placeholderImage}
							/>
						</div>
					))}
				</Marquee>
			))}
		</div>
	);
};

export default TechStackMarquee;

