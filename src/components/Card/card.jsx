import "../Card/card.scss"
import React from "react"

class Card extends React.Component {
  render() {
    return <div className="Card">
      <p>{this.props.name}</p>
    </div>
  }
}

function Location() {
  return (
    <div className="Other">
      <Card name="Brice" />
    </div>
  );
}


export default Location;
