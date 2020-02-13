import React from 'react';

const Method = (props) => {
    const { items, active } = props
    return (
        <>
            <h4 className="mt-4">Metoda płatności: </h4>
            <div className="row mt-4">
                {items.map((item, id) => {
                    return (
                        <div key={id} className="col-md-4">
                            <div
                                className={"widget method " + (active === item.id ? "method__selected " : "")}
                                onClick={() => props.payMethod(item.id)}>
                                <div className="widget__body">
                                
                                        <div>
                                            {/* <input checked={active === item.id ? 'checked' : ''} type="radio" id={item.name} /> */}
                                            <label for={item.name}>{item.name}</label>
                                        <div className="widget__items">
                                            {/* <p className="text-muted">{item.descr}</p> */}
            
                                        <div> <img src={item.img} alt="pay" /></div>
                                    </div>
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