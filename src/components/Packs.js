import React from "react";
import { Component } from "react";
import Pack from "./Pack";
// import { connect } from "react-redux";

class Packs extends Component {

  state = {
    isReservationPack: false,
  }

  reservation = () => {
    const { isReservationPack  } = this.state
    this.setState({
      isReservationPack: !isReservationPack
    })
  }

  render() {
    console.log(this.state.isReservationPack)
    const { dispatch, pricing } = this.props;
    const { isReservationPack } = this.state;
    return (
      <>
        <div className="container">
          <div className="row">
          <div
            className={
              isReservationPack ? "toggle-btn active" : "toggle-btn"
            }
            onClick={() => this.reservation()}
          >
            <input
              type="checkbox"
              className="cb-value"
              // onMouseOver={() => props.handleMouseEnter()}
            />
            <span className="round-btn" />
          </div>
          </div>
          <div className="row">
            {isReservationPack ? 'rezerwacje' : '' }
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
