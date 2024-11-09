"use client";
import { Link } from "@/middleware";
import { useTranslations } from "next-intl";
import Image from "next/image";
import Burger from "../Burger";
import FormModal from "../FormModal";

const Header = () => {
  const t = useTranslations("Index");
  return (
    <header className='w-full pt-12 bg-[white] pb-12'>
      <div className='max-w-[1920px] desktop:max-w-[1440px] bg-[white] tablet:max-w-[768px] mobile:max-w-[375px] mobile:px-4 w-full px-6 m-[0px_auto] flex items-center justify-between'>
        <Link href={"/"}>
          <Image
            src={"/assets/icons/logo.svg"}
            alt='logo'
            width={73}
            height={58}
            className='mobile:w-[51px]'
          />
        </Link>
        <div className='flex items-center gap-[67px] Z-[20] tablet:hidden'>
          <a
            href='/'
            className='px-4 leading-none py-2 text-center font-medium text-[20px] rounded-[6px] transition-all duration-300 text-[#6B6B6B] hover:bg-[#EDEDED]  active:bg-[#E9E6DD] active:text-[#212121]'
          >
            {t("main")}
          </a>
          <a
            href='#cases'
            className='px-4 leading-none py-2 text-center font-medium text-[20px] rounded-[6px] transition-all duration-300 text-[#6B6B6B] hover:bg-[#EDEDED]  active:bg-[#E9E6DD] active:text-[#212121]'
          >
            {t("cases")}
          </a>
          <a
            href='#aboutUs'
            className='px-4 leading-none py-2 text-center font-medium text-[20px] rounded-[6px] transition-all duration-300 text-[#6B6B6B] hover:bg-[#EDEDED]  active:bg-[#E9E6DD] active:text-[#212121]'
          >
            {t("aboutUs")}
          </a>
          <a
            href='#contacts'
            className='px-4 leading-none py-2 text-center font-medium text-[20px] rounded-[6px] transition-all duration-300 text-[#6B6B6B] hover:bg-[#EDEDED]  active:bg-[#E9E6DD] active:text-[#212121]'
          >
            {t("contacts")}
          </a>
        </div>
        <div className='flex items-center gap-4'>
          {/* <button className='border-[2px] tablet:hidden border-[#BEBEBE] h-[57px] tablet:h-[71px] w-[99px] rounded-[60px] font-semibold text-[#000] text-[20px]'>
            RU
          </button> */}
          <FormModal />
          <Burger />
        </div>
      </div>
    </header>
  );
};

export default Header;
