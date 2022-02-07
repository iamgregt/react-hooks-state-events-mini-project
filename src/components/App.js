import React, {useState} from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });




function App() {

  const [selectedCategory, setSelectedCategory] = useState("All")
  const [tasks, setTasks] = useState(TASKS)
 

  function handleSelected(category){
    setSelectedCategory(category)
    console.log(category)
  }

  function handleNewTask(task){
    let newTaskArray = [...tasks, task]
    setTasks(newTaskArray)
  }

  function handleRemovedTask(deletedTask){
    console.log(deletedTask)
    console.log(tasks)
    let newTaskArray = tasks.filter((task) => {
      return task.text !== deletedTask
    }) 
    setTasks(newTaskArray)
  }


  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter categories={CATEGORIES} onSelect={handleSelected} selectedCategory={selectedCategory} />
      <NewTaskForm categories={CATEGORIES} tasks={TASKS} onTaskFormSubmit={handleNewTask} />
      <TaskList tasks={tasks} selectedCategory={selectedCategory} onSetTasks={setTasks} onDeleteTask={handleRemovedTask} />
    </div>
  );
}

export default App;
