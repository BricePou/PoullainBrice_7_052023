import React, { useState } from 'react';
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Chevron = () => {
    const [rotateChevron, setRotateChevron] = useState(false);

    const handleRotate = () => setRotateChevron(!rotateChevron);

    const rotate = rotateChevron ? "rotate(180deg)" : "rotate(0)"

    return (
        <FontAwesomeIcon icon={faChevronDown} style={{ transform: rotate, transition: "all 0.2s linear" }} onClick={handleRotate} />
      )
}

export default Chevron;