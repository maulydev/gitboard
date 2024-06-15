"use client";

import React from "react";
import Stats from "./Stats";
import PublicRepos from "./PublicRepos";
import Followers from "./Followers";
import Following from "./Following";
import { usePathname } from "next/navigation";
import { useQueries } from "@tanstack/react-query";
import request from "@/lib/request";

const Aside = () => {
  const pathname = usePathname();
  const username = pathname.split("/")[2];

  const results = useQueries({
    queries: [
      {
        queryKey: ["followers"],
        queryFn: async () => {
          try {
            const response = await request(
              `/users/${username}/followers`
            );
            return response.data;
          } catch (error) {
            throw new Error("Failed to fetch followers data");
          }
        },
      },
      {
        queryKey: ["following"],
        queryFn: async () => {
          try {
            const response = await request(
              `/users/${username}/following`
            );
            return response.data;
          } catch (error) {
            throw new Error("Failed to fetch following data");
          }
        },
      },
      {
        queryKey: ["repos"],
        queryFn: async () => {
          try {
            const response = await request(
              `/users/${username}/repos`
            );
            return response.data;
          } catch (error) {
            throw new Error("Failed to fetch repos data");
          }
        },
      },
    ],
  });

  return (
    <aside className="space-y-4 col-span-full lg:col-span-1">
      <Stats username={username} />
      <PublicRepos repos={results[2]} />
      <Followers followers={results[0]} />
      <Following following={results[1]} />
    </aside>
  );
};

export default Aside;
