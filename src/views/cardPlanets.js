import React from 'react';
import { Context } from '../store/appContext';


const CardPlanets = () => {
    return (
        <Context.Consumer>
            {
                (context) => {
                    return (
                        <div className="container">
                            <div className="row">
                                {
                                    !!context.store.planets.results &&
                                    context.store.planets.results.map((item, i) => {
                                        if( i === context.store.KeyPlanets)
                                        return (
                                            <div className="col d-flex"  key={i} >
                                                <div className="card">
                                                <img src="https://res.cloudinary.com/jerrick/image/upload/fl_progressive,q_auto,w_1024/n2suqqwwzf1k5lsuzwly.jpg" className="card-img-top" />
                                                <div className="card-body">
                                                    <h5 className="card-title">{item.name}</h5>
                                                    <ul>    
                                                                <li key={i}>
                                                                   Rotation Period:{item.rotation_period}
                                                                </li>
                                                                <li key={i}>
                                                                    Orbital Period: {item.orbital_period}
                                                                </li>
                                                                <li key={i}>
                                                                    Diameter: {item.diameter}
                                                                </li>
                                                                <li key={i}>
                                                                    Climate: {item.climate}
                                                                </li>
                                                                <li key={i}>
                                                                    Terrain: {item.terrain}
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

export default CardPlanets; 