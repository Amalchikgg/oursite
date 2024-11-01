"use client";
import { useEffect, useRef } from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const AboutUs = () => {
  const t = useTranslations("Index");

  // Рефы для анимаций
  const sectionRef = useRef(null);
  const headerTitleRef = useRef(null);
  const headerRoleRef = useRef(null);
  const firstImageRef = useRef(null);
  const firstTextRef = useRef(null);
  const secondTextRef = useRef(null);
  const secondHeaderRef = useRef(null);
  const secondImageRef = useRef(null);
  const thirdTextRef = useRef(null);
  const fourthTextRef = useRef(null);

  useEffect(() => {
    // Общие параметры для анимаций
    const fadeInUp = {
      y: 30,
      opacity: 0,
      duration: 1,
      ease: "power3.out",
    };

    // Создаем единый таймлайн для первого блока
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top center+=200", // Начинаем анимацию раньше
        toggleActions: "play none none none",
        // markers: true, // Для отладки
      },
    });

    // Анимируем все элементы первого блока последовательно
    tl
      // Заголовки
      .from(headerTitleRef.current, {
        ...fadeInUp,
        duration: 0.8,
      })
      .from(
        headerRoleRef.current,
        {
          ...fadeInUp,
          duration: 0.8,
        },
        "-=0.6"
      ) // Начинаем немного раньше, чем закончится предыдущая анимация

      // Первый блок контента
      .from(
        firstImageRef.current,
        {
          scale: 0.95,
          opacity: 0,
          duration: 0.8,
          ease: "power3.out",
        },
        "-=0.4"
      )
      .from(
        firstTextRef.current,
        {
          ...fadeInUp,
          duration: 0.8,
        },
        "-=0.6"
      )
      .from(
        secondTextRef.current,
        {
          ...fadeInUp,
          duration: 0.8,
        },
        "-=0.6"
      );

    // Создаем отдельный таймлайн для второго блока
    const tl2 = gsap.timeline({
      scrollTrigger: {
        trigger: secondHeaderRef.current,
        start: "top center+=200",
        toggleActions: "play none none none",
        // markers: true, // Для отладки
      },
    });

    tl2
      .from(secondHeaderRef.current, {
        ...fadeInUp,
        duration: 0.8,
      })
      .from(
        secondImageRef.current,
        {
          scale: 0.95,
          opacity: 0,
          duration: 0.8,
          ease: "power3.out",
        },
        "-=0.4"
      )
      .from(
        thirdTextRef.current,
        {
          ...fadeInUp,
          duration: 0.8,
        },
        "-=0.6"
      )
      .from(
        fourthTextRef.current,
        {
          ...fadeInUp,
          duration: 0.8,
        },
        "-=0.6"
      );

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <section id='aboutUs' ref={sectionRef}>
      <div className='flex items-center mobile:flex-col mobile:gap-[60px] mobile:items-start tablet:items-end justify-between border-b-[1px] border-[#535353] mb-20 tablet:mb-10 desktop:mb-[59px] pb-8'>
        <p
          ref={headerTitleRef}
          className='text-[#1D1D1D] text-[72px] mobile:text-[48px] font-medium leading-[85.92px] tablet:leading-none'
        >
          {t("aboutUs")}
        </p>
        <p
          ref={headerRoleRef}
          className='text-[#C0C0C0] text-[72px] font-medium leading-[86.4px] tablet:leading-none tablet:text-[48px] mobile:text-[32px]'
        >
          UX/UI designer
        </p>
      </div>

      <div className='flex tablet:flex-col justify-between mb-[130px] tablet:mb-[62px]'>
        <div className='tablet:flex tablet:flex-col-reverse tablet:gap-6 tablet:mb-6'>
          <p
            ref={firstTextRef}
            className='text-[#1D1D1D] tablet:text-[40px] text-[48px] tablet:leading-none w-[760px] tablet:w-full mb-20 tablet:mb-0 font-medium leading-[57.61px]'
          >
            Hello I&apos;m Javohir — your freelance digital UX/UI and product
            designer. Based in Tashkent, Uzbekistan.
          </p>
          <div ref={firstImageRef}>
            <Image
              src={"/assets/icons/person.jpg"}
              alt='person'
              width={450}
              height={450}
              className='tablet:hidden'
            />
            <Image
              src={"/assets/icons/photoTablet.jpg"}
              alt='person'
              width={720}
              height={255}
              className='tablet:block hidden'
            />
          </div>
        </div>
        <p
          ref={secondTextRef}
          className='text-[#1D1D1D] text-[48px] desktop:text-[40px] mobile:text-[36px] mobile:leading-normal w-[826px] tablet:w-full mb-20 tablet:mb-0 font-medium leading-[57.61px]'
        >
          Lorem ipsum dolor sit amet consectetur. Hendrerit cursus pellentesque
          lectus vivamus. Ante neque consectetur nisl mi in rhoncus et posuere
          pellentesque. Mauris nulla sed habitant augue aliquam lorem odio. Dui
          euismod volutpat magna egestas lectus.
        </p>
      </div>

      <div
        ref={secondHeaderRef}
        className='border-b-[1px] border-[#535353] mb-20 desktop:mb-[59px] pb-8 tablet:pb-7 tablet:mb-10'
      >
        <p className='text-[#C0C0C0] text-[72px] font-medium leading-[85.92px] tablet:text-[48px] tablet:leading-none'>
          Developer
        </p>
      </div>

      <div className='flex justify-between mb-[175px] tablet:mb-[73px] tablet:flex-col'>
        <div className='tablet:flex tablet:flex-col-reverse tablet:gap-6 tablet:mb-6'>
          <p
            ref={thirdTextRef}
            className='text-[#1D1D1D] tablet:text-[40px] text-[48px] tablet:leading-none w-[760px] tablet:w-full mb-20 tablet:mb-0 font-medium leading-[57.61px]'
          >
            Hello I&apos;m Amal — your freelance digital UX/UI and product
            designer. Based in Tashkent, Uzbekistan.
          </p>
          <div ref={secondImageRef}>
            <Image
              src={"/assets/icons/person.jpg"}
              alt='person'
              width={450}
              height={450}
              className='tablet:hidden'
            />
            <Image
              src={"/assets/icons/photoTablet.jpg"}
              alt='person'
              width={720}
              height={255}
              className='tablet:block hidden'
            />
          </div>
        </div>
        <p
          ref={fourthTextRef}
          className='text-[#1D1D1D] text-[48px] desktop:text-[40px] mobile:text-[36px] mobile:leading-normal w-[826px] tablet:w-full mb-20 tablet:mb-0 font-medium leading-[57.61px]'
        >
          Lorem ipsum dolor sit amet consectetur. Hendrerit cursus pellentesque
          lectus vivamus. Ante neque consectetur nisl mi in rhoncus et posuere
          pellentesque. Mauris nulla sed habitant augue aliquam lorem odio. Dui
          euismod volutpat magna egestas lectus.
        </p>
      </div>
    </section>
  );
};

export default AboutUs;
