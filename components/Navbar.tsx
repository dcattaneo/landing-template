import Image from "next/image";
import { NAVLINKS } from "@/constants/index";

export const Navbar = () => {
  return (
    <nav className="flex w-full items-center justify-between px-[20px] py-[16px] lg:container mx-auto lg:px-20">
      <div className="flex items-center">
        <Image src="/Logo.svg" alt="Logo" width={20} height={20} />

        <div className="hidden lg:flex pl-[74px] gap-x-[56px]">
          {NAVLINKS.map((link, index) => (
            <p className="text-[#36485C] font-medium" key={index}>{link.name}</p>
          ))}
        </div>
      </div>
      <div className="flex gap-x-5">
        <p className="font-medium text-[#36485C] hidden lg:block pr-[56px]">Open an account</p>
        <div className="flex items-center gap-x-2">
          <Image src="/User.svg" alt="User Icon" width={20} height={20} />
          <span className="hidden font-medium text-[#36485C] lg:block">
            Sign In
          </span>
        </div>
        <Image
          src="/Menu.svg"
          alt="Menu Icon"
          width={20}
          height={20}
          className="lg:hidden"
        />
      </div>
    </nav>
  );
};
