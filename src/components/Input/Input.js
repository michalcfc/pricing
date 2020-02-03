import React from "react";

const Input = props => {
  return (
    <>
      {" "}
      <input value={props.value} name={props.name} id={props.id} type="radio" />
      <label htmlFor={props.id} className="ml-2">
        {props.label}
      </label>
    </>
  );
};

export default Input;
