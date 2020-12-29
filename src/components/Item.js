import React from 'react'

const Item = ({id,title,price,pictureUrl}) => {
    return (
        <div className="col s6 m4 l3">
            <div className="card">
                <div className="card-image">
                    <img src={pictureUrl} alt={`title-id`}/>
                </div>
                <div className="card-content">
                    <span className="card-title truncate">{title}</span>
                    <p>${price}</p>
                </div>
                <div className="card-action">
                    <a href="#">ver detalle</a>
                </div>
            </div>
        </div>
    )
}

export default Item
