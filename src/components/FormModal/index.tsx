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

const FormModal = ({
  writeUs,
  service,
}: {
  writeUs?: boolean;
  service?: boolean;
}) => {
  const t = useTranslations("Index");
  const [open, $open] = useState(false);
  const {
    register,
    reset,
    formState: { errors, isLoading, isSubmitSuccessful },
    handleSubmit,
    control,
  } = useForm<Form>({
    mode: "onChange",
  });

  const onSunmit: SubmitHandler<Form> = async (formData) => {
    if (!formData.name || !formData.phone) {
      return;
    }
    try {
      const response = await fetch("/api/sendToTelegram", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      if (response.ok) {
        reset({ phone: "", name: "" });
      }
    } catch (error) {
      console.log("Произошла ошибка: " + (error as Error).message);
    }
  };
  return (
    <>
      {!writeUs && !service && (
        <button
          onClick={() => $open(true)}
          className=' tablet:hidden bg-[#212121] text-white  h-[46px] w-[190px] rounded-[6px] font-medium text-[20px] transition-all duration-[210ms] hover:bg-[#252525] active:scale-95'
        >
          Отправить заявку
        </button>
      )}

      {writeUs && (
        <button
          onClick={() => $open(true)}
          className='flex mobile:w-full items-center relative gap-2.5 group pl-[27px] bg-[#212121] h-[57px] w-[292px] rounded-[6px] transition-all duration-[210ms] hover:bg-[#303030] active:scale-95'
        >
          <p className='font-medium text-[24px] text-white'>Написать нам</p>
          <Image
            src={"/assets/icons/arrowWhite.svg"}
            alt='arrow'
            width={32}
            height={1}
            className='transition-all duration-150 absolute top-[26px] right-[70px] group-hover:right-6'
          />
        </button>
      )}

      {service && (
        <button
          onClick={() => $open(true)}
          className='bg-white rounded-[6px] active:scale-95 transition-all duration-[210ms] flex hv items-center justify-center gap-5 border-[2px] border-[#DCDCDC] h-[57px] w-[187px] mobile:h-[52px] mobile:w-[171px]'
        >
          <Image
            src={`/assets/icons/serviceArrow.svg`}
            alt={"arrow"}
            width={15}
            height={15}
            className='mobile:w-[13px] mobile:h-[13px]'
          />
          <p className='font-medium text-[24px] mobile:text-[20px] text-[#212121]'>
            Заказать
          </p>
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
                  className=' w-full pl-3  outline-none rounded-[6px] h-12 hover:bg-[#F2F2F2] transition-all duration-[350ms]'
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
            } ${isSubmitSuccessful && "!bg-[#1A6C01] hover:bg-[#1A6C01]"}`}
          >
            {isLoading
              ? "Отправка..."
              : isSubmitSuccessful
              ? "Отправлено"
              : "Отправить"}
          </button>
        </form>
      </Modal>
    </>
  );
};

export default FormModal;
