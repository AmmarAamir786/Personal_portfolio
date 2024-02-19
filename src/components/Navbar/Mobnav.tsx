import React from "react";

const MobNav = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="fixed bg-myblack/90 backdrop-blur-3xl left-0 right-0 top-0 pb-5 flex flex-col margin py-9 z-50">
      {children}
    </div>
  );
};

export default MobNav;
