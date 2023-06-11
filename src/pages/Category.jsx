import React from "react";
import ItemListContainer from "../components/ItemListContainer/ItemListContainer";
import getProducts from "../mock";
import { useParams } from "react-router-dom";
import { productDetailById } from "../mock";
import { productsdatabase} from "../mock";

const Category = () => {
    const {categoryId} = useParams()
    
    const productsFilteredByCategory = productsdatabase.filter(prod => prod.category === categoryId); 

        return (
            <ItemListContainer> {productDetailById} </ItemListContainer>
    )
}

export default Category;
