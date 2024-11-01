"use client";
import Image from "next/image";
import { useTranslations } from "next-intl";
import Container from "@/components/Container";
import { Link } from "@/middleware";
import { cases, services } from "@/constants/mockData";
import Case from "@/components/Case";
import Service from "@/components/Service";
import Contacts from "@/components/Contacts";
import { useAnimation } from "@/hooks/useAnimation";
import TextBlock from "@/components/TextBlock";
import FormModal from "@/components/FormModal";
import AboutUs from "@/components/AboutUs";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const t = useTranslations("Index");
  const { addToRefs, headerRef } = useAnimation();
  const containerRef = useRef<HTMLDivElement>(null);
  const modalRef = useRef<HTMLDivElement>(null);
  const linkRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    const elements = [modalRef.current, linkRef.current];

    // Начальное состояние
    gsap.set(elements, {
      x: -100,
      opacity: 0,
      rotateY: -30, // Добавляем небольшой поворот
    });

    // Основная анимация появления
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top bottom-=100",
        toggleActions: "play none none none",
      },
    });

    tl.to(elements, {
      x: 0,
      opacity: 1,
      rotateY: 0,
      duration: 5,
      stagger: 0.2,
      ease: "power3.out",
    });

    // Hover анимация для ссылки
    if (linkRef.current) {
      const hoverTl = gsap.timeline({ paused: true });

      hoverTl.to(linkRef.current, {
        scale: 1.02,
        borderColor: "#000",
        duration: 0.3,
        ease: "power2.out",
      });

      linkRef.current.addEventListener("mouseenter", () => hoverTl.play());
      linkRef.current.addEventListener("mouseleave", () => hoverTl.reverse());
    }

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <Container>
      <main className='mt-20 mobile:mt-5'>
        <div className='flex mobile:hidden   items-end tablet:items-start tablet:flex-col justify-between mb-[79px] desktop:mb-12'>
          <h1
            ref={headerRef}
            className='text-black  font-medium text-[92px] desktop:text-[80px] tablet:text-[62px] tablet:mb-[46px] leading-[109.79px] w-[1240px] tablet:w-full tablet:leading-normal'
          >
            {t("mainTitle")}
          </h1>
          <div
            ref={containerRef}
            className='flex items-center desktop:flex-col tablet:flex-row gap-[25px] mb-5 perspective-1000'
          >
            <div ref={modalRef}>
              <FormModal />
            </div>
            <Link
              ref={linkRef}
              href={"#" as never}
              className='w-[292px] desktop:w-[330px] h-[57px] rounded-[60px] flex items-center pl-[27px] border-[2px] border-[#6C6C6C]'
            >
              <p className='text-[24px] text-black leading-[28.64px] font-medium'>
                {t("copyMail")}
              </p>
            </Link>
          </div>
        </div>
        <div
          ref={(el) => addToRefs(el, 0)}
          className='flex tablet:flex-col items-center gap-6 tablet:gap-8 pb-[130px] mb-20 desktop:mb-[72px] tablet:mb-[49px] mobile:mb-8 border-b-[1px] tablet:border-none tablet:pb-0 border-[#CFCFCF]'
        >
          <div className='relative w-[924px] hover:scale-105 transition-all duration-300 tablet:w-full mobile:h-[427px] h-[770px] desktop:w-[684px] desktop:h-[704px] tablet:h-[770px] rounded-[30px]'>
            <Image
              src={"/assets/icons/uiux.jpg"}
              alt='uiux'
              width={924}
              height={770}
              className='w-full h-full object-cover rounded-[30px]'
            />
            <p className='font-bold text-[64px] mobile:text-[36px] text-white absolute bottom-[66px] left-[220px] desktop:left-[129px] mobile:left-[0px] mobile:bottom-[20px] mobile:w-full mobile:text-center'>
              UX/UI DESIGN
            </p>
          </div>
          <div className='relative w-[924px] h-[770px] hover:scale-105 transition-all duration-300 mobile:h-[427px] tablet:w-full desktop:w-[684px] desktop:h-[704px] tablet:h-[770px] rounded-[30px]'>
            <Image
              src={"/assets/icons/development.jpg"}
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
        <TextBlock />
        <div className='flex gap-6 mobile:gap-8 mb-[130px] desktop:mb-[92px] mobile:mb-10 tablet:flex-col'>
          {cases.map((data, i) => (
            <Case
              index={i}
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
        {/* <div className='flex justify-center mb-[130px] desktop:mb-[92px] mobile:mb-10'>
          <button className='text-start w-[292px] h-[57px] border-[2px] rounded-[60px] border-[#6C6C6C] pl-[27px] text-[24px] font-medium leading-[28.64px] text-black'>
            {t("moreWorks")}
          </button>
        </div> */}
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
        <AboutUs />
        <Contacts />
      </main>
    </Container>
  );
}
