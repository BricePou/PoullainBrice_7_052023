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
        <span className="chevron">
          <span className="chevron-Up">
            <Chevron isOpen={open}/>
          </span>
        </span>
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
