export type Person = {
	name: string;
	role: string;
	bio?: string;
	linkedin?: string;
	image?: string;
};

export const leadership: { title: string; people: Person[] }[] = [
	{
		title: "Officers",
		people: [
			{
				name: "Shirley Lei",
				role: "President",
				linkedin: "https://www.linkedin.com/in/shirley-lei/",
				image: "/people/shirley.jpeg",
			},
			{
				name: "Maha Arshad",
				role: "Vice President",
				linkedin: "https://www.linkedin.com/in/maha-arshad-9b7658187/",
				image: "/people/maha.jpeg",
			},
		],
	},
	{
		title: "Conference Chairs",
		people: [
			{
				name: "Nathan Shiham Alam",
				role: "Conference Chair",
				linkedin: "https://www.linkedin.com/in/nathan-alam/",
				image: "/people/shiham.png",
			},
			{
				name: "Cara Li",
				role: "Conference Chair",
				linkedin: "https://www.linkedin.com/in/carali7769/",
				image: "/people/cara.jpeg",
			},
		],
	},
];

export function initials(name: string): string {
	return name
		.split(/\s+/)
		.filter(Boolean)
		.slice(0, 3)
		.map((n) => n[0]?.toUpperCase() ?? "")
		.join("");
}
