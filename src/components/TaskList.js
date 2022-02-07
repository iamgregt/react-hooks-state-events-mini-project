import React from "react";
import Task from "./Task";

function TaskList({tasks, selectedCategory, onDeleteTask}) {
  
  
  // function handleNewTask(newItem){
  //   let newTaskArray = [...tasks, newItem]
  //   onSetTasks(newTaskArray)
  // }
  
  function handleDelete(item){
    console.log(item)
    onDeleteTask(item)

  }
  
  const tasksToDisplay = tasks.filter((task) => {
    if(selectedCategory === "All") {
      return true
    }else{
      return task.category === selectedCategory
    }
  }) 

  return(
    
   <div className="tasks">
  {tasksToDisplay.map((task) => { 
    return <Task key={task.text} category={task.category} text={task.text} onDelete={handleDelete}  /> 
})}
 </div>
  )
  
}

export default TaskList;
