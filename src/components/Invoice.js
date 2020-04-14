import React from 'react';
import warning from '../img/warning.png'


const Invoice = (props) => {
    return (
        <div className="mb-5 invoice">
            <h4>Dane płatnika</h4>
            <div className="d-flex align-items-center">
                <input className="mr-3" type="radio" />
                {props.isEdtidMode ? props.renderEditView() : props.renderEditMode()}
            </div>
            <div className="mb-2 invoice__edit">
                <a href="#" className="mr-4" onClick={() => props.changeText()}>Edytuj</a>
                <a href="#" onClick={() => props.changeInvoiceData()}>Zmień</a>
            </div>
            <div className="invoice__info d-flex">
                <img className="mr-3" src={warning} />
                <small>
                    Faktura zostanie wystawiona w ciągu 7 dni od momentu zaksięgowania wpłaty. <br />Dokument zostanie przesłany drogą elektroniczną. Wszystkie faktury dostępne są równiez w zakładce historia płatności.</small>
            </div>
            {props.isAddAnother ? (
                <div className="openModal">
                    {props.newData ? props.newInvoiceData() : (<> <span onClick={() => props.changeInvoiceData()}>x close</span>
                        <div className="widget__items">

                            <div className="invoice__data">
                                <div className="d-flex">
                                    <input checked="checked" id="radio-1" type="radio" name="radio" />
                                    <label for="radio-1"></label>
                                    <div>
                                        Grupa iTur.pl Sp.z.o.o<br />
                                        Kwarcowa 17<br />
                                        90-200<br />
                                    </div>
                                </div>
                            </div>

                            <div className="invoice__data">
                                <div className="d-flex">
                                    <input id="radio-2" type="radio" name="radio" />
                                    <label for="radio-2"></label>
                                    <div>
                                        Grupa iTur.pl Sp.z.o.o<br />
                                        Kwarcowa 17<br />
                                        90-200<br />
                                    </div>
                                </div>
                            </div>

                            <div className="invoice__data">
                                <a href="#" onClick={() => props.addNewData()}> + Dodaj nowe dane </a>
                            </div>

                        </div>
                    </>)}


                </div>) : ''}

        </div>
    )
}

export default Invoice