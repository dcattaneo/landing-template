import Image from "next/image";
import { NAVLINKS } from "@/constants/index";
import Link from "next/link";

export const Navbar = () => {
  return (
    <nav className="flex w-full items-center justify-between px-[20px] py-[16px] lg:container lg:mx-auto lg:px-20 ">
      <div className="flex items-center">
        <Link href="/">
          {" "}
          <Image src="/FakeLogo.svg" alt="Logo" width={20} height={20} />
        </Link>

        <div className="hidden lg:flex pl-[74px] gap-x-[56px]">
          {NAVLINKS.map((link, index) => (
            <Link href="/" key={link.id}>
              <p className="text-[#36485C] font-medium">{link.name}</p>
            </Link>
          ))}
        </div>
      </div>
      <div className="flex gap-x-5">
        <Link href="/">
          <p className="font-medium text-[#36485C] hidden lg:block pr-[56px]">
            Open an account
          </p>
        </Link>

        <Link href="/" className="flex items-center gap-x-2">
          <Image src="/User.svg" alt="User Icon" width={20} height={20} />
          <span className="hidden font-medium text-[#36485C] lg:block">
            Sign In
          </span>
        </Link>

        <Link href="/">
          <Image
            src="/Menu.svg"
            alt="Menu Icon"
            width={20}
            height={20}
            className="lg:hidden"
          />
        </Link>
      </div>
    </nav>
  );
};
