import "../Star/star.scss"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

function Star ({ rating }) {
    const totalStar = 5
    const starNumber = parseInt(rating)
    const emptyStarNumber = totalStar - starNumber

    return (
        <div>
            {[...Array(starNumber)].map((e, i) => (
                <img 
                className="star"
                key={'full-star-' + i}
                src={<FontAwesomeIcon icon={faStar} />}
                alt="Full Star" 
                />
            ))}
            {[...Array(emptyStarNumber)].map((e, i) => (
                <img 
                className="star"
                key={'empty-star-' + i}
                src={<FontAwesomeIcon icon={faStar} />}
                alt="Empty Star" 
                />
            ))}
        </div>
    )
}

export default Star





{/* <FontAwesomeIcon icon={faStar} /> */}