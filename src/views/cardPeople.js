import React from 'react';
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
                                        if( i === context.store.KeyPeople)
                                        return (
                                            <div className="col d-flex"  key={i} >
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
                                                                <li key={i}>
                                                                    Hair Color: {item.hair_color}
                                                                </li>
                                                                <li key={i}>
                                                                    Skin Color: {item.skin_color}
                                                                </li>
                                                                <li key={i}>
                                                                    Birth Year: {item.birth_year}
                                                                </li>
                                                                <li key={i}>
                                                                    Gender: {item.gender}
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