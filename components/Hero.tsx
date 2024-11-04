import Image from "next/image";
import HeroImage from "@/public/Image.svg";
import { ArrowRight } from "lucide-react";

export const Hero = () => {
  return (
    <div className="pt-4 lg:pt-10">
      <div className="px-[20px] lg:px-[280px] lg:pb-40 xl:pb-0">
        <h1 className="text-center text-[32px] leading-[40px] font-medium text-[#172026] lg:text-[64px] lg:leading-[72px]">
          Show your customers their needs
        </h1>
        <p className="text-center pt-6 text-[#36485C] lg:text-[18px] lg:leading-7">
          Understanding your customers is key to delivering exceptional service.
          By gaining insights into their preferences and pain points, you can
          tailor your offerings to better meet their expectations. 
        </p>
        <div className="flex w-full pt-8 justify-center gap-x-6 ">
          <button className="bg-[#4328EB] w-1/2 py-4 px-8 text-white rounded-[4px] lg:w-fit">
            Try for free
          </button>
          <button className="w-1/2 text-[#432BEB] flex items-center justify-center gap-x-2 lg:w-fit">
            View Pricing{" "}
            <span>
              <ArrowRight className="w-4 h-4" />{" "}
            </span>
          </button>
        </div>
      </div>

      <div className="relative flex h-full w-full justify-center">
        <Image
          src="/Gradient.svg"
          alt="Gradient image"
          width={0}
          height={0}
          className="min-h-[500px] w-full object-cover lg:h-auto"
        />
        <div className="absolute bottom-5 flex w-full flex-col items-center">
          <Image
            src={HeroImage}
            alt="Image"
            className="-ml-4 h-[310px] sm:-mb-20 sm:h-[400px] lg:-mb-28 lg:h-auto xl:w-[70%]"
          />

          <div className="flex w-full flex-col items-center lg:container lg:flex-row lg:justify-between lg:px-20">
            <p className="text-[#FFFFFF] text-center lg:text-[18px]">
              Sponsored by these companies
            </p>
            <div className="grid grid-cols-4  items-center justify-center justify-items-center  px-5 gap-x-5">
              <Image src="/Slack.svg" alt="Slack SVG" width={50} height={50} />
              <Image
                src="/adidas.svg"
                alt="Adidas SVG"
                width={50}
                height={50}
              />
              <Image
                src="/vercel.svg"
                alt="Vercel SVG"
                width={50}
                height={50}
              />
              <Image
                src="/discord.svg"
                alt="Discord SVG"
                width={50}
                height={50}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
