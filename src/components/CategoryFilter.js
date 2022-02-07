import React from "react";

function CategoryFilter({categories, onSelect}) {


  return (
    <div className="categories">
      <h5>Category filters</h5>
      {categories.map((cat) => {
       return <button key={cat} onClick={onSelect}>{cat}</button>
      })}
    </div>
  );
}

export default CategoryFilter;
