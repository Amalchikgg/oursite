"use client";
import { Link } from "@/middleware";
import { useTranslations } from "next-intl";
import Image from "next/image";
import Burger from "../Burger";

const Header = () => {
  const t = useTranslations("Index");
  return (
    <header className='z-[100] sticky top-0 w-full pt-12 bg-[white] pb-12'>
      <div className='max-w-[1920px] desktop:max-w-[1440px] bg-[white] tablet:max-w-[768px] mobile:max-w-[375px] mobile:px-4 w-full px-6 m-[0px_auto] flex items-center justify-between'>
        <Link href={"/"}>
          <Image
            src={"/assets/icons/logo.svg"}
            alt='logo'
            width={71}
            height={71}
            className='mobile:w-[51px]'
          />
        </Link>
        <div className='flex items-center gap-[29px] Z-[20] tablet:hidden'>
          <a
            href='/'
            className='w-[125px] text-center font-medium text-[20px] text-black leading-[23.87px]'
          >
            {t("main")}
          </a>
          <a
            href='#aboutUs'
            className='w-[125px] text-center font-medium text-[20px] text-black leading-[23.87px]'
          >
            {t("aboutUs")}
          </a>
          <a
            href='#cases'
            className='w-[125px] text-center font-medium text-[20px] text-black leading-[23.87px]'
          >
            {t("cases")}
          </a>
          <a
            href='#services'
            className='w-[125px] text-center font-medium text-[20px] text-black leading-[23.87px]'
          >
            {t("services")}
          </a>
        </div>
        <div className='flex items-center gap-4'>
          <button className='border-[2px] tablet:hidden border-[#BEBEBE] h-[57px] tablet:h-[71px] w-[99px] rounded-[60px] font-semibold text-[#000] text-[20px]'>
            RU
          </button>
          <button className='border-[2px] tablet:hidden bg-black text-white border-[#6C6C6C] h-[57px] w-[185px] rounded-[60px] font-semibold text-[20px]'>
            {t("contacts")}
          </button>
          <Burger />
        </div>
      </div>
    </header>
  );
};

export default Header;
