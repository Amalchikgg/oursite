/* eslint-disable @next/next/no-img-element */
"use client";
import { sliderCases } from "@/constants/mockData";
import { Link } from "@/middleware";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperClass, SwiperSlide } from "swiper/react";

const CaseSlider = () => {
  const secondSlideRef = useRef<SwiperClass>();
  const [width, $width] = useState(1920);

  useEffect(() => {
    if (window.screen.width <= 768) {
      $width(768);
    }
  }, []);

  return (
    <Swiper
      onSwiper={(it) => (secondSlideRef.current = it)}
      modules={[Navigation, Pagination, Autoplay]}
      spaceBetween={200}
      slidesPerView={width <= 768 ? 1 : 3}
      autoplay
      centeredSlides={true}
      className='relative mb-[125px] mobile:w-full'
      slideToClickedSlide={true}
    >
      {sliderCases.map((project) => (
        <SwiperSlide key={project.image}>
          {({ isActive }) => (
            <div
              className={`transition-all duration-300  ${
                isActive
                  ? "scale-100 opacity-100 z-[10]"
                  : "scale-[0.85] mt-[-25px] opacity-20 tablet:opacity-0"
              }`}
            >
              <div className='flex flex-col items-center'>
                <div className='relative w-[767px] desktop:w-[575px] h-[596px] mobile:w-[343px] mobile:h-[343px] rounded-lg overflow-hidden shadow-lg mb-[58px]'>
                  <img
                    src={`/assets/images/${project.image}`}
                    alt={project.logo}
                    className='w-full h-full object-cover'
                  />
                </div>

                <div
                  className={` text-center flex flex-col items-center transition-opacity duration-300 ${
                    isActive ? "opacity-100" : "opacity-0"
                  }`}
                >
                  <div className='flex items-center justify-between w-full'>
                    <button
                      onClick={() => secondSlideRef.current?.slidePrev()}
                      className='w-[34px] transition-all duration-[210ms] bg-white hv flex-shrink-0 active:scale-95 h-[34px]  flex items-center justify-center border rounded-[6px] border-[#DCDCDC] '
                    >
                      <Image
                        src={"/assets/icons/arrowLeft.svg"}
                        alt='arrow'
                        width={15.86}
                        height={15.86}
                      />
                    </button>
                    <img
                      src={`/assets/icons/${project.logo}.svg`}
                      alt={project.logo}
                      className={project.logoClass}
                    />
                    <button
                      onClick={() => secondSlideRef.current?.slideNext()}
                      className='w-[34px] transition-all duration-[210ms] bg-white hv flex-shrink-0 active:scale-95 h-[34px]  flex items-center justify-center border rounded-[6px] border-[#DCDCDC] '
                    >
                      <Image
                        src={"/assets/icons/arrowRight.svg"}
                        alt='arrow'
                        width={15.86}
                        height={15.86}
                      />
                    </button>
                  </div>
                  <p className='w-[573px] mobile:w-[343px] font-medium text-[#212121] text-[32px] mb-[52px] text-start leading-[40px] mt-[54px]'>
                    {project.text}
                  </p>
                  <Link href={project.link as never}>
                    <button className='border-[2px] gap-2.5 hv bg-white rounded-[6px] border-[#DCDCDC] flex items-center justify-center w-[209px] h-[57px] active:scale-95 transition-all duration-[210ms]'>
                      <Image
                        src={"/assets/icons/open.svg"}
                        alt='open'
                        width={24}
                        height={24}
                      />
                      <p className='font-medium text-[#212121] text-[24px]'>
                        Открыть кейс
                      </p>
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          )}
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default CaseSlider;
