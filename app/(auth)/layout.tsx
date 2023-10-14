import React from "react";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <section className="flex-center h-[100dvh] w-full">{children}</section>
  );
};

export default Layout;
