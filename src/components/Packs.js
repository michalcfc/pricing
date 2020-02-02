import React from "react";
import { Component } from "react";
import Pack from "./Pack";
// import { connect } from "react-redux";

class Packs extends Component {
  render() {
    const { dispatch, pricing } = this.props;
    return (
      <>
        <div className="container">
          <div className="row">
            {pricing.map((b, id) => {
              return (
                <Pack
                  id={b.id}
                  key={id}
                  name={b.name}
                  price={b.price}
                  benefits={b.benefits}
                  dispatch={dispatch}
                />
              );
            })}
          </div>
        </div>
      </>
    );
  }
}

export default Packs;

// const mapStateToProps = state => {
//   return {
//     test: state.test
//   };
// };
// const mapDispatchToProps = dispatch => ({ dispatch });

// export default connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(Packs);
