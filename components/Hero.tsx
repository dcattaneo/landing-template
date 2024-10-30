import Image from "next/image";
import HeroImage from "@/public/Image.svg";

export const Hero = () => {
  return (
    <div className="pt-4 lg:pt-10">
      <div className="px-[20px] lg:px-[280px]">
        <h1 className="text-center text-[32px] leading-[40px] font-medium text-[#172026] lg:text-[64px] lg:leading-[72px]">
          Start monitoring your website like a pro
        </h1>
        <p className="text-center pt-6 text-[#36485C] lg:text-[18px] lg:leading-7">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel
          doloremque eaque eveniet necessitatibus modi, sunt illum! Sequi
          laborum in corrupti molestiae, velit pariatur odio cupiditate quos hic
          expedita, soluta voluptates!
        </p>
        <div className="flex w-full pt-8 justify-center gap-x-6">
          <button className="bg-[#4328EB] w-1/2 py-4 px-8 text-white rounded-[4px] lg:w-fit">
            Try for free
          </button>
          <button className="w-1/2 text-[#432BEB] flex items-center justify-center gap-x-2 lg:w-fit">
            View Pricing{" "}
            <span>
              {" "}
              <Image
                src="/arrow.png"
                alt="Arrow Icon"
                width={30}
                height={30}
              />{" "}
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
          <Image src={HeroImage} alt="Image" className="-ml-4 h-[310px] sm:-mb-20 sm:h-[400px] lg:-mb-28 lg:h-auto xl:w-[70%]" />

          <div className="flex w-full flex-col items-center lg:container lg:flex-row lg:justify-between lg:px-20">
            <p className="text-[#FFFFFF] text-center lg:text-[18px]">
              Trusted by these companies
            </p>
            <div className="grid grid-cols-3 lg:grid-cols-5 items-center justify-center justify-items-center px-[20px]">
              <Image
                src="/Google.svg"
                alt="Google SVG"
                width={50}
                height={50}
              />
              <Image src="/Slack.svg" alt="Slack SVG" width={50} height={50} />
              <Image
                src="/Trustpilot.svg"
                alt="Trustpilot SVG"
                width={50}
                height={50}
              />
              <Image src="/CNN.svg" alt="Google SVG" width={50} height={50} />
              <Image src="/Clutch.svg" alt="CNN SVG" width={50} height={50} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
