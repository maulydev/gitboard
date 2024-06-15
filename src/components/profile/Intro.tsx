/* eslint-disable react/no-unescaped-entities */
import { ImSpinner2 } from "react-icons/im";
import Card from "../Card";

const Intro = ({ bio, isLoading }: { bio: string; isLoading: boolean }) => {
  return (
    <section>
      <Card title="About me">
        <p>
          {isLoading ? (
            <span className="flex items-center gap-4 text-gray-400">
              <ImSpinner2 className="animate-spin" /> loading...
            </span>
          ) : (
            bio || <span className="p-2 text-gray-400">No bio data</span>
          )}
        </p>
      </Card>
    </section>
  );
};

export default Intro;
