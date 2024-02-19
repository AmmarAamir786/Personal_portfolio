"use client";
import React from "react";
import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import { CaretDownIcon } from "@radix-ui/react-icons";
import Navlink from "./Navlink";
import { motion } from "framer-motion";

const NavigationMenuDemo = () => {

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
      y: 8,
      opacity: 0,
    },
    open: {
      y: 0,
      opacity: 1,
      transition: {
        duration: .5,
        delay: 0.2,
        ease: "easeInOut"
      },
    },
  };


  return (
    <NavigationMenu.Root className="relative z-[100] flex w-fit justify-center">
      <NavigationMenu.List className="flex list-none">
        <NavigationMenu.Item>
          <NavigationMenu.Trigger className="group flex select-none items-center justify-between gap-[2px] hover:bg-gray-600 transition duration-300 ease-in-out h-fit px-3 py-2 rounded-md text-mywhite hover:text-amber-400 bg-myblack">
            Gallery{" "}
            <CaretDownIcon
              className="relative top-[1px] transition-transform duration-[250] ease-in group-data-[state=open]:-rotate-180"
              aria-hidden
            />
          </NavigationMenu.Trigger>

          <NavigationMenu.Content className="absolute top-0 right-0 sm:w-auto">
            <motion.ul
              variants={listVarients}
              initial="closed"
              animate="open"
              className="m-0 grid list-none gap-y-[10px] p-[16px] sm:grid-flow-col sm:grid-rows-3"
            >
              <Navlink href="/3d">
                <motion.div
                  variants={listIemsVarients}
                  className=" font-medium leading-[1.2] text-lg text-center w-full"
                >
                  3D Stuff
                </motion.div>
              </Navlink>
              <Navlink href="/illustrations">
                <motion.div
                  variants={listIemsVarients}
                  className=" font-medium leading-[1.2] text-lg text-center w-full"
                >
                  Illustrations
                </motion.div>
              </Navlink>
              <Navlink href="/voxelart">
                <motion.div
                  variants={listIemsVarients}
                  className=" font-medium leading-[1.2] text-lg text-center w-full"
                >
                  Voxel Art
                </motion.div>
              </Navlink>
            </motion.ul>
          </NavigationMenu.Content>
        </NavigationMenu.Item>

        <NavigationMenu.Indicator className="data-[state=visible]:animate-fadeIn data-[state=hidden]:animate-fadeOut top-full z-[1] flex h-[10px] items-end justify-center overflow-hidden transition-[width,transform_250ms_ease]">
          <div className="relative top-[70%] h-[10px] w-[10px] rotate-[45deg] rounded-tl-[2px] bg-slate-700" />
        </NavigationMenu.Indicator>
      </NavigationMenu.List>

      <div className="perspective-[2000px] absolute top-full flex w-fit justify-center">
        <NavigationMenu.Viewport className="data-[state=open]:animate-scaleIn data-[state=closed]:animate-scaleOut relative mr-[46px] lg:mr-0 mt-[10px] h-[var(--radix-navigation-menu-viewport-height)] origin-[top_center] overflow-hidden rounded-[10px] bg-slate-700 transition-[width,_height] duration-300 w-[var(--radix-navigation-menu-viewport-width)]" />
      </div>
    </NavigationMenu.Root>
  );
};

export default NavigationMenuDemo;
