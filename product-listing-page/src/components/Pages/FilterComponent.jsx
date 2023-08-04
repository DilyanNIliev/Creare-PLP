import React from 'react';

const FilterComponent = ({ filterTags, handleColorFilterChange, handleBrandFilterChange }) => {
  return (
    <div className="filters">
      <h2>filter by color</h2>
      <label>
          <input className='blue'
            type="checkbox"
            value="blue"
            checked={filterTags.includes("blue")}
            onChange={handleColorFilterChange}
          />
          Blue
        </label>
        <label>
          <input className='red'
            type="checkbox"
            value="red"
            checked={filterTags.includes("red")}
            onChange={handleColorFilterChange}
          />
          Red
        </label>
        <label>
          <input className='black'
            type="checkbox"
            value="black"
            checked={filterTags.includes("black")}
            onChange={handleBrandFilterChange}
          />
          Black
        </label>
        <label>
          <input className='white'
            type="checkbox"
            value="white"
            checked={filterTags.includes("white")}
            onChange={handleBrandFilterChange}
          />
          White
        </label>
      <h2>Filter by brand</h2>
      <label>
          <input
            type="checkbox"
            value="nike"
            checked={filterTags.includes("nike")}
            onChange={handleBrandFilterChange}
          />
          Nike
        </label>
        <label>
          <input
            type="checkbox"
            value="adidas"
            checked={filterTags.includes("adidas")}
            onChange={handleBrandFilterChange}
          />
          Adidas
        </label>
        <label>
          <input
            type="checkbox"
            value="puma"
            checked={filterTags.includes("puma")}
            onChange={handleBrandFilterChange}
          />
          Puma
        </label>
        <label>
          <input
            type="checkbox"
            value="vans"
            checked={filterTags.includes("vans")}
            onChange={handleBrandFilterChange}
          />
          Vans
        </label>
        <label>
          <input
            type="checkbox"
            value="fila"
            checked={filterTags.includes("fila")}
            onChange={handleBrandFilterChange}
          />
          Fila
        </label>
        <label>
          <input
            type="checkbox"
            value="converse"
            checked={filterTags.includes("converse")}
            onChange={handleBrandFilterChange}
          />
          Converse
        </label>
        <label>
          <input
            type="checkbox"
            value="reebok"
            checked={filterTags.includes("reebok")}
            onChange={handleBrandFilterChange}
          />
          Reebok
        </label>
    </div>
  );
};

export default FilterComponent;
