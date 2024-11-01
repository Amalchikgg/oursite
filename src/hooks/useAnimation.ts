import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

export const useAnimation = () => {
  const headerRef = useRef<HTMLParagraphElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const textContentRef = useRef<HTMLDivElement>(null);
  const imagesRef = useRef<(HTMLDivElement | null)[]>([]);
  const headerCharsRef = useRef<(HTMLSpanElement | null)[]>([]);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Анимация для заголовка
    if (headerRef.current) {
      const text = headerRef.current.textContent || "";
      headerRef.current.textContent = "";

      // Разбиваем текст на массив символов, сохраняя пробелы
      text.split("").forEach((char, i) => {
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

        span.style.opacity = "0";
        span.style.transform = "translateY(100%)";
        headerRef.current?.appendChild(span);
        headerCharsRef.current.push(span);
      });

      gsap.to(headerCharsRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.05,
        ease: "back.out(1.7)",
      });
    }

    // Новая анимация для основного текста
    if (textRef.current && textContentRef.current) {
      // Создаем маску для текста
      const mask = document.createElement("div");
      mask.style.position = "absolute";
      mask.style.top = "0";
      mask.style.left = "0";
      mask.style.right = "0";
      mask.style.bottom = "0";
      mask.style.background =
        "linear-gradient(90deg, transparent, white 50%, transparent)";
      mask.style.transform = "translateX(-100%)";
      textRef.current.style.position = "relative";
      textRef.current.style.overflow = "hidden";
      textRef.current.appendChild(mask);

      // Анимация текста и маски
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: textRef.current,
          start: "top bottom-=100",
          toggleActions: "play none none reverse",
        },
      });

      tl.set(textContentRef.current, { opacity: 0 })
        .fromTo(
          mask,
          { x: "-100%" },
          {
            x: "100%",
            duration: 1.2,
            ease: "power2.inOut",
          }
        )
        .to(
          textContentRef.current,
          {
            opacity: 1,
            duration: 0.1,
          },
          0
        )
        .from(
          textContentRef.current.children,
          {
            y: 50,
            opacity: 0,
            duration: 0.8,
            stagger: 0.1,
            ease: "power2.out",
          },
          0.3
        );
    }

    // Анимация для изображений
    imagesRef.current.forEach((img) => {
      if (!img) return;

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: img,
          start: "top bottom-=100",
          end: "top center",
          toggleActions: "play none none reverse",
        },
      });

      tl.from(img, {
        clipPath: "inset(0 100% 0 0)",
        duration: 1.2,
        ease: "power4.inOut",
      })
        .from(
          img.querySelectorAll("img"),
          {
            scale: 0.6,
            duration: 1.4,
            ease: "power2.out",
          },
          0
        )
        .from(
          img,
          {
            opacity: 0.3,
            duration: 0.8,
            ease: "power2.inOut",
          },
          0
        );
    });

    // Анимация для тегов
    gsap.from(".tag-item", {
      y: 30,
      opacity: 0,
      duration: 0.6,
      stagger: 0.1,
      ease: "power2.out",
      scrollTrigger: {
        trigger: ".tag-container",
        start: "top bottom-=50",
        toggleActions: "play none none reverse",
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  const addToRefs = (el: HTMLDivElement | null, index: number) => {
    if (el) {
      imagesRef.current[index] = el;
    }
  };

  return {
    addToRefs,
    headerRef,
    textContentRef,
    textRef,
  };
};
