import { useState } from 'react'
import {Button, Form} from 'react-bootstrap'
import {validationSchema} from "./ProductForm/Validation.js";
import {useFormik} from "formik";
import {ProductForm} from "./ProductForm";
import {ProductList} from "./ProductList";

const App = () => {
    const [data, setData] = useState([]);
    const formik = useFormik({
        initialValues: {
            sku:'',
            brand:"",
            category:"",
            priceSale:0,
            price:0,
            description:"",
            title:"",
            quantity:0,
            url:"",
            activeNotActive: false,
            showInMainPage: false,
            goodsInAvailability: false,
            id:0
        },
        validationSchema,
        onSubmit: (values) => {
            const newProduct = {
                ...values,
                id:data.length > 0 ? Math.max(...data.map(p => p.id)) + 1 : 1,
            }
            setData([...data, newProduct]);
            console.log(values,values.id);
        },
        onReset: () => {
            setData([])
    }
    });

    return (
        <div>
            <h1>Admin panel for making goods for internet-shop</h1>
            <Form onSubmit={formik.handleSubmit} style={{width:"50%"}}>
                <ProductForm className='mb-3' label={'Title'} type='text' name='title' value={formik.values.title} onChange={formik.handleChange} touched={formik.touched.title} error={formik.errors.title} placeholder={'You need to write a title which needs to be minimum 3 symbols'}/>
                <ProductForm className='mb-3' label={'Description'} type='textarea' name='description' value={formik.values.description} onChange={formik.handleChange} touched={formik.touched.description} error={formik.errors.description} placeholder={'You need to write a title which needs to be minimum 10 symbols'}/>
                <ProductForm className='mb-3' label={'Price'} type='number' name='price' value={formik.values.price} onChange={formik.handleChange} touched={formik.touched.price} error={formik.errors.price}/>
                <ProductForm className='mb-3' label={'Sale Price'} type='number' name='priceSale' value={formik.values.priceSale} onChange={formik.handleChange} touched={formik.touched.priceSale} error={formik.errors.priceSale}/>
                <ProductForm className='mb-3' label={'Category'} type='text' name='category' value={formik.values.category} onChange={formik.handleChange} touched={formik.touched.category} error={formik.errors.category} placeholder={'Enter category'}/>
                <ProductForm className='mb-3' label={'Brand'} type='text' name='brand' value={formik.values.brand} onChange={formik.handleChange} touched={formik.touched.brand} error={formik.errors.brand} placeholder={'Enter brand'}/>
                <ProductForm className='mb-3' label={'Sku'} type='text' name='sku' value={formik.values.sku} onChange={formik.handleChange} touched={formik.touched.sku} error={formik.errors.sku} placeholder={'Enter sku'}/>
                <ProductForm className='mb-3' label={'Quantity in warehouse'} type='number' name='quantity' value={formik.values.quantity} onChange={formik.handleChange} touched={formik.touched.quantity} error={formik.errors.quantity}/>
                <ProductForm className='mb-3' label={'Url of main image'} type='text' name='url' value={formik.values.url} onChange={formik.handleChange} touched={formik.touched.url} error={formik.errors.url} placeholder={'Enter url'}/>
                <ProductForm className='mb-3' label={'Additional Image'} type='file' name='image' onChange={formik.handleChange}/>
                <ProductForm className='mb-3' label={'Active or Unactive good'} type='switch' name='activeNotActive' value={formik.values.activeNotActive} onChange={formik.handleChange} touched={formik.touched.activeNotActive} error={formik.errors.activeNotActive}/>
                <ProductForm className='mb-3' label={'Goods in Availability'} type='checkbox' name='goodsInAvailability' value={formik.values.goodsInAvailability} onChange={formik.handleChange} touched={formik.touched.goodsInAvailability} error={formik.errors.goodsInAvailability}/>
                <ProductForm className='mb-3' label={'Show in main page'} type='checkbox' name='showInMainPage' value={formik.values.showInMainPage} onChange={formik.handleChange} touched={formik.touched.showInMainPage} error={formik.errors.showInMainPage}/>
                <ProductForm className='d-none' type='number' name='id' label={'Id'} value={formik.values.id} onChange={formik.handleChange} touched={formik.touched.id} error={formik.errors.id}  />
                <div className='d-flex justify-content-between'>
                    <Button type='submit' variant='primary' >Submit</Button>
                    <Button type='reset' variant='danger' onClick={formik.handleReset} >Clear All</Button>
                </div>
            </Form>
            <ProductList data={data}/>
        </div>
    )
}

export default App
