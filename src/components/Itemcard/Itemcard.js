import React from "react";
import {Button, Card } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemCount from "../ItemCount/ItemCount";
import { Link } from "react-router-dom";

const Itemcard = ({id, brand, price, model, description, image, category, stock}) => {
    return (
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={image}/>
                <Card.Body>
                    <Card.Title>{brand} {model} </Card.Title>
                    <Card.Text>
                        <p>Price USD {price} </p>
                        <p>Available stock {stock} </p>
                    </Card.Text>
                    <Link to={"/Item/${item.id}"}>
                        See details
                    </Link>
                </Card.Body>
            </Card>
    )
}

export default Itemcard