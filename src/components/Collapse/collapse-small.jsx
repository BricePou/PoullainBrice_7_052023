import React from "react";
import { useState } from "react";
import "../Collapse/collapse-small.scss";
import Chevron from "../Collapse/chevron";

const CollapsibleSmall = (props) => {
  const [open, setOPen] = useState(false);
  const toggle = () => {
    setOPen(!open);
  };

  return (
    <div className="buttons">
      <button onClick={toggle} className="btn">
        {props.label}
        <div className="chevron">
          <div className="Chevron-Up">
            <Chevron />
          </div>
        </div>
      </button>
      {open && (
        <div className={open ? "content-show" : "content-parent"}>
          <div className="content"> {props.children} </div>
        </div>
      )}
    </div>
  );
};

export default CollapsibleSmall;