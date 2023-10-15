import Navbar from "@/components/layout-components/navbar/Navbar";
import { FCChild } from "@/types";
import React from "react";

const Layout = ({ children }: FCChild) => {
  return (
    <main className="background-light850_dark100">
      <Navbar />
      <div className="flex">
        left side bar
        <section className="flex min-h-screen flex-1 flex-col px-6 pb-6 pt-36 max-md:pb-14 sm:px-14 ">
          <div className="mx-auto w-full max-w-5xl">{children}</div>
        </section>
        right sidebar
      </div>
    </main>
  );
};

export default Layout;
