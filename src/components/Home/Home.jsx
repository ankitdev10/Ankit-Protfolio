import React from "react";
import "./home.css";
import Profile from "../../images/profile.png";

export default function Home() {
  return (
    <div className="h">
      <div className="p">
        <img className="p-img" src={Profile} alt="pp" />
      </div>
      <div className="h-main">
        <h3 className="h-title">Hello, I am Ankit</h3>
        <div className="h-info">
          <div className="job-title">Learner</div>
          <div className="job-title">Programmer</div>
          <div className="job-title">Web developer</div>
          <div className="job-title">UI designer</div>
        </div>
      </div>
    </div>
  );
}
