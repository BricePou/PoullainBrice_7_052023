import React from "react";
import { useState } from "react";
import "../Collapse/collapse.scss";
import Chevron from "../Collapse/chevron";

const Collapsible = (props, active) => {
  const [open, setOPen] = useState(false);
  const toggle = () => {
    setOPen(!open);
  };


  return (
    <div className={props.className}>
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

export default Collapsible;
