import React , { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ItemList from './ItemList'

const productos = [
    {
        category : "1",
        id : "MLA832761839",
        title : "Repetidor Tp-link Tl-wa850re Blanco 1 Unidad",
        price : 2129,
        pictureUrl : "https://http2.mlstatic.com/D_668117-MLA31786420833_082019-I.jpg"
    },
    {
        category : "1",
        id : "MLA871170293",
        title : "Memoria Ram 8gb 1x8gb Kingston Hx426c16fb3/8 Hyperx Fury",
        price : 4050,
        pictureUrl : "https://http2.mlstatic.com/D_725124-MLA40927542006_022020-I.jpg"
    },
    {
        category : "2",
        id : "MLA883627045",
        title : "Harry Potter Pack Colección 8 Peliculas En Dvd Saga Completa",
        price : 2200,
        pictureUrl : "https://http2.mlstatic.com/D_617506-MLA43746164726_102020-I.jpg"
    },
    {
        category : "2",
        id : "MLA749898152",
        title : "Dragon Ball [coleccion Completa 2019] [53 Dvds]",
        price : 7725,
        pictureUrl : "https://http2.mlstatic.com/D_761041-MLA41995986461_052020-I.jpg"
    }
]

const ItemListContainer = () => {

    const [items,setItems] = useState([])
    const {id} = useParams()

    useEffect(()=>{
        
        let pedido = new Promise((res,rej)=>{
            setTimeout(()=>{
                res(productos)
            },2000)
        })

        pedido
        .then(res=>{
            if(id){
                setItems(res.filter(item=>item.category===id))
            }else{
                setItems(res)
            }
        })
        .catch(err=>{
            console.log(err)
        })

    },[id])

    return (
        <div className="container">
            <ItemList items={items}/>
        </div>
    )
}

export default ItemListContainer
