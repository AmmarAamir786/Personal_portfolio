"use client";
import React, { useState } from "react";
import Link from "next/link";
import Mybutton from "../Mybutton";
import Mylogo from "../Mylogo";
import Mobnav from "./Mobnav";
import Navlink from "./Navlink";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import NavigationMenu from "./NavigationMenu";

const Mynavbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const listVarients = {
    closed: {
      y: -100,
    },
    open: {
      y: 0,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const listIemsVarients = {
    closed: {
      x: 100,
      opacity: 0,
    },
    open: {
      x: 0,
      opacity: 1,
      transition: {
        delay: 0.3,
      },
    },
  };

  const navShow = {
    visible: {
      y: 0,
    },
    hidden: {
      y: -100,
      transition: {
        duration: 0.55,
        ease: "easeInOut",
      },
    },
  };

  const [hidden, setHidden] = useState(false);
  const { scrollY } = useScroll();
  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious();
    if (previous !== undefined && latest > previous && latest > 100) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  return (
    <main>
      <motion.header
        variants={navShow}
        initial="visible"
        animate={hidden ? "hidden" : "visible"}
        className="bg-myblack/90 backdrop-blur-3xl"
      >
        <nav className="margin hidden lg:flex flex-row justify-between items-center py-5 gap-2">
          <Link href={"/"}>
            <Mylogo></Mylogo>
          </Link>

          <div className="flex items-center text-xl gap-5">
            <Navlink href="/">Home</Navlink>
            <Navlink href="/about">About</Navlink>
            <NavigationMenu></NavigationMenu>
          </div>

          <button className="flex items-center text-xl w-[244px] justify-end">
            <Link href={"/#logos"}>
              <Mybutton title="Hire Me"></Mybutton>
            </Link>
          </button>
        </nav>

        <nav className="margin lg:hidden flex flex-row justify-between items-center py-5 gap-2">
          <Link href={"/"}>
            <Mylogo></Mylogo>
          </Link>

          <div>
            <svg
              className="w-[24px] hover:cursor-pointer text-mywhite hover:text-amber-400 transition-all"
              onClick={toggleMenu}
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 14 14"
            >
              <path
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13.5 2H.5m13 5H.5m13 5H.5"
              />
            </svg>
          </div>

          {isMenuOpen && (
            <Mobnav>
              <motion.div
                variants={listVarients}
                initial="closed"
                animate="open"
                className="flex flex-col w-full items-end gap-4"
              >
                <svg
                  className="w-[28px] hover:cursor-pointer text-mywhite hover:text-amber-400 transition-all"
                  onClick={toggleMenu}
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 15 15"
                >
                  <path
                    fill="currentColor"
                    fill-rule="evenodd"
                    d="M11.782 4.032a.575.575 0 1 0-.813-.814L7.5 6.687L4.032 3.218a.575.575 0 0 0-.814.814L6.687 7.5l-3.469 3.468a.575.575 0 0 0 .814.814L7.5 8.313l3.469 3.469a.575.575 0 0 0 .813-.814L8.313 7.5z"
                    clip-rule="evenodd"
                  />
                </svg>

                <motion.div
                  variants={listIemsVarients}
                  className="flex flex-col items-end text-xl gap-2"
                >
                  <Navlink href="/">Home</Navlink>
                  <Navlink href="/about">About</Navlink>
                  <NavigationMenu></NavigationMenu>
                </motion.div>

                <button className="flex items-center text-xl w-[244px] justify-end">
                  <Link href={"/#logos"}>
                    <Mybutton title="Hire Me"></Mybutton>
                  </Link>
                </button>
              </motion.div>
            </Mobnav>
          )}
        </nav>
      </motion.header>
    </main>
  );
};

export default Mynavbar;
