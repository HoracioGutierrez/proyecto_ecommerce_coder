import React , { useEffect, useState } from 'react'
import ItemDetail from './ItemDetail'
import Loader from './Loader'

const ItemDetailContainer = () => {

    const [item,setItem] = useState()

    useEffect(()=>{

        let pedido = new Promise((res,rej)=>{
            setTimeout(()=>{
                res({
                    id : "MLA883627045",
                    title: "Harry Potter Pack Colección 8 Peliculas En Dvd Saga Completa",
                    price : 2200,
                    warranty : "Garantía de fábrica: 30 días",
                    description : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti esse dolorum velit, repellendus magnam, dicta in amet atque ab eos numquam neque maiores, asperiores natus nihil molestiae quaerat excepturi eius.",
                    pictures : [
                        "https://http2.mlstatic.com/D_617506-MLA43746164726_102020-O.jpg",
                        "https://http2.mlstatic.com/D_924958-MLA43746164728_102020-O.jpg",
                        "https://http2.mlstatic.com/D_901459-MLA43746164725_102020-O.jpg"
                    ]
                })
            },2000)
        })

        pedido
        .then(res=>{
            setItem(res)
        })
        .catch(err=>{
            console.log(err)
        })

    },[])

    return (
        <div>
            {item
            ? <ItemDetail item={item}/> 
            : <Loader/>}
        </div>
    )
}

export default ItemDetailContainer
