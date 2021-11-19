import React, { useState } from 'react';
import './NewTaskForm.css';

const NewTaskForm = ({ addTask }) => {

  const [task, setTask] = useState({ description: '' })

  const addNewTask = (e) => {
    e.preventDefault();

    const newTask = {
      ...task, id: Date.now(), completed: false
    }

    addTask(newTask);

    setTask({ description: '' })

  }

  return (
    <form onSubmit={addNewTask}>
      <input onChange={e => setTask({ ...task, description: e.target.value })} className="new-todo" value={task.description} placeholder="What needs to be done?" autoFocus></input>
    </form>
  )

}

export default NewTaskForm;