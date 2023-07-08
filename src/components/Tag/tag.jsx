import "../Tag/tag.scss"


function Tag({ tagName }) {
  return (
    <div className="Tag">
      <p>
      {tagName}
      </p>
    </div>
  );
}


export default Tag;
