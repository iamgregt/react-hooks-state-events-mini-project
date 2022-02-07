import React from "react";

function CategoryFilter({categories, onSelect, isSelected}) {


  return (
    <div className="categories">
      <h5>Category filters</h5>
      {categories.map((cat) => {
       return <button key={cat} onClick={onSelect} className={isSelected ? "selected" : ""} >{cat}</button>
      })}
    </div>
  );
}

export default CategoryFilter;
