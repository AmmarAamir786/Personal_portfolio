import React from "react";
import Link from "next/link";
import Mybutton from "../Mybutton";
import EmblaCarousel from "../Carousels/EmblaCarousel";
import { EmblaOptionsType } from 'embla-carousel'

const OPTIONS: EmblaOptionsType = { loop: true }
const SLIDE_COUNT = 3
const SLIDES = Array.from(Array(SLIDE_COUNT).keys())

const ProjectSectionSM = () => {
  return (
    <main className=" flex flex-col gap-5 items-center py-10 text-center lg:text-left  justify-center margin overflow-hidden xl:hidden">
      <div className=" lg:text-6xl text-4xl text-amber-400 mb-6">Projects</div>

      <EmblaCarousel slides={SLIDES} options={OPTIONS}></EmblaCarousel>

      <div>
        <Link href={"projects"}>
          <Mybutton title="View Projects"></Mybutton>
        </Link>
      </div>
    </main>
  );
};

export default ProjectSectionSM;
