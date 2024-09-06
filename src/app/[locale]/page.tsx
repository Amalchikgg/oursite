import Image from "next/image";
import { useTranslations } from "next-intl";
import Container from "@/components/Container";
import { Link } from "@/middleware";
import { cases, contacts, services } from "@/constants/mockData";
import Case from "@/components/Case";
import Service from "@/components/Service";
import Contacts from "@/components/Contacts";

export default function Home() {
  const t = useTranslations("Index");
  return (
    <Container>
      <main className='mt-20 mobile:mt-5'>
        <div className='flex mobile:hidden   items-end tablet:items-start tablet:flex-col justify-between mb-[79px] desktop:mb-12'>
          <h1 className='text-black  font-medium text-[92px] desktop:text-[80px] tablet:text-[62px] tablet:mb-[46px] leading-[109.79px] w-[1240px] tablet:w-full tablet:leading-normal'>
            {t("mainTitle")}
          </h1>
          <div className='flex items-center desktop:flex-col tablet:flex-row gap-[25px] mb-5'>
            <Link
              href={"#" as never}
              className='w-[292px] desktop:w-[330px] h-[57px] rounded-[60px] flex items-center pl-[27px] gap-2.5 border-[2px] border-[#6C6C6C]'
            >
              <p className='text-[24px] text-black leading-[28.64px] font-medium'>
                {t("writeUs")}
              </p>
              <Image
                src={"/assets/icons/arrow.svg"}
                alt='arrow'
                width={32}
                height={1}
                className='desktop:w-[55px]'
              />
            </Link>
            <Link
              href={"#" as never}
              className='w-[292px] desktop:w-[330px] h-[57px] rounded-[60px] flex items-center pl-[27px] border-[2px] border-[#6C6C6C]'
            >
              <p className='text-[24px] text-black leading-[28.64px] font-medium'>
                {t("copyMail")}
              </p>
            </Link>
          </div>
        </div>
        <div className='flex tablet:flex-col items-center gap-6 tablet:gap-8 pb-[130px] mb-20 desktop:mb-[72px] tablet:mb-[49px] mobile:mb-8 border-b-[1px] tablet:border-none tablet:pb-0 border-[#CFCFCF]'>
          <div className='relative w-[924px] tablet:w-full mobile:h-[427px] h-[770px] desktop:w-[684px] desktop:h-[704px] tablet:h-[770px] rounded-[30px]'>
            <Image
              src={"/assets/icons/uiux.svg"}
              alt='uiux'
              width={924}
              height={770}
              className='w-full h-full object-cover rounded-[30px]'
            />
            <p className='font-bold text-[64px] mobile:text-[36px] text-white absolute bottom-[66px] left-[220px] desktop:left-[129px] mobile:left-[0px] mobile:bottom-[20px] mobile:w-full mobile:text-center'>
              UX/UI DESIGN
            </p>
          </div>
          <div className='relative w-[924px] h-[770px] mobile:h-[427px] tablet:w-full desktop:w-[684px] desktop:h-[704px] tablet:h-[770px] rounded-[30px]'>
            <Image
              src={"/assets/icons/development.svg"}
              alt='development'
              width={924}
              height={770}
              className='w-full h-full object-cover rounded-[30px]'
            />
            <p className='font-bold text-[64px] mobile:text-[36px] mobile:left-[40px] mobile:bottom-[20px] text-white absolute bottom-[66px] left-[220px] desktop:left-[129px]'>
              DEVELOPMENT
            </p>
          </div>
        </div>
        <p
          id='cases'
          className='text-black text-[64px] desktop:text-[48px] mobile:text-[28px] mobile:mb-[54px] font-medium mb-20 desktop:mb-[55px] tablet:mb-[73px]'
        >
          {t("weText1")}
          <span className='font-bold'>{t("contactUs")}</span>
          <span>{t("weText2")}</span>
        </p>
        <div className='flex gap-6 mobile:gap-8 mb-[130px] mobile:mb-20 tablet:flex-col'>
          {cases.map((data, i) => (
            <Case
              key={data.title}
              text={data.text}
              title={data.title}
              titleColor={data.titleColor}
              image={data.image}
              icon={data.icon}
              link={data.link}
            />
          ))}
        </div>
        <div className='flex justify-center mb-[130px] desktop:mb-[92px] mobile:mb-10'>
          <button className='text-start w-[292px] h-[57px] border-[2px] rounded-[60px] border-[#6C6C6C] pl-[27px] text-[24px] font-medium leading-[28.64px] text-black'>
            {t("moreWorks")}
          </button>
        </div>
        <section>
          <p
            id='services'
            className='text-[#1D1D1D] border-b-[1px] border-[#CFCFCF] desktop:mb-[52px] pb-[52px] tablet:pb-[28px] text-[72px] tablet:text-[64px] mobile:text-[48px] mb-[130px] tablet:mb-10'
          >
            {t("services")}
          </p>
          <div>
            {services.map((data, i) => (
              <Service
                key={data}
                title={t(data)}
                last={i + 1 === services.length}
              />
            ))}
          </div>
        </section>
        <section id='aboutUs'>
          <div className='flex items-center mobile:flex-col mobile:gap-[60px] mobile:items-start   tablet:items-end justify-between border-b-[1px] border-[#535353] mb-20 tablet:mb-10 desktop:mb-[59px] pb-8'>
            <p className='text-[#1D1D1D] text-[72px] mobile:text-[48px] font-medium leading-[85.92px] tablet:leading-none'>
              {t("aboutUs")}
            </p>
            <p className='text-[#C0C0C0] text-[72px] font-medium leading-[86.4px] tablet:leading-none tablet:text-[48px] mobile:text-[32px]'>
              UX/UI designer
            </p>
          </div>
          <div className='flex tablet:flex-col justify-between mb-[130px] tablet:mb-[62px]'>
            <div className='tablet:flex tablet:flex-col-reverse tablet:gap-6 tablet:mb-6'>
              <p className='text-[#1D1D1D] tablet:text-[40px] text-[48px] tablet:leading-none w-[760px] tablet:w-full mb-20 tablet:mb-0 font-medium leading-[57.61px]'>
                Hello I’m Javohir — your freelance digital UX/UI and product
                designer. Based in Tashkent, Uzbekistan.
              </p>
              <Image
                src={"/assets/icons/person.svg"}
                alt='person'
                width={450}
                height={450}
                className='tablet:hidden'
              />
              <Image
                src={"/assets/icons/photoTablet.svg"}
                alt='person'
                width={720}
                height={255}
                className='tablet:block hidden'
              />
            </div>
            <p className='text-[#1D1D1D] text-[48px] desktop:text-[40px] w-[826px] tablet:w-full mb-20 tablet:mb-0 font-medium leading-[57.61px]'>
              Lorem ipsum dolor sit amet consectetur. Hendrerit cursus
              pellentesque lectus vivamus. Ante neque consectetur nisl mi in
              rhoncus et posuere pellentesque. Mauris nulla sed habitant augue
              aliquam lorem odio. Dui euismod volutpat magna egestas lectus.
            </p>
          </div>
          <div className='border-b-[1px] border-[#535353] mb-20 desktop:mb-[59px] pb-8 tablet:pb-7 tablet:mb-10'>
            <p className='text-[#C0C0C0] text-[72px] font-medium leading-[85.92px] tablet:text-[48px] tablet:leading-none'>
              Developer
            </p>
          </div>
          <div className='flex justify-between mb-[175px] tablet:mb-[73px] tablet:flex-col'>
            <div className='tablet:flex tablet:flex-col-reverse tablet:gap-6 tablet:mb-6'>
              <p className='text-[#1D1D1D] text-[48px] w-[760px] tablet:w-full mb-20 tablet:mb-0 font-medium leading-[57.61px]'>
                Hello I’m Amal — your freelance digital UX/UI and product
                designer. Based in Tashkent, Uzbekistan.
              </p>
              <Image
                src={"/assets/icons/person.svg"}
                alt='person'
                width={450}
                height={450}
                className='tablet:hidden'
              />
              <Image
                src={"/assets/icons/photoTablet.svg"}
                alt='person'
                width={720}
                height={255}
                className='tablet:block hidden'
              />
            </div>
            <p className='text-[#1D1D1D] text-[48px] desktop:text-[40px] w-[826px] tablet:w-full mb-20 tablet:mb-0 font-medium leading-[57.61px]'>
              Lorem ipsum dolor sit amet consectetur. Hendrerit cursus
              pellentesque lectus vivamus. Ante neque consectetur nisl mi in
              rhoncus et posuere pellentesque. Mauris nulla sed habitant augue
              aliquam lorem odio. Dui euismod volutpat magna egestas lectus.
            </p>
          </div>
        </section>
        <Contacts />
      </main>
    </Container>
  );
}
