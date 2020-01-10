import React from 'react';
import {Link} from 'react-router-dom';
import { Context } from '../store/appContext';


const CardPeople = () => {
    return (
        <Context.Consumer>
            {
                (context) => {
                    return (
                        <div className="container">
                            <div className="row">
                                {
                                    !!context.store.people.results &&
                                    context.store.people.results.map((item, i) => {
                                        return (
                                            <div className="col-3 d-flex"  key={i} >
                                                <div className="card">
                                                <img src="https://cdn.mos.cms.futurecdn.net/LGoEDSKPxnLjMpJv4VaEK5-970-80.jpg" className="card-img-top" />
                                                <div className="card-body">
                                                    <h5 className="card-title">{item.name}</h5>
                                                    <ul>
                                                                <li key={i}>
                                                                   Height: 
                                                                </li>
                                                                <li key={i}>
                                                                    Mass: 
                                                                </li>
                                                    </ul>
                                                    
                                                </div>
                                            </div>
                                            </div>
                                        )
                                    })
                                }

                            </div>
                        </div>
                    )
                }
            }
        </Context.Consumer>
    )
}

export default CardPeople; 