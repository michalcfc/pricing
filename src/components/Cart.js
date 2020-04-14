import React from 'react';
import Increments from './Increments'

const Cart = (props) => {
    const { pack } = props
    return (
        <>
            <h4>Payment Summary</h4>

            <div className="mb-5">
                {pack.map((p, id) => (
                    <div key={id}>
                        <div className="widget__items cart__item">
                            <div>  Pakiet reklamowy {p.name} </div>
                            <div>
                                <Increments
                                    id={p.id}
                                    items="quantity"
                                    quantity={p.quantity}
                                    addItems={props.addItems}
                                    removeItems={props.removeItems}
                                    disabled={p.quantity === 1}
                                /
                                >
                            </div>
                            <div>
                                <div className="total__price">
                                    <span className="total__price-27">  {p.price * p.quantity}</span>,
                                <span className="total__price-21">00 zł</span> </div>
                                <p>{p.quantity > 1 ? p.price + " zł / szt" : ''}</p>
                            </div>
                        </div>
                        <div className="widget__items cart__item">
                            <div>Punkty pozycjonujące </div>
                            <div><Increments id={p.id}
                                items="points"
                                quantity={p.freePoints + p.additionalPoints}
                                packPoints={p.freePoints}
                                addItems={props.addItems}
                                removeItems={props.removeItems}
                                disabled={p.freePoints + p.additionalPoints === p.freePoints}
                            /> </div>
                            <div>
                                {p.additionalPoints === 0 ? "GRATIS" : p.additionalPoints + " zł"}
                                <p>{p.additionalPoints > 0 ? p.freePoints + " GRATIS!" : ''}</p>
                            </div>
                        </div>
                    </div>
                ))}
                <div className="position-relative d-flex align-items-center mt-3">
                 <span className="mr-2">Włącz rezerwacje on-line</span>
                <div 
                  className={props.reservation ? "toggle-btn active" : "toggle-btn"}
                  onClick={(value) => props.res(value)}
                >
            <input
              type="checkbox"
              className="cb-value"
            />
            <span className="round-btn" />
            <div className={props.tooltip ? "tip" : 'd-none'}>
                    <div className="pt-3 position-relative">
                      <div className="tip__body">
                        <span className="tip__close" onClick={() => props.tip()}>x</span>
                        Chcesz szybciej pozyskiwać gości. Włącz rezerwacje on-line.
                      </div>
                      <div className="tip__arrow"></div>
                    </div>
                  </div>
          </div>
                </div>
            </div>
        </>
    )
}

export default Cart