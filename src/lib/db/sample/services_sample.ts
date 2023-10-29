import { IGQLServiceInfo } from "~/lib/graphql/types/service";
const _illustratedFeaturesSample = [
  {
    illustration: "/icons/box.svg",
    title: "Strategic User-Centric Approach",
    description:
      "We prioritize understanding your target audience and business goals to create UI designs that are tailored to meet user needs and align with your brand values.",
  },

  {
    illustration: "/icons/box.svg",
    title: "Creative Excellence",
    description:
      "Our skilled designers combine artistry and technical expertise to craft visually appealing interfaces with stunning visuals, typography, color schemes, and imagery.",
  },

  {
    illustration: "/icons/box.svg",
    title: "Responsive Design",
    description:
      "We ensure that your UI design seamlessly adapts to various screen sizes and platforms, providing a consistent user experience across all devices.",
  },

  {
    illustration: "/icons/box.svg",
    title: "User Interaction Design",
    description:
      "We create meaningful, responsive interactions that make user navigation intuitive and engaging, from buttons to forms and more.",
  },

  {
    illustration: "/icons/box.svg",
    title: "Wireframes and Prototypes",
    description:
      "We develop wireframes and prototypes to refine the user flow and structure, ensuring that your final UI design meets your objectives.",
  },

  {
    illustration: "/icons/box.svg",
    title: "Usability Testing",
    description:
      "Our rigorous usability testing involves observing real users interacting with your UI to make data-driven improvements and deliver a smoother, more intuitive experience.",
  },
];
export const services_sample: IGQLServiceInfo[] = [
  {
    name: "UI Design",
    description:
      "Transform your digital presence with our UI Design Service. We craft user-centric, visually stunning interfaces that captivate, engage, and elevate your brand. From strategic planning to responsive design and usability testing, we ensure every element is perfected. Let's create a memorable and seamless user experience together.",
    heading:
      "Don't let your idea get caught by others, design a prototype for your idea",
    summaryDescription:
      "Delegate your ideas as quickly as possible, create beautiful designs and vivid prototypes.",
    benefit: [
      "Enhanced User Experience",
      "Increased Conversions",
      "Stronger Brand Identity",
      "Mobile Responsiveness",
      "Competitive Advantage",
    ],
    illustration: "/illustration/uidesign.svg",
    offer: [
      "10 design pages",
      "Well-documented",
      "4 revisions",
      "$100/additional page",
    ],
    illustratedFeatures: _illustratedFeaturesSample,
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
    illustratedFeatures: _illustratedFeaturesSample,
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
        description: "some kind of description here.",
      },
      {
        description: "some kind of description here",
        title: "Upgrade",
        illustration: "/illustration/arrow-up.svg",
      },
      {
        description: "some kind of description here",
        title: "Cleaning every week",
        illustration: "/illustration/refresh.svg",
      },
      {
        description: "some kind of description here",
        title: "Fixing error",
        illustration: "/illustration/check-circle.svg",
      },
    ],
  },

  {
    name: "Maintenance",

    description:
      "Our IT maintenance service offers a comprehensive solution for the upkeep and optimization of your technology infrastructure. With round-the-clock monitoring, prompt issue resolution, security enhancements, and tailored maintenance plans, we ensure that your systems are efficient, secure, and always available, allowing you to focus on your core business activities.",
    benefit: [
      "Reduced Downtime: Minimizes disruptions and boosts productivity.",
      "Enhanced Security: Safeguards data and preserves reputation.",
      "Cost Savings: Prevents expensive repairs and replacements.",
      "Reliability: Ensures consistent system performance.",
      "Customization: Tailored solutions to meet your unique needs and budget.",
    ],
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
    illustratedFeatures: _illustratedFeaturesSample,
    price: 3000,
    summaryIllustratedFeatures: [
      {
        illustration: "/illustration/smartphone.svg",
        title: "Mobile App Development",
        description: "some kind of description.",
      },
      {
        description: "We develop desktop app",
        title: "Desktop App Development",
        illustration: "/illustration/monitor.svg",
      },
      {
        description: "some kind of description here",
        title: "Web Development",
        illustration: "/illustration/globe.svg",
      },
    ],
  },
];
