import { contacts } from "@/constants/mockData";
import { useTranslations } from "next-intl";
import Image from "next/image";

const Contacts = () => {
  const t = useTranslations("Index");
  return (
    <>
      <p className='text-[#1D1D1D] border-b-[1px] mobile:mb-[48px] mobile:text-[48px] border-[#CFCFCF] pb-[52px] tablet:pb-7 tablet:mb-10 text-[72px] tablet:text-[64px] mb-[100px]'>
        {t("contacts")}
      </p>
      <div className='flex items-center justify-between mb-20 tablet:flex-col tablet:gap-5'>
        {contacts.map((data, i) => (
          <>
            <Image
              src={`/assets/icons/${data.desktop}.svg`}
              key={data.desktop}
              alt={data.desktop}
              width={351}
              height={291}
              className='cursor-pointer desktop:w-[330px] tablet:hidden'
            />
            <Image
              src={`/assets/icons/${data.tablet}.svg`}
              key={data.tablet}
              alt={data.tablet}
              width={720}
              height={291}
              className='cursor-pointer tablet:block hidden'
            />
          </>
        ))}
      </div>
    </>
  );
};

export default Contacts;
