import React from 'react';
import { Link } from "react-router-dom";
import call from '../img/call.svg'
import schedule from '../img/schedule.svg'

const Variants = (props) => {
    // const { items, active } = props
    return (
        <>
            <h4 className="mt-4">Wybierz wariant</h4>
            <div className="row mt-4">
                <div className="col-md-6">
                    <div className="widget">
                        <div className="widget__body">
                            <div className="widget__items">
                            <img className="mr-4" height="160px" src={call}/>
                            <div>
                            <h2 className="font-weight-bold">Abonament</h2>
                            <p>Quis autem vel eum iure reprehenderit qui in eavoluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum.</p>
                            </div>
                            </div>
                        </div>
                        <div className="widget__footer">
                            <Link className="btn btn-primary" to="/packs">Wybieram</Link>
                        </div>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="widget">
                    <div className="widget__body">
                            <div className="widget__items">
                            <img className="mr-4" height="160px" src={schedule}/>
                            <div>
                            <h2 className="font-weight-bold">Rezerwacje on-line</h2>
                            <p>Quis autem vel eum iure reprehenderit qui in eavoluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum.</p>
                            </div>
                            </div>
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