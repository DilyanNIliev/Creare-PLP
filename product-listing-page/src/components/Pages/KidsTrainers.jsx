import React, { useState } from 'react';
// import './App.css';
import ProductsData from '../../products/produscts.json';
import { useCart } from './CartContext';
import { Link } from 'react-router-dom';
import BurgerButton from './BurgerButton';
import './Pages.css'


function KidsTrainers() {
  const [numProductsToShow, setNumProductsToShow] = useState(4);
  const [sortOrderBrand, setSortOrderBrand] = useState('asc');
  const [sortOrderPrice, setSortOrderPrice] = useState('');
  const [filterTags, setFilterTags] = useState([]);
  const { addToCart } = useCart(); 
  const [showAlert, setShowAlert] = useState(false);

  const handleAddToCart = (product) => {
    addToCart(product);
    setShowAlert(true); // Show the alert
    setTimeout(() => {
      setShowAlert(false); // Close the alert after 2 seconds
    }, 2000);
  };
  

  // Filter products to get only the ones with category "Kids Trainers"
  const KidsTrainersProducts = ProductsData.filter(product => product.category === "Kids Trainers");

  const handleLoadMoreClick = () => {
    // Increase the number of products to show by 8 (or less if there are fewer remaining products)
    setNumProductsToShow(prevNum => prevNum + 4);
  };

  const handleSortBrandAscClick = () => {
    setSortOrderPrice('');
    setSortOrderBrand('asc');
  };

  const handleSortBrandDescClick = () => {
    setSortOrderPrice('');
    setSortOrderBrand('desc');
  };

  const handleSortPriceAscClick = () => {
    setSortOrderBrand('');
    setSortOrderPrice('asc');
  };

  const handleSortPriceDescClick = () => {
    setSortOrderBrand('');
    setSortOrderPrice('desc');
  };

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

  const filteredProducts = KidsTrainersProducts.filter(product => {
    if (filterTags.length === 0) {
      return true; // No filters applied, show all products
    }
    return (
      filterTags.includes(product.color) ||
      filterTags.includes(product.brand) // Add brand filtering condition
    );
  });

  // Sorting products by brand
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

  const handleSortSelectChange = (e) => {
    const selectedOption = e.target.value;
    if (selectedOption === 'brandAsc') {
      handleSortBrandAscClick();
    } else if (selectedOption === 'brandDesc') {
      handleSortBrandDescClick();
    } else if (selectedOption === 'priceAsc') {
      handleSortPriceAscClick();
    } else if (selectedOption === 'priceDesc') {
      handleSortPriceDescClick();
    }
  };

  const categoryToShow = KidsTrainersProducts.length > 0 ? KidsTrainersProducts[0].category : '';

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
      <h1>Kids Traineds</h1>
        <p>Trainers &#62; {categoryToShow}</p>
        <select onChange={handleSortSelectChange}>
            <option value="">Default sort</option>
            <option value="brandAsc">Brand A-Z</option>
            <option value="brandDesc">Brand Z-A</option>
            <option value="priceAsc">Price Lowest to Highest</option>
            <option value="priceDesc">Price Highest to Lowest</option>
          </select>
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
      {/* this button will show the next 10 products */}
      {numProductsToShow < filteredProducts.length && (
        <button className='loadMore' onClick={handleLoadMoreClick}>Load More</button>
      )}
        </div>
    </div>
    </div>
    </div>
  );
}

export default KidsTrainers;
