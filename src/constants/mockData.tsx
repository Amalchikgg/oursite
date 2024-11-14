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

export const services = [
  {
    image: "landing",
    title: "Landing page",
    text: "Создаём эффективные лендинги для привлечения клиентов. Быстрое выполнение, адаптация под любые устройства и акцент на конверсии.",
  },
  {
    image: "corparate",
    title: "Корпоративный сайт",
    text: "Создаём эффективные лендинги для привлечения клиентов. Быстрое выполнение, адаптация под любые устройства и акцент на конверсии.",
  },
  {
    image: "shop",
    title: "Интернет-магазин",
    text: "Запускаем интернет-магазины с удобным интерфейсом и мощной системой управления. Лёгкий процесс покупок для ваших клиентов и гибкие настройки для вас.",
  },
];

export const contacts = [
  { desktop: "telegram", tablet: "telegramTablet" },
  { desktop: "instagram", tablet: "instagramTablet" },
  { desktop: "gmail", tablet: "gmailTablet" },
  { desktop: "phone", tablet: "whatsapTablet" },
];

export const social = [
  { src: "telegram", link: "https://t.me/javaibr" },
  { src: "instagram", link: "https://instagram.com/javaibr" },
  { src: "gmail", link: "javohiribr@gmail.com" },
  { src: "phone", link: "#" },
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

export const sliderCases = [
  {
    image: "eatsSlideCase.jpg",
    text: "Инновационный сервис доставки еды, который предлагает новый уровень удобства как для ресторанов, так и для потребителей.",
    logo: "eatsLogo",
    logoClass: "w-[212px] h-[42px] mobile:w-[131px] mobile:h-[29px]",
    link: "/lumeeats",
  },
  {
    image: "storeSlide3.webp",
    text: "Интернет-магазин, который предлагает новый уровень удобства и комфорта для покупателей.",
    logo: "storeLogoCase",
    logoClass: "w-[284px] h-[73px] mobile:w-[180px] mobile:h-[39px]",
    link: "/lumestore",
  },
  {
    image: "magentaSlide.webp",
    text: "Женский такси-сервис, который предлагает безопасные и комфортные поездки для женщин.",
    logo: "magentaLogoCase",
    logoClass: "w-[270px] h-[60px] mobile:w-[160px] mobile:h-[40px]",
    link: "/magenta",
  },
];
