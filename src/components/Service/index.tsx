import Image from "next/image";

interface Props {
  title: string;
  last?: boolean;
}

const Service = ({ title, last }: Props) => {
  return (
    <div
      className={`cursor-pointer flex items-center justify-between border-b-[1px] border-[#CFCFCF] pb-[45px] mb-[45px] ${
        last &&
        "!pb-[175px] desktop:!pb-[92px] tablet:!pb-8 !mb-[130px] tablet:!mb-8 tablet:border-none"
      }`}
    >
      <p className='font-medium text-[92px] desktop:text-[88px] tablet:text-[48px] mobile:text-[36px] text-black leading-[109.79px] tablet:leading-normal'>
        {title}
      </p>
    </div>
  );
};

export default Service;
