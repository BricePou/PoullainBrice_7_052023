import React, { useState } from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import "../Slider/slider.scss"


function Slider({images}) {

	const [current, setCurrent] = useState(0)
	const length = images.length
	const nextSlide = () => {
		setCurrent(current === length - 1 ? 0 : current + 1)
	}
	const previousSlide = () => {
		setCurrent(current === 0 ? length - 1 : current - 1)
	}
	if (!Array.isArray(images) || length <= 0) {
		return null
	}

	return (
		<div className="gallery">
			{length > 1 && (
				<img
					src={<FontAwesomeIcon icon={faChevronLeft} />}
					className="left-arrow"
					onClick={previousSlide}
					alt="Previous Arrow"
				/>
			)}
			{length > 1 && (
				<img
					src={<FontAwesomeIcon icon={faChevronLeft} />}
					className="right-arrow"
					onClick={nextSlide}
					alt="Next Arrow"
				/>
			)}
			{images.map((slider, index) => {
				return (
					<div
						className={index === current ? 'slide active' : 'slide'}
						key={`slider-${index}`}
					>
						{index === current && (
							<img
								src={slider}
								alt={'slide ' + (parseInt(index) + 1)}
								className="image"
							/>
						)}
					</div>
				)
			})}
		</div>
	)
}

export default Slider