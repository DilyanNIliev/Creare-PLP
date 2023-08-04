import React from 'react';
import { useParams } from 'react-router-dom';
import ProductsData from '../../products/produscts.json';
import { useCart } from './CartContext';
import { useState } from 'react';
import { Link } from 'react-router-dom';



const ProductDetail = () => {
    const { addToCart } = useCart(); 
    const [showAlert, setShowAlert] = useState(false);

    const handleAddToCart = (product) => {
      addToCart(product);
      setShowAlert(true); // Show the alert
      setTimeout(() => {
        setShowAlert(false); // Close the alert after 2 seconds
      }, 2000);
    };


  const { productId } = useParams();
  const product = ProductsData.find((p) => p.id === parseInt(productId));

  if (!product) {
    return <h1>Product not found!</h1>;
  }

  return (
    <div className="productDetailContainer">
      <h1>Product Details</h1>
      {showAlert && (
        <div className="alert">
          You successfully added this product to the cart
          <Link to="/shopping-cart">
            <button>Go to Cart</button>
          </Link>
        </div>
      )}
      <ul className='productBox'>
        <li><img src={product.image} alt={product.model} /></li>
        <li><span>Model:</span> {product.model}</li>
        <li><span>Info:</span> {product.description}</li>
        <li><span>Price:</span> {product.price}$</li>
        <li><span>Rating:</span> {product.rating} / 5.0</li>
        <li className='cart'><button onClick={() => handleAddToCart(product)}>Add to cart</button></li>
        </ul>
    </div>
  );
};

export default ProductDetail;
