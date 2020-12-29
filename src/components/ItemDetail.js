import React from 'react'

const ItemDetail = ({item}) => {

    return (
        <div>
            <h3>{item.title} - ${item.price}</h3>
            <img src={item.pictures[0]} alt="carousel"/>
            <p>{item.description}</p>
            <p>
                <strong>GARANTIA :</strong><br/>
                {item.warranty}
            </p>
        </div>
    )
}

export default ItemDetail
