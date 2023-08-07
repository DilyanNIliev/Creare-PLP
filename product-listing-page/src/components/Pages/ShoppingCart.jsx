import React from 'react';
import { useCart } from './CartContext'; // Import useCart from your CartContext

function CartSummary() {
  // Destructuring 'cartItems' and 'removeFromCart' from the context using the 'useCart' hook.
  const { cartItems, removeFromCart } = useCart() // Destructure cartItems from the context
// Calculating the total price of items in the cart using 'reduce'.
  const totalPrice = cartItems.reduce((total, product) => total + product.price, 0);

  return (
    <div className='cartSummary'>
      <h1>Shopping Cart</h1>
      {/* Displaying the total price of all items in the cart. */}
    <h2>Total price: {totalPrice}$</h2>

      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul>
          {cartItems.map(product => ( 
             // Iterate through each product in the 'cartItems' array and render its details.
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