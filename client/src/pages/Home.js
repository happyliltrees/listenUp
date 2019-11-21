import React from "react";
import Welcome from "../components/Welcome";
import Recent from "../components/Recent";
import Progress from "../components/Progress";

function Home() {
  return (
    <div className="container-fluid">
      <div className="row">
        <Welcome />
      </div>

      <div className="row">
        <Recent />
      </div>

      <div className="row">
        <Progress value="0"/>
      </div>
    </div>
  );
}

export default Home;