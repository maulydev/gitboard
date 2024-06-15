"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const Navbar = () => {
  const pathname = usePathname();

  const [loggedInUser, setLoggedInUser] = useState(
    JSON.parse(localStorage.getItem("user") || "{}")
  );

  const handleStorageChange = () => {
    setLoggedInUser(JSON.parse(localStorage.getItem("user") || "{}"));
  };

  useEffect(() => {
    window.addEventListener("storage", handleStorageChange);

    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, [loggedInUser, pathname]);

  return (
    <nav className="bg-white p-4 sticky top-0 shadow-lg shadow-gray-300 z-50">
      <div className="container mx-auto px-6 p-2 rounded-sm flex items-center justify-between">
        <Link href="/" className="animate-fade-right">
          <Image
            priority
            src="/logo.png"
            alt="logo"
            width={249}
            height={100}
            className="w-[100px] h-auto"
          />
        </Link>

        {localStorage.getItem("user") && (
          <div className="flex items-center gap-2 animate-fade-left">
            <div className="size-10 rounded-full bg-gray-700 border-2 border-gray-100 flex-shrink-0 overflow-hidden">
              <Image
                src={
                  JSON.parse(localStorage.getItem("user") || "{}")?.user
                    ?.avatar_url || "/avatar.png" || loggedInUser?.user?.avatar_url
                }
                alt="user"
                width={100}
                height={100}
                className="object-cover"
              />
            </div>
            <Link href="" className="text-sm">
              {JSON.parse(localStorage.getItem("user") || "{}")?.user?.login || loggedInUser?.user?.login ||
                "..."}
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
