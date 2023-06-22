import React, { useEffect, useState } from "react";
import ItemListContainer from "../components/ItemListContainer/ItemListContainer";
import { getProducts } from "../mock";

const Home = () => {

    const [products, setProducts] = useState([])    

    useEffect(() => {
        getProducts().then(data => setProducts(data))
    }, [products])

    if(products.length > 0) {

        return (
            <div>
                <ItemListContainer greeting={'Welcome to Tech Store'} products={products}/>
            </div>
    )
}
}

export default Home;

