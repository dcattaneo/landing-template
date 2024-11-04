import Image from "next/image";
import { Check } from "lucide-react";

export const Pricing = () => {
  return (
    <div className="py-[48px] lg:py-[60px]">
      <h1 className="text-[#172026] text-center font-medium  text-2xl lg:text-[42px]">
        Flexible Subscription Options
      </h1>
      <p className="pt-[16px] pb-[40px] text-center text-[#36485C] lg:text-[18px]">
        Choose the plan that best suits your needs—transparent pricing with no
        surprises.
      </p>

      <div className="flex flex-col gap-y-6 gap-x-[24px] lg:flex-row">
        <div className="w-full rounded-[8px] bg-[#F5F4FF] p-6 flex flex-col lg:justify-between">
          <div>
            <h3 className="font-medium text-[#4328EB] text-[18px] lg:text-xl">
              Free Trial
            </h3>
            <p className="pt-[12px] text-[#36485C] lg:text-[18px]">
              Ideal for personal use and small projects
            </p>

            <h2 className="pt-4 text-2xl font-medium lg:text-[32px]">
              0$<span className="text-[#5F7896]">/mo</span>
            </h2>

            <ul className="flex flex-col gap-y-2 pt-4 text-[#5F7896]">
              <li className="flex items-center gap-x-2">
                <span>
                  <Image
                    src="/check.svg"
                    alt="Check Svg Icon"
                    width={20}
                    height={20}
                  />
                </span>
                Access to basic features
              </li>
              <li className="flex items-center gap-x-2">
                <span>
                  <Image
                    src="/check.svg"
                    alt="Check Svg Icon"
                    width={20}
                    height={20}
                  />
                </span>
                Limited support
              </li>
              <li className="flex items-center gap-x-2">
                <span>
                  <Image
                    src="/check.svg"
                    alt="Check Svg Icon"
                    width={20}
                    height={20}
                  />
                </span>
                Ideal for solo projects
              </li>
            </ul>
          </div>
          <button className="mt-[16px] rounded-[4px] bg-white py-[14px] text-[#4328EB] font-medium">
            Start Trial
          </button>
        </div>

        <div className="w-full rounded-[8px] bg-[#4328EB] p-6 flex flex-col">
          <div>
            <h3 className="font-medium text-white text-[18px] lg:text-xl">
              Professional
            </h3>
            <p className="pt-[12px] text-[#F4F8FA] lg:text-[18px]">
              Designed for growing businesses and teams
            </p>

            <h2 className="pt-4 text-2xl font-medium text-white lg:text-[32px]">
              200$<span className="text-[#F4F8FA]">/mo</span>
            </h2>

            <ul className="flex flex-col gap-y-2 pt-4 text-[#F4F8FA]">
              <li className="flex items-center gap-x-2">
                <span>
                  <Check  className="w-5"/>
                </span>
                Full feature access
              </li>
              <li className="flex items-center gap-x-2">
                <span>
                  <Check  className="w-5"/>
                </span>
                Priority support
              </li>
              <li className="flex items-center gap-x-2">
                <span>
                  <Check className="w-5" />
                </span>
                Advanced reporting tools
              </li>
              <li className="flex items-center gap-x-2">
                <span>
                <Check className="w-5" />
                </span>
                Team collaboration
              </li>
              <li className="flex items-center gap-x-2">
                <span>
                <Check className="w-5" />
                </span>
                Three Admin Accounts
              </li>
            </ul>
          </div>
          <button className="mt-[16px] rounded-[4px] bg-white py-[14px] text-[#4328EB] font-medium">
            Get Started
          </button>
        </div>

        <div className="w-full rounded-[8px] bg-[#F5F4FF] p-6 flex flex-col lg:justify-between">
          <div>
            <h3 className="font-medium text-[#4328EB] text-[18px] lg:text-xl">
              Business Plus
            </h3>
            <p className="pt-[12px] text-[#36485C] lg:text-[18px]">
              Ideal for established teams and growing organizations
            </p>

            <h2 className="pt-4 text-2xl font-medium lg:text-[32px]">
              500$<span>/mo</span>{" "}
            </h2>

            <p className="pt-4 text-[16px] text-[#36485C]">
              Our Business Plus plan provides a comprehensive solution designed
              to scale with your team’s needs, including advanced analytics and
              priority support.
            </p>
          </div>
          <button className="mt-[16px] rounded-[4px] bg-white py-[14px] text-[#4328EB] font-medium">
            Contact Us
          </button>
        </div>
      </div>
    </div>
  );
};
