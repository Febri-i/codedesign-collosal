import { IAuthor } from "~/lib/graphql/types/author";

export const authors_sample: IAuthor[] = [
  {
    picture: "/theonlyemployee.jpg",
    author_id: "123",
    name: "Jacquin Schindler",
    bio: "Night subdue their morning created every light earth very darkness they're you're deep female. Tree sixth divided greater, midst earth forth won't for moved.",
    job: "UI Designer",
    socials: [
      {
        type: "git",
        url: "https://github.com/febri-i",
      },
    ],
  },
  {
    picture: "/samplePictures/gwe.jpg",
    author_id: "321",
    name: "Febri Bayu Nurcahyo",
    job: "Front-End Dev",
    bio: "Such is life, Carpe Diem.",
    socials: [
      {
        type: "git",
        url: "https://github.com/febri-i",
      },
    ],
  },
];
