"use client";

import React from "react";
import PanelCard from "./PanelCard";
import Image from "next/image";
import Link from "next/link";

type FollowerProps = {
  id: number;
  login: string;
  avatar_url: string;
};

const Followers = ({ followers }: any) => {
  const { data, isLoading, error } = followers;

  return (
    <PanelCard error={error} isLoading={isLoading} title="Followers">
      {data?.map((follower: FollowerProps) => (
        <div key={follower?.id} className="flex items-center gap-4">
          <div className="bg-gray-200 size-16 rounded-full overflow-hidden flex-shrink-0">
            <Image
              src={follower?.avatar_url}
              alt="profile"
              width={288}
              height={431}
            />
          </div>
          <div className="flex flex-col">
            <Link
              href={`/profile/${follower.login}`}
              className="font-bold uppercase hover:text-purple-500"
            >
              {follower?.login}
            </Link>
            <small className="text-gray-500">@{follower?.login}</small>
          </div>
        </div>
      ))}
    </PanelCard>
  );
};

export default Followers;
