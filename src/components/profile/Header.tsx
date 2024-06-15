import Image from "next/image";
import { relativeTime } from "@/lib/dateFormatter";
import { MdOutlineHomeWork } from "react-icons/md";
import { BiSolidError } from "react-icons/bi";
import Share from "../Share";
import { FaClock } from "react-icons/fa";

type HeaderPops = {
  login: string;
  company: string;
  name: string;
  created_at: string;
  avatar_url: string;
  isLoading: boolean;
};

const Header = ({
  login,
  company,
  name,
  created_at,
  avatar_url,
  isLoading,
}: HeaderPops) => {
  return (
    <header className="rounded-lg overflow-hidden w-full">
      <div className="bg-purple-500 h-[8.4rem] relative">
        <Share />
      </div>
      <div className="bg-white h-[12rem] md:h-[8.4rem] relative">
        <div className="md:absolute -translate-y-[40%] md:-translate-y-1/2 w-full md:pl-8 flex flex-col items-center md:block md:gap-0 p-8 md:p-0">
          <div className="bg-gray-200 border-[8px] md:border-4 border-white size-40 rounded-full overflow-hidden">
            <Image
              priority
              src={avatar_url || "/avatar.png"}
              alt="profile"
              width={288}
              height={431}
            />
          </div>
          <div className="flex items-center gap-2 md:absolute md:top-1/2 md:translate-x-44 md:-translate-y-full md:pb-1 text-white">
            {isLoading ? (
              "loading..."
            ) : (
              <span className="flex flex-col md:flex-row md:gap-2 items-center">
                <h4 className="font-bold text-center text-2xl text-gray-800 md:text-white">
                  {name}
                </h4>
                <small className="text-gray-800 md:text-purple-100 text-base md:base">
                  {(login && `@${login}`) || (
                    <BiSolidError className="text-amber-500 text-xl" />
                  )}
                </small>
              </span>
            )}
          </div>
          <div className="md:absolute md:top-1/2 md:translate-x-44 text-gray-500 mt-1 space-y-2">
            <small className="flex items-center gap-2">
              <MdOutlineHomeWork />{" "}
              {isLoading
                ? "laoding..."
                : company || <BiSolidError className="text-red-500 text-xl" />}
            </small>
            <small className="text-gray-400">
              {isLoading ? (
                <p>loading...</p>
              ) : created_at && !isNaN(new Date(created_at).getTime()) ? (
                <span className="flex items-center gap-2">
                  <FaClock /> {relativeTime(created_at)}
                </span>
              ) : (
                <BiSolidError className="text-amber-500 text-xl" />
              )}
            </small>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
