import React from 'react';
import { Context } from '../store/appContext';


const CardVehicles = () => {
    return (
        <Context.Consumer>
            {
                (context) => {
                    return (
                        <div className="container">
                            <div className="row">
                                {
                                    !!context.store.vehicles.results &&
                                    context.store.vehicles.results.map((item, i) => {
                                        if( i === context.store.KeyVehicles)
                                        return (
                                            <div className="col d-flex"  key={i} >
                                                <div className="card">
                                                <img src="https://cdn11.bigcommerce.com/s-0kvv9/images/stencil/1280x1280/products/306439/437095/saga2007atap__40030.1567221520.jpg?c=2&imbypass=on" className="card-img-top" />
                                                <div className="card-body">
                                                    <h5 className="card-title">{item.name}</h5>
                                                    <ul>    
                                                                <li key={i}>
                                                                   Model: {item.model}
                                                                </li>
                                                                <li key={i}>
                                                                    Manufacturer: {item.manufacturer}
                                                                </li>
                                                                <li key={i}>
                                                                    Max. Atmosphering Speed: {item.max_atmosphering_speed}
                                                                </li>
                                                                <li key={i}>
                                                                    Crew Capacity: {item.crew}
                                                                </li>
                                                                <li key={i}>
                                                                    Passenger Capacity: {item.passengers}
                                                                </li>
                                                                <li key={i}>
                                                                    Vehicle Class: {item.vehicle_class}
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

export default CardVehicles; 