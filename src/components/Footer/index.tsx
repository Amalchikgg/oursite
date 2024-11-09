import { useTranslations } from "next-intl";
import Image from "next/image";
import FormModal from "../FormModal";

const Footer = () => {
  const t = useTranslations("Index");
  return (
    <footer className='bg-[#F6F6F6] py-[88px]'>
      <div className='max-w-[1920px] desktop:max-w-[1440px] w-full m-[0px_auto] mobile:px-4 tablet:max-w-[768px] mobile:max-w-[375px] px-6 flex items-center justify-between tablet:flex-col tablet:gap-[52px]'>
        <p className='text-black font-medium text-[86px] mobile:text-center mobile:text-[64px]'>
          {t("startNow")}
        </p>
        <div className='flex items-center gap-[25px] mobile:flex-col'>
          <FormModal writeUs />
          <button className='flex items-center gap-2.5 pl-[27px] border-[2px] border-[#DCDCDC] h-[57px] w-[300px] rounded-[6px] transition-all duration-[210ms] active:scale-95'>
            <Image
              src={"/assets/icons/copy.svg"}
              alt='arrow'
              width={24}
              height={24}
            />
            <p className='font-medium text-[24px] text-[#212121]'>
              Скопировать почту
            </p>
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
