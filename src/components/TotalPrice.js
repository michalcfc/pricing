import React from 'react';
import { Link } from 'react-router-dom'

const TotalPrice = (props) => {
    const { total, reservation } = props
    return (
        <div className="col-xl-4">
            <div className="sticky">
                <div className="summary__pay">
                    <div className="widget__body">

                        <h4>Podsumowanie</h4>
                        <div className="billing">
                            <div className="widget__items">
                                <div>Aktywacja do: </div>
                                <div className="total__price">
                                    <span>23-02-2021</span></div>

                            </div>
                            <div className="widget__items">
                                <div>Kwota netto:</div>
                                <div className="total__price">
                                    <span>300,00</span></div>
                            </div>
                            <div className="widget__items">
                                <div>VAT:</div>
                                <div className="total__price">
                                    <span>23%</span></div>

                            </div>
                        </div>
                        <div className="widget__items summary__price">
                            <div>DO ZAPŁATY:</div>
                            <div className="total__price">
                                <span className="total__price-27">{total}</span>,
                            <span className="total__price-21">00 zł</span></div>
                        </div>
                        {reservation ? <div className="mt-4"> 'Additional 8% for each reservation' </div> : ''}
                    </div>
                    <div className="p-4">
                        <Link className="btn btn-primary w-100" to="/thanks">Dokonaj płatności</Link>
                        <small className="text-muted mt-4">Klikając w ten przycisk potwierdzasz zakup i zobowiązujesz się do dokonania wpłaty.</small>
                    </div>

                </div>
                <div className="widget__special mt-3">
                    <div>
                        <i class="fa fa-gift animation" aria-hidden="true"></i>
                    </div>
                    <div>
                        <h3><b>Odbierz prezent</b></h3>
                        <p> Aktywuj abonament na 3 lata i odbierz super extra prezent <br />w postaci poduszki Noclegowo :)</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TotalPrice