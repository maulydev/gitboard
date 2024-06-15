import React from "react";
import Main from "./Main";
import Aside from "./Aside/Aside";

const Profile = () => {
  
  return (
    <div className="grid lg:grid-cols-3 gap-4 p-4">
      <Main />
      <Aside />
    </div>
  );
};

export default Profile;
