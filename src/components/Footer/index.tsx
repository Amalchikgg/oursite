import { useTranslations } from "next-intl";
import FormModal from "../FormModal";
import Copy from "../Copy";
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
          <Copy />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
