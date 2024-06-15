"use client";

import Link from "next/link";
import PanelCard from "./PanelCard";
import { relativeTime } from "@/lib/dateFormatter";
import { LuFolderGit2 } from "react-icons/lu";

type RepoProps = {
  id: number;
  name: string;
  description: string;
  created_at: string;
  language: string;
  html_url: string;
};

const PublicRepos = ({ repos }: any) => {
  const { data, isLoading, error } = repos;

  return (
    <PanelCard error={error} isLoading={isLoading} title="Public Repositories">
      <div>
        {data?.map((repo: RepoProps) => (
          <div key={repo?.id} className="border-b px-2 py-3 flex gap-4 w-full">
            <LuFolderGit2 />
            <div className="w-full">
              <Link
                target="_blank"
                href={repo?.html_url}
                className="hover:underline hover:text-pink-500 text-gray-800 font-medium flex items-center gap-3"
              >
                <span>{repo?.name}</span>
              </Link>
              <div className="flex flex-col md:flex-row md:items-center md:justify-between w-full">
                <small className="text-gray-500">{repo.language}</small>
                <small className="line-clamp-2 text-gray-500 text-sm font-light">
                  {relativeTime(repo?.created_at)}
                </small>
              </div>
            </div>
          </div>
        ))}
      </div>
    </PanelCard>
  );
};

export default PublicRepos;
