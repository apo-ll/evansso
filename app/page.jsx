"use client";
import React from "react";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import Link from "next/link";
import { Icons } from "@/components/icon";

export default function Home() {
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
      className="flex min-h-screen items-center lg:justify-center px-3 w-full  flex-col py-[40px]"
      initial={{ opacity: 0, y: 0 }}
      animate={{ opacity: 1, y: 0 }}
      style={{ perspective: "1200px" }}
    >
      <motion.div
        className="flex flex-col max-w-[500px] gap-10"
        variants={containerVariants}
        initial="initial"
        animate="animate"
      >
        <motion.div className="flex flex-col box" variants={itemVariants}>
          <h1 className="lg:text-2xl text-lg sm:text-lg font-semibold text-white mb-5">
            Evans Maina
          </h1>
          <motion.p
            className="lg:text-2xl text-[#999794] text-lg sm:text-lg"
            variants={itemVariants}
          >
            Passionate about shaping the future of the web. Frontend developer
            with experience in React, Next.js, and Tailwind CSS. Let's build
            something amazing together! Also fueled by coffee and a desire to
            learn.
          </motion.p>
        </motion.div>

        <motion.div
          className="flex flex-col text-[#999794] gap-5"
          variants={itemVariants}
        >
          <h1 className="uppercase font-bold text-xs">projects</h1>
          <motion.div className="flex flex-col gap-3" variants={itemVariants}>
            <Link
              href="https://kayakeva.vercel.app"
              target="_blank"
              className="text-lg *:hover:stroke-white transition-all duration-700 font-bold text-white flex flex-row justify-between items-center"
            >
              kayakeva.vercel.app
              <ChevronRight className="stroke-gray-500" />
            </Link>
            <div className="h-[1px] w-full bg-white/80" />
            <Link
              href="https://jammmers.vercel.app"
              target="_blank"
              className="text-lg *:hover:stroke-white transition-all duration-700 font-bold text-white flex flex-row justify-between items-center"
            >
              jammmers.vercel.app
              <ChevronRight className="stroke-gray-500" />
            </Link>
            <div className="h-[1px] w-full bg-white/80" />
            <Link
              href="https://fandomlens.vercel.app"
              target="_blank"
              className="text-lg *:hover:stroke-white transition-all duration-700 font-bold text-white flex flex-row justify-between items-center"
            >
              fandomlens.vercel.app
              <ChevronRight className="stroke-gray-500" />
            </Link>
            <div className="h-[1px] w-full bg-white/80" />
            <Link
              href="https://cityoflight.framer.ai"
              target="_blank"
              className="text-lg *:hover:stroke-white transition-all duration-700 font-bold text-white flex flex-row justify-between items-center"
            >
              cityoflight.framer.ai
              <ChevronRight className="stroke-gray-500" />
            </Link>
          </motion.div>
        </motion.div>

        <motion.div className="flex flex-row gap-5" variants={itemVariants}>
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
        </motion.div>
      </motion.div>
    </motion.main>
  );
}
