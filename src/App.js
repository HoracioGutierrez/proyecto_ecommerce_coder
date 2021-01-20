import React , {useEffect,useState} from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import ItemDetailContainer from './components/ItemDetailContainer'
import ItemListContainer from './components/ItemListContainer'
import NavBar from './components/NavBar'
import {getFirestore} from "./firebase"
import SwitchCustom from "./SwitchCustom"


console.log(process.env)


const App = () => {

    const [items,setItems] = useState([])
    const [carrito,setCarrito] = useState([])
    const [total,setTotal] = useState(0)
    const [nombre,setNombre] = useState("")
    const [telefono,setTelefono] = useState("")
    const [email,setEmail] = useState("")
    const [compra,setCompra] = useState("")

    useEffect(()=>{
     
        const db = getFirestore()
        const itemsCollection = db.collection("items")
        const query = itemsCollection.get()
        .then((resultado)=>{
            const nuevosProductos = []
            resultado.docs.forEach(doc=>{
                nuevosProductos.push({id:doc.id,...doc.data()})
            })
            setItems(nuevosProductos)
        })
        .catch((err)=>{
            console.log(err)
        })


    })


    const agregarProducto = (title,id,price) => {
        const nuevoItem = {id,title,price }
        setCarrito([...carrito,nuevoItem])
        setTotal(total+price)
    }


    const manejarCompra = (e) => {
        e.preventDefault()
        const datosCompra = {
            buyer : {
                name : nombre,
                phone : telefono,
                email : email
            },
            items : [...carrito],
            total : total
        }
        
        const db = getFirestore()
        const OrderCollection = db.collection("orders")
        OrderCollection.add(datosCompra).then((resultado)=>{
            setCompra(resultado.id)

            const Itemscollection = db.collection("items")
            const batch = getFirestore().batch()

            carrito.forEach(item=>{
                batch.update(Itemscollection.doc(item.id),{stock:0})
            })

            batch.commit()
            .then(()=>{
                console.log("Termino bien")
            })
        })
    }

    return (
        <BrowserRouter>
          <NavBar/> 
          <main>
              {compra?<p>Se hizo la compra {compra}</p>:null}
              <h2>Productos</h2>
              <ul>
                    {items.length>0
                    ?items.map(item=>{
                        return (
                            <li key={item.id}>
                                {item.title} {item.stock}  {item.price} 
                                <button onClick={()=>agregarProducto(item.title,item.id,item.price)}>agrego</button>
                            </li>
                        )
                    })
                    :<li>No hay productos</li>}
              </ul>
              <h2>Carrito</h2>
              <ul>
                  {
                      carrito.length > 0 
                      ? carrito.map(item=>{
                          return (
                              <li key={item.id}>{item.title}</li>
                          )
                      })
                      : <li>No hay items en el carrito</li>
                  }
              </ul>
              <p>Total : {total}</p>
              <h2>Info de compra</h2>
              <form onSubmit={manejarCompra}>
                  <div>
                      <input value={nombre} onChange={(e)=>{setNombre(e.target.value)}} type="text"/>
                  </div>
                  <div>
                      <input value={telefono} onChange={(e)=>{setTelefono(e.target.value)}} type="text"/>
                  </div>
                  <div>
                      <input value={email} onChange={(e)=>{setEmail(e.target.value)}} type="email"/>
                  </div>
                  <button type="submit">Comprar</button>
              </form>
              {/* <SwitchCustom/> */}
          </main>
        </BrowserRouter>
    )
}

export default App
