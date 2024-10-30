import { Hero, Navbar, Features } from "@/components/index";
export default function Home() {
  return (
    <>
      <Navbar />
      <Hero/>
      <div className="px-[20px] lg:container lg:px-20 mx-auto">
      <Features/>
      </div>
    </>
  );
}
