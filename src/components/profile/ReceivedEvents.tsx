"use client";

import { useQuery } from "@tanstack/react-query";
import Card from "../Card";
import request from "@/lib/request";
import Image from "next/image";
import { relativeTime } from "@/lib/dateFormatter";
import Link from "next/link";
import action from "@/lib/action";
import { LuFolderGit2 } from "react-icons/lu";

type EventProps = {
  id: number;
  type: string;
  actor: {
    login: string;
    display_login: string;
    avatar_url: string;
  };
  repo: { name: string; url: string };
  created_at: string;
};

const ReceivedEvents = ({ username }: { username: string }) => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["events"],
    queryFn: async () => {
      try {
        const response = await request(`/users/${username}/received_events`);
        return response.data;
      } catch (error) {
        throw new Error("Failed to fetch user data");
      }
    },
  });


  return (
    <section>
      <Card title="Received Events" className="space-y-10">
        {data?.map((event: EventProps) => (
          <div key={event.id} className="flex gap-4">
            <div className="rounded-full overflow-hidden flex-shrink-0 size-[50px]">
              <Image
                src={event.actor.avatar_url}
                alt="actor profile"
                width={50}
                height={50}
                className="object-cover"
              />
            </div>
            <div className="space-y-2 w-full">
              <div>
                <p>
                  <Link
                    href={`/profile/${event.actor.login}`}
                    className="font-bold hover:text-purple-500"
                  >
                    {event.actor.display_login}
                  </Link>{" "}
                  {action(event.type)}
                </p>
                <small className="text-gray-500">
                  {relativeTime(event.created_at)}
                </small>
              </div>
              <div className="bg-gray-100 p-4 rounded w-full">
                <a target="_blank" href={event.repo.url} className="hover:underline flex items-center gap-2 hover:text-pink-400">
                <LuFolderGit2 /> {event.repo.name}
                </a>
              </div>
            </div>
          </div>
        ))}
      </Card>
    </section>
  );
};

export default ReceivedEvents;
