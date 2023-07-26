import Navbar from "@/components/layout/navbar";
import React from "react";

export interface LayoutProps {
  children: React.ReactNode;
}

const layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Navbar />
      <div className="xl:max-w-[1230px] m-auto mt-2">{children}</div>
    </>
  );
};

export default layout;
