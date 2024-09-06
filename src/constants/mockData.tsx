import Image from "next/image";

export const cases = [
  {
    title: "Lume Eats",
    text: "Delivery and booking service",
    image: { desktop: "eats", tablet: "lumeEatsTablet", mobile: "mobileEats" },
    titleColor: "text-[#DA6B05]",
    link: "/lumeeats",
  },
  {
    title: "Lume Store",
    text: "E-commerce marketplace service",
    image: {
      desktop: "store",
      tablet: "lumeStoreTablet",
      mobile: "mobileStore",
    },
    titleColor: "text-[#037a01]",
    link: "/lumestore",
  },
  {
    title: "Magenta Highway",
    text: "Woman Taxi App",
    image: {
      desktop: "magenta",
      tablet: "magentaTablet",
      mobile: "magentaMobile",
    },
    titleColor: "text-[#7403A9]",
    link: "/magenta",
    icon: (
      <Image
        src={"/assets/icons/magentaLogo.svg"}
        width={187}
        height={66}
        alt='taxi'
        className='z-[-1]'
      />
    ),
  },
];

export const services = ["landing", "multiPages", "branding"];

export const contacts = [
  { desktop: "telegram", tablet: "telegramTablet" },
  { desktop: "instagram", tablet: "instagramTablet" },
  { desktop: "gmail", tablet: "gmailTablet" },
  { desktop: "phone", tablet: "whatsapTablet" },
];

export const eatsCase = [
  {
    title: "ui/ux design",
    type: "design",
  },
  {
    title: "design system",
    type: "design",
  },
  {
    title: "web app design",
    type: "design",
  },
  {
    title: "adaptive design",
    type: "design",
  },
  {
    title: "mobile app design",
    type: "design",
  },
  {
    title: "extension design",
    type: "design",
  },
  {
    title: "React",
    type: "develop",
  },
  {
    title: "NextJS",
    type: "develop",
  },
  {
    title: "TypeScript",
    type: "develop",
  },
  {
    title: "TailwindCSS",
    type: "develop",
  },
  {
    title: "SSR",
    type: "develop",
  },
  {
    title: "React Query",
    type: "develop",
  },
];

export const magentaCase = [
  {
    title: "ui/ux design",
    type: "design",
  },
  {
    title: "design system",
    type: "design",
  },
  {
    title: "app design",
    type: "design",
  },
  {
    title: "web app design",
    type: "design",
  },
  {
    title: "React Native",
    type: "develop",
  },
  {
    title: "TypeScript",
    type: "develop",
  },
  {
    title: "Expo",
    type: "develop",
  },
  {
    title: "React Native Reanimated",
    type: "develop",
  },
  {
    title: "React Native Navigation",
    type: "develop",
  },
];
