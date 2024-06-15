"use client";

import React from "react";
import Header from "./Header";
import Intro from "./Intro";
import ReceivedEvents from "./ReceivedEvents";
import { useQuery } from "@tanstack/react-query";
import { usePathname } from "next/navigation";
import request from "@/lib/request";

const Main = () => {
  const pathname = usePathname();
  const username = pathname.split("/")[2];

  const { data, isLoading, error } = useQuery({
    queryKey: ["userData"],
    queryFn: async () => {
      try {
        const response = await request(`/users/${username}`);
        if (typeof window !== "undefined") {
          localStorage.setItem("user", JSON.stringify({ user: response.data }));
        }
        return response.data;
      } catch (error) {
        throw new Error("Failed to fetch user data");
      }
    },
  });

  return (
    <main className="lg:col-span-2 space-y-4">
      <Header isLoading={isLoading} {...data} />
      <Intro isLoading={isLoading} {...data} />
      <ReceivedEvents username={username} />
    </main>
  );
};

export default Main;
