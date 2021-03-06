import React from "react";

function Entry(props) {
  return (
    <div className="dictionary">
      <dl className="term">
        <dt>
          <span className="emoji" role="img" aria-label="Tense Biceps">
            {props.emoji}
          </span>
          <span>{props.name}</span>
        </dt>
        <dd>{props.meaning}</dd>
      </dl>
    </div>
  );
}
export default Entry;
