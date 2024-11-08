import { CircleArrowRight } from "lucide-react";

export const Contact = () => {
  return (
    <div className="w-full rounded-[16px] bg-gradient-to-br from-pink-500 via-red-500 to-yellow-500 py-[56px] px-[32px] text-center lg:my-[60px] lg:px-60 lg:py-40">
      <h1 className="text-white text-[32px] font-medium lg:text-[56px] leading-[64px] ">
        Elevate Your Website Monitoring
      </h1>
      <p className="text-white pt-6 lg:pt-[48px] lg:text-[18px]">
        Join a community of over 800 satisfied website owners who are enhancing
        their productivity and efficiency every day!
      </p>

      <div className="mt-[40px] flex flex-col w-full items-center lg:mt-[56px] lg:flex-row lg:justify-center gap-x-[40px]">
        <button className="py-[16px] px-[32px] bg-white rounded-[4px] text-pink-500 w-fit font-medium">
          Try for free
        </button>

        <button className="flex w-full items-center justify-center font-medium gap-x-3 mt-[32px] text-white lg:w-fit lg:mt-0">
          Contact Sales{" "}
          <span>
            <CircleArrowRight />
          </span>
        </button>
      </div>
    </div>
  );
};
