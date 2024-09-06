import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  const t = useTranslations("Index");
  return (
    <footer className='bg-[#F6F6F6] py-[88px]'>
      <div className='max-w-[1920px] desktop:max-w-[1440px] w-full m-[0px_auto] mobile:px-4 tablet:max-w-[768px] mobile:max-w-[375px] px-6 flex items-center justify-between tablet:flex-col tablet:gap-[52px]'>
        <p className='text-black font-medium text-[86px] mobile:text-center mobile:text-[64px]'>
          {t("startNow")}
        </p>
        <div className='flex items-center gap-[25px] mobile:flex-col'>
          <Link
            href={"#" as never}
            className='w-[292px] h-[57px] rounded-[60px] bg-white flex items-center pl-[27px] gap-2.5 border-[2px] border-[#6C6C6C]'
          >
            <p className='text-[24px] text-black leading-[28.64px] font-medium'>
              {t("writeUs")}
            </p>
            <Image
              src={"/assets/icons/arrow.svg"}
              alt='arrow'
              width={32}
              height={1}
            />
          </Link>
          <Link
            href={"#" as never}
            className='w-[292px] h-[57px] rounded-[60px] bg-white flex items-center pl-[27px] border-[2px] border-[#6C6C6C]'
          >
            <p className='text-[24px] text-black leading-[28.64px] font-medium'>
              {t("copyMail")}
            </p>
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
