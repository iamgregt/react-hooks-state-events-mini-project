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
    const newTaskArray = [...tasks, task]
    setTasks(newTaskArray)
  }


  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter categories={CATEGORIES} onSelect={handleSelected} selectedCategory={selectedCategory} />
      <NewTaskForm categories={CATEGORIES} tasks={TASKS} onTaskFormSubmit={handleNewTask} />
      <TaskList tasks={TASKS} selectedCategory={selectedCategory} onSetTasks={setTasks} />
    </div>
  );
}

export default App;
