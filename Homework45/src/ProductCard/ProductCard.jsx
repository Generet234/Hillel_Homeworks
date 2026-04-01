import React from 'react';
import {Card} from "react-bootstrap";
import './ProductCard.scss'
import PropTypes from "prop-types";

export const ProductCard = ({title,showInMainPage,brand,description,category,price,priceSale,url}) => {
    return (
        <div>
            <Card className = 'product-card-container'>
                <Card.Img variant="top" src={url} />
                <Card.Body>
                    <Card.Title>{title} {showInMainPage}</Card.Title>
                    <Card.Text>
                        Brand is {brand}.
                    </Card.Text>
                    <hr/>
                    <Card.Text>
                        Description is {description}.
                        This good is {category} category with the price {price} with sale price {priceSale} .
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    );
};
ProductCard.PropTypes = {
    title: PropTypes.string,
    brand: PropTypes.string,
    url: PropTypes.string,
    description: PropTypes.string,
    category: PropTypes.string,
    showInMainPage: PropTypes.bool,
    priceSale: PropTypes.number,
    price: PropTypes.number,
}