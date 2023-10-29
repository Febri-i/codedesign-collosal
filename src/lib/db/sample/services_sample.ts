import { IGQLServiceInfo } from "~/lib/graphql/types/service";

export const services_sample: IGQLServiceInfo[] = [
  {
    name: "UI Design",
    description: "lorem fucking IPSUM!",
    heading:
      "Don't let your idea get caught by others, design a prototype for your idea",
    summaryDescription:
      "Delegate your ideas as quickly as possible, create beautiful designs and vivid prototypes.",
    benefit: [
      "cool design yknow!",
      "and uhh cool UX!",
      "maybe uhh idk ask the manager!",
    ],
    illustration: "/illustration/uidesign.svg",
    offer: [
      "10 design pages",
      "Well-documented",
      "4 revisions",
      "$100/additional page",
    ],
    illustratedFeatures: [],
    price: 1200,
    summaryIllustratedFeatures: [
      {
        illustration: "/illustration/layout.svg",
        title: "Beautiful Design",
        description: "Create a modern design for your idea.",
      },
      {
        description: "Create vivid prototypes for your designs.",
        title: "Card Name",
        illustration: "/illustration/cursor-outline.svg",
      },
    ],
  },
  {
    name: "Development",
    description: `Just tell us your repetitive problem or the primitive method used today, and we will create a digital solution.

    We can build you a website, a mobile app and a desktop app. All types of applications have a good security system, are easy to maintain, and are high speed.`,
    illustratedFeatures: [],
    illustration: "/illustration/development.svg",
    heading:
      "Create solutions to repetitive problems, design applications and access anywhere!",
    summaryDescription:
      "Just tell us your repetitive problem or the primitive method used today, and we will create a digital solution.",
    price: 5000,
    offer: [
      "Web & Mobile",
      "Well-documented",
      "8 revisions",
      "$1000/additional feature",
    ],
    benefit: [
      "Avoid potential bugs with unit testing",
      "Removing unused code will speed up the application",
      "The modern design pleases the users",
      "A good UX will not disappoint users",
    ],
    summaryIllustratedFeatures: [
      {
        illustration: "/illustration/download.svg",
        title: "Back up every day",
        description: "ASK US TO DO ANYTHIN!",
      },
      {
        description: "whatever.",
        title: "Upgrade",
        illustration: "/illustration/arrow-up.svg",
      },
      {
        description: "whatever.",
        title: "Cleaning every week",
        illustration: "/illustration/refresh.svg",
      },
      {
        description: "whatever.",
        title: "Fixing error",
        illustration: "/illustration/check-circle.svg",
      },
    ],
  },

  {
    name: "Maintenance",
    description: "lorem fucking IPSUM!",
    benefit: [],
    illustration: "/illustration/maintenance.svg",
    heading:
      "Think of your server as your own child, taking care of it every day",
    summaryDescription:
      "We will back up your servers every day, clean them every week, upgrade them when there is an update.",
    offer: [
      "Daily backup",
      "3 hourse of maintenance",
      "Including fixing",
      "$50/additional hour",
    ],
    illustratedFeatures: [],
    price: 3000,
    summaryIllustratedFeatures: [
      {
        illustration: "/illustration/smartphone.svg",
        title: "Mobile App Development",
        description: "ASK US TO DO ANYTHIN!",
      },
      {
        description: "whatever.",
        title: "Desktop App Development",
        illustration: "/illustration/monitor.svg",
      },
      {
        description: "whatever.",
        title: "Web Development",
        illustration: "/illustration/globe.svg",
      },
    ],
  },
];
