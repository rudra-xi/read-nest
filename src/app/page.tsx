import type { Metadata } from "next";
import Image from "next/image";
import {
	amazon,
	warehouse,
	flipkart,
	heroImage,
} from "../../public/assets/assets";
import { BookOpenText } from "lucide-react";

export const metadata: Metadata = {
	title: "ReadNest | Home",
	description: "Find Your Next Read.",
};

export default function Home() {
	return (
		<section className="px-35 pt-20 flex">
			<div>
				<div className="relative">
					<div className="bg-accent w-110 rounded-full h-6 absolute bottom-1 z-0 -left-3" />
					<h1 className="font-extrabold text-7xl flex flex-col space-y-3 z-10 relative">
						<span>Dive Into</span>
						<span className=""> Your Next</span>
						<span>Adventure</span>
					</h1>
				</div>
				<p className="mt-10 text-lg w-140">
					ReadNest connects book lovers with handpicked
					selections for every mood and moment. Discover curated
					books that bring joy, excitement, and inspiration to
					your reading experience.
				</p>
				<button className="mt-10 bg-main text-background px-10 py-3 rounded-full font-medium flex items-center">
					Find Your Book
					<BookOpenText
						className="inline-block ml-2"
						size={20}
					/>
				</button>
				<div className="flex space-x-4 w-90 h-20 pt-10">
					<Image
						src={amazon}
						alt="amazon logo"
						className="w-28 pt-3 aspect-square object-contain"
					/>
					<Image
						src={warehouse}
						alt="warehouse logo"
						className="w-28 aspect-square object-contain"
					/>
					<Image
						src={flipkart}
						alt="flipkart logo"
						className="w-28 aspect-square object-contain"
					/>
				</div>
			</div>
			<div className="absolute bottom-10 right-5">
				<Image
					src={heroImage}
					alt="hero image"
					className="w-auto h-165"
				/>
			</div>
		</section>
	);
}
