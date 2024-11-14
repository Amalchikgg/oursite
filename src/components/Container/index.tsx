import { PropsWithChildren } from "react";

const Container = ({ children }: PropsWithChildren) => {
  return (
    <div className='max-w-[1920px] px-[116px] desktop:px-6 w-full m-[0px_auto] desktop:max-w-[1440px]  tablet:max-w-[768px] mobile:max-w-[375px] mobile:px-4'>
      {children}
    </div>
  );
};

export default Container;
