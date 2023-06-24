import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import "../Slider/slider.scss"


function Slider() {
    return (
            <Carousel>
                <div>slider 1</div>
                <div>slider 2</div>
                <div>slider 3</div>
            </Carousel>
    )
}

export default Slider