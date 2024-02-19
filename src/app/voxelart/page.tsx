import React from "react";
import Mycard2 from "@/components/Mycard2";
import invoker from "@/assets/Voxel/invoker.gif";
import jay from "@/assets/Voxel/Jay.png";

const voxelart = () => {
  return (
    <main className="mb-10">
      <section className="flex justify-center items-start margin mt-5 bg-gray-600 px-10 py-6 rounded-3xl">
        <h1 className="lg:text-6xl text-4xl font-bold text-amber-400">
          Voxel Magic
        </h1>
      </section>

      <section className="flex flex-col lg:flex-row justify-center items-center gap-10 mt-10 margin">
        <Mycard2 pic={jay} width={400} alt={"jay"}></Mycard2>
        <Mycard2 pic={invoker} width={500} alt={"invoker"}></Mycard2>
      </section>
    </main>
  );
};

export default voxelart;
