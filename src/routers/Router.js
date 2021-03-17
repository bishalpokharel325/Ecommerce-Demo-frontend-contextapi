import React from 'react'
import {BrowserRouter,Route,Switch} from 'react-router-dom'
import Landing from '../pages/Landing'
import ProductDetails from '../pages/ProductDetails'
import ProductLists from '../pages/ProductLists'

const router = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Landing}/>
                <Route path="/productdetails/:slug" component={ProductDetails}/>
                <Route path="/products" component={ProductLists}/>
            </Switch>
        </BrowserRouter>
    )
}

export default router
