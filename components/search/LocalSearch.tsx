"use client";
import Image from "next/image";
import React from "react";
import { Input } from "../ui/input";

type Props = {
  route: string;
  iconPosition: "left" | "right";
  imgSrc: string;
  placeholder: string;
  otherClasses: string;
};

const LocalSearch = ({
  route,
  iconPosition,
  imgSrc,
  placeholder,
  otherClasses,
}: Props) => {
  return (
    <div
      className={` ${otherClasses} background-light800_darkgradient flex min-h-[56px] grow ${
        iconPosition === "left" ? "" : "flex-row-reverse"
      } items-center gap-4 rounded-[10px] px-4`}
    >
      <Image
        src={imgSrc}
        alt=""
        width={24}
        height={24}
        className="cursor-pointer"
      />
      <Input
        type="text"
        placeholder={placeholder}
        value=""
        onChange={() => {}}
        className="paragraph-regular no-focus placeholder background-light800_darkgradient border-none shadow-none outline-none"
      />
    </div>
  );
};

export default LocalSearch;
