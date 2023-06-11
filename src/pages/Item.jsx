import React from "react";
import ItemListContainer from "../components/ItemListContainer/ItemListContainer";
import getProducts from "../mock";
import { useParams } from "react-router-dom";
import { productDetailById } from "../mock";
import { productsdatabase} from "../mock";

const Item = () => {
    const {itemId} = useParams()
    
    const productsFilteredById = productsdatabase.filter(prod => prod.id === parseInt(itemId); 

        return (
            <ItemDetailContainer></ItemDetailContainer>
    )
}
export default Item;