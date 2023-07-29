import "../Star/star.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

function Star(props) {
  const totalStar = 5;
  const starNumber = parseInt(props.star);
  const emptyStarNumber = totalStar - starNumber;

  return (
    <div className="stars">
      {[...Array(starNumber)].map((e, i) => (
        <FontAwesomeIcon
          icon={faStar}
          className="star"
          key={"full-star-" + i}
        />
      ))}
      {[...Array(emptyStarNumber)].map((e, i) => (
        <FontAwesomeIcon
          icon={faStar}
          className="empty-star"
          key={"empty-star-" + i}
        />
      ))}
    </div>
  );
}

export default Star;
