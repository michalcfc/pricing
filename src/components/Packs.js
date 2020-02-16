import React from "react";
import { Component } from "react";
import Pack from "./Pack";
// import { connect } from "react-redux";

class Packs extends Component {

  state = {
    isReservationPack: false,
    sixMonths: false
  }

  reservation = () => {
    const { isReservationPack } = this.state
    this.setState({
      isReservationPack: !isReservationPack,
    })
  }

  changePrice = () => {
    const { sixMonths } = this.state
    this.setState({
      sixMonths: !sixMonths,
    })
  }

  render() {
    console.log(this.state.isReservationPack)
    const { dispatch, pricing } = this.props;
    const { isReservationPack, sixMonths } = this.state;
    return (
      <>
        <div className="container">
          <div className="row">
            <div className="col-md-12 w-100 text-center">
              <h2>Wybierz pakiet</h2>
              <p>Współpraca z Noclegowo dostępna jest w jednej z dwóch opcji:<br />
                <b>rozliczenie za rezerwacje</b> lub <b>roczna opłata abonamentowa</b>.</p>

              <div class="switch__pack">
                <input id="pack" type="checkbox" onClick={() => this.reservation()} />
                <label for="pack">
                  <div class="switch__pack__select" data-checked="Rezerwacje on-line" data-unchecked="Abonament"></div>
                </label>
              </div>
              {/* <div
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
          </div> */}
            </div>
          </div>
          <div className="d-flex mt-4" onChange={(e) => this.changePrice(e.target.value)}>
            <div><input value="No" name="pack" type="radio" id="three" /> <label for="three">3 miesiące</label></div>
            <div><input value="Yes" checked={!sixMonths && "checked"} name="pack" type="radio" id="twelve" /> <label for="twelve">12 miesiący</label></div>
          </div>
          <div className="row">
            {isReservationPack ? (<Pack benefits={pricing[0].res.benefits} name={pricing[0].res.name} price={pricing[0].res.price} />) :
              (
                <>
                  {pricing[0].abo.map((b, id) => {
                    return (

                      <Pack
                        id={b.id}
                        sixMonths={sixMonths}
                        halfPrice={b.halfPrice}
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
