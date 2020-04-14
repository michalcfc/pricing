import React from 'react';

const MethodContent = (props) => {
    const { id, active, descr } = props
    return (
        <div className="row">
            <div className="col-md-12 d-flex">
                <div>
                    <div className={active === id ? 'd-block' : 'd-none'}>
                        {descr}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MethodContent