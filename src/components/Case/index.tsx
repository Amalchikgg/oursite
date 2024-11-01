import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { Link } from "@/middleware";

gsap.registerPlugin(ScrollTrigger);

interface ProjectCardProps {
  link: string;
  image: {
    desktop: string;
    tablet: string;
    mobile: string;
  };
  icon?: React.ReactNode;
  title: string;
  text: string;
  titleColor: string;
  index: number; // Добавляем индекс для stagger эффекта
}

const ProjectCard = ({
  link,
  image,
  icon,
  title,
  text,
  titleColor,
  index,
}: ProjectCardProps) => {
  const cardRef = useRef<HTMLAnchorElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    if (!cardRef.current || !imageRef.current || !textRef.current) return;

    // Начальные стили
    gsap.set(imageRef.current, {
      opacity: 0,
      y: 50,
      scale: 0.95,
    });

    gsap.set(textRef.current, {
      opacity: 0,
      y: 20,
    });

    // Анимация появления
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: cardRef.current,
        start: "top bottom-=100",
        toggleActions: "play none none none",
        once: true,
      },
    });

    tl.to(imageRef.current, {
      opacity: 1,
      y: 0,
      scale: 1,
      duration: 0.8,
      ease: "power3.out",
      delay: index * 0.2, // Задержка в зависимости от индекса карточки
    }).to(
      textRef.current,
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        ease: "power2.out",
      },
      "-=0.4"
    );

    // Hover анимации
    if (imageRef.current) {
      // Создаем hover эффект для изображения
      const hoverTl = gsap.timeline({ paused: true });

      hoverTl
        .to(imageRef.current, {
          scale: 1.05,
          duration: 0.3,
          ease: "power2.out",
        })
        .to(
          imageRef.current.querySelector(".overlay"),
          {
            backgroundColor: "rgba(0, 0, 0, 0.4)",
            duration: 0.3,
          },
          0
        );

      // Добавляем слушатели событий
      cardRef.current.addEventListener("mouseenter", () => hoverTl.play());
      cardRef.current.addEventListener("mouseleave", () => hoverTl.reverse());
    }

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, [index]);

  return (
    <Link
      href={link as never}
      className='w-[608px] desktop:w-[448px] tablet:w-full block'
      ref={cardRef}
    >
      <div
        ref={imageRef}
        className='relative w-[608px] h-[425px] mb-7 desktop:w-[448px] rounded-[30px] desktop:h-[321px] tablet:w-full overflow-hidden'
      >
        {/* Добавляем оверлей для hover эффекта */}

        <Image
          src={`/assets/icons/${image.desktop}.jpg`}
          alt='image'
          width={608}
          height={425}
          className='desktop:w-[448px] desktop:h-[321px] tablet:hidden object-cover transform-gpu'
        />
        <Image
          src={`/assets/icons/${image.tablet}.jpg`}
          alt='image'
          width={720}
          height={321}
          className='tablet:block hidden mobile:hidden object-cover transform-gpu'
        />
        <Image
          src={`/assets/icons/${image.mobile}.jpg`}
          alt='image'
          width={343}
          height={321}
          className='hidden mobile:block object-cover transform-gpu'
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

      <p ref={textRef} className={`${titleColor} text-[20px] font-bold`}>
        {title}
        <span className='text-black font-medium'> | {text}</span>
      </p>
    </Link>
  );
};

export default ProjectCard;
