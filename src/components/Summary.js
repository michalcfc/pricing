import React from "react";
import { Component, useRef } from 'react'
import Method from './Method'
import Cart from './Cart'
import Invoice from './Invoice'
import TotalPrice from './TotalPrice'
import MethodContent from './MethodContent';
import { addItems, removeItems, changeData, payMethod, reservation } from "../store/action";

const methods = [{ id: 1, name: 'dotpay', content: "pay dotpay" }, { id: 2, name: 'p24', content: "pay p24" }, { id: 3, name: 'proforma', content: " pay normal" }]

class Summary extends Component {

  state = {
    isEdtidMode: false,
    value: "Grupa iTur.pl Sp.z.o.o"
  }

  addItems = (name, value, id) => {
    const { dispatch } = this.props;
    dispatch(addItems(name, value, id));
  };

  removeItems = (name, value, id) => {
    const { dispatch } = this.props;
    dispatch(removeItems(name, value, id));
  };

  reservation = value => {
    const { dispatch } = this.props;
    dispatch(reservation(value));
  };

  changeData = data => {
    const { dispatch } = this.props;
    dispatch(changeData(data));
  };

  chooseMethod = method => {
    const { dispatch } = this.props;
    dispatch(payMethod(method));
  };

  changeText = () => {
    console.log(this.changeText)
    const { isEdtidMode } = this.state
    this.setState({
      isEdtidMode: !isEdtidMode,
      value: "Grupa iTur.pl Sp.z.o.o"
    });
  }

  renderEditMode = () => {
    return <div>
      {this.state.value}
    </div>
  }

  renderEditView = () => {
    return <div>
      <input
        type="text"
        defaultValue={this.state.value}
        ref="theTextInput"></input>
      <button onClick={this.changeText2}>Save</button>
    </div>
  }

  render() {
    const { pack, items, price, total, payMethod, pricing, reservation } = this.props
    const { addItems, removeItems, chooseMethod } = this
    return (
      <>
        <div className="row">
          <div className="col-md-8">
            <div className="widget">
              <div className="widget__body">
                {/* <h4>{props.pack.length || "No"} items in cart</h4> */}
                <Cart
                  pack={pack}
                  pricing={pricing}
                  items={items}
                  price={price}
                  addItems={addItems}
                  removeItems={removeItems} />
                <p><input checked={reservation} onChange={(value) => this.reservation(value)} type="checkbox"></input> reservation on-line</p>

                {/* <Invoice renderEditMode={this.renderEditMode} renderEditView={this.renderEditView} changeText={this.changeText} isEdtidMode={this.state.isEdtidMode} ref={inputRef} /> */}
                {this.state.isEdtidMode ?
                  this.renderEditView() :
                  this.renderEditMode()}
                <a href="#" onClick={this.changeText}>Edit</a>
                <Method
                  items={methods}
                  payMethod={chooseMethod}
                  active={payMethod} />
                <MethodContent
                  items={methods}
                  active={payMethod} />
              </div>

            </div>
          </div>
          <TotalPrice total={total} reservation={reservation} />
        </div>
      </>
    );
  };
}
export default Summary;
