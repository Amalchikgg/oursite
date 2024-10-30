import Contacts from "@/components/Contacts";
import Container from "@/components/Container";
import Tag from "@/components/Tag";
import { eatsCase } from "@/constants/mockData";
import { useTranslations } from "next-intl";
import Image from "next/image";

const LumeStore = () => {
  const t = useTranslations("Index");
  return (
    <Container>
      <p className='font-bold text-[92px] text-black my-[62px] mobile:text-[48px] mobile:my-5'>
        Lume Store
      </p>
      <div className='relative mb-[62px] mobile:mb-5'>
        <Image
          src={"/assets/icons/lumeBunner.jpg"}
          alt='eats'
          width={1872}
          height={616}
          className='desktop:hidden'
        />
        <Image
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
        />
      </div>
      <p className='font-medium text-[52px] tablet:text-[48px] text-[#3F3F3F] mb-[62px] mobile:mb-5 mobile:text-[24px]'>
        {t("storeText")}
      </p>
      <div className='gap-5 mobile:gap-x-4 mobile:gap-y-3 flex items-center flex-wrap mb-20 mobile:mb-10'>
        {eatsCase.map((data, i) => (
          <Tag key={data.title} title={data.title} type={data.type} />
        ))}
      </div>
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
      <div className='flex items-center gap-5 my-5 mobile:gap-3'>
        <Image
          src={"/assets/icons/storeCase2.jpg"}
          alt='storeCase'
          width={924}
          height={1101}
          className='desktop:w-[686px] tablet:w-[348px] mobile:w-[164px] mobile:border-[1px] mobile:border-[#E3E3E3] mobile:rounded-[30px]'
        />
        <Image
          src={"/assets/icons/storeCase3.jpg"}
          alt='storeCase'
          width={928}
          height={1101}
          className='desktop:w-[686px] tablet:w-[348px] mobile:w-[163px] mobile:border-[1px] mobile:border-[#E3E3E3] mobile:rounded-[30px]'
        />
      </div>
      <Image
        src={"/assets/icons/storeCase4.jpg"}
        alt='storeCase'
        width={1872}
        height={1101}
        className='desktop:w-[1388px] mobile:border-[1px] mobile:border-[#E3E3E3] mobile:rounded-[30px]'
      />
      <Image
        src={"/assets/icons/storeCase5.jpg"}
        alt='storeCase'
        width={1872}
        height={1101}
        className='my-5 desktop:w-[1388px] mobile:border-[1px] mobile:border-[#E3E3E3] mobile:rounded-[30px]'
      />
      <div className='flex items-center gap-5 mb-[170px] mobile:gap-4'>
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
          className='hidden tablet:block mobile:w-[164px] mobile:border-[1px] mobile:border-[#E3E3E3] mobile:rounded-[30px]'
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
          className='desktop:block hidden tablet:w-[340px] mobile:border-[1px] mobile:border-[#E3E3E3] mobile:rounded-[30px] mobile:w-[163px]'
        />
      </div>
      <Contacts />
    </Container>
  );
};

export default LumeStore;
