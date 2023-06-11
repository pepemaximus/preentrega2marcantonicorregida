import {Button, Card } from "react-bootstrap"; 
import React from 'react';
import { useState } from 'react';
import './ItemCount.css';

const ItemCount = ({stock, initial, onAdd}) => {
    const [quantity, setQuantity] = useState(initial)

    const increment = () => {
        if(quantity <stock) {
            setQuantity(quantity+1)
        }
    }

    const decrement = () => {
        if(quantity > 1) {
            setQuantity(quantity-1)
        }
    }

    return (
        <div className='Counter'>
            <div className='Controls'>
                <button className="Button" onClick={decrement}>
                    -
                </button>
                <h3 className='Number'>{quantity} </h3>
                <button className="Button" onClick={increment}>
                    +
                </button>
            </div>
            <div>
                {/*utilizo propiedad disabled del botón validando que haya stock disponible*/}
                <Button variant="info" className="Button" onClick={() => onAdd(quantity)} disabled={!stock}>
                    Add to cart
                </Button>{' '}
            </div>
        </div>
    ) 
}

export default ItemCount;