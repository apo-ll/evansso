import { ChevronRight } from "lucide-react";
import Link from "next/link";
import { Icons } from "@/components/icon";

export default function Home() {
  return (
    <main className="flex min-h-screen items-center lg:justify-center px-3 w-full  flex-col py-[40px]">
      <div className="flex flex-col max-w-[500px] gap-10">
        <div className="flex flex-col">
          <h1 className="text-2xl font-semibold text-white mb-5">
            Evans Maina
          </h1>
          <p className="text-[#999794] text-2xl">
            Passionate about shaping the future of the web. Frontend developer
            with experience in React, Next.js, and Tailwind CSS. Let's build
            something amazing together! Also fueled by coffee and a desire to
            learn.
          </p>
        </div>

        <div className="flex flex-col text-[#999794] gap-5">
          <h1 className=" uppercase font-bold text-xs">projects</h1>
          <div className="flex flex-col gap-3">
            <Link
              href="/"
              className="text-lg *:hover:stroke-white transition-all duration-700 font-bold text-white flex flex-row justify-between items-center"
            >
              kayakeva.vercel.app
              <ChevronRight className="stroke-gray-500" />
            </Link>
            <div className="h-[1px] w-full bg-white/80" />
            <Link
              href="/"
              className="text-lg *:hover:stroke-white transition-all duration-700 font-bold text-white flex flex-row justify-between items-center"
            >
              jammmers.vercel.app
              <ChevronRight className="stroke-gray-500" />
            </Link>
            <div className="h-[1px] w-full bg-white/80" />
            <Link
              href="/"
              className="text-lg *:hover:stroke-white transition-all duration-700 font-bold text-white flex flex-row justify-between items-center"
            >
              fandomlens.vercel.app
              <ChevronRight className="stroke-gray-500" />
            </Link>
            <div className="h-[1px] w-full bg-white/80" />
            <Link
              href="/"
              className="text-lg *:hover:stroke-white transition-all duration-700 font-bold text-white flex flex-row justify-between items-center"
            >
              cityoflight.framer.ai
              <ChevronRight className="stroke-gray-500" />
            </Link>
          </div>
        </div>

        <div className="flex flex-row gap-5">
          <Link
            href="/"
            className="flex flex-row gap-2 text-slate-300 hover:text-white text-lg items-center *:hover:stroke-white"
          >
            <Icons.link className="stroke-gray-500" />
            github
          </Link>
          <Link
            href="/"
            className="flex flex-row gap-2 text-slate-300 hover:text-white text-lg items-center *:hover:stroke-white"
          >
            <Icons.link className="stroke-gray-500" />
            twitter
          </Link>
        </div>
      </div>
    </main>
  );
}
