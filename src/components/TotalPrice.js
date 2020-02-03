import React from 'react';

const TotalPrice = (props) => {
    const { total, reservation } = props
    return (
        <div className="col-md-4">
            <div className="summary__pay">
                <div className="widget__body">
                    <div className="widget__items">
                        <div>Total price:</div>
                        <div>${total}</div>
                    </div>
                    <div className="mt-4">{reservation ? 'Additional 8% for each reservation' : ''}</div>
                </div>
                <div className="widget__footer">
                    <button className="btn btn-primary w-100">
                        Complete Payment
          </button>
                </div>
            </div>
        </div>
    )
}

export default TotalPrice