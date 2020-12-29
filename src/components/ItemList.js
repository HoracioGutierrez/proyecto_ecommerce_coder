import React from 'react'
import Item from './Item'
import Loader from './Loader'

const ItemList = ({items}) => {

    return (
        <div className="row">
            {items.length > 0
            ? items.map(item=>{
                return (
                    <Item key={item.id} id={item.id} title={item.title} price={item.price} pictureUrl={item.pictureUrl}/>
                )
            })
            : <Loader/>}
        </div>
    )
}

export default ItemList
