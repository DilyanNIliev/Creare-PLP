import React, { useState } from 'react';
import FilterComponent from './FilterComponent';

const BurgerButton = ({ filterTags, handleColorFilterChange, handleBrandFilterChange }) => {
  const [showList, setShowList] = useState(false);

  const toggleList = () => {
    setShowList(!showList);
  };

  return (
    <div>
      <button onClick={toggleList} className='burgerButton'> Filters </button>
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
