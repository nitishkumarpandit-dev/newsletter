import React, { ReactNode } from "react";

const layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="w-full h-screen flex items-center justify-between">
      {children}
    </div>
  );
};

export default layout;
