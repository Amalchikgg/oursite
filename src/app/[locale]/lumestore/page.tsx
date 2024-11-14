"use client";
import Contacts from "@/components/Contacts";
import Container from "@/components/Container";
import Tag from "@/components/Tag";
import { eatsCase } from "@/constants/mockData";
import { useAnimation } from "@/hooks/useAnimation";
import { useTranslations } from "next-intl";
import Image from "next/image";

const LumeStore = () => {
  const t = useTranslations("Index");
  const { addToRefs, headerRef, textContentRef, textRef } = useAnimation();

  // Разбиваем основной текст на строки
  const textLines = t("storeText")
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
        className='font-bold text-[92px] text-black my-[62px] mobile:text-[48px] mobile:my-5'
      >
        Commerce
      </p>
      <div
        ref={(el) => addToRefs(el, 0)}
        className='relative mb-[62px] w-full h-[616px] tablet:h-[294px] mobile:mb-5'
      >
        <Image
          src={"/assets/images/2.webp"}
          alt='eats'
          width={1872}
          height={616}
          className='rounded-[6px] w-full h-full object-cover'
        />
        {/* <Image
          src={"/assets/icons/lumeStoreDesktop.jpg"}
          alt='eats'
          width={1392}
          height={616}
          className='desktop:block hidden mobile:hidden'
        />
        <Image
          src={"/assets/icons/storeMobileBunner.jpg"}
          alt='eats'
          width={343}
          height={285}
          className='mobile:block hidden '
        /> */}
        <Image
          src={"/assets/icons/commerceLogo.svg"}
          alt='logo'
          width={981}
          height={123}
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
      <div ref={(el) => addToRefs(el, 1)}>
        <Image
          src={"/assets/icons/storeCase1.jpg"}
          alt='storeCase'
          width={1872}
          height={1101}
          className='desktop:w-[1388px] mobile:hidden'
        />
        <Image
          src={"/assets/icons/storeCaseMobile1.jpg"}
          alt='storeCase'
          width={343}
          height={244}
          className='hidden mobile:block'
        />
      </div>
      <div
        className='flex items-center gap-5 my-5 mobile:gap-3'
        ref={(el) => addToRefs(el, 2)}
      >
        <Image
          src={"/assets/icons/storeCase2.jpg"}
          alt='storeCase'
          width={924}
          height={1101}
          className='desktop:w-[686px] tablet:w-[348px] mobile:w-[164px] mobile:rounded-[6px]'
        />
        <Image
          src={"/assets/icons/storeCase3.jpg"}
          alt='storeCase'
          width={928}
          height={1101}
          className='desktop:w-[686px] tablet:w-[348px] mobile:w-[163px] mobile:rounded-[6px]'
        />
      </div>
      <div ref={(el) => addToRefs(el, 3)}>
        <Image
          src={"/assets/icons/storeCase4.jpg"}
          alt='storeCase'
          width={1872}
          height={1101}
          className='desktop:w-[1388px]  mobile:rounded-[6px]'
        />
        <Image
          src={"/assets/icons/storeCase5.jpg"}
          alt='storeCase'
          width={1872}
          height={1101}
          className='my-5 desktop:w-[1388px] mobile:rounded-[6px]'
        />
      </div>
      <div
        className='flex items-center gap-5 mb-[170px] mobile:gap-4'
        ref={(el) => addToRefs(el, 4)}
      >
        <Image
          src={"/assets/icons/storeCase6.jpg"}
          alt='storeCase'
          width={1205}
          height={1101}
          className='desktop:hidden'
        />
        <Image
          src={"/assets/icons/storeCaseDesktop6.jpg"}
          alt='storeCase'
          width={802}
          height={742}
          className='desktop:block hidden tablet:hidden'
        />
        <Image
          src={"/assets/icons/storeCaseTablet6.jpg"}
          alt='storeCase'
          width={348}
          height={449}
          className='hidden tablet:block mobile:w-[164px] mobile:rounded-[6px]'
        />
        <Image
          src={"/assets/icons/storeCase7.jpg"}
          alt='storeCase'
          width={647}
          height={1101}
          className='desktop:hidden'
        />
        <Image
          src={"/assets/icons/storeCaseDesktop7.jpg"}
          alt='storeCase'
          width={566}
          height={745}
          className='desktop:block hidden tablet:w-[340px] mobile:rounded-[6px] mobile:w-[163px]'
        />
      </div>
      <Contacts />
    </Container>
  );
};

export default LumeStore;
