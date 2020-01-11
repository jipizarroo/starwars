import React from 'react';
import {Link} from 'react-router-dom';
import { Context } from '../store/appContext';


const People = () => {
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
                                                                   Height: {item.height}
                                                                </li>
                                                                <li key={i}>
                                                                    Mass: {item.mass}
                                                                </li>
                                                                <Link onClick={() => context.actions.getKeyPeople(i)} className="btn btn-primary" to="/people/cardPeople">More Info...</Link>
                                                    </ul>
                                                    
                                                </div>
                                            </div>
                                            </div>
                                        )
                                    })
                                }

                            </div>
                            <div className="row">
                                <div className="col d-flex justify-content-between">
                                    <button className="btn btn-info" onClick={() => context.actions.getPeople(context.store.people.previous)} >
                                        Previous
                                    </button>
                                    <button className="btn btn-info" onClick={() => context.actions.getPeople(context.store.people.next)}>
                                        Next
                                    </button>
                                </div>
                            </div>
                        </div>
                    )
                }
            }
        </Context.Consumer>
    )
}

export default People; 