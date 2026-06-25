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
        bio: "McKinsey & Company. Wellesley College. Passionate about inclusive entrepreneurship and AI-driven innovation.",
        linkedin: "https://www.linkedin.com/in/shirley-lei/",
        image: "https://media.licdn.com/dms/image/v2/D5603AQE1dYR94TY-Ag/profile-displayphoto-shrink_400_400/B56ZcE1gYRG4Ao-/0/1743632918810?e=1754524800&v=beta&t=0Vx3D3B3K3k3F3K3k3F3K3k3F3K3k3F3K3k3F3K3k3",
      },
      {
        name: "Maha Arshad",
        role: "Vice President",
        bio: "Focused on building scrappy, cash-flow-positive businesses and connecting founders with resources.",
        linkedin: "https://www.linkedin.com/in/maha-arshad-9b7658187/",
      },
    ],
  },
  {
    title: "Conference Chairs",
    people: [
      {
        name: "Nathan Shiham Alam",
        role: "Conference Chair",
        bio: "Harvard SEAS. Building the Entrepreneurship Summit from the ground up — programming, speakers, and the on-the-day experience.",
        linkedin: "https://www.linkedin.com/in/nathan-alam/",
      },
      {
        name: "Cara Li",
        role: "Conference Chair",
        bio: "Harvard Business School. Z.ai. Passionate about connecting founders and building communities that outlast any single event.",
        linkedin: "https://www.linkedin.com/in/carali7769/",
        image: "https://media.licdn.com/dms/image/v2/D5603AQFVtFGWJZvLjA/profile-displayphoto-shrink_400_400/B56ZcU1gYRG4Ao-/0/1743632918810?e=1754524800&v=beta&t=0Vx3D3B3K3k3F3K3k3F3K3k3F3K3k3F3K3k3F3K3k3",
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
