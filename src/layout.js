import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import People from './views/people';
import NotFound from './views/notfound';
import NavBar from './components/navbar';
import Vehicles from './views/vehicles';
import Planets from './views/planets';
import CardPeople from './views/cardPeople';



const Layout = () => {
                                    // siempre la ruta que recive más parametros primero.
    return(
        <BrowserRouter>
        <NavBar />
        <Switch>
        <Route exact path={"/vehicles"} component={Vehicles} />
        <Route exact path={"/planets"} component={Planets} />
        <Route exact path={"/people/cardpeople"} component={CardPeople} />
        <Route exact path={"/people"} component={People} />                                                     
        <Route component={NotFound} />
        </Switch>
        </BrowserRouter>
    )
}

export default Layout;