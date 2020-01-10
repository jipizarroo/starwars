import React, { useEffect } from 'react';
import { Context } from './../store/appContext';


const Vehicles = (props) => {
 
 /*   const { history, match } = props;
    console.log(match.params);
    console.log(history);

*/
 /*   useEffect(() => {
        history.push("/")

    }, []);
*/
    return (
        <Context.Consumer>
            {
                (context) => {
                    return(
                        <div className="container">
                            <div className="row">
                                        {
                                        
                                            !!context.store.vehicles.results &&
                                            context.store.vehicles.results.map((items, i) =>{
                                                return (
                                                    <div className="col-3 d-flex"  key={i} >
                                                        <div className="card">
                                                        <img src="https://cdn11.bigcommerce.com/s-0kvv9/images/stencil/1280x1280/products/306439/437095/saga2007atap__40030.1567221520.jpg?c=2&imbypass=on" className="card-img-top" />
                                                        <div className="card-body">
                                                            <h5 className="card-title">{items.name}</h5>
                                                            <ul>
                                                                <li key={i}>
                                                                    Model: {items.model}
                                                                    

                                                                </li>
                                                                <li key={i}>
                                                                Manufacturer: {items.manufacturer} 
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
                                    <button className="btn btn-info" onClick={() => context.actions.getVehicles(context.store.vehicles.previous)}>
                                        Previous
                                    </button>
                                    <button className="btn btn-info" onClick={() => context.actions.getVehicles(context.store.vehicles.next)}>
                                        Next
                                    </button>
                                </div>
                            </div>
                        </div>
                    )
                }
            }
        </Context.Consumer>
    );
}

export default Vehicles;


/* class Services extends Component {
    componentDidMount(){
        const {history, match} = this.props;
        console.log(match.params);
        console.log(history);
        //history.push("/")
    }
    render(){
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <h1>Services</h1>
                    </div>
                </div>
            </div>
        );
    }
}
export default Services 

 */