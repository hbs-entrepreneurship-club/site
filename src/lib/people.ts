export type Person = {
	name: string;
	role: string;
	bio?: string;
	linkedin?: string;
	image?: string;
};

export const leadership: { title: string; people: Person[] }[] = [
	{
		title: "Conference Co-Chairs",
		people: [
			{
				name: "Maha Arshad",
				role: "Entrepreneurship Conference Co-Chair",
				linkedin: "https://www.linkedin.com/in/maha-arshad-9b7658187/",
				image: "/people/maha.jpeg",
			},
			{
				name: "Cara Li",
				role: "Entrepreneurship Conference Co-Chair",
				linkedin: "https://www.linkedin.com/in/carali7769/",
				image: "/people/cara.jpeg",
			},
		],
	},
	{
		title: "Officers",
		people: [
			{
				name: "Shirley Lei",
				role: "Co-President",
				linkedin: "https://www.linkedin.com/in/shirley-lei/",
				image: "/people/shirley.jpeg",
			},
			{
				name: "Jeseo Park",
				role: "Co-President",
				linkedin: "https://www.linkedin.com/in/jeseo-park/",
				image: "/people/jeseo.png",
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
				name: "Miles Francis",
				role: "Head of Founder & Alumni Relations",
				linkedin: "https://www.linkedin.com/in/milesnfrancis/",
				image: "/people/miles.jpeg",
			},
			{
				name: "Jon Cabarrus",
				role: "Head of Founder & Alumni Relations",
				linkedin: "https://www.linkedin.com/in/joncabarrus/",
				image: "/people/jon.jpeg",
			},
			{
				name: "Melody Na",
				role: "Head of VC Relations",
				linkedin: "https://www.linkedin.com/in/melody-na/",
				image: "/people/melody.jpeg",
			},
			{
				name: "Jubin Gorji",
				role: "Head of VC Relations",
				linkedin: "https://www.linkedin.com/in/jubingorji/",
				image: "/people/jubin.jpeg",
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
