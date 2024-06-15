"use client";

import request from "@/lib/request";
import StatsCard from "./StatsCard";
import { useQuery } from "@tanstack/react-query";

interface StatsProps {
  followers: number;
  following: number;
  public_repos: number;
}

const Stats = ({ username }: { username: string }) => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["stats"],
    queryFn: async () => {
      const response = await request(
        `/users/${username}`
      );
      return response.data as StatsProps;
    },
  });

  return (
    <div className="space-y-2">
      <StatsCard
        isLoading={isLoading}
        color="bg-blue-500"
        label="Followers"
        value={data?.followers || 0}
      />
      <StatsCard
        isLoading={isLoading}
        color="bg-emerald-500"
        label="Following"
        value={data?.following || 0}
      />
      <StatsCard
        isLoading={isLoading}
        color="bg-rose-500"
        label="Public Repos"
        value={data?.public_repos || 0}
      />
    </div>
  );
};

export default Stats;
