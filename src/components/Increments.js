import React from "react";

const Increments = props => {
    const { id, items, quantity, name, label, disabled } = props;
    return (
        <>
            {" "}
            <div className="step__items">
                {label}
                <div>
                    <button
                        className="btn btn-plus"
                        name={name}
                        disabled={disabled}
                        onClick={(e) => props.removeItems(items, e.target.value, id)}
                    >
                        -
          </button>
                    <span>{quantity}</span>
                    <button
                        className="btn btn-plus"
                        name={name}
                        onClick={(e) => props.addItems(items, e.target.value, id)}
                    >
                        +
          </button>
                </div>
            </div>
        </>
    );
};

export default Increments;
