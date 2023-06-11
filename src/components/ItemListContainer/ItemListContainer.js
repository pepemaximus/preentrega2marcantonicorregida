import { useState, useEffect } from "react"
import { getProducts} from "../../mock"
import  ItemList from "../ItemList/ItemList"

const ItemListContainer = ({greeting}) => {
    const [productsdatabase, setProductsdatabase] = useState ([])

    useEffect(() => {
        getProducts()
            .then(response => {
                setProductsdatabase(response)
            })
            .catch (error => {
                console.error(error)
            })
    },[]
    )

    return (
        <div>
            <h2>{greeting}</h2>
            <ItemList productsdatabase={productsdatabase}/>
        </div>
    )
}

export default ItemListContainer;