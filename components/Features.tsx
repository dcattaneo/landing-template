import Image from "next/image";
import Link from "next/link";

export const Features = () => {
  return (
    <div className="flex flex-col gap-y-[56px] py-[56px] lg:py-[120px] lg:gap-y-[80px]">
      <div className="flex flex-col gap-x-6 sm:flex-row-reverse">
        <Image
          src="/feature-1.svg"
          alt="Feature 1"
          width={200}
          height={200}
          className="hidden w-1/2 sm:block"
        />
        <div className="sm:w-1/2 lg:py-[56px] lg:pr-[56px]">
          <h3 className="font-medium text-[#0085FF] lg:text-[18px]">
            Sales Performance Analysis
          </h3>
          <h1 className="pt-[12px] text-2xl font-medium text-[#172026] lg:text-[42px] lg:leading-[58px]">
            Optimize your sales performance analysis
          </h1>
          <Image
            src="/feature-1.svg"
            alt="Feature 1"
            width={200}
            height={200}
            className="pt-[24px] w-full h-full sm:hidden"
          />
          <p className="py-[24px] text-[#36485C] lg:text-[18px]">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum
            eveniet suscipit rem. Labore cum harum culpa iure quis sapiente
            pariatur enim inv.
          </p>
          <ul className="flex flex-col gap-y-3 lg:text-[18px]">
            <li className="flex items-center gap-x-2 text-[#36485C]">
              <span>
                {" "}
                <Image
                  src="/check.svg"
                  alt="check svg"
                  width={20}
                  height={20}
                />{" "}
              </span>
              Lorem ipsum dolor sit amet consec
            </li>
            <li className="flex items-center gap-x-2 text-[#36485C]">
              <span>
                {" "}
                <Image
                  src="/check.svg"
                  alt="check svg"
                  width={20}
                  height={20}
                />{" "}
              </span>
              Lorem ipsum dolor sit amet consec
            </li>
            <li className="flex items-center gap-x-2 text-[#36485C]">
              <span>
                {" "}
                <Image
                  src="/check.svg"
                  alt="check svg"
                  width={20}
                  height={20}
                />{" "}
              </span>
              Lorem ipsum dolor sit amet consec
            </li>
          </ul>
          <Link href="/">
            <p className="flex items-center gap-x-2 pt-[24px] font-medium text-[#36485C] lg:text-[18px]">
              Learn More{" "}
              <span>
                {" "}
                <Image
                  src="/blue-button.svg"
                  alt="Blue Button"
                  width={20}
                  height={20}
                />{" "}
              </span>{" "}
            </p>
          </Link>
        </div>
      </div>

      <div className="flex flex-col gap-x-6 sm:flex-row">
        <Image
          src="/feature-2.svg"
          alt="Feature 2"
          width={200}
          height={200}
          className="hidden w-1/2 sm:block"
        />
        <div className="sm:w-1/2 lg:py-[56px] lg:pl-[56px]">
          <h3 className="font-medium text-[#00A424] lg:text-[18px]">
            Customer Assistance
          </h3>
          <h1 className="pt-[12px] text-2xl font-medium text-[#172026] lg:text-[42px] lg:leading-[58px]">
            Stay connected with your customers
          </h1>
          <Image
            src="/feature-2.svg"
            alt="Feature 2"
            width={200}
            height={200}
            className="pt-[24px] w-full h-full sm:hidden"
          />
          <p className="py-[24px] text-[#36485C] lg:text-[18px]">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum
            eveniet suscipit rem. Labore cum harum culpa iure quis sapiente
            pariatur enim inv.
          </p>
          <ul className="flex flex-col gap-y-3 lg:text-[18px]">
            <li className="flex items-center gap-x-2 text-[#36485C]">
              <span>
                {" "}
                <Image
                  src="/check.svg"
                  alt="check svg"
                  width={20}
                  height={20}
                />{" "}
              </span>
              Lorem ipsum dolor sit amet consec
            </li>
            <li className="flex items-center gap-x-2 text-[#36485C]">
              <span>
                {" "}
                <Image
                  src="/check.svg"
                  alt="check svg"
                  width={20}
                  height={20}
                />{" "}
              </span>
              Lorem ipsum dolor sit amet consec
            </li>
            <li className="flex items-center gap-x-2 text-[#36485C]">
              <span>
                {" "}
                <Image
                  src="/check.svg"
                  alt="check svg"
                  width={20}
                  height={20}
                />{" "}
              </span>
              Lorem ipsum dolor sit amet consec
            </li>
          </ul>
          <Link href="/">
            <p className="flex items-center gap-x-2 pt-[24px] font-medium text-[#36485C] lg:text-[18px]">
              Learn More{" "}
              <span>
                {" "}
                <Image
                  src="/green-button.svg"
                  alt="Green Button"
                  width={20}
                  height={20}
                />{" "}
              </span>{" "}
            </p>
          </Link>
        </div>
      </div>

      <div className="flex flex-col gap-x-6 sm:flex-row-reverse">
        <Image
          src="/feature-3.svg"
          alt="Feature 3"
          width={200}
          height={200}
          className="hidden w-1/2 sm:block"
        />
        <div className="sm:w-1/2 lg:py-[56px] lg:pr-[56px]">
          <h3 className="font-medium text-[#EB2891] lg:text-[18px]">
            Boost Sales
          </h3>
          <h1 className="pt-[12px] text-2xl font-medium text-[#172026] lg:text-[42px] lg:leading-[58px]">
            Accelerate your sales growth effortlessly
          </h1>
          <Image
            src="/feature-3.svg"
            alt="Feature 3"
            width={200}
            height={200}
            className="pt-[24px] w-full h-full sm:hidden"
          />
          <p className="py-[24px] text-[#36485C] lg:text-[18px]">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum
            eveniet suscipit rem. Labore cum harum culpa iure quis sapiente
            pariatur enim inv.
          </p>

          <div className="flex w-full gap-x-[24px]">
            <div className="w-1/2 flex flex-col gap-y-3">
              <h3 className="text-[20px] font-medium text-[#172026]">+100</h3>
              <p className="text-[#36485c]"> Successful deals closed </p>
            </div>
            <div className="w-1/2 flex flex-col gap-y-3">
              <h3 className="text-[20px] font-medium text-[#172026]">+800</h3>
              <p className="text-[#36485c]"> New subscriptions this month </p>
            </div>
          </div>
          <Link href="/">
            <p className="flex items-center gap-x-2 pt-[24px] font-medium text-[#36485C] lg:text-[18px]">
              Learn More{" "}
              <span>
                {" "}
                <Image
                  src="/pink-button.svg"
                  alt="Pink Button"
                  width={20}
                  height={20}
                />{" "}
              </span>{" "}
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
};
