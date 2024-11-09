import Image from "next/image";
import { useEffect } from "react";

const AboutUs = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
          }
        });
      },
      {
        threshold: 0.3,
      }
    );

    const hiddenElements = document.querySelectorAll(".fade-in");
    hiddenElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <style jsx>{`
        .fade-in {
          opacity: 0;
          visibility: hidden;
          transition: all 1s ease;
        }

        .fade-in.slide-up {
          transform: translateY(50px);
        }

        .fade-in.slide-left {
          transform: translateX(-50px);
        }

        .fade-in.slide-right {
          transform: translateX(50px);
        }

        .fade-in.delay-1 {
          transition-delay: 0.2s;
        }

        .fade-in.delay-2 {
          transition-delay: 0.4s;
        }

        .fade-in.delay-3 {
          transition-delay: 0.6s;
        }

        .fade-in.show {
          opacity: 1;
          transform: translate(0);
          visibility: visible;
        }
      `}</style>

      <div className='flex items-center justify-center mb-[125px]'>
        <p className='fade-in slide-up text-[#079D0C] font-bold text-[24px] leading-none bg-[#DAFFC9] rounded-[6px] py-[14px] px-[46px]'>
          О НАС
        </p>
      </div>

      <div
        id='aboutUs'
        className='flex gap-[100px] mb-[133px] mobile:gap-[50px] tablet:flex-col'
      >
        <div className='flex-1'>
          {/* Изображение */}
          <div className='fade-in slide-left'>
            <Image
              src={"/assets/icons/eatsSlideCase.jpg"}
              alt='me'
              width={629}
              height={549}
              className='w-full mobile:h-[343px] rounded-[6px] object-cover mb-[54px] mobile:mb-8'
            />
          </div>
          {/* Тексты */}
          <p className='fade-in slide-up delay-1 text-[52px] mobile:text-[32px] font-medium text-[#C0C0C0] mb-5 leading-none'>
            UI/UX designer
          </p>
          <p className='fade-in slide-up delay-2 text-[#212121] font-medium text-[40px] mobile:text-[28px]'>
            Привет! Меня зовут Жавохир — ваш фриланс-дизайнер цифровых UI/UX и
            продуктов. Базируюсь в Ташкенте, Узбекистан.
          </p>
        </div>

        <div className='flex-1'>
          {/* Изображение */}
          <div className='fade-in slide-right delay-1'>
            <Image
              src={"/assets/icons/eatsSlideCase.jpg"}
              alt='me'
              width={629}
              height={549}
              className='w-full object-cover mobile:h-[343px] rounded-[6px] mb-[54px] mobile:mb-8'
            />
          </div>
          {/* Тексты */}
          <p className='fade-in slide-up delay-2 text-[52px] font-medium mobile:text-[32px] text-[#C0C0C0] mb-5 leading-none'>
            Developer
          </p>
          <p className='fade-in slide-up delay-3 text-[#212121] font-medium text-[40px] mobile:text-[28px]'>
            Привет! Меня зовут Амаль — Фрилансер-разработчик, специализируюсь на
            веб-сайтах и мобильных приложениях. Базируюсь в Ташкенте,
            Узбекистан.
          </p>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
