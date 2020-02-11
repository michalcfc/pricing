import React from "react";
import { Component } from 'react'
import Method from './Method'
import Cart from './Cart'
import blank from '../img/blank.png'
import dotpay from '../img/dotpay2.png'
import pdf from '../img/pdf.png'
import Invoice from './Invoice'
import TotalPrice from './TotalPrice'
import MethodContent from './MethodContent';
import { addItems, removeItems, changeData, payMethod, reservation } from "../store/action";

const methods = [
  { id: 1, name: 'dotpay', descr: 'Szybkie płatności online. Gwarancja szybkiego zaksiegowania wpłaty.', content: "pay dotpay", img: dotpay },
  { id: 2, name: 'proforma', descr: 'Pobierz fakturę proforma w formie .pdf na podstawie której dokonasz płatności', content: "pay p24", img: pdf },
  { id: 3, name: 'blank', descr: 'Wyświetl dane do przelewu tradycyjnego aby zapłacić na poczcie lub w dowolnym punkcie.', content: " pay normal", img: blank }]
class Summary extends Component {

  state = {

    isEdtidMode: false,
    invoiceData:
      [

        { title: 'Chelsea Football Club', street: 'Fulham Road', adress: 'SW6 1HS London' },
      ],
    tooltip: false,
    isAddAnother: false,
    newData: false,
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

  tooltip = () => {
    const { tooltip } = this.state
    this.setState({ tooltip: !tooltip });
  }

  changeText = () => {
    const { isEdtidMode } = this.state
    this.setState({
      isEdtidMode: !isEdtidMode,

    });
  }

  changeInvoiceData = () => {
    const {isAddAnother} = this.state
    this.setState({
      isAddAnother: !isAddAnother
    })
  }

  addAnother = () => {
    const {isAddAnother} = this.state
    this.setState({
      isAddAnother: !isAddAnother
    })
  }

  saveText = (name, id) => {
    const { isEdtidMode, invoiceData } = this.state
    let addedImage = invoiceData.map(el =>
      el.title === name ? { ...el, title: this.textInput.invoiceData } : el
    );
    this.setState({
      isEdtidMode: !isEdtidMode,
      invoiceData: addedImage

    });
  }

  addNewData = () => {
    const {newData} = this.state
    this.setState({
      newData: !newData
    })
  }

  newInvoiceData = () => {
    return <div>
     <input type="text" />
     <input type="text" />
     <input type="text" />
    </div>
  }

  renderEditMode = () => {
    return <div className="widget__items">
      {this.state.invoiceData.map((i, id) => {
        return <div>
        <p key={id}>{i.title}<br/>
        {i.street}<br/>
        {i.adress}<br/></p>
        </div>
      })}
      <button onClick={() => this.changeText()} className="btn-link">[Edit]</button>
    </div>
  }

  renderEditView = () => {
    return <div>
      {this.state.invoiceData.map((d, id) => {
        return (
          <div key={id}>
            <input
              id={d.id}
              type="text"
              name="title"
              placeholder="company name"
              defaultValue={d.title}
              ref={(input) => { this.textInput = input; }} ></input>
            <input
              id={d.id}
              type="text"
              name="street"
              placeholder="street"
              defaultValue={d.street}
              ref={(input) => { this.textInput = input; }} ></input>
            <input
              id={d.id}
              type="text"
              name="adress"
              placeholder="adress"
              defaultValue={d.adress}
              ref={(input) => { this.textInput = input; }} ></input>
          </div>
        )
      })}
      <button className="btn btn-outline-dark" onClick={(name) => this.saveText(name)}>Save</button>
    </div >
  }

  componentDidMount() {
    setTimeout(() => {
      this.tooltip();
    }, 3000);
  }

  render() {
    const { pack, items, price, total, payMethod, pricing, reservation } = this.props
    const { addItems, removeItems, chooseMethod } = this
    // console.log(this.state.invoiceData);
    // console.log(333);
    return (
      <>
        <div className={"overlay " +(this.state.isAddAnother ? "overlay-active" : "")}></div>
        <div className="row">
          <div className="col-xl-8">
            <div className="widget">
              <div className="widget__body">
                {/* <h4>{props.pack.length || "No"} items in cart</h4> */}
                {/* {this.state.invoiceData.map((d, id) => { return (d.title) })} */}
                <Cart
                  pack={pack}
                  pricing={pricing}
                  items={items}
                  price={price}
                  addItems={addItems}
                  removeItems={removeItems} />

                <div className="position-relative">
                  <p><input id="check-1" checked={reservation} onChange={(value) => this.reservation(value)} type="checkbox"></input>
                  <label for="check-1">włącz rezerwacje on-line</label></p>
                  <div className={this.state.tooltip ? "tip" : 'd-none'}>
                    <div className="pt-3 position-relative">
                      <div className="tip__body">
                        <span className="tip__close" onClick={() => this.tooltip()}>x</span>
                        Chcesz szybciej pozyskiwać gości. Włącz rezerwacje on-line.
                      </div>
                      <div className="tip__arrow"></div>
                    </div>
                  </div>
                </div>

                <Invoice 
                renderEditMode={this.renderEditMode} 
                renderEditView={this.renderEditView} 
                changeText={this.changeText} 
                isEdtidMode={this.state.isEdtidMode}
                changeInvoiceData={this.changeInvoiceData}
                isAddAnother={this.state.isAddAnother}
                addAnother={this.addAnother}
                addNewData={this.addNewData}
                newInvoiceData={this.newInvoiceData}
                newData={this.state.newData}
                 />
                {/* {this.state.isEdtidMode ?
                  this.renderEditView() :
                  this.renderEditMode()} */}
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
