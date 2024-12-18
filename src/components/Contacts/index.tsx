import { social } from "@/constants/mockData";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { Link } from "@/middleware";

const Contacts = () => {
  const t = useTranslations("Index");
  const titleRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const blocksRefs = useRef<(HTMLAnchorElement | null)[]>([]);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Анимация заголовка
    gsap.fromTo(
      titleRef.current,
      {
        y: 50,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 3,
        duration: 0.6,
        ease: "power2.out",
        scrollTrigger: {
          trigger: titleRef.current,
          // Начинаем когда верх элемента достигает нижней четверти экрана
          start: "top 60%",
          toggleActions: "play none none none",
        },
      }
    );

    // Анимация блоков
    blocksRefs.current.forEach((block, index) => {
      gsap.fromTo(
        block,
        {
          y: 70,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power2.out",
          delay: index * 0.1,
          scrollTrigger: {
            trigger: block,
            // Начинаем когда верх блока достигает нижней четверти экрана
            start: "top 65%",
            toggleActions: "play none none none",
          },
        }
      );
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  const setBlockRef = (el: HTMLAnchorElement | null, index: number) => {
    blocksRefs.current[index] = el;
  };

  return (
    <>
      <div
        id='contacts'
        className='flex items-center justify-center mb-[126px]'
        ref={titleRef}
      >
        <p className='text-[#07149D] font-bold text-[24px] leading-none bg-[#C9D8FF] rounded-[6px] py-[14px] px-[46px]'>
          КОНТАКТЫ
        </p>
      </div>

      <div
        className='flex items-center justify-between mb-20 tablet:flex-col tablet:gap-5'
        ref={containerRef}
      >
        {social.map((data, i) => (
          <Link
            target='_blank'
            href={data.link as never}
            key={data.src}
            ref={(el) => setBlockRef(el, i)}
            className='w-[367.25px] h-[291px] desktop:w-[330px] hv tablet:w-full mobile:max-w-full border-[2px] border-[#CFCFCF] rounded-[6px] relative flex items-center justify-center'
          >
            <Image
              src={`/assets/icons/${data.src}.svg`}
              alt={data.src}
              width={80}
              height={80}
            />
            <Image
              src={`/assets/icons/socialArrow.svg`}
              alt={data.src}
              width={40}
              height={40}
              className='absolute left-3 bottom-3'
            />
          </Link>
        ))}
      </div>
    </>
  );
};

export default Contacts;
