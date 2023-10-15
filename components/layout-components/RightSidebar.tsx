import Image from "next/image";
import Link from "next/link";
import React from "react";
import RenderTag from "./RenderTag";

const topQuestions = [
  {
    _id: 1,
    title: "How do I use express as a custom server in NextJS?",
  },
  {
    _id: 2,
    title: "How do I use express as a custom server in NextJS?",
  },
  {
    _id: 3,
    title: "How do I use express as a custom server in NextJS?",
  },
  {
    _id: 4,
    title: "How do I use express as a custom server in NextJS?",
  },
  {
    _id: 5,
    title: "How do I use express as a custom server in NextJS?",
  },
];

const popularTags = [
  { _id: 1, name: "javascript", totalQuestions: 10 },
  { _id: 2, name: "javascript", totalQuestions: 9 },
  { _id: 3, name: "javascript", totalQuestions: 8 },
  { _id: 4, name: "javascript", totalQuestions: 7 },
  { _id: 5, name: "javascript", totalQuestions: 6 },
];

const RightSidebar = () => {
  return (
    <section className="background-light900_dark200 light-border sticky right-0 top-0 flex h-screen w-[350px] flex-col overflow-y-auto border-l p-6 pt-28 shadow-light-300 dark:shadow-none max-xl:hidden">
      <div>
        {" "}
        <h3 className="h3-bold primary-text-gradient">Top Questions</h3>
        <div className="mt-7 flex w-full flex-col gap-[30px]">
          {topQuestions.map((q) => (
            <Link
              href={`/questions/${q._id}`}
              key={q._id}
              className="flex cursor-pointer items-center justify-between gap-7"
            >
              <p className="body-medium text-dark500_light700">{q.title}</p>
              <Image
                src="/assets/icons/chevron-right.svg"
                alt=">"
                width={20}
                height={20}
                className="invert-colors"
              />
            </Link>
          ))}
        </div>
      </div>
      <div className="mt-16">
        <h3 className="h3-bold primary-text-gradient">Popular Tags</h3>
        <div className="mt-7 flex flex-col gap-4">
          {popularTags.map((tag) => (
            <RenderTag
              key={tag._id}
              _id={tag._id}
              name={tag.name}
              totalQuestions={tag.totalQuestions}
              showCount
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default RightSidebar;
