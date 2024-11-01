import { contacts } from "@/constants/mockData";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

const Contacts = () => {
  const t = useTranslations("Index");
  const titleRef = useRef<HTMLParagraphElement>(null);
  const imagesContainerRef = useRef<HTMLDivElement>(null);
  const imagesRef = useRef<(HTMLImageElement | null)[]>([]);

  useEffect(() => {
    if (!titleRef.current || !imagesContainerRef.current) return;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: titleRef.current,
        start: "top bottom-=100",
        toggleActions: "play none none none",
        once: true,
      },
    });

    // Анимация заголовка
    const titleText = titleRef.current.textContent || "";
    titleRef.current.textContent = "";

    const chars = titleText.split("").map((char) => {
      const span = document.createElement("span");
      span.textContent = char;
      span.style.display = "inline-block";
      span.style.opacity = "0";
      span.style.transform = "translateY(20px)";
      titleRef.current?.appendChild(span);
      return span;
    });

    // Сначала делаем границу прозрачной
    gsap.set(titleRef.current, {
      borderBottomColor: "transparent",
    });

    // Анимируем буквы и границу
    tl.to(chars, {
      opacity: 1,
      y: 0,
      duration: 0.8,
      stagger: 0.02,
      ease: "power3.out",
    }).to(
      titleRef.current,
      {
        borderBottomColor: "#CFCFCF",
        duration: 0.6,
        ease: "power2.inOut",
      },
      "-=0.4"
    );

    // Анимация изображений
    gsap.set(imagesRef.current, {
      opacity: 0,
      y: 50,
      scale: 0.95,
    });

    tl.to(
      imagesRef.current,
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.8,
        stagger: 0.2,
        ease: "power3.out",
      },
      "-=0.2"
    );

    // Добавляем hover эффект для изображений
    imagesRef.current.forEach((img) => {
      if (!img) return;

      const hoverTl = gsap.timeline({ paused: true });

      hoverTl.to(img, {
        scale: 1.05,
        duration: 0.3,
        ease: "power2.out",
      });

      img.addEventListener("mouseenter", () => hoverTl.play());
      img.addEventListener("mouseleave", () => hoverTl.reverse());
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  const addToImagesRef = (el: HTMLImageElement | null, index: number) => {
    if (el) {
      imagesRef.current[index] = el;
    }
  };

  return (
    <>
      <p
        ref={titleRef}
        id='contacts'
        className='text-[#1D1D1D] border-b-[1px] mobile:mb-[48px] mobile:text-[48px] border-[#CFCFCF] pb-[52px] tablet:pb-7 tablet:mb-10 text-[72px] tablet:text-[64px] mb-[100px]'
      >
        {t("contacts")}
      </p>

      <div
        ref={imagesContainerRef}
        className='flex items-center justify-between mb-20 tablet:flex-col tablet:gap-5'
      >
        {contacts.map((data, i) => (
          <div key={data.desktop}>
            <Image
              ref={(el) => addToImagesRef(el as HTMLImageElement, i * 2)}
              src={`/assets/icons/${data.desktop}.svg`}
              alt={data.desktop}
              width={351}
              height={291}
              className='cursor-pointer desktop:w-[330px] tablet:hidden'
            />
            <Image
              ref={(el) => addToImagesRef(el as HTMLImageElement, i * 2 + 1)}
              src={`/assets/icons/${data.tablet}.svg`}
              alt={data.tablet}
              width={720}
              height={291}
              className='cursor-pointer tablet:block hidden'
            />
          </div>
        ))}
      </div>
    </>
  );
};

export default Contacts;
