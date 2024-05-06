import {
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaGitAlt,
  FaGithub,
} from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { RiNextjsFill } from "react-icons/ri";
import { SiAstro } from "react-icons/si";
import { GoDotFill } from "react-icons/go";
import { PaperPlaneIcon } from "@radix-ui/react-icons";

export const Icons = {
  link: (...props) => (
    <svg
      {...props}
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2.07102 11.3494L0.963068 10.2415L9.2017 1.98864H2.83807L2.85227 0.454545H11.8438V9.46023H10.2955L10.3097 3.09659L2.07102 11.3494Z"
        fill="currentColor"
      ></path>
    </svg>
  ),
  html: FaHtml5,
  css: FaCss3Alt,
  react: FaReact,
  javascript: IoLogoJavascript,
  git: FaGitAlt,
  github: FaGithub,
  next: RiNextjsFill,
  astro: SiAstro,
  dot: GoDotFill,
  send: PaperPlaneIcon,
};
