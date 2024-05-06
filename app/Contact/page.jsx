"use client";

import React, { useState } from "react";
import { useFormspark } from "@formspark/use-formspark";
import { motion } from "framer-motion";
import { Icons } from "@/components/icon";

const FORMSPARK_FORM_ID = "5nTkXxLZO";

function ContactPage() {
  const [submit, submitting] = useFormspark({
    formId: FORMSPARK_FORM_ID,
  });

  const [message, setMessage] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const onSubmit = async (e) => {
    e.preventDefault();
    await submit({ message, name, email });
    alert("Form submitted");
  };

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
      className="flex flex-col gap-20 items-start w-full"
    >
      <motion.div variants={itemVariants} className="flex flex-col gap-3">
        <h1 className="lg:text-2xl text-lg sm:text-lg font-semibold text-white ">
          Contact
        </h1>
        <p className="lg:text-2xl text-p text-lg sm:text-lg">
          Contact me for more info or if you want to reach out
        </p>
        <form
          className="flex flex-col gap-3 *:rounded-lg w-full"
          onSubmit={onSubmit}
        >
          <label htmlFor="name" className="text-white">
            Name
          </label>
          <input
            placeholder="Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            type="text"
            name="Full Name"
            className="w-full px-3 py-2"
          />
          <label htmlFor="Email" className="text-white">
            Email
          </label>
          <input
            placeholder="Your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            name="email"
            className="px-3 py-2"
          />
          <label htmlFor="Message" className="text-white">
            Message
          </label>
          <textarea
            placeholder="Message"
            value={message}
            className="px-3 py-2 mb-10"
            onChange={(e) => setMessage(e.target.value)}
          />
          <button
            type="submit"
            disabled={submitting}
            className="bg-white text-black px-4 py-2 flex flex-row gap-3  items-center rounded-lg w-fit hover:bg-white/80 transition duration-200"
          >
            Send <Icons.send />
          </button>
        </form>
      </motion.div>
    </motion.main>
  );
}

export default ContactPage;
