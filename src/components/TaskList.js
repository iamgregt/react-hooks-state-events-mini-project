import React from "react";
import Task from "./Task";

function TaskList({tasks, selectedCategory, onSetTasks}) {
  
  
  // function handleNewTask(newItem){
  //   let newTaskArray = [...tasks, newItem]
  //   onSetTasks(newTaskArray)
  // }
  
  
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
    return <Task key={task.text} category={task.category} text={task.text} /> 
})}
 </div>
  )
  
}

export default TaskList;
