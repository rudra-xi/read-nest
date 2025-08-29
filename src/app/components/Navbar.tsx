export default function Navbar() {
	return (
		<div className="w-full py-5 px-25 flex items-center justify-between font-medium">
			<ul className="flex space-x-15">
				<li>Home</li>
				<li>Books</li>
				<li>Authors</li>
				<li>Pricing</li>
			</ul>
			<div className="space-x-10">
				<button className="">Login</button>
				<button className="border-2 border-main px-5 py-2 rounded-full">
					Sign Up
				</button>
			</div>
		</div>
	);
}
