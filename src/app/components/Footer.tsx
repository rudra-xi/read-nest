import Link from "next/link";
import { GithubIcon } from "./ui/github";
import { LinkedinIcon } from "./ui/linkedin";
import { Copyright, Heart } from "lucide-react";
export default function Footer() {
	return (
		<div className="bottom-0 left-0 w-full py-5 px-20 flex items-center justify-between text-sm">
			<p className="flex items-center">
				Made With{" "}
				<span>
					<Heart
						className="text-main mx-1 animate-pulse"
						size={16}
					/>
				</span>{" "}
				By rudra-xi
			</p>
			<p className="flex items-center gap-2">
				<Copyright size={16} /> 2025 rudra-xi. All rights reserved.
			</p>
			{/* <div className="flex space-x-5 text-xl">
				<a
					href="https://github.com/Rudar-Xi"
					target="_blank"
					rel="noopener noreferrer"
				>
					<BsGithub className="text-main" />
				</a>

				<a
					href="https://www.linkedin.com/in/rudar-xi/"
					target="_blank"
					rel="noopener noreferrer"
				>
					<BsLinkedin className="text-main" />
				</a>
			</div> */}
			<div className="flex space-x-5 text-xl">
				<Link
					href="https://github.com/rudra-xi"
					target="_blank"
					rel="noopener noreferrer"
				>
					<GithubIcon />
				</Link>
				<Link
					href="https://www.linkedin.com/in/goutam-rudraxi/"
					target="_blank"
					rel="noopener noreferrer"
				>
					<LinkedinIcon />
				</Link>
			</div>
		</div>
	);
}
