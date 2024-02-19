import React from "react";
import Image from "next/image";
import logoimg from "@/assets/logo.png";

const Mylogo = () => {
  return (
    <div className="flex items-center gap-2">
      <div>
        <Image src={logoimg} alt="logo" width={80}></Image>
      </div>
      <div className=" text-2xl text-amber-400 font-semibold">Ammar Aamir</div>
    </div>
  );
};

export default Mylogo;
