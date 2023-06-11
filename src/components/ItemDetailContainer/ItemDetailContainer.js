import React from React;
import Itemcard from "../Itemcard/Itemcard";

const ItemDetailContainer = ({greeting}) => {
    const [productsdatabase, setProductsDatabase] = useState ([])

    useEffect(() => {
        getProducts()
            .then(response => {
                setProductsDatabase(response)
            })
            .catch (error => {
                console.error(error)
            })
    },[]
    )

    return (
        <div>
            <h2>{greeting}</h2>
            <ItemList ProductsDatabase={productsdatabase}/>
        </div>
    )
}

export default ItemDetailContainer;