import React from 'react';

const Method = (props) => {
    const { items, active } = props
    return (
        <>
            <h4 className="mt-4">Payment method </h4>
            <div className="row mt-4">
                {items.map((item, id) => {
                    return (
                        <div key={id} className="col-md-4">
                            <div
                                className={"widget method " + (active === item.id ? "method__selected " : "")}
                                onClick={() => props.payMethod(item.id)}>
                                <div className="widget__body">
                                    <div className="widget__items">
                                        <div>
                                            {item.name}
                                            <p className="text-muted">{item.descr}</p>
                                        </div>
                                        <div> <img src={item.img} /></div>
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