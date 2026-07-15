export type Person = {
  name: string;
  role: string;
  image?: string;
};

export const leadership: { title: string; people: Person[] }[] = [
  {
    title: "Officers",
    people: [
      {
        name: "Shirley Lei",
        role: "President",
        image: "/people/shirley.jpeg",
      },
      {
        name: "Maha Arshad",
        role: "Vice President",
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
        image: "/people/shiham.png",
      },
      {
        name: "Cara Li",
        role: "Conference Chair",
        image: "/people/cara.jpeg",
      },
    ],
  },
];
