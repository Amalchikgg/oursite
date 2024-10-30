import Contacts from "@/components/Contacts";
import Container from "@/components/Container";
import Tag from "@/components/Tag";
import { magentaCase } from "@/constants/mockData";
import { useTranslations } from "next-intl";
import Image from "next/image";

const Magenta = () => {
  const t = useTranslations("Index");
  return (
    <Container>
      <p className='font-bold text-[92px] text-black my-[62px] tablet:text-[62px] mobile:text-[48px] mobile:mb-5 mobile:mt-5'>
        Magenta Highway
      </p>
      <div className='relative mb-[62px] mobile:mb-5'>
        <Image
          src={"/assets/icons/magentaBunner.jpg"}
          alt='eats'
          width={1872}
          height={616}
          className='desktop:hidden'
        />
        <Image
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
        />
        <Image
          src={"/assets/icons/magentaLogo.svg"}
          alt='logo'
          width={476}
          height={168}
          className='absolute top-[224px]  right-[697.5px] desktop:right-[450px] tablet:w-[326px] mobile:w-[201px] tablet:right-[200px] mobile:right-[65px] tablet:top-[100px]'
        />
      </div>
      <p className='font-medium text-[52px] tablet:text-[48px] text-[#3F3F3F] mb-[62px] mobile:mb-[34px] mobile:text-[24px]'>
        {t("magentaText")}
      </p>
      <div className='gap-5 mobile:gap-x-4 mobile:gap-y-3 flex items-center flex-wrap mb-20 mobile:mb-10'>
        {magentaCase.map((data, i) => (
          <Tag key={data.title} title={data.title} type={data.type} />
        ))}
      </div>
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
        className='hidden tablet:block mobile:rounded-[30px] mobile:border-[1px] mobile:border-[#E3E3E3]'
      />
      <div className='flex items-center gap-5 my-5 mobile:gap-3'>
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
          width={924}
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
          className=' hidden tablet:block mobile:w-[164px] mobile:rounded-[30px] mobile:border-[1px] mobile:border-[#E3E3E3]'
        />
        <Image
          src={"/assets/icons/magentaCaseTablet3.jpg"}
          alt='magentaCase'
          width={348}
          height={449}
          className=' hidden tablet:block mobile:w-[164px] mobile:rounded-[30px] mobile:border-[1px] mobile:border-[#E3E3E3]'
        />
      </div>
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
        className='mb-10 mobile:mb-5 desktop:block hidden tablet:w-[715px] mobile:rounded-[30px] mobile:border-[1px] mobile:border-[#E3E3E3]'
      />
      <div className='flex items-center gap-5 mb-5'>
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
        <div>
          <Image
            src={"/assets/icons/magentaCase6.jpg"}
            alt='magentaCase'
            width={928}
            height={612}
            className='mb-4 tablet:w-[348px] mobile:hidden'
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
        className='mb-[170px] hidden desktop:block desktop:mb-[160px] mobile:mb-20 mobile:rounded-[30px] mobile:border-[1px] mobile:border-[#E3E3E3]'
      />
      <Contacts />
    </Container>
  );
};

export default Magenta;
