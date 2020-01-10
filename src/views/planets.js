import React from 'react';
import { Context } from '../store/appContext';


const Planets = () => {
    return (
        <Context.Consumer>
            {
                (context) => {

                    return (
                        <div className="container">
                            <div className="row">
                                        {
                                        
                                            !!context.store.planets.results &&
                                            context.store.planets.results.map((items, i) =>{
                                                return (
                                                    <div className="col-3 d-flex"  key={i} >
                                                        <div className="card">
                                                        <img src="https://res.cloudinary.com/jerrick/image/upload/fl_progressive,q_auto,w_1024/n2suqqwwzf1k5lsuzwly.jpg" className="card-img-top" />
                                                        <div className="card-body">
                                                            <h5 className="card-title">{items.name}</h5>
                                                            <ul>
                                                                <li key={i}>
                                                                    Climate: {items.climate}
                                                    
                                                                </li>
                                                                <li key={i}>
                                                                    Population: {items.population}
                                                                </li>
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
                                    <button className="btn btn-info" onClick={() => context.actions.getPlanets(context.store.planets.previous)}>
                                        Previous
                                    </button>
                                    <button className="btn btn-info" onClick={() => context.actions.getPlanets(context.store.planets.Next)}>
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

export default Planets; 