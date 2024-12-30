import React from 'react'
import "./Product.css";
import { ProductData } from '../../data/ProductData';
import { Link } from 'react-router-dom';


function Product() {
  return (
    <div className='Product'>
        {ProductData.map((product, index) => (
            <div className="Product_container">
            <Link to={`/singlepage/${product.id}`}>
            <div className="product_cart" key={index}>
                <img src={product?.img[0]} alt="" />
                <p>{product?.name}</p>
                <h5>{product?.price},000 so'm</h5>
                <button>Buyurtma berish</button>
            </div>
            </Link>
        </div>
    
        ))}
        </div>
  )
}

export default Product