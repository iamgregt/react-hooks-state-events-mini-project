import React from "react";

function CategoryFilter({categories, onSelect, selectedCategory}) {


  return (
    <div className="categories">
      <h5>Category filters</h5>
      {categories.map((cat) => {
       return <button key={cat} onClick={() => onSelect(cat)} className={selectedCategory === cat ? "selected" : ""} >{cat}</button>
      })}
    </div>
  );
}

export default CategoryFilter;
