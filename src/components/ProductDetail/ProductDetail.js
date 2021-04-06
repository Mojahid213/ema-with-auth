import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Product from '../Product/Product';

const ProductDetail = () => {
    const {productKey} = useParams();
    const[product,setproduct] = useState({})
    useEffect(()=>{
        fetch('http://localhost:5000/products/'+productKey)
        .then(res => res.json())
        .then(data => setproduct(data))
    },[productKey])
    
    return (
        <div>
            <h1>Your Product Details.</h1>
            <Product showAddToCart={false} product={product}></Product>
        </div>
    );
};

export default ProductDetail;