import React , { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ItemDetail from './ItemDetail'
import Loader from './Loader'

const details = [
    {
        category : "1",
        id : "MLA832761839",
        title : "Repetidor Tp-link Tl-wa850re Blanco 1 Unidad",
        description : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti esse dolorum velit, repellendus magnam, dicta in amet atque ab eos numquam neque maiores, asperiores natus nihil molestiae quaerat excepturi eius.",
        warranty : "Garantía de fábrica: 30 días",
        price : 2129,
        pictureUrl : "https://http2.mlstatic.com/D_668117-MLA31786420833_082019-O.jpg"
    },
    {
        category : "1",
        id : "MLA871170293",
        title : "Memoria Ram 8gb 1x8gb Kingston Hx426c16fb3/8 Hyperx Fury",
        description : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti esse dolorum velit, repellendus magnam, dicta in amet atque ab eos numquam neque maiores, asperiores natus nihil molestiae quaerat excepturi eius.",
        warranty : "Garantía de fábrica: 30 días",
        price : 4050,
        pictureUrl : "https://http2.mlstatic.com/D_725124-MLA40927542006_022020-O.jpg"
    },
    {
        category : "2",
        id : "MLA883627045",
        title : "Harry Potter Pack Colección 8 Peliculas En Dvd Saga Completa",
        description : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti esse dolorum velit, repellendus magnam, dicta in amet atque ab eos numquam neque maiores, asperiores natus nihil molestiae quaerat excepturi eius.",
        warranty : "Garantía de fábrica: 30 días",
        price : 2200,
        pictureUrl : "https://http2.mlstatic.com/D_617506-MLA43746164726_102020-O.jpg"
    },
    {
        category : "2",
        id : "MLA749898152",
        title : "Dragon Ball [coleccion Completa 2019] [53 Dvds]",
        description : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti esse dolorum velit, repellendus magnam, dicta in amet atque ab eos numquam neque maiores, asperiores natus nihil molestiae quaerat excepturi eius.",
        warranty : "Garantía de fábrica: 30 días",
        price : 7725,
        pictureUrl : "https://http2.mlstatic.com/D_761041-MLA41995986461_052020-O.jpg"
    }
]

const ItemDetailContainer = () => {

    const [item,setItem] = useState()
    const {id} = useParams()

    useEffect(()=>{

        let pedido = new Promise((res,rej)=>{
            setTimeout(()=>{
                res(details)
            },2000)
        })

        pedido
        .then(res=>{
            if(id){
                setItem(res.filter(item=>item.id==id)[0])
            }
        })
        .catch(err=>{
            console.log(err)
        })

    },[id])

    return (
        <div>
            {item
            ? <ItemDetail item={item}/> 
            : <Loader/>}
        </div>
    )
}

export default ItemDetailContainer
