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
            <div className="col-md-12 w-100 text-center">
            <h2>Wybierz pakiet</h2>
            <p>Współpraca z Noclegowo dostępna jest w jednej z dwóch opcji:<br/>
<b>rozliczenie za rezerwacje</b> lub <b>roczna opłata abonamentowa</b>.</p>

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
          </div>
            3 / 12 ms-c
          <div className="row">
            {isReservationPack ? (<Pack benefits={pricing[0].res.benefits} name={pricing[0].res.name} price={pricing[0].res.price} />) : 
           ( 
            <> 
            {pricing[0].abo.map((b, id) => {
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
           </>)}
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
