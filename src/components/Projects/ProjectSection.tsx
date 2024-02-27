import React from "react";
import SingleProject from "@/components/Projects/SingleProject";
import { projectsData } from "@/data/projectsData";
import Link from "next/link";
import Mybutton from "../Mybutton";

const ProjectSection = () => {
  return (
    <main className=" flex flex-col gap-12 items-center py-10 text-center lg:text-left  justify-center">
      <div className=" lg:text-6xl text-4xl text-amber-400">Projects</div>

      <div className="flex justify-center items-center gap-20 flex-wrap margin">
        {projectsData.slice(0, 3).map((project) => (
          <SingleProject
            key={project.id}
            id={project.id}
            name={project.projectName}
            code={project.code}
            demo={project.demo}
            image={project.image}
            alt={project.alt}
          />
        ))}
      </div>

      <div>
        <Link href={"projects"}>
          <Mybutton title="View Projects"></Mybutton>
        </Link>
      </div>
    </main>
  );
};

export default ProjectSection;
