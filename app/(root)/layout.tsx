import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import React, { ReactNode } from "react";

const layout = ({ children }: { children: ReactNode }) => {
  return (
    <section className="relative w-full min-h-screen h-full">
      <Navbar />
      <div className="max-w-[1200px] mx-auto pb-32">{children}</div>
      <Footer />
    </section>
  );
};

export default layout;
