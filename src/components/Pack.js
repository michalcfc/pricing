import React from "react";
import { Component } from "react";
import { Link } from "react-router-dom";
import { addPack } from "../store/action";

class Pack extends Component {
  addPack = pack => {
    const { dispatch } = this.props;
    dispatch(addPack(pack));
  };

  render() {
    const { id, name, benefits } = this.props;
    return (
      <>
        <div className="col-md-4">
          <div className="pricing">
            <div className="pricing__header">
              <h3>{name}</h3>
              <p>For Small teams or office</p>
            </div>
            <div className="pricing__body">
              <ul>
                {benefits.map((b, id) => {
                  return <li key={id}>{b}</li>;
                })}
              </ul>
            </div>
            <div className="pricing__footer">
              <strong>
                <span>$199</span> /monthly
              </strong>
              <Link
                onClick={() => this.addPack(id)}
                className="btn btn-primary"
                to="/summary"
              >
                Subscribe
              </Link>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Pack;
