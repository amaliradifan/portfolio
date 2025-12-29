import { Inter } from "next/font/google";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PreviewButton from "@/components/PreviewButton";
import GithubButton from "@/components/GithubButton";

const inter = Inter({ subsets: ["latin"] });

export default function Project({
  title,
  description,
  position,
  date,
  previewLink,
  githubLink,
  isCompleted,
}: any) {
  return (
    <div className="w-5/6 border border-gray-800 rounded-xl p-5">
      <div className="flex mb-2">
        <h1 className="text-2xl">{title}</h1>
        <h2 className="ml-auto text-base rounded-3xl bg-light-invert px-5 py-1.5 text-light-primary">
          {isCompleted ? date : `${date} - Present`}
        </h2>
      </div>
      <p className={`${inter.className} mb-3`}>{description}</p>
      <div className="flex gap-2.5">
        {previewLink && <PreviewButton link={previewLink} />}
        {githubLink && <GithubButton link={githubLink} />}
      </div>
    </div>
  );
}

