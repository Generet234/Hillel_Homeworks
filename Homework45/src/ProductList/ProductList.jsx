import {Button, ListGroup, Modal,Form} from 'react-bootstrap';
import React, {useEffect, useState} from "react";
import {ProductCard} from "../ProductCard";
import './ProductList.scss';
import PropTypes from "prop-types";
const ProductList = ({data}) => {
    const [products, setProducts] = useState(data);
    const [editProduct, setEditProduct] = useState(null);

    useEffect(() => {
        setProducts((prev) => {
            return data.map((p) => {
                const existingArr = prev.find((product) => product.id === p.id);
                return existingArr ? existingArr : p;
            })
        });
    },[data])

    const handleDelete = ({id}) => () => {
        const updatedArray = products.filter((product) => product.id !== id)
        setProducts(updatedArray);
        console.log(updatedArray);
    }

    const handleButton = ({id}) => () => {
        const updatedArrayButton = products.map((product) => {
            if(product.id === id){
               return {...product,activeNotActive:!product.activeNotActive}
            }
            return product;
        })
        setProducts(updatedArrayButton)
    }

    const handleShow = (product) => () => {
        setEditProduct({...product})
    }

    const handleClose = () => {
        setEditProduct(null);
    }

    const handleFieldChange = (e) => {
        const {name, value} = e.target;
        setEditProduct(prev => ({...prev,[name]: value}))
    }

    const handleSave = () => {
        setProducts(products.map((p) => p.id === editProduct.id ? editProduct : p))
        handleClose()
    }

    return (
        <ListGroup className='product-list-container'>
            {products.map( (product) => {
                const {title, url,description,brand,category,price,priceSale,id, showInMainPage,activeNotActive} = product
                return (
                    <>
                    {showInMainPage && <ListGroup.Item className='product-item' key={id + 1}>
                        <ProductCard title={title} url={url} description={description} brand={brand} category={category} price={price} priceSale={priceSale} />
                        <div className='product-actions'>
                            <Button type='button' variant='danger' onClick={handleDelete({id})}>Delete this card</Button>
                            <Button type='button' variant='warning' onClick={handleButton({id})}>{activeNotActive ? "Active" : "Unactive"}</Button>
                            <Button type='button' variant='info' onClick={handleShow(product)}>Edit</Button>
                        </div>
                        </ListGroup.Item> }
                    </>
                )
            })}
            <Modal show={!!editProduct} onHide={handleClose} animation={false} className='modal-container'>
                <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form.Group >
                        <Form.Label>Title</Form.Label>
                        <Form.Control
                            name='title'
                            type="text"
                            value={editProduct?.title || ''}
                            onChange={handleFieldChange}
                            autoFocus
                        />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Description</Form.Label>
                        <Form.Control as="textarea" rows={3} name='description' value={editProduct?.description || ''} onChange={handleFieldChange}/>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Brand</Form.Label>
                        <Form.Control type="text" rows={3} name='brand' value={editProduct?.brand || ''} onChange={handleFieldChange}/>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Category</Form.Label>
                        <Form.Control type="text" rows={3} name='category' value={editProduct?.category || ''} onChange={handleFieldChange}/>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Price</Form.Label>
                        <Form.Control type="number" rows={3} name='price' value={editProduct?.price || ''} onChange={handleFieldChange}/>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Sale price</Form.Label>
                        <Form.Control type="number" rows={3} name='priceSale' value={editProduct?.priceSale || ''} onChange={handleFieldChange}/>
                    </Form.Group>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleSave}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </ListGroup>
    )
}
ProductList.propTypes = {
    title: PropTypes.string,
    url:PropTypes.string,
    description: PropTypes.string,
    brand: PropTypes.string,
    category: PropTypes.string,
    price: PropTypes.number,
    priceSale: PropTypes.number,
    id: PropTypes.number,
    showInMainPage: PropTypes.bool,
    activeNotActive: PropTypes.bool
}
export default ProductList;
