import Item from "../Item/Item"

const ItemList = ({productsdatabase}) => {
return (
    <div className="ProductsGroup">
        {productsdatabase.map(data => <Item key={data.id} {...data}/>)}
    </div>
)
}

export default ItemList