import React, {useState} from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });




function App() {

  const [isSelected, setIsSelected] = useState(false)
  console.log(isSelected)

  function handleSelected(e){
    console.log(isSelected)
    setIsSelected(!isSelected)

  }



  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter categories={CATEGORIES} onSelect={handleSelected} isSelected={isSelected} />
      <NewTaskForm />
      <TaskList tasks={TASKS} />
    </div>
  );
}

export default App;
