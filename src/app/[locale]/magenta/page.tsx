"use client";
import Contacts from "@/components/Contacts";
import Container from "@/components/Container";
import Tag from "@/components/Tag";
import { magentaCase } from "@/constants/mockData";
import { useAnimation } from "@/hooks/useAnimation";
import { useTranslations } from "next-intl";
import Image from "next/image";

const Magenta = () => {
  const t = useTranslations("Index");
  const { addToRefs, headerRef, textContentRef, textRef } = useAnimation();

  const textLines = t("magentaText")
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
        className='font-bold text-[92px] text-black my-[62px] tablet:text-[62px] mobile:text-[48px] mobile:mb-5 mobile:mt-5'
      >
        Magenta Highway
      </p>
      <div
        ref={(el) => addToRefs(el, 0)}
        className='relative mb-[62px] mobile:mb-5 w-full h-[616px] tablet:h-[294px]'
      >
        <Image
          src={"/assets/images/3.webp"}
          alt='eats'
          width={1872}
          height={616}
          className='rounded-[6px] w-full h-full object-cover'
        />
        {/* <Image
          src={"/assets/icons/magentaDesktop.jpg"}
          alt='eats'
          width={1392}
          height={616}
          className='desktop:block hidden mobile:hidden'
        />
        <Image
          src={"/assets/icons/magentaMobileBunner.jpg"}
          alt='eats'
          width={343}
          height={285}
          className='hidden mobile:block'
        /> */}
        <Image
          src={"/assets/icons/magentaLogo.svg"}
          alt='logo'
          width={476}
          height={168}
          className='absolute tablet:w-[326px] mobile:w-[201px] left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2'
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
        {magentaCase.map((data, i) => (
          <div key={data.title} className='tag-item'>
            <Tag title={data.title} type={data.type} />
          </div>
        ))}
      </div>
      <div ref={(el) => addToRefs(el, 1)}>
        <Image
          src={"/assets/icons/magentaCase1.jpg"}
          alt='magentaCase'
          width={1872}
          height={1101}
          className='desktop:w-[1392px] tablet:hidden'
        />
        <Image
          src={"/assets/icons/magentaCaseTablet1.jpg"}
          alt='magentaCase'
          width={720}
          height={484}
          className='hidden tablet:block mobile:rounded-[6px] mobile:border-[1px] mobile:border-[#E3E3E3]'
        />
      </div>
      <div
        className='flex items-center gap-5 my-5 mobile:gap-3'
        ref={(el) => addToRefs(el, 2)}
      >
        <Image
          src={"/assets/icons/magentaCase2.jpg"}
          alt='magentaCase'
          width={924}
          height={1101}
          className='desktop:hidden'
        />
        <Image
          src={"/assets/icons/magentaCase3.jpg"}
          alt='magentaCase'
          width={684}
          height={1101}
          className='desktop:hidden'
        />
        <Image
          src={"/assets/icons/magentaCaseDesktop2.jpg"}
          alt='magentaCase'
          width={684}
          height={1101}
          className='desktop:block hidden tablet:hidden'
        />
        <Image
          src={"/assets/icons/magentaCaseDesktop3.jpg"}
          alt='magentaCase'
          width={684}
          height={1101}
          className='desktop:block hidden tablet:hidden'
        />
        <Image
          src={"/assets/icons/magentaCaseTablet2.jpg"}
          alt='magentaCase'
          width={348}
          height={449}
          className=' hidden tablet:block mobile:w-[164px] mobile:rounded-[6px] mobile:border-[1px] mobile:border-[#E3E3E3]'
        />
        <Image
          src={"/assets/icons/magentaCaseTablet3.jpg"}
          alt='magentaCase'
          width={348}
          height={449}
          className=' hidden tablet:block mobile:w-[164px] mobile:rounded-[6px] mobile:border-[1px] mobile:border-[#E3E3E3]'
        />
      </div>
      <div ref={(el) => addToRefs(el, 3)}>
        <Image
          src={"/assets/icons/magentaCase4.jpg"}
          alt='magentaCase'
          width={1872}
          height={1101}
          className='mb-10 desktop:hidden '
        />
        <Image
          src={"/assets/icons/magentaCaseDesktop4.jpg"}
          alt='magentaCase'
          width={1392}
          height={934}
          className='mb-10 mobile:mb-5 desktop:block hidden tablet:w-[715px] mobile:rounded-[6px] mobile:border-[1px] mobile:border-[#E3E3E3]'
        />
      </div>
      <div
        className='flex items-center gap-5 mb-5'
        ref={(el) => addToRefs(el, 4)}
      >
        <Image
          src={"/assets/icons/magentaCase5.jpg"}
          alt='magentaCase'
          width={928}
          height={612}
          className='desktop:w-[690px] tablet:w-[348px] mobile:hidden'
        />
        <Image
          src={"/assets/icons/magentaCaseMobile5.jpg"}
          alt='magentaCase'
          width={164}
          height={260}
          className='hidden mobile:block'
        />
        <div className='flex flex-col'>
          <Image
            src={"/assets/icons/magentaCase6.jpg"}
            alt='magentaCase'
            width={928}
            height={612}
            className='mb-4 tablet:w-[348px] mobile:hidden flex-shrink-0'
          />
          <Image
            src={"/assets/icons/magentaCase7.jpg"}
            alt='magentaCase'
            width={928}
            height={453}
            className='tablet:w-[348px] mobile:hidden'
          />
          <Image
            src={"/assets/icons/magentaCaseMobile6.jpg"}
            alt='magentaCase'
            width={164}
            height={120}
            className='mb-4 hidden mobile:block'
          />
          <Image
            src={"/assets/icons/magentaCaseMobile7.jpg"}
            alt='magentaCase'
            width={164}
            height={120}
            className='hidden mobile:block'
          />
        </div>
      </div>
      <div ref={(el) => addToRefs(el, 6)}>
        <Image
          src={"/assets/icons/magentaCase8.jpg"}
          alt='magentaCase'
          width={1872}
          height={1101}
          className='mb-[170px] desktop:hidden'
        />
        <Image
          src={"/assets/icons/magentaCaseDesktop8.jpg"}
          alt='magentaCase'
          width={1392}
          height={1101}
          className='mb-[170px] hidden desktop:block desktop:mb-[160px] mobile:mb-20 mobile:rounded-[6px] mobile:border-[1px] mobile:border-[#E3E3E3]'
        />
      </div>
      <Contacts />
    </Container>
  );
};

export default Magenta;
