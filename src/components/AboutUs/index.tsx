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
      <div
        id='services'
        className='flex fade-in slide-up items-center justify-center mb-[126px]'
      >
        <p className='text-[#079D0C] font-bold text-[24px] leading-none bg-[#DAFFC9] rounded-[6px] py-[14px] px-[46px]'>
          СЕРВИСЫ
        </p>
      </div>
      <div className='flex items-center justify-between mb-[130px] tablet:flex-col tablet:gap-[62px]'>
        {services.map((data) => (
          <div
            key={data.title}
            className='h-[950px] fade-in slide-up w-[450px] tablet:h-[auto] gap-10 tablet:w-[534px] mobile:w-full flex flex-col items-center justify-between'
          >
            <div>
              <div className='w-[450px] tablet:w-[534px] mobile:w-full mobile:h-[343px] tablet:mb-8 h-[456px] rounded-[6px] mb-5'>
                <Image
                  src={`/assets/images/${data.image}.jpg`}
                  alt='landing'
                  width={450}
                  height={456}
                  className='w-full h-full object-cover rounded-[6px]'
                />
              </div>
              <p className='font-medium text-[36px] leading-none mobile:text-[24px] tablet:mb-8 text-[#C0C0C0] mb-5'>
                {data.title}
              </p>
              <p className='font-medium text-[32px] leading-[110%] mobile:text-[20px] text-[#212121]'>
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
