import React from "react";
import Task from "./Task";

function TaskList({tasks}) {
  
  return(
  tasks.map((task) => {
    console.log(task.text)
     return <div className="tasks">
        <Task key={task.text}  />
      </div>
    
  })
  )
}

export default TaskList;
