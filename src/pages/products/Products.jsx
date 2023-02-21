import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import './products.css'

const Products = () => {
    const [products, setProducts] = useState([])

    const fetchProducts = async () => {
        const response = await fetch(`https://fakestoreapi.com/products`)
        const data = await response.json()
        setProducts(data)
    }

    useEffect(() => {
        fetchProducts()
    }, [])
    

  return (
    <div className='products'>
        <h1 className='section-padding'>Products</h1>
        <div className="products-container section-padding">
        {products.map(product => (
            <div className='product' key={product.id}>
                <div className="product-image">
                    <img src={product.image} alt="image" />
                </div>
                <div className="product-title">
                    <h4>{product.title}</h4>
                </div>
                <div className="product-price-detail">
                <div className="product-price">
                    <h4>${product.price}</h4>
                </div>
                <div className="product-details">
                    <Link to={`/products/${product.id}`}>Details</Link>
                </div>
                </div>
                
            </div>
            
        ))}
        </div>
    </div>
  )
}

export default Products