"use client";
import { useState } from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { Link } from "@/middleware";

const Burger = () => {
  const [active, $active] = useState(false);
  const t = useTranslations("Index");

  const handleActive = () => {
    $active(!active);
  };
  return (
    <>
      <button
        onClick={handleActive}
        className='hidden tablet:flex justify-center w-[106px] h-[71px] items-center mobile:h-[45px] bg-black rounded-[6px]'
      >
        <Image
          src={"/assets/icons/burger.svg"}
          alt='menu'
          width={40}
          height={40}
          className='hidden tablet:block'
        />
      </button>

      <div className={`menu ${active && "active"} h-[100vh]`}>
        <div className='pt-10 px-6 pb-11'>
          <div className='flex items-center justify-between mb-[200px] mobile:mb-[100px]'>
            <Image
              src={"/assets/icons/darkLogo.svg"}
              alt='logo'
              width={71}
              height={71}
              className='mobile:w-[52px] mobile:h-[52px]'
            />
            <div className='flex items-center gap-4'>
              <button
                onClick={handleActive}
                className='border-[2px] active:scale-95 transition-all duration-[210ms] bg-white flex items-center justify-center border-[#BEBEBE] h-[57px] tablet:h-[71px] mobile:w-[106px] mobile:h-[45px] w-[99px] rounded-[6px] font-semibold text-[#000] text-[20px]'
              >
                <Image
                  src={"/assets/icons/close.svg"}
                  alt='close'
                  width={20}
                  height={20}
                  className='mobile:w-[18px] mobile:h-[18px]'
                />
              </button>
            </div>
          </div>
          <div className='flex flex-col gap-[72px] mobile:gap-[32px] Z-[20]'>
            <a
              href='/'
              className='font-medium text-[72px] mobile:text-[32px] text-white'
              onClick={handleActive}
            >
              {t("main")}
            </a>
            <a
              href='#services'
              className='font-medium text-[72px] mobile:text-[32px] text-white'
              onClick={handleActive}
            >
              {t("services")}
            </a>
            <a
              href='#cases'
              className='font-medium text-[72px] mobile:text-[32px] text-white'
              onClick={handleActive}
            >
              {t("cases")}
            </a>
            <a
              href='#contacts'
              className='font-medium text-[72px] mobile:text-[32px] text-white'
              onClick={handleActive}
            >
              {t("contacts")}
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Burger;
