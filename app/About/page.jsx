"use client";

import { Icons } from "@/components/icon";
import Link from "next/link";
import { motion } from "framer-motion";
import { Footer } from "@/components/Footer";

export default function About() {
  const containerVariants = {
    initial: {},
    animate: {
      transition: {
        staggerChildren: 0.25, // Adjust the delay between animations
      },
    },
  };

  const itemVariants = {
    initial: { opacity: 0, y: 0 },
    animate: {
      opacity: 1,
      y: -4,
      transition: { duration: 0.2 },
    }, // Add duration for easing
  };

  return (
    <motion.main
      variants={containerVariants}
      initial="initial"
      animate="animate"
      className="flex flex-col gap-10 text-white"
    >
      <motion.div variants={itemVariants} className="flex flex-col gap-5">
        <h1 className="text-xl font-bold text-white">About Me</h1>
        <p className="lg:text-2xl text-p text-lg sm:text-lg">
          I'm a frontend developer with a knack for crafting intuitive,
          user-centered web experiences. My background at Codecademy, combined
          with my certifications in frontend development and UI/UX design, fuels
          my drive to create visually appealing and functionally sound websites
          and applications.
        </p>
      </motion.div>

      <motion.div variants={itemVariants} className="flex flex-col gap-5">
        <h1 className="text-xl font-bold text-white">Skills</h1>
        <ul className="flex flex-row w-full justify justify-between">
          <div className="flex flex-col w-full gap-3 flex-wrap ">
            <li className="flex flex-row gap-3 items-center">
              <Icons.html /> HTML
            </li>
            <li className="flex flex-row gap-3 items-center">
              <Icons.css /> CSS
            </li>
            <li className="flex flex-row gap-3 items-center">
              <Icons.javascript /> Javascript
            </li>
            <li className="flex flex-row gap-3 items-center">
              <Icons.react /> React
            </li>
            <li className="flex flex-row gap-3 items-center">
              <Icons.git /> Git
            </li>
            <li className="flex flex-row gap-3 items-center">
              <Icons.github /> Github
            </li>
          </div>
          <div className="flex flex-col w-full gap-4 flex-wrap ">
            <ul>
              <li className="flex flex-row gap-3 items-center">
                <Icons.astro /> Astro
              </li>

              <li className="flex flex-row gap-3 items-center">
                <Icons.next /> Nextjs
              </li>
              <li className="flex flex-row gap-3 items-center">
                <Icons.dot /> Web Design Principles
              </li>
              <li className="flex flex-row gap-3 items-center">
                <Icons.dot /> Data Structures & Algorithms
              </li>
            </ul>
          </div>
        </ul>
      </motion.div>

      <motion.div variants={itemVariants} className="flex flex-col gap-5">
        <h1 className="text-xl font-bold text-white">Certifications</h1>
        <motion.div variants={itemVariants} className="flex flex-col gap-5">
          <Link
            href="https://www.codecademy.com/profiles/evanssmaina/certificates/2682884a0719474f96407efe432fdd87"
            target="_blank"
            className="bg-white/5 hover:bg-white/10 transition duration-200 py-2 px-5 rounded-lg focus:outline focus:outline-2 focus:outline-offset-2"
          >
            <h1 className="text-lg">Frontend Engineer Career Path</h1>
            <h2 className="text-xs text-white/50">Codecademy</h2>
            <h3>Issued at: January 10 2024</h3>
          </Link>

          <Link
            href="https://www.codecademy.com/profiles/evanssmaina/certificates/4ccef8d532484ea2aeec3b3b3dbb4f9c"
            target="_blank"
            className="bg-white/5  hover:bg-white/10 transition duration-200 py-2 px-5 rounded-lg focus:outline focus:outline-2 focus:outline-offset-2"
          >
            <h1 className="text-lg">Introduction to UI and UX Design</h1>
            <h2 className="text-xs text-white/50">Codecademy</h2>
            <h3>Issued at: July 8 2023</h3>
          </Link>
        </motion.div>
      </motion.div>
    </motion.main>
  );
}
