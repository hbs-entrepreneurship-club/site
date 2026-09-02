export const KLARMAN_URL = "https://harvardplanning.emuseum.com/sites/05026/";
export const ALDRICH_URL = "https://harvardplanning.emuseum.com/sites/240/";
export const BATTEN_URL = "https://harvardplanning.emuseum.com/sites/06074/";

export type Building = "klarman" | "aldrich" | "batten";

export type Speaker = {
	name: string;
	role: string;
	company?: string;
	image?: string;
	logo?: string;
};

export type SessionStatus = "confirmed" | "to-be-confirmed" | "work-in-progress";

export type Session = {
	title: string;
	details: string;
	building: Building;
	room: string;
	track?: string;
	speakers?: Speaker[];
	status?: SessionStatus;
};

export type SlotKind = "plenary" | "breakout" | "social" | "transition";

export type Slot = {
	start: string;
	end: string;
	kind: SlotKind;
	label?: string;
	sessions: Session[];
};

export const VENUES: {
	id: Building;
	name: string;
	url: string;
	use: string;
	capacity: string;
}[] = [
	{
		id: "klarman",
		name: "Klarman Hall",
		url: KLARMAN_URL,
		use: "Shared programming only — opening, keynotes, and close. One event at a time.",
		capacity: "Up to 1,000",
	},
	{
		id: "aldrich",
		name: "Aldrich Hall",
		url: ALDRICH_URL,
		use: "Speaker-led panels in case classrooms. Up to four concurrent rooms.",
		capacity: "~100 per classroom",
	},
	{
		id: "batten",
		name: "Batten Hall",
		url: BATTEN_URL,
		use: "Lunch, office hours, workshops, and group work in the i-lab and hives.",
		capacity: "Up to 4 rooms",
	},
];

export const CONFIRMED_SPEAKERS: Speaker[] = [
	{
		name: "Noubar Afeyan",
		role: "Founder & CEO",
		company: "Flagship Pioneering",
		image: "/speakers/noubar-afeyan.jpg",
	},
	{
		name: "Katie Rae",
		role: "CEO & Managing Partner",
		company: "Engine Ventures",
		image: "/speakers/katie-rae.jpg",
	},
	{
		name: "Max Lobovsky",
		role: "Co-Founder & CEO",
		company: "Formlabs",
		image: "/speakers/max-lobovsky.jpg",
		logo: "/logos/formlabs.png",
	},
	{
		name: "Leah Marcus",
		role: "Co-Founder",
		company: "Good Girl Snacks",
		image: "/speakers/leah-marcus.jpg",
	},
	{
		name: "Yasaman Bakhtiar",
		role: "Co-Founder",
		company: "Good Girl Snacks",
		image: "/speakers/yasaman-bakhtiar.jpg",
	},
	{
		name: "Amir Khan",
		role: "President & CEO",
		company: "Alkira",
		image: "/speakers/amir-khan.jpg",
	},
];

export const SLOTS: Slot[] = [
	{
		start: "8:00 AM",
		end: "9:30 AM",
		kind: "social",
		sessions: [
			{
				title: "Check-in, breakfast, and sponsor tables",
				details:
					"Open networking. Conference program distributed. Sponsor and recruiting tables active in the i-lab.",
				building: "batten",
				room: "i-lab",
			},
		],
	},
	{
		start: "9:30 AM",
		end: "9:45 AM",
		kind: "plenary",
		sessions: [
			{
				title: "Welcome and conference framing",
				details: "Opening remarks, the 2026 theme, and sponsor recognition.",
				building: "klarman",
				room: "Hall",
			},
		],
	},
	{
		start: "9:45 AM",
		end: "10:35 AM",
		kind: "plenary",
		sessions: [
			{
				title: "From Breakthrough to Institution",
				details:
					"Opening keynote conversation on moving from a technical breakthrough to a real-world product, manufacturing, adoption, and scale.",
				building: "klarman",
				room: "Hall",
				track: "Opening keynote",
				speakers: [
					{ name: "Katie Rae", role: "CEO & Managing Partner, Engine Ventures" },
					{ name: "Max Lobovsky", role: "Co-Founder & CEO, Formlabs" },
				],
			},
		],
	},
	{
		start: "10:35 AM",
		end: "10:50 AM",
		kind: "transition",
		sessions: [
			{
				title: "Coffee and movement to breakouts",
				details: "Short break. Walk to Aldrich classrooms and Batten hives.",
				building: "aldrich",
				room: "Gallery",
			},
		],
	},
	{
		start: "10:50 AM",
		end: "11:40 AM",
		kind: "breakout",
		label: "Morning breakouts",
		sessions: [
			{
				title: "Product-Market Fit",
				details:
					"How founders know they have found it, which signals actually matter, and when to persevere versus change direction.",
				building: "aldrich",
				room: "108",
				track: "Operations",
				status: "to-be-confirmed",
			},
			{
				title: "How Brands Go Viral",
				details:
					"Building in public, distinctive brand voice, social-media community, and converting attention into a consumer business.",
				building: "aldrich",
				room: "112",
				track: "Consumer and Brand",
				speakers: [
					{ name: "Leah Marcus", role: "Co-Founder, Good Girl Snacks" },
					{ name: "Yasaman Bakhtiar", role: "Co-Founder, Good Girl Snacks" },
				],
			},
			{
				title: "Building with AI: From Demo to Production",
				details:
					"How AI-native tools change what founders can build, and what it takes to make agents reliable enough for real workflows.",
				building: "aldrich",
				room: "208",
				track: "Technology and AI",
				status: "to-be-confirmed",
			},
			{
				title: "Seeing the Gap",
				details:
					"Pattern recognition, contrarian thinking, and what separates a real insight from a bad idea.",
				building: "aldrich",
				room: "212",
				track: "Ideation and Early Stage",
				status: "to-be-confirmed",
			},
			{
				title: "Founder office hours",
				details: "Small-group conversations with visiting founders. Come with a specific question.",
				building: "batten",
				room: "Hive 200",
				status: "work-in-progress",
			},
			{
				title: "Sponsor workshop",
				details: "Hands-on session hosted by a conference partner.",
				building: "batten",
				room: "Hive 201",
				status: "to-be-confirmed",
			},
			{
				title: "First-customer roundtable",
				details: "Peer discussion on finding, closing, and learning from the first ten customers.",
				building: "batten",
				room: "Hive 300",
				status: "work-in-progress",
			},
			{
				title: "Open networking and recruiting tables",
				details: "Overflow gathering space. Sponsor and recruiting tables remain open.",
				building: "batten",
				room: "i-lab",
			},
		],
	},
	{
		start: "11:40 AM",
		end: "11:50 AM",
		kind: "transition",
		sessions: [
			{
				title: "Walk back to Klarman",
				details: "All tracks reconvene for the featured conversation.",
				building: "klarman",
				room: "Hall",
			},
		],
	},
	{
		start: "11:50 AM",
		end: "12:35 PM",
		kind: "plenary",
		sessions: [
			{
				title: "Building Companies That Become Institutions",
				details:
					"Featured founder and investor conversation on turning scientific and technical ideas into companies built to last.",
				building: "klarman",
				room: "Hall",
				track: "Featured conversation",
				speakers: [
					{
						name: "Noubar Afeyan",
						role: "Founder & CEO, Flagship Pioneering; Co-Founder & Chairman, Moderna",
					},
				],
			},
		],
	},
	{
		start: "12:35 PM",
		end: "1:45 PM",
		kind: "social",
		label: "Lunch",
		sessions: [
			{
				title: "Lunch, networking, and sponsor engagement",
				details:
					"Seated and standing lunch in the i-lab. Sponsor and recruiting tables active throughout.",
				building: "batten",
				room: "i-lab",
			},
			{
				title: "Co-founder matching",
				details: "Structured introductions for attendees looking for a co-founder.",
				building: "batten",
				room: "Hive 200",
				status: "work-in-progress",
			},
		],
	},
	{
		start: "1:45 PM",
		end: "2:35 PM",
		kind: "breakout",
		label: "Afternoon breakouts",
		sessions: [
			{
				title: "The First Hire, the First Sale, the First Dollar",
				details:
					"The unglamorous realities of getting to traction, and what nearly killed the company before it worked.",
				building: "aldrich",
				room: "108",
				track: "Operations and GTM",
				status: "to-be-confirmed",
			},
			{
				title: "Robotics and Embodied AI",
				details:
					"Turning frontier research in robotics and physical AI into deployable products and durable companies.",
				building: "aldrich",
				room: "112",
				track: "Deep Tech",
				status: "to-be-confirmed",
			},
			{
				title: "Leadership at Scale",
				details:
					"The hardest leadership transitions, from 10 to 100 people, and what has to change in the founder.",
				building: "aldrich",
				room: "208",
				track: "Leadership and Culture",
				status: "to-be-confirmed",
			},
			{
				title: "The VC Lens: What Gets Funded in 2026",
				details:
					"Where capital is going, and what founders misunderstand about how investors actually decide.",
				building: "aldrich",
				room: "212",
				track: "Fundraising and Capital",
				status: "to-be-confirmed",
			},
			{
				title: "Founder office hours",
				details: "Drop-in conversations with operators. Limited seats; first come, first served.",
				building: "batten",
				room: "Hive 200",
				status: "work-in-progress",
			},
			{
				title: "Raising the First Round",
				details:
					"Workshop on raising an earliest round, including SAFEs, dilution, and the decisions that are hard to undo.",
				building: "batten",
				room: "Hive 201",
				track: "Finance and Legal",
				status: "to-be-confirmed",
			},
			{
				title: "Sponsor workshop",
				details: "Interactive session hosted by a conference partner.",
				building: "batten",
				room: "Hive 300",
				status: "to-be-confirmed",
			},
			{
				title: "Builder studio",
				details: "Group working session for student founders who want feedback on a live problem.",
				building: "batten",
				room: "Hive 301",
				status: "work-in-progress",
			},
		],
	},
	{
		start: "2:35 PM",
		end: "2:45 PM",
		kind: "transition",
		sessions: [
			{
				title: "Walk back to Klarman",
				details: "All tracks reconvene for the afternoon fireside.",
				building: "klarman",
				room: "Hall",
			},
		],
	},
	{
		start: "2:45 PM",
		end: "3:35 PM",
		kind: "plenary",
		sessions: [
			{
				title: "Building Companies That Others Want to Buy",
				details:
					"Founder journey fireside on designing for lasting value and strategic relevance — without losing the mission.",
				building: "klarman",
				room: "Hall",
				track: "Founder fireside",
				speakers: [{ name: "Amir Khan", role: "President & CEO, Alkira; Founder, Viptela" }],
			},
		],
	},
	{
		start: "3:35 PM",
		end: "3:50 PM",
		kind: "transition",
		sessions: [
			{
				title: "Coffee break and sponsor expo",
				details: "Short break in the i-lab before the final breakout block.",
				building: "batten",
				room: "i-lab",
			},
		],
	},
	{
		start: "3:50 PM",
		end: "4:35 PM",
		kind: "breakout",
		label: "Final breakouts",
		sessions: [
			{
				title: "Go-to-Market: Cracking the Revenue Code",
				details:
					"When to build a sales team and when to stay product-led, and what founders who cracked GTM would change.",
				building: "aldrich",
				room: "108",
				track: "Sales and GTM",
				status: "to-be-confirmed",
			},
			{
				title: "Entrepreneurship for Impact",
				details:
					"Founders and investors pursuing mission alongside scale, and where the models actually work.",
				building: "aldrich",
				room: "112",
				track: "Social Impact",
				status: "to-be-confirmed",
			},
			{
				title: "Legal and Financial Foundations",
				details:
					"Cap tables, SAFEs, board composition, and the early decisions that are very hard to undo later.",
				building: "aldrich",
				room: "208",
				track: "Finance and Legal",
				status: "to-be-confirmed",
			},
			{
				title: "Launch After HBS: Your First Company",
				details:
					"Alumni who left consulting, finance, or Big Tech to build, and what the network actually gave them.",
				building: "aldrich",
				room: "212",
				track: "HBS Community",
				status: "to-be-confirmed",
			},
			{
				title: "Founder office hours",
				details: "Last office-hours block of the day.",
				building: "batten",
				room: "Hive 200",
				status: "work-in-progress",
			},
			{
				title: "Cap-table clinic",
				details: "Small-group working session on ownership, SAFEs, and first-round mechanics.",
				building: "batten",
				room: "Hive 201",
				status: "to-be-confirmed",
			},
			{
				title: "Alumni office hours",
				details: "Informal conversations with HBS alumni operators and investors.",
				building: "batten",
				room: "Hive 300",
				status: "work-in-progress",
			},
			{
				title: "Sponsor expo",
				details: "Final stretch at sponsor and recruiting tables before the close.",
				building: "batten",
				room: "i-lab",
			},
		],
	},
	{
		start: "4:35 PM",
		end: "5:00 PM",
		kind: "plenary",
		sessions: [
			{
				title: "What It Takes to Build Institutions",
				details:
					"Closing synthesis. What separates companies with staying power from those that fade: culture, governance, and mission clarity.",
				building: "klarman",
				room: "Hall",
				status: "to-be-confirmed",
			},
		],
	},
	{
		start: "5:00 PM",
		end: "7:30 PM",
		kind: "social",
		sessions: [
			{
				title: "Closing reception",
				details: "Open networking with speakers, sponsors, and attendees. Drinks and light bites.",
				building: "batten",
				room: "i-lab",
			},
		],
	},
];

export const BUILDING_URL: Record<Building, string> = {
	klarman: KLARMAN_URL,
	aldrich: ALDRICH_URL,
	batten: BATTEN_URL,
};

export const BUILDING_LABEL: Record<Building, string> = {
	klarman: "Klarman Hall",
	aldrich: "Aldrich Hall",
	batten: "Batten Hall",
};

export function locationLabel(session: Session): string {
	if (session.building === "klarman") return "Klarman Hall";
	if (session.building === "aldrich") return `Aldrich ${session.room}`;
	if (session.room === "i-lab") return "Batten i-lab";
	return `Batten ${session.room}`;
}

export function getSessionStatus(session: Session): SessionStatus {
	if (session.status) return session.status;
	if (session.speakers && session.speakers.length > 0) return "confirmed";
	return "confirmed";
}

export const STATUS_LABEL: Record<SessionStatus, string> = {
	confirmed: "Confirmed",
	"to-be-confirmed": "To be confirmed",
	"work-in-progress": "Work in Progress",
};

export const STATUS_NOTE: Record<SessionStatus, string> = {
	confirmed: "This session is on the working itinerary with confirmed speakers or a set format.",
	"to-be-confirmed":
		"Speakers for this session are still being confirmed. The topic, time, and room are locked for planning.",
	"work-in-progress":
		"This session is in the working itinerary. Hosts and the detailed format are still being lined up.",
};

export function speakerByName(name: string): Speaker | undefined {
	return CONFIRMED_SPEAKERS.find((speaker) => speaker.name === name);
}

export function roomNote(session: Session): string {
	if (session.building === "klarman") {
		return "Plenary hall. The full conference is together. Capacity up to 1,000.";
	}
	if (session.building === "aldrich") {
		if (session.room === "Gallery") {
			return "Aldrich gallery and alcoves between classrooms. Use this time to move to your next room.";
		}
		return "HBS case classroom. About 100 seats. Choose one panel in this block.";
	}
	if (session.room === "i-lab") {
		return "Harvard Innovation Lab on the first floor of Batten. Open gathering space — come and go.";
	}
	return "Batten hive classroom. Built for small-group discussion and working sessions, not a 1,000-person lecture.";
}

/** Rooms reused later in the day are fine; two sessions may not share a room in the same slot. */
export function assertUniqueLocations(slots: Slot[]): void {
	for (const slot of slots) {
		const keys = slot.sessions.map((session) => `${session.building}:${session.room}`);
		if (new Set(keys).size !== keys.length) {
			throw new Error(`Duplicate location in ${slot.start}–${slot.end}: ${keys.join(", ")}`);
		}
	}
}

assertUniqueLocations(SLOTS);
