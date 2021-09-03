import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import NotFound from './../pages/404/index';
import URL from './../../utils/helpers/URL';
import Home from './../pages/home/Home';
import About from './../pages/about/About';



export default function Router() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path={URL.HOME} component={Home} ></Route>
                <Route exact path={URL.ABOUT} component={About} ></Route>

                <Route default component={NotFound}></Route>
            </Switch>
        </BrowserRouter>
    )
}
