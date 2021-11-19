import React, { useState } from 'react';
import { formatDistanceToNow } from 'date-fns';
import PropTypes from 'prop-types'


import './NewTaskForm.css';

const NewTaskForm = ({ addTask }) => {

  const [task, setTask] = useState({ description: '' })

  const addNewTask = (e) => {
    e.preventDefault();

    const newTask = {
      ...task, id: Date.now(), completed: false, createTime: formatDistanceToNow(new Date(), { addSuffix: true, includeSeconds: true })
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

NewTaskForm.defaultProps = {
  addTask: () => { },
}

NewTaskForm.propTypes = {
  addTask: PropTypes.func,
}

export default NewTaskForm;