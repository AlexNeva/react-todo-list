import React from 'react';
import './TaskList.css';
import Task from '../Task/Task';

const TaskList = ({ tasks, changeStatus, deleteTask }) => {

  return (
    <ul className='todo-list'>
      {tasks.map(t => {
        return <Task task={t} key={t.id} changeStatus={changeStatus} deleteTask={deleteTask} />
      })}
    </ul>
  )
}

export default TaskList;