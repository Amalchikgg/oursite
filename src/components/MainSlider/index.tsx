"use client";
import Image from "next/image";
import React, { useRef } from "react";
import { A11y, Autoplay, Navigation, Scrollbar } from "swiper/modules";
import { Swiper, SwiperClass, SwiperSlide } from "swiper/react";

const MainSlider = () => {
  const slideRef = useRef<SwiperClass>();
  return (
    <>
      <div className='flex items-center justify-center mb-10'>
        <Swiper
          onSwiper={(it) => (slideRef.current = it)}
          slidesPerView={1}
          autoplay
          modules={[Navigation, Scrollbar, A11y, Autoplay]}
          className='w-[924px] h-[596px] tablet:w-[720px] tablet:h-[460px] mobile:w-[335px] mobile:h-[308px]'
        >
          {["storeSlide", "magentaSlide", "storeSlide2", "storeSlide3"].map(
            (image, i) => (
              <SwiperSlide key={i}>
                <div className='w-[924px] h-[596px] rounded-[6px] tablet:w-[720px] tablet:h-[460px] mobile:w-[335px] mobile:h-[308px]'>
                  <Image
                    src={`/assets/images/${image}.webp`}
                    alt='magenta'
                    width={924}
                    height={596}
                    className='w-full h-full object-cover rounded-[6px]'
                  />
                </div>
              </SwiperSlide>
            )
          )}
        </Swiper>
      </div>
      <div className='flex items-center justify-center gap-20 mb-[82px]'>
        <button
          onClick={() => slideRef.current?.slidePrev()}
          className='w-[34px] transition-all bg-white hv duration-[210ms] active:scale-95 h-[34px]  flex items-center justify-center border rounded-[6px] border-[#DCDCDC] '
        >
          <Image
            src={"/assets/icons/arrowLeft.svg"}
            alt='arrow'
            width={15.86}
            height={15.86}
          />
        </button>
        <button
          onClick={() => slideRef.current?.slideNext()}
          className='w-[34px] transition-all bg-white hv duration-[210ms] active:scale-95 h-[34px]  flex items-center justify-center border rounded-[6px] border-[#DCDCDC] '
        >
          <Image
            src={"/assets/icons/arrowRight.svg"}
            alt='arrow'
            width={15.86}
            height={15.86}
          />
        </button>
      </div>
    </>
  );
};

export default MainSlider;
