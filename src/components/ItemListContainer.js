import React from 'react'
import ItemCount from './ItemCount'

const ItemListContainer = ({greeting}) => {
    return (
        <div className="container">
            <h2>{greeting}</h2>
            <ItemCount stock={10} initial={1}/>
        </div>
    )
}

export default ItemListContainer
