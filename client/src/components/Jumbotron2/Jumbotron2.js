import React from "react";

const Jumbotron2 = ({ children }) => (
  <div
    style={{ height: 125, clear: "both", paddingTop: 15, textAlign: "center" }}
    className="jumbotron"
  >
    {children}
  </div>
);

export default Jumbotron2;
