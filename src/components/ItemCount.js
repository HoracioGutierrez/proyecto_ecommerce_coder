import React , {useState} from 'react'

const ItemCount = ({stock,initial}) => {

    const [cantidad,setCantidad] = useState(initial)

    const aumentarCantidad = () => {
        if(cantidad < stock){
            setCantidad(cantidad + 1)
        }
    }

    const disminuirCantidad = () => {
        if(cantidad > 0){
            setCantidad(cantidad - 1)
        }
    }

    const onAdd = () => {
        
    }

    return (
        <div>
            <p>Stock disponible : {stock}</p>
            <div className="row">
                <div className="col s1">
                    <button onClick={aumentarCantidad} className={`btn waves-effect waves-light light-blue darken-2 ${cantidad === stock ? "disabled" : null}`}>
                        <i className="material-icons">add</i>
                    </button>
                </div>
                <div className="col s10">{cantidad}</div>
                <div className="col s1">
                    <button onClick={disminuirCantidad} className={`btn waves-effect waves-light light-blue darken-2 ${cantidad === 0 ? "disabled" : null}`}>
                        <i className="material-icons">remove</i>
                    </button>
                </div>
            </div>
            <button onClick={onAdd} className="btn waves-effect waves-light light-blue darken-2">agregar al carrito</button>
        </div>
    )
}

export default ItemCount
