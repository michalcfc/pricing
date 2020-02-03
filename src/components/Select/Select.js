import React from "react";

const Select = props => {
  return <select onChange={e => this.props.options(e.target.value)} />;
};

export default Select;
