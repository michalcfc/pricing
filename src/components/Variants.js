import React from 'react';
import { Link } from "react-router-dom";

const Variants = (props) => {
    // const { items, active } = props
    return (
        <>
            <h4 className="mt-4">Wybierz wariant</h4>
            <div className="row mt-4">
                <div className="col-md-6">
                    <div className="widget">
                        <div className="widget__body">
                            <h3>Abonament</h3>
                            <p>Quis autem vel eum iure reprehenderit qui in eavoluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum.</p>
                        </div>
                        <div className="widget__footer">
                            <Link className="btn btn-primary" to="/packs">Wybieram</Link>
                        </div>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="widget">
                        <div className="widget__body">
                            <h3>Rezerwacje on-line</h3>
                            <p>Quis autem vel eum iure reprehenderit qui in eavoluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum.</p>
                        </div>
                        <div className="widget__footer">
                            <Link className="btn btn-primary" to="/packs">Wybieram</Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Variants