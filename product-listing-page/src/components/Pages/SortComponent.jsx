import React from 'react';

const SortProducts = ({ onSort }) => {
  const handleSortSelectChange = (e) => {
    const selectedOption = e.target.value;
    onSort(selectedOption);
  };

  return (
    <select onChange={handleSortSelectChange}>
      <option value="">Default sort</option>
      <option value="brandAsc">Brand A-Z</option>
      <option value="brandDesc">Brand Z-A</option>
      <option value="priceAsc">Price Lowest to Highest</option>
      <option value="priceDesc">Price Highest to Lowest</option>
    </select>
  );
};

export default SortProducts;
