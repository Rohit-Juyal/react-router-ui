import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import './singleProduct.css'

const SingleProduct = () => {
    const { productId } = useParams()

    const[singleProduct, setSingleProduct] = useState([])

    const fetchProduct = async (productId) => {
        const response = await fetch(`https://fakestoreapi.com/products/${productId}`)
        const data = await response.json()
        setSingleProduct(data)
        console.log(data)
    }

    useEffect(() => {
        fetchProduct(productId)
    }, [])
  return (
    <div className='single-product'>
        <div className="single-product-heading">
            <h1 className='section-padding'>{singleProduct.title}</h1>
        </div>
        <div className="single-product-content section-padding">
            <div className="single-product-image">
                <img src={singleProduct.image} alt="product-image" />
            </div>
            <div className="single-product-details">
                <div className="single-product-title">
                    <h2>{singleProduct.title}</h2>
                </div>
                <div className="single-product-price-rating">
                    <h4>${singleProduct.price}</h4>
                    {/* <h5>Rating {singleProduct.rating.rate}</h5> */}
                </div>
                <div className="single-product-description">
                    <p>{singleProduct.description}</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default SingleProduct