// Navbar.tsx
"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

interface User {
  login?: string;
  avatar_url?: string;
}

interface LocalStorageUser {
  user?: User;
}

const Navbar: React.FC = () => {
  const pathname = usePathname();

  const [loggedInUser, setLoggedInUser] = useState<User>({});

  const handleStorageChange = (): void => {
    const user = JSON.parse(
      localStorage.getItem("user") || "{}"
    ) as LocalStorageUser;
    setLoggedInUser(user.user || {});
  };

  useEffect(() => {
    // Retrieve user data from localStorage on initial render
    const user = JSON.parse(
      localStorage.getItem("user") || "{}"
    ) as LocalStorageUser;
    setLoggedInUser(user.user || {});

    // Add event listener for storage changes (optional)
    window.addEventListener("storage", handleStorageChange);

    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, [pathname]);

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

        {loggedInUser?.login && (
          <div className="flex items-center gap-2 animate-fade-left">
            <div className="size-10 rounded-full bg-gray-700 border-2 border-gray-100 flex-shrink-0 overflow-hidden">
              <Image
                src={loggedInUser?.avatar_url || "/avatar.png"}
                alt="user"
                width={100}
                height={100}
                className="object-cover"
              />
            </div>
            <Link href="" className="text-sm">
              {loggedInUser?.login || "..."}
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
