import React from 'react';


const Invoice = (props) => {
    return (
        <div className="mb-5">
            <h4>Invoice Data </h4>
            <div className="d-flex align-items-center">
                <input className="mr-3" type="radio" />
                {props.isEdtidMode ? props.renderEditView() : props.renderEditMode()}
            </div>
            <button className="btn-link" onClick={() => props.changeInvoiceData()}>+ Add another</button>
            <div className="invoice__info">
                <small>
                    Faktura zostanie wystawiona w ciągu 7 dni od momentu zaksięgowania wpłaty. Dokument zostanie przesłany drogą elektroniczną. Wszystkie faktury dostępne są równiez w zakładce historia płatności.</small>
            </div>
            {props.isAddAnother ? (
                <div className="openModal">
                    <span onClick={() => props.changeInvoiceData()}>x close</span>
                <div className="widget__items">
          
                <div className="invoice__data">
                    <div className="invoice__check">
                        <input id="radio-1" type="radio" name="radio" />
                        <label for="radio-1"></label>
                    </div>
                    <div>
                        Name: Grupa iTur.pl Sp.z.o.o<br/>
                        Street: Kwarcowa 17<br/>
                        Zip: 90-200<br/>
                    </div>
                </div>

                <div className="invoice__data">
                    <div className="invoice__check">
                        <input id="radio-2" type="radio" name="radio" />
                        <label for="radio-2"></label>
                    </div>
                    <div>
                        Name: Grupa iTur.pl Sp.z.o.o<br/>
                        Street: Kwarcowa 17<br/>
                        Zip: 90-200<br/>
                    </div>
                </div>
                
                <div className="invoice__data">
                  <span onClick={() => props.addNewData()}> + Dodaj nowe dane </span>
                </div>
                </div>
                {props.newData ? props.newInvoiceData() : ''}
                </div>
            ) : ''}
        </div>
    )
}

export default Invoice