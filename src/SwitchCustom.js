import React from "react"
import { Route, Switch } from 'react-router-dom'
import ItemListContainer from './components/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer'


const SwitchCustom = () => {
    return(
        <Switch>
            <Route path="/" exact>
                <ItemListContainer/> 
            </Route>

            <Route path="/category/:id">
                <ItemListContainer/> 
            </Route>

            <Route path="/item/:id">
                <ItemDetailContainer/>
            </Route>

        </Switch>

    )
}


export default SwitchCustom 