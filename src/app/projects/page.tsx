import SingleProject from "@/components/Projects/SingleProject";
import { projectsData } from "@/data/projectsData";

const page = () => {

  const filteredArticles = projectsData.filter((project) => {
    const content = project.projectName;
    return content.toLowerCase();
  });

  return (
    <main className="margin">

      <section className="flex justify-center items-start mt-5 bg-gray-600 px-10 py-6 rounded-3xl">
        <h1 className="lg:text-6xl text-4xl font-bold text-amber-400">
          Projects
        </h1>
      </section>

      <section className=" my-20 flex justify-center items-center gap-20 flex-wrap">
          {filteredArticles.map((project) => (
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
      </section>
    </main>
  );
};

export default page;
