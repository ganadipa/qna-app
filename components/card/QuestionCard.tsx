import React from "react";

type QuestionCardProps = {
  _id: number,
  title: string;
  tags: number;
  author;
  upvotes;
  views;
  answers;
  createdAt;
};

const QuestionCard = ({
  _id,
  title,
  tags,
  author,
  upvotes,
  views,
  answers,
  createdAt,
}: QuestionCardProps) => {
  return <div>QuestionCard</div>;
};

export default QuestionCard;
