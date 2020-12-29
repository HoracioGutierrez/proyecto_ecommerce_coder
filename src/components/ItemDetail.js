import React from 'react'
import ItemCount from "./ItemCount"

const ItemDetail = ({item}) => {

    return (
        <div className="container">
            <h3>{item.title} - ${item.price}</h3>
            <img src={item.pictureUrl} alt="carousel"/>
            <p>{item.description}</p>
            <p>
                <strong>GARANTIA :</strong><br/>
                {item.warranty}
            </p>
            <ItemCount stock={10} initial={1}/>
        </div>
    )
}

export default ItemDetail
