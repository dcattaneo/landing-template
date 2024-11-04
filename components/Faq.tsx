import { FAQITEMS } from "@/constants";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

type FaqItems = {
  id: number;
  name: string;
  question: string;
  answer: string;
};

export const Faq = () => {
  return (
    <div className="flex flex-col w-full  py-[48px] lg:py-[60px] lg:flex-row lg:gap-x-6">
      <div className="lg:w-1/3 lg:py-[32px] lg:pr-[56px]">
        <h3 className=" text-[14px] font-medium lg:text-base">
          Frequently asked questions
        </h3>
        <h1 className="py-4 text-3xl font-medium text-[#172026] lg:text-4xl xl:text-5xl  ">
        Find answers to some common questions
        </h1>
        <p className="text-[#36485C] pb-[24px] xl:text-xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque,
          maiores. Voluptatibus iure obcaecati tempora fugiat. Veritatis ad in
          eveniet quam?{" "}
        </p>
      </div>

      <div className="lg:w-2/3">
        <Accordion type="single" collapsible className="flex flex-col gap-y-4">
          {FAQITEMS.map((item) => (
            <AccordionItem
              key={item.id}
              value={item.name}
              className="bg-[#E3F1FF] p-[16px] rounded-[8px]"
            >
              <AccordionTrigger className="text-left font-medium text-[#172026]">
                {item.question}
              </AccordionTrigger>
              <AccordionContent className="pt-2 text-[#36485C]">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  );
};
