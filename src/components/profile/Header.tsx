import Image from "next/image";
import { relativeTime } from "@/lib/dateFormatter";
import { MdOutlineHomeWork } from "react-icons/md";
import { BiSolidError } from "react-icons/bi";
import Share from "../Share";

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
    <header className="rounded-lg overflow-hidden">
      <div className="bg-purple-500 h-[8.4rem] relative">
        <Share />
        <small className="text-white absolute right-4 bottom-1">
          {isLoading ? (
            <p>loading...</p>
          ) : created_at && !isNaN(new Date(created_at).getTime()) ? (
            <span>Joined: {relativeTime(created_at)}</span>
          ) : (
            <BiSolidError className="text-amber-500 text-xl" />
          )}
        </small>
      </div>
      <div className="bg-white h-[8.4rem] relative">
        <div className="absolute -translate-y-1/2 w-full pl-8">
          <div className="bg-gray-200 border-4 border-white size-40 rounded-full overflow-hidden">
            <Image
              priority
              src={avatar_url || "/avatar.png"}
              alt="profile"
              width={288}
              height={431}
            />
          </div>
          <div className="flex items-center gap-2 absolute top-1/2 translate-x-44 -translate-y-full pb-1 text-white">
            {isLoading ? (
              "loading..."
            ) : (
              <>
                <h4 className="font-bold text-2xl text-white">{name}</h4>
                <small className="text-purple-100">
                  {(login && `@${login}`) || (
                    <BiSolidError className="text-amber-500 text-xl" />
                  )}
                </small>
              </>
            )}
          </div>
          <small className="absolute top-1/2 translate-x-44 text-gray-500 mt-1 flex items-center gap-2">
            <MdOutlineHomeWork />{" "}
            {isLoading
              ? "laoding..."
              : company || <BiSolidError className="text-red-500 text-xl" />}
          </small>
        </div>
      </div>
    </header>
  );
};

export default Header;
