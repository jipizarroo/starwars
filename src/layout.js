import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './views/home';
import NotFound from './views/notfound';
import NavBar from './components/navbar';
import Services from './views/services';
import Contact from './views/contact';



const Layout = () => {
    return(
        <BrowserRouter>
        <NavBar />
        <Switch>
        <Route exact path={"/"} component={Home} />
        <Route exact path={"/services"} component={Services} />
        <Route exact path={"/contact"} component={Contact} />
        <Route component={NotFound} />
        </Switch>
        </BrowserRouter>
    )
}

export default Layout;