"use client";

import { sendToWebhits } from "@/lib/requests";
import { useProfileStore } from "@/store/profileStore";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

const Navbar: React.FC = () => {
  const login = useProfileStore((state) => state.login);
  const avatar_url = useProfileStore((state) => state.avatar_url);

  const pathname = usePathname();
  
  useEffect(() => {
    sendToWebhits(pathname);
  }, [pathname]);


  return (
    <nav className="bg-white p-4 sticky top-0 shadow-lg shadow-gray-300 z-50 inset-x-0">
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

        {login && avatar_url && (
          <div className="flex items-center gap-2 animate-fade-left">
            <div className="size-10 rounded-full bg-gray-700 border-2 border-gray-100 flex-shrink-0 overflow-hidden">
              <Image
                src={avatar_url || "/avatar.png"}
                alt="user"
                width={100}
                height={100}
                className="object-cover"
              />
            </div>
            <Link href="" className="text-sm">
              {(login && avatar_url && login) || "..."}
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
