import React from 'react';
import MethodContent from './MethodContent'

const Method = (props) => {
    const { items, active } = props
    return (
        <>
            <h4 className="ml-2 mt-4">Wybierz metodę płatności: </h4>
            <div className="row mt-4">
                {items.map((item, id) => {
                    return (
                        <div key={id} className="col-md-12">
                            <div
                                className={"widget method " + (active === item.id ? "method__selected " : "")}
                                onClick={() => props.payMethod(item.id)}>
                                {item.name === 'Szybki przelew' ? (<span className="payment__ribbon">Rekomendowany</span>) : ''}
                                <div className="widget__body">
                                    <div>
                                        <div className="widget__items">
                                            <input type="radio" checked={active === item.id && 'checked'} />
                                            <label for={item.name}>{item.name}</label>
                                            <div> <img src={item.img} alt="pay" /></div>
                                        </div>
                                        <MethodContent
                                            id={item.id}
                                            active={active}
                                            descr={item.descr}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </>
    )
}

export default Method