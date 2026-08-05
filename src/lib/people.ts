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
				name: "Jeseo Park",
				role: "Co-President",
			},
			{
				name: "Shirley Lei",
				role: "Co-President",
				linkedin: "https://www.linkedin.com/in/shirley-lei/",
				image: "/people/shirley.jpeg",
			},
			{
				name: "Maha Arshad",
				role: "CFO",
				linkedin: "https://www.linkedin.com/in/maha-arshad-9b7658187/",
				image: "/people/maha.jpeg",
			},
		],
	},
	{
		title: "Committee Leadership",
		people: [
			{
				name: "Jon Cabarrus",
				role: "Head of Founder & Alumni Relations",
			},
			{
				name: "Miles Francis",
				role: "Head of Founder & Alumni Relations",
			},
			{
				name: "Melody Na",
				role: "Head of VC Relations",
			},
			{
				name: "Jubin Gorji",
				role: "Head of VC Relations",
			},
			{
				name: "Shiham Alam",
				role: "Entrepreneurship Conference Co-Chair",
				linkedin: "https://www.linkedin.com/in/nathan-alam/",
				image: "/people/shiham.png",
			},
			{
				name: "Cara Li",
				role: "Entrepreneurship Conference Co-Chair",
				linkedin: "https://www.linkedin.com/in/carali7769/",
				image: "/people/cara.jpeg",
			},
			{
				name: "Maha Arshad",
				role: "Entrepreneurship Conference Co-Chair",
				linkedin: "https://www.linkedin.com/in/maha-arshad-9b7658187/",
				image: "/people/maha.jpeg",
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
