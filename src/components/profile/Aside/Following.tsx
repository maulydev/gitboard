"use client";

import React from "react";
import PanelCard from "./PanelCard";
import Image from "next/image";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import Link from "next/link";

type FollowingProps = {
  id: number;
  login: string;
  avatar_url: string;
};

const Following = ({ following }: any) => {
  const { data, isLoading, error } = following;

  return (
    <PanelCard error={error} isLoading={isLoading} title="Following">
      {data?.map((follower: FollowingProps) => (
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

export default Following;
