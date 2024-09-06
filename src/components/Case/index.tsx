import { Link } from "@/middleware";
import Image from "next/image";
interface Props {
  image: { desktop: string; tablet: string; mobile: string };
  icon?: JSX.Element;
  title: string;
  titleColor: string;
  text: string;
  link: string;
}

const Case = ({ image, icon, title, titleColor, text, link }: Props) => {
  return (
    <Link
      href={link as never}
      className='w-[608px] desktop:w-[448px] tablet:w-full'
    >
      <div className='relative w-[608px] h-[425px] mb-7 desktop:w-[448px] desktop:h-[321px] tablet:w-full'>
        <Image
          src={`/assets/icons/${image.desktop}.svg`}
          alt='image'
          width={608}
          height={425}
          className='desktop:w-[448px] desktop:h-[321px] tablet:hidden'
        />
        <Image
          src={`/assets/icons/${image.tablet}.svg`}
          alt='image'
          width={720}
          height={321}
          className='tablet:block hidden mobile:hidden'
        />
        <Image
          src={`/assets/icons/${image.mobile}.svg`}
          alt='image'
          width={343}
          height={321}
          className=' hidden mobile:block'
        />
        <div className='absolute bottom-0 right-0 left-0 w-full h-full flex items-center justify-center z-[10]'>
          {icon ? (
            icon
          ) : (
            <p className='text-white text-[48px] desktop:text-[40px] font-bold uppercase'>
              {title}
            </p>
          )}
        </div>
      </div>
      <p className={`${titleColor} text-[20px] font-bold`}>
        {title}
        <span className='text-black font-medium'> | {text}</span>
      </p>
    </Link>
  );
};

export default Case;
