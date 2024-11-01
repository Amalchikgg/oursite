"use client";
import { useTranslations } from "next-intl";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const TextBlock = () => {
  const t = useTranslations("Index");
  const textRef = useRef<HTMLParagraphElement>(null);
  const textParts = useRef<(HTMLSpanElement | null)[]>([]);

  useEffect(() => {
    if (!textRef.current) return;

    // Очищаем содержимое
    const textContent = textRef.current.innerHTML;
    textRef.current.innerHTML = "";

    // Создаем контейнеры для каждой части текста
    const part1Container = document.createElement("span");
    const part2Container = document.createElement("span");
    const part3Container = document.createElement("span");

    // Добавляем классы и контент
    part2Container.className = "font-bold";
    part1Container.textContent = t("weText1");
    part2Container.textContent = t("contactUs");
    part3Container.textContent = t("weText2");

    // Оборачиваем каждое слово в span для анимации
    [part1Container, part2Container, part3Container].forEach(
      (container, index) => {
        const text = container.textContent || "";
        container.textContent = "";

        const words = text.split(" ");

        words.forEach((word, wordIndex) => {
          const wordSpan = document.createElement("span");
          wordSpan.style.display = "inline-block";
          wordSpan.style.opacity = "0";
          wordSpan.style.transform = "translateY(20px)";
          wordSpan.innerHTML =
            wordIndex === words.length - 1 ? word : word + "&nbsp;";

          container.appendChild(wordSpan);
          textParts.current.push(wordSpan);
        });
      }
    );

    // Добавляем все части в основной контейнер
    textRef.current.appendChild(part1Container);
    textRef.current.appendChild(part2Container);
    textRef.current.appendChild(part3Container);

    // Создаем анимацию
    gsap.fromTo(
      textParts.current,
      {
        opacity: 0,
        y: 20,
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: "power4.out",
        scrollTrigger: {
          trigger: textRef.current,
          start: "top bottom-=150",
          toggleActions: "play none none none", // Изменили на "play none none none"
          once: true, // Добавили это свойство
        },
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, [t]);

  return (
    <p
      ref={textRef}
      id='cases'
      className='text-black text-[64px] desktop:text-[48px] mobile:text-[28px] mobile:mb-[54px] font-medium mb-20 desktop:mb-[55px] tablet:mb-[73px]'
    >
      {t("weText1")}
      <span className='font-bold'>{t("contactUs")}</span>
      <span>{t("weText2")}</span>
    </p>
  );
};

export default TextBlock;
