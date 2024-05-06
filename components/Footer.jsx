import { Icons } from "./icon";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="max-w-[500px] lg:px-0 sm:px-3 px-3 flex  mx-auto my-[40px]">
      <div className="flex flex-row gap-5">
        <Link
          href="https://github.com/apo-ll"
          target="_blank"
          className="flex flex-row gap-2 text-slate-300 hover:text-white transition duration-200 text-lg items-center *:hover:stroke-white"
        >
          <Icons.link className="stroke-gray-500" />
          github
        </Link>
        <Link
          href="https://twitter.com/apo_llonic"
          target="_blank"
          className="flex flex-row gap-2 text-slate-300 hover:text-white transition duration-200 text-lg items-center *:hover:stroke-white"
        >
          <Icons.link className="stroke-gray-500" />
          twitter
        </Link>
        <Link
          href="https://linkedin.com/in/evanssmaina"
          target="_blank"
          className="flex flex-row gap-2 text-slate-300 hover:text-white transition duration-200 text-lg items-center *:hover:stroke-white"
        >
          <Icons.link className="stroke-gray-500" />
          linkedin
        </Link>
      </div>
    </footer>
  );
}
