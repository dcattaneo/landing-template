import Image from "next/image";
import Link from "next/link";

export const Footer = () => {
  return (
    <div className="pt-[80px] pb-[40px]">
      <div className="flex items-center justify-center gap-x-[12px]">
        <Image src="/FakeLogo.svg" alt="Logo" width={20} height={20} />
        <p className="font-bold text-[#36485C] text-[17px]">Diego C.</p>
      </div>

      <ul className="flex flex-col items-center gap-y-[32px] pt-[56px] text-[#36485C] sm:flex-row sm:justify-center sm:gap-x-5 sm:pt-5">
        <li>
          {" "}
          <Link href="/">Features</Link>
        </li>
        <li>
          {" "}
          <Link href="/">Pricing </Link>
        </li>
        <li>
          <Link href="/">Enterprise </Link>
        </li>
        <li>
          <Link href="/">Careers </Link>
        </li>
      </ul>

      <p className="pt-[56px] text-center text-[14px] font-medium text-[#5F7896] sm:pt-5">
        © Copyright 2024. Your Site. All rights reserved.
      </p>

      <div className="flex items-center justify-center gap-x-[56px] pt-[40px]">
        <Link href="https://facebook.com" passHref>
          <Image
            src="/Facebook.svg"
            alt="Facebook Svg"
            width={20}
            height={20}
          />
        </Link>
        <Link href="https://instagram.com" passHref>
          <Image src="/instagram.svg" alt="Feed Svg" width={20} height={20} />
        </Link>
        <Link href="https://twitter.com" passHref>
          <Image src="/X.svg" alt="X Svg" width={20} height={20} />
        </Link>
      </div>
    </div>
  );
};
