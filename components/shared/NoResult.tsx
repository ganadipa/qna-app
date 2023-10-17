import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";

type NoResultProps = {
  title: string;
  description: string;
  link: string;
  linkTitle: string;
};

const NoResult = ({ title, description, link, linkTitle }: NoResultProps) => {
  return (
    <div className="mt-12 flex w-full flex-col items-center justify-center gap-4">
      <Image
        src="/assets/images/light-illustration.png"
        alt=""
        width={270}
        height={200}
        className="block object-contain dark:hidden"
      />

      <Image
        src="/assets/images/dark-illustration.png"
        alt=""
        width={270}
        height={200}
        className="hidden object-contain dark:flex"
      />

      <div className="flex-center flex-col">
        <h2 className="h2-bold text-dark200_light900">{title}</h2>
        <p className="body-regular text-dark500_light700 my-3.5 max-w-md text-center">
          {description}
        </p>
      </div>
      <Link href={link}>
        <Button className="paragraph-medium min-h-[46px] rounded-lg bg-primary-500 px-4 py-3 text-light-900 hover:bg-primary-500 dark:bg-primary-500 dark:text-light-900">
          {linkTitle}
        </Button>
      </Link>
    </div>
  );
};

export default NoResult;
