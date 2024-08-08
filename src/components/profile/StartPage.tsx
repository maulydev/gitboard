"use client";

import { useRouter } from "next/navigation";
import { FormEvent } from "react";
import WebHits2 from "../WebHits2";

export default function StartPage() {
  const router = useRouter();

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const username = formData.get("username")?.toString() || "";
    router.push(`/profile/${username}`);
  };

  return (
    <main className="h-screen w-full p-4 space-y-4">
      <header className="bg-purple-500 text-white text-2xl rounded-lg p-12 text-center font-medium">
        Welcome to GitBoard
      </header>
      <form
        onSubmit={handleSubmit}
        className="bg-white rounded-lg p-8 flex items-center gap-2"
      >
        <input
          required
          name="username"
          type="text"
          placeholder="Type in your github username"
          className="border px-4 py-2 w-full rounded-lg"
        />
        <button className="bg-purple-500 text-white px-4 py-2 rounded-lg">
          Submit
        </button>
      </form>
    </main>
  );
}
