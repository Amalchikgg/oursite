"use client";
import Contacts from "@/components/Contacts";
import Container from "@/components/Container";
import Tag from "@/components/Tag";
import { eatsCase } from "@/constants/mockData";
import { useAnimation } from "@/hooks/useAnimation";
import { useTranslations } from "next-intl";
import Image from "next/image";

const LumeEats = () => {
  const t = useTranslations("Index");
  const { addToRefs, headerRef, textContentRef, textRef } = useAnimation();

  // Разбиваем основной текст на строки
  const textLines = t("eatsText")
    .split(" ")
    .map((word, i) => (
      <div key={i} className='inline-block mr-[10px]'>
        {word}
      </div>
    ));
  return (
    <Container>
      <p
        ref={headerRef}
        className='font-bold text-[92px] text-black my-[62px] mobile:my-5 mobile:text-[48px]'
      >
        Lume Eats
      </p>

      <div
        ref={(el) => addToRefs(el, 0)}
        className='relative mb-[62px] h-[616px] tablet:h-[294px] mobile:mb-5'
      >
        <Image
          src={"/assets/images/1.webp"}
          alt='eats'
          width={1872}
          height={616}
          className='rounded-[6px] w-full h-full object-cover'
        />
        {/* <Image
          src={"/assets/icons/desktopLumeeats.jpg"}
          alt='eats'
          width={1872}
          height={616}
          className='desktop:block hidden mobile:hidden'
        />
        <Image
          src={"/assets/icons/eatsMobileBunner.jpg"}
          alt='eats'
          width={343}
          height={294}
          className=' hidden mobile:block'
        /> */}
        <Image
          src={"/assets/icons/lumeEatsLogo.svg"}
          alt='logo'
          width={615}
          height={136}
          className='absolute  tablet:w-[326px] mobile:w-[201px] left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2'
        />
      </div>

      <div
        ref={textRef}
        className='relative font-medium text-[52px] tablet:text-[48px] mobile:text-[24px] text-[#3F3F3F] mb-[62px] mobile:mb-5'
      >
        <div ref={textContentRef} className='relative'>
          {textLines}
        </div>
      </div>

      <div className='tag-container gap-5 mobile:gap-x-4 mobile:gap-y-3 flex items-center flex-wrap mb-20 mobile:mb-10'>
        {eatsCase.map((data, i) => (
          <div key={data.title} className='tag-item'>
            <Tag title={data.title} type={data.type} />
          </div>
        ))}
      </div>

      <div ref={(el) => addToRefs(el, 1)} className=' overflow-hidden'>
        <Image
          src={"/assets/icons/eatsCase1.jpg"}
          alt='eatsCase'
          width={1872}
          height={1101}
          className='desktop:h-[835px] tablet:hidden'
        />
        <Image
          src={"/assets/icons/eatsCaseTablet1.jpg"}
          alt='eatsCase'
          width={720}
          height={484}
          className='tablet:block hidden'
        />
      </div>

      <div
        ref={(el) => addToRefs(el, 2)}
        className='flex items-center gap-10 tablet:gap-4 my-10 mobile:my-5 mobile:gap-2 overflow-hidden'
      >
        <Image
          src={"/assets/icons/eatsCase2.jpg"}
          alt='eatsCase'
          width={750}
          height={1101}
          className=' desktop:w-[684px] desktop:h-[891px] tablet:hidden'
        />
        <Image
          src={"/assets/icons/eatsCaseTablet2.jpg"}
          alt='eatsCase'
          width={750}
          height={1101}
          className='tablet:block hidden mobile:w-[140px] mobile:rounded-[6px] mobile:border-[1px] mobile:border-[#E3E3E3]'
        />
        <Image
          src={"/assets/icons/eatsCase3.jpg"}
          alt='eatsCase'
          width={255}
          height={449}
          className=' desktop:hidden'
        />
        <Image
          src={"/assets/icons/eatsCaseDesktop3.jpg"}
          alt='eatsCase'
          width={681}
          height={891}
          className=' desktop:block hidden tablet:hidden'
        />
        <Image
          src={"/assets/icons/eatsCaseTablet3.jpg"}
          alt='eatsCase'
          width={681}
          height={891}
          className='tablet:block hidden mobile:hidden'
        />
        <Image
          src={"/assets/icons/eatsCaseMobile3.jpg"}
          alt='eatsCase'
          width={194}
          height={244}
          className=' hidden mobile:block'
        />
      </div>

      <div ref={(el) => addToRefs(el, 3)} className=' overflow-hidden'>
        <Image
          src={"/assets/icons/eatsCase4.jpg"}
          alt='eatsCase'
          width={1872}
          height={1101}
          className='desktop:w-[1392px] tablet:w-[720px] mobile:hidden'
        />
        <Image
          src={"/assets/icons/eatsCaseMobile4.jpg"}
          alt='eatsCase'
          width={343}
          height={224}
          className='hidden mobile:block'
        />
      </div>

      <div
        ref={(el) => addToRefs(el, 4)}
        className='flex items-center gap-10 mobile:gap-5 mobile:mt-5 mt-10 mb-7 mobile:mb-5 overflow-hidden tablet:flex-col'
      >
        <Image
          src={"/assets/icons/eatsCase5.jpg"}
          alt='eatsCase'
          width={750}
          height={522}
          className='desktop:w-[566px] tablet:w-full mobile:rounded-[6px] mobile:border-[1px] mobile:border-[#E3E3E3]'
        />
        <Image
          src={"/assets/icons/eatsCase6.jpg"}
          alt='eatsCase'
          width={1094}
          height={522}
          className='desktop:w-[802px] tablet:w-[720px] mobile:rounded-[6px] mobile:border-[1px] mobile:border-[#E3E3E3]'
        />
      </div>

      <div ref={(el) => addToRefs(el, 5)} className=' overflow-hidden'>
        <Image
          src={"/assets/icons/eatsCase7.jpg"}
          alt='eatsCase'
          width={1872}
          height={696}
          className='desktop:h-[515px] tablet:hidden'
        />
        <Image
          src={"/assets/icons/eatsCaseTablet7.jpg"}
          alt='eatsCase'
          width={720}
          height={839}
          className='hidden tablet:block mobile:rounded-[6px] mobile:border-[1px] mobile:border-[#E3E3E3]'
        />
      </div>

      <div
        ref={(el) => addToRefs(el, 6)}
        className='flex items-center overflow-hidden mobile:flex-col mobile:gap-5 gap-[26px] mt-[43px] mobile:mt-5 mb-[100px] desktop:mb-[42px] mobile:mb-5'
      >
        <Image
          src={"/assets/icons/eatsCase8.jpg"}
          alt='eatsCase'
          width={413}
          height={522}
          className='tablet:hidden'
        />
        <Image
          src={"/assets/icons/eatsCaseTablet8.jpg"}
          alt='eatsCase'
          width={255}
          height={278}
          className='tablet:block hidden mobile:w-[343px]'
        />
        <Image
          src={"/assets/icons/eatsCase9.jpg"}
          alt='eatsCase'
          width={657}
          height={522}
          className='desktop:hidden'
        />
        <Image
          src={"/assets/icons/eatsCaseDesktop9.jpg"}
          alt='eatsCase'
          width={955}
          height={522}
          className='desktop:block hidden tablet:hidden'
        />
        <Image
          src={"/assets/icons/eatsCaseTablet9.jpg"}
          alt='eatsCase'
          width={441}
          height={228}
          className=' hidden tablet:block mobile:w-[343px] mobile:rounded-[6px] mobile:border-[1px] mobile:border-[#E3E3E3]'
        />
        <Image
          src={"/assets/icons/eatsCase10.jpg"}
          alt='eatsCase'
          width={750}
          height={522}
          className='desktop:hidden'
        />
      </div>

      <div ref={(el) => addToRefs(el, 7)} className=' overflow-hidden'>
        <Image
          src={"/assets/icons/eatsCaseDesktop10.jpg"}
          alt='eatsCase'
          width={1391}
          height={703}
          className='desktop:block hidden mb-[160px] mobile:hidden'
        />
        <Image
          src={"/assets/icons/eatsCaseMobile10.jpg"}
          alt='eatsCase'
          width={343}
          height={266}
          className='hidden mobile:block mb-[116px]'
        />
      </div>

      <Contacts />
    </Container>
  );
};

export default LumeEats;
