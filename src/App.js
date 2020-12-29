import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import ItemDetailContainer from './components/ItemDetailContainer'
import ItemListContainer from './components/ItemListContainer'
import NavBar from './components/NavBar'

const App = () => {
    return (
        <BrowserRouter>
          <NavBar/> 
          <main>
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
          </main>
        </BrowserRouter>
    )
}

export default App
