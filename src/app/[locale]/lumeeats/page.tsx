import Contacts from "@/components/Contacts";
import Container from "@/components/Container";
import Tag from "@/components/Tag";
import { eatsCase } from "@/constants/mockData";
import { useTranslations } from "next-intl";
import Image from "next/image";

const LumeEats = () => {
  const t = useTranslations("Index");
  return (
    <Container>
      <p className='font-bold text-[92px] text-black my-[62px] mobile:my-5 mobile:text-[48px]'>
        Lume Eats
      </p>
      <div className='relative mb-[62px] h-[616px] tablet:h-[294px] mobile:mb-5'>
        <Image
          src={"/assets/icons/eatsBunner.jpg"}
          alt='eats'
          width={1872}
          height={616}
          className=' desktop:hidden'
        />
        <Image
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
        />
      </div>
      <p className='font-medium text-[52px] tablet:text-[48px] mobile:text-[24px] text-[#3F3F3F] mb-[62px] mobile:mb-5'>
        {t("eatsText")}
      </p>
      <div className='gap-5 mobile:gap-x-4 mobile:gap-y-3 flex items-center flex-wrap mb-20 mobile:mb-10'>
        {eatsCase.map((data, i) => (
          <Tag key={data.title} title={data.title} type={data.type} />
        ))}
      </div>
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
      <div className='flex items-center gap-10 tablet:gap-4 my-10 mobile:my-5 mobile:gap-2'>
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
          className='tablet:block hidden mobile:w-[140px] mobile:rounded-[30px] mobile:border-[1px] mobile:border-[#E3E3E3]'
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
      <div className='flex items-center gap-10 mobile:gap-5 mobile:mt-5 mt-10 mb-7 mobile:mb-5 tablet:flex-col'>
        <Image
          src={"/assets/icons/eatsCase5.jpg"}
          alt='eatsCase'
          width={750}
          height={522}
          className='desktop:w-[566px]  tablet:w-full mobile:rounded-[30px] mobile:border-[1px] mobile:border-[#E3E3E3]'
        />
        <Image
          src={"/assets/icons/eatsCase6.jpg"}
          alt='eatsCase'
          width={1094}
          height={522}
          className='desktop:w-[802px] tablet:w-[720px] mobile:rounded-[30px] mobile:border-[1px] mobile:border-[#E3E3E3]'
        />
      </div>
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
        className='hidden tablet:block mobile:rounded-[30px] mobile:border-[1px] mobile:border-[#E3E3E3]'
      />
      <div className='flex items-center mobile:flex-col mobile:gap-5 gap-[26px] mt-[43px] mobile:mt-5 mb-[100px] desktop:mb-[42px] mobile:mb-5'>
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
          className=' hidden tablet:block mobile:w-[343px] mobile:rounded-[30px] mobile:border-[1px] mobile:border-[#E3E3E3]'
        />
        <Image
          src={"/assets/icons/eatsCase10.jpg"}
          alt='eatsCase'
          width={750}
          height={522}
          className='desktop:hidden'
        />
      </div>
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
      <Contacts />
    </Container>
  );
};

export default LumeEats;
