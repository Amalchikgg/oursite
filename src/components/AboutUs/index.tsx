import Image from "next/image";
import { useEffect } from "react";
import FollowingAvatar from "../FolowingAvatar";
import { services } from "@/constants/mockData";
import FormModal from "../FormModal";

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
          transform: translateY(3.125rem); /* 50px */
        }

        .fade-in.slide-left {
          transform: translateX(-3.125rem); /* -50px */
        }

        .fade-in.slide-right {
          transform: translateX(3.125rem); /* 50px */
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
      <div
        id='services'
        className='flex fade-in slide-up items-center justify-center mb-[7.875rem]' /* 126px */
      >
        <p className='text-[#079D0C] font-bold text-[1.5rem] leading-none bg-[#DAFFC9] rounded-[0.375rem] py-[0.875rem] px-[2.875rem]'>
          СЕРВИСЫ
        </p>
      </div>
      <div className='flex items-center justify-between mb-[8.125rem] tablet:flex-col tablet:gap-[3.875rem]'>
        {services.map((data) => (
          <div
            key={data.title}
            className='h-[54em] fade-in slide-up w-[28.125rem] tablet:h-auto gap-[0.625rem] tablet:gap-12 tablet:w-[33.375rem] mobile:w-full flex flex-col items-center justify-between'
          >
            <div>
              <div className='w-[28rem] tablet:w-[33.375rem] mobile:w-full mobile:h-[21.4375rem] tablet:mb-8 h-[28.5rem] rounded-[0.375rem] mb-10'>
                <Image
                  src={`/assets/images/${data.image}.jpg`}
                  alt='landing'
                  width={448}
                  height={456}
                  className='w-full h-full object-cover rounded-[0.375rem]'
                />
              </div>
              <p className='font-medium text-[2.25rem] leading-none mobile:text-[1.5rem] tablet:mb-8 text-[#C0C0C0] mb-5'>
                {data.title}
              </p>
              <p className='font-medium text-[1.5rem] w-[95%] leading-[110%] mobile:text-[1.25rem] text-[#212121]'>
                {data.text}
              </p>
            </div>
            <FormModal service />
          </div>
        ))}
      </div>
    </>
  );
};

export default AboutUs;
