import { ImSpinner2 } from "react-icons/im";

type StatsCardProps = {
  label: string;
  value: number;
  color?: string;
  isLoading: boolean;
};

const StatsCard = ({
  isLoading,
  label,
  value,
  color = "bg-gray-800",
}: StatsCardProps) => {
  return (
    <div className="bg-white flex items-center justify-between p-7 rounded-lg text-lg">
      <div className="flex items-center gap-6">
        <div className={`size-4 rounded-full ${color}`}></div>
        <span className="text-gray-600">{label}</span>
      </div>
      {isLoading ? (
        <ImSpinner2 className="animate-spin text-gray-500" />
      ) : (
        <span>{value}</span>
      )}
    </div>
  );
};

export default StatsCard;
