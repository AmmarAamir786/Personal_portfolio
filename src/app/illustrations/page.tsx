import React from "react";
import Mycard from "@/components/Mycard";
import homelander from "@/assets/illustrations/Homelander.png";
import madara from "@/assets/illustrations/MADARA.png";
import huey from "@/assets/illustrations/Huey.png";
import stormfront from "@/assets/illustrations/Stormfront.png";
import lamplighter from "@/assets/illustrations/Lamplighter.png";
import pheonix from "@/assets/illustrations/Pheonix.png";
import kimiko from "@/assets/illustrations/kimiko.png";
import lightstorm from "@/assets/illustrations/Lightstorm.png";

const illustrations = () => {
  return (
    <main className="mb-10">
      <section className="flex justify-center items-start margin mt-5 bg-gray-600 px-10 py-6 rounded-3xl">
        <h1 className="lg:text-6xl text-4xl font-bold text-amber-400">
          ILLUSTRATIONS
        </h1>
      </section>

      <section>
        <div className="flex margin gap-10 mt-10 justify-center items-center lg:flex-row flex-col">
          <Mycard
            title="Homelander"
            alt={homelander}
            width={600}
            pic={homelander}
            loading="eager"
          ></Mycard>

          <Mycard title="Madara" alt={madara} width={400} pic={madara} loading="eager"></Mycard>
        </div>

        <div className="flex margin gap-10 mt-10 justify-center items-center lg:flex-row-reverse flex-col-reverse">
          <Mycard
            title="Lamplighter"
            alt={lamplighter}
            width={600}
            pic={lamplighter}
          ></Mycard>

          <Mycard
            title="Pheonix"
            alt={pheonix}
            width={400}
            pic={pheonix}
          ></Mycard>
        </div>

        <div className="flex margin gap-10 mt-10 justify-center items-center lg:flex-row flex-col">
          <Mycard title="Huey" alt={huey} width={600} pic={huey}></Mycard>

          <Mycard
            title="Stormfront"
            alt={stormfront}
            width={600}
            pic={stormfront}
            loading="lazy"
          ></Mycard>
        </div>

        <div className="flex margin gap-10 mt-10 justify-center items-center lg:flex-row flex-col">
          <Mycard title="Kimiko" alt={kimiko} width={600} pic={kimiko}></Mycard>

          <Mycard
            title="Lightstorm"
            alt={lightstorm}
            width={600}
            pic={lightstorm}
            loading="lazy"
          ></Mycard>
        </div>
      </section>
    </main>
  );
};

export default illustrations;
