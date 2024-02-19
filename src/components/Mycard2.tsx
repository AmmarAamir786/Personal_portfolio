import React from "react";
import Image from "next/image";

const Mycard2 = ({ pic, alt, width }: { pic: any, alt: string, width: number }) => {
  return (

    <div className="p-2 bg-gradient-to-br from-amber-400 to-amber-300 flex justify-center items-center w-fit rounded-3xl shadow-md transition duration-300 ease-in-out transform hover:scale-105">
      <div>
        <Image
          src={pic}
          alt={alt}
          width={width}
          className="rounded-2xl"
        />
      </div>

    </div>

  );
};

export default Mycard2;
