/* eslint-disable react/no-unescaped-entities */
import { ReactNode } from "react";
import { twMerge } from "tailwind-merge";
import WebHits2 from "./WebHits2";

type CardProps = {
  children?: ReactNode;
  title: string;
  className?: string;
};

const Card = ({ children, title, className }: CardProps) => {
  return (
    <div className="w-full bg-white rounded-lg py-4">
      <div className="flex items-center gap-4">
        <div className="w-12 h-0.5 bg-purple-500" />
        <h6 className="font-bold text-xl text-purple-500">{title}</h6>
      </div>
      <div className={twMerge("p-8", className)}>{children}</div>
    </div>
  );
};

export default Card;
