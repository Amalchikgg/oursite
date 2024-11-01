import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface Props {
  title: string;
  last?: boolean;
}

const Service = ({ title, last }: Props) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    if (!containerRef.current || !textRef.current) return;

    // Разбиваем текст на буквы для анимации
    const text = textRef.current.textContent || "";
    textRef.current.textContent = "";

    const chars = text.split("").map((char) => {
      const span = document.createElement("span");
      if (char === " ") {
        // Для пробела создаем special span с фиксированной шириной
        span.innerHTML = "&nbsp;";
        span.style.display = "inline-block";
        span.style.width = "0.3em"; // Можно настроить ширину пробела
      } else {
        span.textContent = char;
        span.style.display = "inline-block";
      }
      span.style.display = "inline-block";
      span.style.opacity = "0";
      span.style.transform = "translateY(100%)";
      textRef.current?.appendChild(span);
      return span;
    });

    // Создаем анимацию
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top bottom-=100",
        toggleActions: "play none none none",
        once: true,
      },
    });

    // Анимация букв
    tl.to(chars, {
      opacity: 1,
      y: 0,
      duration: 0.8,
      stagger: 0.02,
      ease: "power4.out",
    });

    // Анимация границы (если не последний элемент)
    if (!last && containerRef.current) {
      // Сначала скрываем границу
      gsap.set(containerRef.current, {
        borderBottomColor: "transparent",
      });

      // Анимируем появление границы
      tl.to(
        containerRef.current,
        {
          borderBottomColor: "#CFCFCF",
          duration: 0.6,
          ease: "power2.inOut",
        },
        "-=0.3"
      );
    }

    // Добавляем hover эффект
    if (containerRef.current) {
      const hoverTl = gsap.timeline({ paused: true });

      hoverTl.to(chars, {
        color: "#666",
        duration: 0.3,
        stagger: {
          each: 0.02,
          from: "random",
        },
      });

      const handleMouseEnter = () => hoverTl.play();
      const handleMouseLeave = () => hoverTl.reverse();

      containerRef.current.addEventListener("mouseenter", handleMouseEnter);
      containerRef.current.addEventListener("mouseleave", handleMouseLeave);

      return () => {
        containerRef.current?.removeEventListener(
          "mouseenter",
          handleMouseEnter
        );
        containerRef.current?.removeEventListener(
          "mouseleave",
          handleMouseLeave
        );
        ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      };
    }
  }, [last]);

  return (
    <div
      ref={containerRef}
      className={`cursor-pointer flex items-center justify-between relative ${
        last
          ? "!pb-[175px] desktop:!pb-[92px] tablet:!pb-8 !mb-[130px] tablet:!mb-8 tablet:border-none"
          : "pb-[45px] mb-[45px]"
      }`}
    >
      <p
        ref={textRef}
        className='font-medium text-[92px] desktop:text-[88px] tablet:text-[48px] mobile:text-[36px] text-black leading-[109.79px] tablet:leading-normal'
      >
        {title}
      </p>
      {/* Линия разделителя */}
      {!last && (
        <div className='heading-line absolute bottom-0 left-0 w-full h-[1px] bg-[#CFCFCF]' />
      )}
    </div>
  );
};

export default Service;
