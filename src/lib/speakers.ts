import type { CSSProperties } from "react";

export type Speaker = {
	slug: string;
	name: string;
	role: string;
	company: string;
	image: string;
	logo?: string;
	crop: { x: number; y: number };
	bio: string;
	sourceUrl: string;
};

export const SPEAKERS: Speaker[] = [
	{
		slug: "noubar-afeyan",
		name: "Noubar Afeyan",
		role: "Founder & CEO",
		company: "Moderna",
		image: "/speakers/noubar-afeyan.jpg",
		logo: "/logos/moderna.png",
		crop: { x: 0, y: 8 },
		bio: "Noubar Afeyan is an inventor, entrepreneur, and biotechnology investor. He is the founder and CEO of Flagship Pioneering and co-founder and board chairman of Moderna. Over his career, he has helped create more than 100 life-science and technology companies. He previously founded PerSeptive Biosystems and later served as a senior executive at Applera. Afeyan holds a Ph.D. in biochemical engineering from MIT and is a member of the National Academy of Engineering.",
		sourceUrl: "https://www.flagshippioneering.com/people/noubar-afeyan",
	},
	{
		slug: "katie-rae",
		name: "Katie Rae",
		role: "CEO & Managing Partner",
		company: "Engine Ventures",
		image: "/speakers/katie-rae.jpg",
		logo: "/logos/engine.png",
		crop: { x: 0, y: 5 },
		bio: "Katie Rae is the CEO and managing partner of Engine Ventures, where she invests in companies developing technologies for foundational industries. She previously served as CEO and managing partner of The Engine, building the organization from its inception. Rae has also been a managing director at Techstars Boston and a co-founder of Project 11 Ventures. Her prior leadership experience includes roles at Microsoft, AltaVista, and RagingBull. She holds an MBA from Yale and a bachelor’s degree in biology from Oberlin College.",
		sourceUrl: "https://engineventures.com/people/katie-rae",
	},
	{
		slug: "max-lobovsky",
		name: "Max Lobovsky",
		role: "Co-Founder & CEO",
		company: "Formlabs",
		image: "/speakers/max-lobovsky.jpg",
		logo: "/logos/formlabs.png",
		crop: { x: 0, y: 5 },
		bio: "Max Lobovsky is the co-founder and CEO of Formlabs, a company that develops professional desktop 3D printers, materials, and software. Before founding Formlabs, he led Fab@Home, an early open-source 3D-printing project. Lobovsky holds a bachelor’s degree in applied engineering and physics from Cornell University and a master’s degree in media arts and sciences from MIT. He has been recognized as a Forbes 30 Under 30 honoree and a World Economic Forum Technology Pioneer.",
		sourceUrl: "https://formlabs.com/global/company/",
	},
	{
		slug: "amir-khan",
		name: "Amir Khan",
		role: "Co-Founder & CEO",
		company: "Alkira",
		image: "/speakers/amir-khan.jpg",
		logo: "/logos/alkira.png",
		crop: { x: 0, y: 8 },
		bio: "Amir Khan is the co-founder, president, and CEO of Alkira, a company building cloud-based network infrastructure for enterprises. He previously co-founded Viptela, an SD-WAN company that was acquired by Cisco. Khan has also held leadership roles at Cisco, Juniper Networks, and Nortel. At Alkira, he focuses on simplifying networking across cloud, hybrid, and enterprise environments through a Network Infrastructure-as-a-Service platform.",
		sourceUrl: "https://www.unite.ai/amir-khan-president-ceo-founder-of-alkira-interview-series/",
	},
	{
		slug: "ghazi-masood",
		name: "Ghazi Masood",
		role: "Chief Revenue Officer",
		company: "Replit",
		image: "/speakers/ghazi-masood.jpg",
		logo: "/logos/replit.png",
		crop: { x: 0, y: 10 },
		bio: "Ghazi Masood is the chief revenue officer at Replit, an agentic software-creation platform designed to help people build applications using natural language. In his role, he leads the company’s revenue organization and go-to-market efforts. Replit’s platform aims to make software creation more accessible by reducing the technical barriers traditionally associated with application development.",
		sourceUrl: "https://replit.com/about",
	},
	{
		slug: "carmen-li",
		name: "Carmen Li",
		role: "Founder & CEO",
		company: "Silicon Data",
		image: "/speakers/carmen-li.jpg",
		logo: "/logos/silicondata.png",
		crop: { x: 10, y: 0 },
		bio: "Carmen Li is the founder and CEO of Silicon Data, a company developing pricing transparency and performance data products for the compute economy. Silicon Data provides benchmarks and market intelligence covering GPU rental prices, performance, and related infrastructure economics. Before founding the company, Li led global partnerships for data products at Bloomberg. Her work focuses on bringing greater visibility and structure to the rapidly developing market for AI compute.",
		sourceUrl: "https://www.silicondata.com/about-us",
	},
	{
		slug: "leah-marcus",
		name: "Leah Marcus",
		role: "Co-Founder",
		company: "Good Girl Snacks",
		image: "/speakers/leah-marcus.jpg",
		logo: "/logos/goodgirl.png",
		crop: { x: 8, y: 10 },
		bio: "Leah Marcus is the co-founder of Good Girl Snacks, a snack company she launched with Yasaman Bakhtiar. The pair met in college and built their company around their shared Middle Eastern backgrounds, interest in food culture, and enthusiasm for pickle-forward products. Good Girl Snacks was created to offer boldly flavored products with contemporary branding and a focus on clean, organic ingredients.",
		sourceUrl: "https://goodgirlsnacks.live/pages/our-story",
	},
	{
		slug: "yasaman-bakhtiar",
		name: "Yasaman Bakhtiar",
		role: "Co-Founder",
		company: "Good Girl Snacks",
		image: "/speakers/yasaman-bakhtiar.jpg",
		logo: "/logos/goodgirl.png",
		crop: { x: -10, y: 5 },
		bio: "Yasaman Bakhtiar is the co-founder of Good Girl Snacks, which she created with longtime friend Leah Marcus. Drawing on their Persian, Egyptian, and Tunisian backgrounds, the founders developed a snack brand centered on innovative pickle flavors and a modern approach to packaged food. They started Good Girl Snacks after leaving their previous jobs to pursue their shared ambition of building a food company for a new generation of consumers.",
		sourceUrl: "https://goodgirlsnacks.live/pages/our-story",
	},
	{
		slug: "andy-zhong",
		name: "Andy Zhong",
		role: "Founder & CEO",
		company: "FunPlus",
		image: "/speakers/andy-zhong.jpg",
		logo: "/logos/funplus.png",
		crop: { x: 8, y: 5 },
		bio: "Andy Zhong is the founder and CEO of FunPlus, a global interactive-entertainment company known for developing and publishing cross-platform games. He established FunPlus in 2010 and has guided the company’s growth from an early-stage startup into an international gaming organization. Zhong’s leadership focuses on product development, long-term strategy, innovation, and building creative teams. He has described his approach as combining adaptability, integrity, pragmatism, communication, and empathy.",
		sourceUrl: "https://funplus.com/info/game-on-lets-break-it/",
	},
	{
		slug: "tudor-achim",
		name: "Tudor Achim",
		role: "Co-Founder & CEO",
		company: "Harmonic",
		image: "/speakers/tudor-achim.jpg",
		logo: "/logos/harmonic.png",
		crop: { x: 0, y: 5 },
		bio: "Tudor Achim is the co-founder and CEO of Harmonic, an artificial-intelligence company developing a reasoning engine whose outputs can be formally verified. He co-founded Harmonic in 2023 with Vlad Tenev. Achim is also the co-founder and former chief technology officer of Helm.ai. He holds a bachelor’s degree in computer science from Carnegie Mellon University and was a Ph.D. candidate in computer science at Stanford University.",
		sourceUrl: "https://www.harmonic.fun/about/",
	},
];

export const COMPANY_LOGOS: { name: string; src?: string }[] = [
	{ name: "Moderna", src: "/logos/moderna.png" },
	{ name: "Alkira", src: "/logos/alkira.png" },
	{ name: "Silicon Data", src: "/logos/silicondata.png" },
	{ name: "Harmonic", src: "/logos/harmonic.png" },
	{ name: "EverQuote" },
	{ name: "Replit", src: "/logos/replit.png" },
	{ name: "Good Girl Snacks", src: "/logos/goodgirl.png" },
	{ name: "Engine Ventures", src: "/logos/engine.png" },
	{ name: "Formlabs", src: "/logos/formlabs.png" },
	{ name: "FunPlus", src: "/logos/funplus.png" },
];

export function getSpeaker(slug: string): Speaker | undefined {
	return SPEAKERS.find((speaker) => speaker.slug === slug);
}

export function speakerImageStyle(crop: Speaker["crop"], scale = 1.25): CSSProperties {
	return {
		transform: `scale(${scale}) translate(${crop.x}%, ${crop.y * (scale / 1.25)}%)`,
		transformOrigin: "center",
	};
}

export const PROGRAM = [
	{ time: "8:30 – 9:00 AM", label: "Breakfast" },
	{ time: "9:00 – 11:30 AM", label: "Keynotes & Panels" },
	{ time: "11:30 AM – 1:00 PM", label: "Lunch" },
	{ time: "1:00 – 5:30 PM", label: "Keynotes & Panels" },
];

export const STATS = [
	{ value: "40+", label: "Speakers" },
	{ value: "15+", label: "Panels" },
	{ value: "3", label: "Keynotes" },
	{ value: "1000+", label: "Attendees" },
];
