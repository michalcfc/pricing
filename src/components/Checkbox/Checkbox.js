import React from "react";

const Checkbox = props => {
  return (
    <>
      {" "}
      <div className="form-check">
        <input
          value={props.value}
          name={props.name}
          id={props.id}
          type="checkbox"
        />
        <label htmlFor={props.id} className="ml-2">
          {props.label}
        </label>
      </div>
    </>
  );
};

export default Checkbox;
