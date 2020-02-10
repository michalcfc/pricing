import React from 'react';


const Invoice = (props) => {
    return (
        <div className="mb-5">
            <h4>Invoice Data </h4>
            <div className="d-flex align-items-center">
                <input className="mr-3" type="radio" />
                {props.isEdtidMode ? props.renderEditView() : props.renderEditMode()}
            </div>
            <button className="btn-link">+ Add another</button>
            <div className="invoice__info">
                <small>
                    Faktura zostanie wystawiona w ciągu 7 dni od momentu zaksięgowania wpłaty. Dokument zostanie przesłany drogą elektroniczną. Wszystkie faktury dostępne są równiez w zakładce historia płatności.</small>
            </div>
        </div>
    )
}

export default Invoice