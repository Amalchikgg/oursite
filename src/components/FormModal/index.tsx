"use client";
import { Link } from "@/middleware";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { useState } from "react";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import Modal from "react-modal";
import InputMask from "react-input-mask";

interface Form {
  name: string;
  phone: string;
}

const FormModal = ({ writeUs }: { writeUs?: boolean }) => {
  const t = useTranslations("Index");
  const [open, $open] = useState(false);
  const {
    register,
    reset,
    formState: { errors, isLoading, isSubmitted },
    handleSubmit,
    control,
  } = useForm<Form>({
    mode: "onChange",
  });

  const onSunmit: SubmitHandler<Form> = (data) => {
    console.log(data);
    reset({ phone: "", name: "" });
  };
  return (
    <>
      {writeUs ? (
        <button
          onClick={() => $open(true)}
          className='flex mobile:w-full items-center gap-2.5 pl-[27px] bg-[#212121] h-[57px] w-[292px] rounded-[6px] transition-all duration-[210ms] hover:bg-[#252525] active:scale-95'
        >
          <p className='font-medium text-[24px] text-white'>Написать нам</p>
          <Image
            src={"/assets/icons/arrowWhite.svg"}
            alt='arrow'
            width={32}
            height={1}
          />
        </button>
      ) : (
        <button
          onClick={() => $open(true)}
          className='border-[2px] tablet:hidden bg-[#212121] text-white border-[#6C6C6C] h-[57px] w-[247px] rounded-[6px] font-medium text-[24px] transition-all duration-[210ms] hover:bg-[#252525] active:scale-95'
        >
          Отправить заявку
        </button>
      )}

      <Modal
        isOpen={open}
        onRequestClose={() => $open(false)}
        className='bg-white w-[598px] h-auto mobile:w-[335px] py-24 mobile:px-5 mobile:py-10 px-16 rounded-[6px] tablet:h-[auto] flex flex-col justify-center items-center relative outline-none' // Стили Tailwind для модалки
        overlayClassName='fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-[100]'
      >
        <div
          onClick={() => $open(false)}
          className='w-[34px] cursor-pointer transition-all duration-[350ms] h-[34px] rounded-[6px] flex items-center justify-center absolute top-5 right-5 hover:bg-[#F2F2F2] border border-[#DCDCDC]'
        >
          <Image
            src={"/assets/icons/close.svg"}
            alt='close'
            width={12}
            height={12}
          />
        </div>
        <Image
          src={"/assets/icons/logo.svg"}
          alt='logo'
          width={71}
          height={71}
          className='mb-7'
        />
        <p className='mb-7 font-bold text-[#212121] text-[24px] text-center'>
          Начни творить вместе с нами!
        </p>
        <form className='w-full' onSubmit={handleSubmit(onSunmit)}>
          <input
            {...register("name", { required: "Пожалуйста введите имя" })}
            className='border w-full pl-3 hover:bg-[#F2F2F2] transition-all duration-[350ms] border-[#DCDCDC] outline-none rounded-[6px] h-12 '
            placeholder='Ваше имя'
          />
          {errors.name && (
            <span className='-mt-2 text-[#C3413B] text-xs'>
              {errors.name.message}
            </span>
          )}
          <div
            className={`relative w-full flex items-center my-3 border hover:bg-[#F2F2F2] transition-all duration-[350ms] border-[#DCDCDC] rounded-[6px] ${
              errors.phone && "mb-8"
            }`}
          >
            <Controller
              name='phone'
              control={control}
              rules={{
                required: "Пожалуйста введите номер телефона",
                pattern: {
                  value: /\d{2} \d{3} \d{2} \d{2}$/,
                  message: "Введите корректный номер телефона",
                },
              }}
              render={({ field: { onChange, value } }) => (
                <InputMask
                  mask={"+\\9\\98 99 999 99 99"}
                  maskChar={null}
                  value={value}
                  onChange={onChange}
                  type='tel'
                  className=' w-full pl-3  outline-none rounded-[6px] h-12'
                  placeholder='Номер телефона'
                />
              )}
            />
            {errors.phone && (
              <span className='absolute bottom-[-20px] text-[#C3413B] text-xs'>
                {errors.phone.message}
              </span>
            )}
          </div>
          <button
            type='submit'
            className={`w-full h-12 rounded-[6px] transition-all duration-[210ms] bg-[#212121] text-white font-bold hover:bg-[#252525] active:scale-95 ${
              isLoading && "opacity-40"
            } ${isSubmitted && "!bg-[#1A6C01] hover:bg-[#1A6C01]"}`}
          >
            {isLoading
              ? "Отправка..."
              : isSubmitted
              ? "Отправлено"
              : "Отправить"}
          </button>
        </form>
      </Modal>
    </>
  );
};

export default FormModal;
