import React from "react";
import Main from "./Main";
import Aside from "./Aside/Aside";

const Profile = () => {
  return (
    <div className="grid lg:grid-cols-3 gap-4">
      <div className="lg:col-span-2">
        <Main />
      </div>
      <div>
        <Aside />
      </div>
    </div>
  );
};

export default Profile;
