import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import People from './views/people';
import NotFound from './views/notfound';
import NavBar from './components/navbar';
import Vehicles from './views/vehicles';
import Planets from './views/planets';



const Layout = () => {
                                    // siempre la ruta que recive más parametros primero.
    return(
        <BrowserRouter>
        <NavBar />
        <Switch>
        <Route exact path={"/services/:serv_id/category/:cat_id"} component={Vehicles} />
        <Route exact path={"/services"} component={Vehicles} />
        <Route exact path={"/contact"} component={Planets} />
        <Route exact path={"/"} component={People} />                                                     
        <Route component={NotFound} />
        </Switch>
        </BrowserRouter>
    )
}

export default Layout;