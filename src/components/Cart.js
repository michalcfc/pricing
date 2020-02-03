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
                        <div className="widget__items">
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
                                ${p.price * p.quantity}
                                <p>{p.quantity > 1 ? p.price + " / szt" : ''}</p>
                            </div>
                        </div>
                        <div className="widget__items">
                            <div>Punkty reklamowe </div>
                            <div><Increments id={p.id}
                                items="points"
                                quantity={p.freePoints + p.additionalPoints}
                                packPoints={p.freePoints}
                                addItems={props.addItems}
                                removeItems={props.removeItems}
                                disabled={p.freePoints + p.additionalPoints === p.freePoints}
                            /> </div>
                            <div>
                                {p.additionalPoints === 0 ? "GRATIS" : "$" + p.additionalPoints}
                                <p>{p.additionalPoints > 0 ? p.freePoints + " GRATIS!" : ''}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}

export default Cart