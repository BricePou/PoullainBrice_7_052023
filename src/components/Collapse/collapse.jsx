import React from 'react';
import { useState } from 'react';
import "../Collapse/collapse.scss"


    
const Collapsible = (props) => {
    const [open, setOPen] = useState(false);
    const toggle = () => {
        setOPen(!open);
      };
      
      return (
        <div className='buttons'>
          <button onClick={toggle} className='btn'>{props.label}</button>
          {open && (
            <div className={open ? "content-show" : "content-parent"}>
            <div className='content'> {props.children} </div>
        </div>
          )}
        </div>
      );
  };



export default Collapsible;