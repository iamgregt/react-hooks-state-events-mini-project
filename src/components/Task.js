import React from "react";

function Task({category, text, onDelete}) {
  // console.log("keytext", key)
function newDelete(e){
  let itemToDelete = e.target.value
  onDelete(itemToDelete)
}

  return (
    <div className="task">
      <div className="label">{category}</div>
      <div className="text">{text}</div>
      <button className="delete" onClick={newDelete} value={text}>X</button>
    </div>
  );
}

export default Task;
