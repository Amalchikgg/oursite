"use client";
import { useAnimation } from "@/hooks/useAnimation";

interface Props {
  title: string;
  type: string;
}

const Tag = ({ title, type }: Props) => {
  return (
    <div
      className={`border border-[#3F3F3F] rounded-[12px] py-2.5 mobile:px-5 px-10 ${
        type === "develop" && "bg-black border-none"
      }`}
    >
      <p
        className={`font-medium text-[36px] text-[#3F3F3F] mobile:text-[20px] ${
          type === "develop" && "!text-white"
        }`}
      >
        {title}
      </p>
    </div>
  );
};

export default Tag;
