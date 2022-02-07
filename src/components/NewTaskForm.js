import React, {useState} from "react";

function NewTaskForm({categories, tasks, onTaskFormSubmit}) {
  const formCategories = categories.filter((cat) => cat !== "All")
  const [details, setDetails] = useState("")
  const [taskCategory, setTaskCategory] = useState("")


  function handleNewDetail(e){

    setDetails(e.target.value)
    console.log(details)
  }

  function handleTaskCategory(e){
    console.log(e)
    setTaskCategory(e.target.value)
  }

  function handleNewTask(e){
    e.preventDefault()

    const newTask = {
      details:details,
      category:taskCategory
    }
    console.log(newTask)
        
    onTaskFormSubmit(newTask)

  }

  return (
    <form className="new-task-form" onSubmit={handleNewTask}>
      <label>
        Details
        <input type="text" name="text" onChange={handleNewDetail} value={details}/>
      </label>
      <label>
        Category
        <select name="category" onChange={handleTaskCategory}>
          {formCategories.map((cat) => {
           return <option key={cat} value={cat}>{cat}</option>
          })}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
