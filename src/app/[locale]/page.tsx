/* eslint-disable @next/next/no-img-element */
"use client";
import { useTranslations } from "next-intl";
import Container from "@/components/Container";
import Contacts from "@/components/Contacts";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import Image from "next/image";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { useEffect, useRef, useState } from "react";
import MainSlider from "@/components/MainSlider";
import CaseSlider from "@/components/CaseSlider";
import AboutUs from "@/components/AboutUs";
import FormModal from "@/components/FormModal";

gsap.registerPlugin(ScrollTrigger);
function useArrayRef<T>(): [
  React.MutableRefObject<T[]>,
  (ref: T | null) => void
] {
  const refs = useRef<T[]>([]);
  refs.current = [];
  return [refs, (ref) => ref && refs.current.push(ref)];
}

export default function Home() {
  const t = useTranslations("Index");
  const [isMounted, setIsMounted] = useState(false);
  const [lettersRef, setLettersRef] = useArrayRef<HTMLSpanElement>();
  const triggerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (isMounted) {
      const anim = gsap.to(lettersRef.current, {
        scrollTrigger: {
          trigger: triggerRef.current,
          scrub: true,
          start: "top center",
          end: "bottom 85%",
        },
        color: "#2A2A2A",
        duration: 5,
        stagger: 1,
      });
      return () => {
        anim.kill();
      };
    }
  }, [isMounted, lettersRef]);

  const text =
    "Мы - команда из Узбекистана 🇺🇿 специализрующаяся на веб-дизайне и разработке, ежедневно сочетающая инновации и креативность. Свяжитесь с нами 📝 чтобы превратить ваши идеи в запоминающиеся цифровые решения.";

  return (
    <Container>
      <main className='mt-20 mobile:mt-5'>
        <div className='flex items-center justify-center mb-3'>
          <div className='flex container-fade-up items-center justify-center gap-2.5 px-[27px] py-[14px] mobile:py-2 mobile:px-[11.5px] bg-[#FFE2C9] rounded-[6px]'>
            <p className='text-[#DC5400] text-slide-in text-[24px] font-bold mobile:text-[20px] leading-none'>
              ПРИВЕТ!
            </p>
            <p className='text-[24px] emoji-slide-in font-bold mobile:text-[20px] leading-none'>
              😊
            </p>
          </div>
        </div>
        <p className='text-[110px]  fade-in-up delay-1 tablet:text-[64px] mobile:text-[40px] mobile:leading-[45px] tablet:font-medium tablet:leading-[80px] text-[#212121] text-center tracking-[-3px] leading-[120px] mb-8'>
          Воплощаем идеи в стильные и{" "}
          <span className='font-medium italic tablet:font-semibold'>
            функциональные
          </span>{" "}
          сайты
        </p>
        <div className='flex items-center justify-center gap-8 mb-20 mobile:mb-10 mobile:gap-4 mobile:flex-col'>
          <FormModal writeUs />
          <button className='flex mobile:w-full items-center gap-2.5 pl-[27px] border-[2px] border-[#DCDCDC] h-[57px] w-[300px] rounded-[6px] transition-all duration-[210ms] active:scale-95'>
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
        <MainSlider />

        <div className='w-full h-[1px] bg-[#EAEAEA] mb-[82px]' />

        {isMounted && (
          <div ref={triggerRef} className='mb-[82px] mobile:mb-10'>
            {text.split("").map((letter, index) => (
              <span
                key={index}
                ref={setLettersRef}
                className='letter text-[52px] mobile:text-[32px] text-[#BABABA] font-medium'
              >
                {letter}
              </span>
            ))}
          </div>
        )}
        <div className='w-full h-[1px] bg-[#EAEAEA] mb-[145px] mobile:mb-[82px]' />
        <div id='cases' className='flex items-center justify-center mb-[99px]'>
          <p className='text-[#9E00DC] font-bold text-[24px] leading-none bg-[#E1C9FF] rounded-[6px] py-[14px] px-[46px]'>
            КЕЙСЫ
          </p>
        </div>
        <CaseSlider />
        <AboutUs />
        <Contacts />
      </main>
    </Container>
  );
}
