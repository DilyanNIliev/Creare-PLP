import React, { useState } from 'react';
import FilterComponent from './FilterComponent';
// The BurgerButton functional component takes in props:
const BurgerButton = ({ filterTags, handleColorFilterChange, handleBrandFilterChange }) => {
  // 'showList' will be used to toggle the visibility of the filter component.
  const [showList, setShowList] = useState(false);
// Function to toggle the visibility of the filter component.
  const toggleList = () => {
    setShowList(!showList);
  };

  return (
    <div>
      {/* Triggers the 'toggleList' function when clicked. */}
      <button onClick={toggleList} className='burgerButton'> Filters </button>
      {/* 'show' class when 'showList' state is true, which will toggle its visibility. */}
      <div className={`filter-component ${showList ? 'show' : ''}`}>
        <FilterComponent
          filterTags={filterTags}
          handleColorFilterChange={handleColorFilterChange}
          handleBrandFilterChange={handleBrandFilterChange}
        />
      </div>
    </div>
  );
};

export default BurgerButton;
