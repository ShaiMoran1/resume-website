import React from "react";

type ProfileProps = {};

export const Profile: React.FC<ProfileProps> = () => {
  return (
    <div className="rounded-full h-28 w-24 border-3 border-solid border-black overflow-hidden">
      <img src={require("../../assets/images/shai.jpeg")} />
    </div>
  );
};
