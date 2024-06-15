import { ReactNode } from "react";
import { BiSolidError } from "react-icons/bi";

type PanelCardProps = {
  children: ReactNode;
  title: string;
  isLoading: boolean;
  error: Error | null;
};

const PanelCard = ({ children, title, isLoading, error }: PanelCardProps) => {
  return (
    <div className="bg-white rounded-lg pl-6 pr-2 py-6 space-y-8 text-gray-800">
      <div className="flex flex-col">
        <h5 className="font-bold text-xl">{title}</h5>
        <div className="w-14 h-0.5 bg-purple-500 mt-1" />
      </div>
      <div className="space-y-8 max-h-96 overflow-y-auto pr-4">
        {error && <p className="flex items-center gap-4 text-sm"><BiSolidError className="text-red-500 text-xl" /> Something went wrong!</p>}
        {isLoading && (
          <>
            <div className="space-y-2 animate-pulse">
              <div className="bg-gray-100 rounded h-4 w-[50%]"></div>
              <div className="bg-gray-100 rounded h-4 w-[35%]"></div>
            </div>
            <div className="space-y-2 animate-pulse">
              <div className="bg-gray-100 rounded h-4 w-[50%]"></div>
              <div className="bg-gray-100 rounded h-4 w-[35%]"></div>
            </div>
            <div className="space-y-2 animate-pulse">
              <div className="bg-gray-100 rounded h-4 w-[50%]"></div>
              <div className="bg-gray-100 rounded h-4 w-[35%]"></div>
            </div>
            <div className="space-y-2 animate-pulse">
              <div className="bg-gray-100 rounded h-4 w-[50%]"></div>
              <div className="bg-gray-100 rounded h-4 w-[35%]"></div>
            </div>
            <div className="space-y-2 animate-pulse">
              <div className="bg-gray-100 rounded h-4 w-[50%]"></div>
              <div className="bg-gray-100 rounded h-4 w-[35%]"></div>
            </div>
          </>
        )}
        <>{children}</>
      </div>
    </div>
  );
};

export default PanelCard;
