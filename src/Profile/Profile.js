import React from "react";
import "./style.css";

const Profile = ({ name, profession, bio, children, fun }) => {
  return (
    <div className="card">
      {children}
      <div className="content">
        <h1 onClick={(e) => fun(name)}>{name}</h1>
        <h2>{profession}</h2>
        <h2>{bio}</h2>
      </div>
    </div>
  );
};

export default Profile;

Profile.defaultProps = {
  name: "none",
  profession: "none",
  bio: "none",
};
