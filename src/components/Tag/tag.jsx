import React from "react";
import "../Tag/tag.scss"

class Tag extends React.Component {
  render() {
    return <div className="Tag">
      <p>{this.props.name}</p>
    </div>
  }
}

function Name() {
  return (
    <div>
      <Tag name="Brice" />
    </div>
  );
}


export default Name;
