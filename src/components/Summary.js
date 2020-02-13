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
  { id: 1, name: 'Szybki przelew', descr: 'Szybkie płatności online. Gwarancja szybkiego zaksiegowania wpłaty.', content: "pay dotpay", img: dotpay },
  { id: 2, name: 'Proforma', descr: 'Pobierz fakturę proforma w formie .pdf na podstawie której dokonasz płatności', content: "pay p24", img: pdf },
  { id: 3, name: 'Dane do przelewu', descr: 'Wyświetl dane do przelewu tradycyjnego aby zapłacić na poczcie lub w dowolnym punkcie.', content: " pay normal", img: blank }]
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
    <h4>Dodaj nowe dane:</h4>
    <div>
     <label htmlFor="name">Nazwa</label>
     <input id="name" type="text"/>
    </div>
    <div>
     <label htmlFor="city">Miejscowość</label>
     <input id="city" type="text" />
    </div>
    <div>
     <label htmlFor="street">Ulica</label>
     <input id="street" type="text" />
    </div>
    <div>
     <label htmlFor="zip">Kod pocztowy</label>
     <input id="zip" type="text" />
    </div>
    <button className="btn btn-primary" onClick={() => this.addNewData()}>Zapisz</button>
    </div>
  }

  renderEditMode = () => {
    return <div className="d-flex">
    <input checked="checked" type="radio" id="invoice" />
      <label for="invoice"></label>
        <div>
            {this.state.invoiceData.map((i, id) => {
        return <div>
        <p key={id}>{i.title}<br/>
        {i.street}<br/>
        {i.adress}<br/></p>
        </div>
      })}
    </div>
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
    // console.log(reservation);
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
                  removeItems={removeItems}
                  reservation={reservation}
                  res={this.reservation} 
                  tooltip={this.state.tooltip}
                  tip={this.tooltip}/>

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
              </div>

            </div>
            <div className="widget">
            <div className="widget__body">

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
