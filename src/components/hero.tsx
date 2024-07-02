import { ContainerScroll } from "@/components/ui/herosection";
import Image from "next/image";

export default function Hero() {
  return (
    <div className="flex flex-col overflow-hidden">
      <ContainerScroll
        titleComponent={
          <>
            <h1 className="text-4xl font-semibold text-primary dark:text-white">
              Analyze your business with <br />
              <span className="text-4xl md:text-[6rem] font-bold mt-1 leading-none">
                The power of <span className="text-blue-500">AI</span>
              </span>
            </h1>
          </>
        }
      >
        <Image
          src={`/heroimage.png`}
          alt="hero"
          height={720}
          width={1400}
          className="mx-auto rounded-2xl object-cover h-full object-left-top"
          draggable={false}
        />
      </ContainerScroll>
    </div>
  );
}
