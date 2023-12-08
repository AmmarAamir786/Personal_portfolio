import React from "react";
import Image from "next/image";

const Mycard = ({ pic, title, width }: { pic: any, title?: string, width: number }) => {
  return (

    <div className="lg:p-4 p-2 bg-gradient-to-br from-amber-400 to-amber-300 flex flex-col justify-center items-center w-fit rounded-3xl lg:gap-4 gap-2 shadow-md transition duration-300 ease-in-out transform hover:scale-105">
      <div>
        <Image
          src={pic}
          alt=""
          width={width}
          height={100}
          className="rounded-2xl"
        />
      </div>

      <h1 className="lg:text-3xl text-2xl font-extrabold text-myblack">
        {title}
      </h1>

    </div>

  );
};

export default Mycard;
