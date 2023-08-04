import React from 'react';
import { useCart } from './CartContext'; // Import useCart from your CartContext

function CartSummary() {
  const { cartItems, removeFromCart } = useCart() // Destructure cartItems from the context

  const totalPrice = cartItems.reduce((total, product) => total + product.price, 0);

  return (
    <div className='cartSummary'>
      <h1>Shopping Cart</h1>
    <h2>Total price: {totalPrice}$</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul>
          {cartItems.map(product => ( // Update to use products instead of items
            <li key={product.id}>
              <ul className='productBox'>
        <li><img src={product.image} alt={product.model} /></li>
        <li><span>Model:</span> {product.model}</li>
        <li><span>Info:</span> {product.description}</li>
        <li><span>Price:</span> {product.price}$</li>
        <li><span>Rating:</span> {product.rating} / 5.0</li>
        <li><button onClick={() => removeFromCart(product.id)}>
                    Remove from Cart
                  </button></li>
        </ul>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default CartSummary;