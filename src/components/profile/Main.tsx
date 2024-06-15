"use client";

import React from "react";
import Header from "./Header";
import Intro from "./Intro";
import ReceivedEvents from "./ReceivedEvents";
import { useQuery } from "@tanstack/react-query";
import { usePathname } from "next/navigation";
import request from "@/lib/request";
import { useProfileStore } from "@/store/profileStore";

const Main: React.FC = () => {
  const pathname = usePathname();
  const username = pathname.split("/")[2];

  const updateProfile = useProfileStore((state) => state.updateProfile);

  const { data, isLoading, error } = useQuery({
    queryKey: ["userData", username],
    queryFn: async () => {
      try {
        const response = await request(`/users/${username}`);

        updateProfile(response.data.login, response.data.avatar_url);

        return response.data;
      } catch (error) {
        throw new Error("Failed to fetch user data");
      }
    },
    enabled: !!username,
  });

  if (error) {
    return <div>Error loading user data</div>;
  }

  return (
    <main className="space-y-4">
      <Header isLoading={isLoading} {...data} />
      <Intro isLoading={isLoading} {...data} />
      <ReceivedEvents username={username} />
    </main>
  );
};

export default Main;
