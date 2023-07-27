import React from 'react';
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Chevron = ({isOpen}) => {

    const rotate = isOpen ? "rotate(180deg)" : "rotate(0)"

    return (
        <FontAwesomeIcon icon={faChevronDown} style={{ transform: rotate, transition: "all 0.2s linear" }} />
      )
}

export default Chevron;