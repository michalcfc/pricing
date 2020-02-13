import React from 'react';
import  { Link } from 'react-router-dom'

const TotalPrice = (props) => {
    const { total, reservation } = props
    return (
        <div className="col-xl-4">
            <div className="summary__pay">
                <div className="widget__body">
            <h4>Podsumowanie</h4>
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
                    <div className="widget__items">
                        <div>DO ZAPŁATY:</div>
                        <div className="total__price">
                            <span className="total__price-27">{total}</span>,
                            <span className="total__price-21">00 zł</span></div>
                    </div>
                    <div className="mt-4">{reservation ? 'Additional 8% for each reservation' : ''}</div>
                </div>
                <div className="widget__footer">           
                    <Link className="btn btn-primary w-100" to="/thanks">    Complete Payment</Link>
                </div>
        
            </div>
            <div className="widget__special mt-3">
                <div>
                    <i class="fa fa-gift" aria-hidden="true"></i> 
                </div>
            <div>
                <h3> Odbierz super extra prezent :)</h3>
            </div>
            </div>
        </div>
    )
}

export default TotalPrice