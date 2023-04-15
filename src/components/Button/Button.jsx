import React from "react";

function Button(props) {
  return (
    <button
      className="btn"
      style={{
        color: props.color,
        backgroundColor: props.background,
        padding: props.padding,
        fontSize: props.fontSize,
      }}
    >
      <img src={props?.icon} alt={props?.name} />
      {props?.title}
    </button>
  );
}

export default Button;
