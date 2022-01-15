import "./Widgets.css";
import React from "react";
import { FiberManualRecord, Info } from "@mui/icons-material";

function Widgets() {
  const newsArticle = (heading, subtitle) => (
    <div className="widgets__article">
      <div className="widgets__articleLeft">
        <FiberManualRecord />
      </div>

      <div className="widgets__articleRight">
        <h4>{heading}</h4>
        <p>{subtitle}</p>
      </div>
    </div>
  );

  return (
    <div className="widgets">
      <div className="widgets_header">
        <h2>LinkedIn News</h2>
        <Info />
      </div>

      {newsArticle("Papa React is back ", "top news- 889 readers")}
      {newsArticle("Papa React is back ", "top news- 889 readers")}
      {newsArticle("Papa React is back ", "top news- 889 readers")}
    </div>
  );
}

export default Widgets;
