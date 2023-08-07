import React, { useState } from 'react';
// import './App.css';
import ProductsData from '../../products/produscts.json';
import { useCart } from './CartContext';
import { Link } from 'react-router-dom';
import BurgerButton from './BurgerButton';
import './Pages.css'
import SortProducts from './SortComponent';

function ManShoes() {
  const [numProductsToShow, setNumProductsToShow] = useState(4);
  const [sortOrderBrand, setSortOrderBrand] = useState('asc');
  const [sortOrderPrice, setSortOrderPrice] = useState('');
  const [filterTags, setFilterTags] = useState([]);
  const { addToCart } = useCart(); 
  const [showAlert, setShowAlert] = useState(false);
//  It adds the selected product to the cart and shows an alert message to confirm the addition.
  const handleAddToCart = (product) => {
    addToCart(product);
    setShowAlert(true); // Show the alert
    setTimeout(() => {
      setShowAlert(false); // Close the alert after 2 seconds
    }, 2000);
  };
  

  // Filter products to get only the ones with category "Man Shoes"
  const manShoesProducts = ProductsData.filter(product => product.category === "Man Shoes");

  const handleLoadMoreClick = () => {
    // Increase the number of products to show by 4 (or less if there are fewer remaining products)
    setNumProductsToShow(prevNum => prevNum + 4);
  };
// Called when the Brand A-Z option is selected It sets the sorting order to Ascending for brand names.
  const handleSortBrandAscClick = () => {
    setSortOrderPrice('');
    setSortOrderBrand('asc');
  };
// Called when the Brand Z-A option is selected It sets the sorting order to Descending for brand names.
  const handleSortBrandDescClick = () => {
    setSortOrderPrice('');
    setSortOrderBrand('desc');
  };
 // Called when the Price Lowest to Highes option is selected It sets the sorting order to Ascending for price.
  const handleSortPriceAscClick = () => {
    setSortOrderBrand('');
    setSortOrderPrice('asc');
  };
 // Called when the Price Highest to Lowest option is selected It sets the sorting order to Descending for price.
  const handleSortPriceDescClick = () => {
    setSortOrderBrand('');
    setSortOrderPrice('desc');
  };
//  This function is called when a brand filter checkbox is checked or unchecked. It updates the list of filter tags based on the selected brand or color options.
  const handleColorFilterChange = (event) => {
    const { value, checked } = event.target;
    if (checked) {
      setFilterTags(prevTags => [...prevTags, value]);
    } else {
      setFilterTags(prevTags => prevTags.filter(tag => tag !== value));
    }
  };

  const handleBrandFilterChange = (event) => {
    const { value, checked } = event.target;
    if (checked) {
      setFilterTags(prevTags => [...prevTags, value]);
    } else {
      setFilterTags(prevTags => prevTags.filter(tag => tag !== value));
    }
  };
// This variable holds the list of man trainers products after applying the selected color and brand filters.
  const filteredProducts = manShoesProducts.filter(product => {
    if (filterTags.length === 0) {
      return true; // No filters applied, show all products
    }
    return (
      filterTags.includes(product.color) ||
      filterTags.includes(product.brand) // Add brand filtering condition
    );
  });

  // This variable holds the list of filtered products sorted by brand and price, based on the selected sorting order.
  const sortedProductsByBrandAndPrice = [...filteredProducts].sort((a, b) => {
    const brandFirst = a.brand?.toLowerCase() || ''; // Ensure brand is lowercase or use empty string
    const brandSecond = b.brand?.toLowerCase() || ''; // Ensure brand is lowercase or use empty string
    const priceFirst = a.price || 0;
    const priceSecond = b.price || 0;

    if (sortOrderBrand === 'asc' ) {

      return brandFirst.localeCompare(brandSecond);
    } else if(sortOrderBrand === 'desc') {
      return brandSecond.localeCompare(brandFirst);
    } else if (sortOrderPrice === 'asc' ) {
      return priceFirst - priceSecond;
    } else if (sortOrderPrice === 'desc' ) {
      return priceSecond - priceFirst;
    }

  });
// Called when the user selects a sorting option from the dropdown. It sets the sorting order based on the selected option.
  const handleSortSelectChange = (selectedOption) => {
    if (selectedOption === 'brandAsc') {
      setSortOrderBrand('asc');
      setSortOrderPrice('');
    } else if (selectedOption === 'brandDesc') {
      setSortOrderBrand('desc');
      setSortOrderPrice('');
    } else if (selectedOption === 'priceAsc') {
      setSortOrderBrand('');
      setSortOrderPrice('asc');
    } else if (selectedOption === 'priceDesc') {
      setSortOrderBrand('');
      setSortOrderPrice('desc');
    }
  };

  const categoryToShow = manShoesProducts.length > 0 ? manShoesProducts[0].category : '';

  return (
  <div className="productContainer"> 
  {showAlert && (
        <div className="alert">
          You successfully added this product to the cart
          <Link to="/shopping-cart">
            <button>Go to Cart</button>
          </Link>
        </div>
      )}
    <div className='productName'>
    <div className="sortSelect">
        <p>Shoes &#62; {categoryToShow}</p>
        <SortProducts onSort={handleSortSelectChange} />
          </div>
          <p className='productCounter'>
          Displaying {Math.min(numProductsToShow, filteredProducts.length)} out of {filteredProducts.length} products
        </p>
    <div className="productsAndFilter">
    <div className="typeOfFilters">
    <BurgerButton
            filterTags={filterTags}
            handleColorFilterChange={handleColorFilterChange}
            handleBrandFilterChange={handleBrandFilterChange}
          />
      </div>  
        <div className="product">
        <ul>
        {sortedProductsByBrandAndPrice.slice(0, numProductsToShow).map((product) => (
            <li key={product.id}>
              <ul className='productBox'>
                <li><img src={product.image} alt={product.model} /></li>
                <li><span>Model:</span> {product.model}</li>
                <li><span>Info:</span> {product.description}</li>
                <li><span>Price:</span> {product.price}$</li>
                <li><span>Rating:</span> {product.rating} / 5.0</li>
                <li className='cart'><button onClick={() => handleAddToCart(product)}>Add to cart</button></li>
                <Link key={product.id} to={`/product/${product.id}`}>More info</Link>
              </ul>
            </li>
        ))}
      </ul>
      {/* this button will show the next 4 products */}
      {numProductsToShow < filteredProducts.length && (
        <button className='loadMore' onClick={handleLoadMoreClick}>Load More</button>
      )}
        </div>
    </div>
    </div>
    </div>
  );
}

export default ManShoes;
