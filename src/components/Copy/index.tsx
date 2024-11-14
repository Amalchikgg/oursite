"use client";
import Image from "next/image";
import { useState } from "react";

const Copy = () => {
  const [isCopied, setIsCopied] = useState(false);
  const phoneNumber = "+998938123060"; // Замените на ваш номер телефона

  const handleCopy = () => {
    // Создаём временный input элемент
    const textArea = document.createElement("input");
    textArea.value = phoneNumber;
    document.body.appendChild(textArea);

    // Выделяем текст
    textArea.select();

    try {
      // Пытаемся скопировать текст
      document.execCommand("copy");
      setIsCopied(true);

      // Сбрасываем состояние через 2 секунды
      setTimeout(() => {
        setIsCopied(false);
      }, 4000);
    } catch (err) {
      console.error("Не удалось скопировать текст:", err);
    }

    // Удаляем временный элемент
    document.body.removeChild(textArea);
  };
  return (
    <button
      onClick={handleCopy}
      className='flex mobile:w-full hv bg-white items-center gap-2.5 pl-[22px] border-[2px] border-[#DCDCDC] h-[57px] w-[300px] rounded-[6px] transition-all duration-[210ms] active:scale-95'
    >
      <Image
        src={"/assets/icons/copy.svg"}
        alt='arrow'
        width={24}
        height={24}
      />
      <p className='font-medium text-[22px] text-[#212121]'>
        {isCopied ? "Скопировано!" : "Скопировать телефон"}
      </p>
    </button>
  );
};

export default Copy;
