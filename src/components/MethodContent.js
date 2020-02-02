import React from 'react';

const Method = (props) => {
    const { items, active } = props
    return (
        <div className="row mt-4">
            {items.map((item, id) => {
                return (
                    <div key={id} className="col-md-12">
                        <div
                            onClick={() => props.payMethod(item.id)}>
                            <div className={active === item.id ? 'd-block' : 'd-none'}>
                                {item.content}
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default Method