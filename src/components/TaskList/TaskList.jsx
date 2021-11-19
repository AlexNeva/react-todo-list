import React from 'react';
import './TaskList.css';
import Task from '../Task/Task';

const TaskList = ({ tasks, changeStatus, deleteTask, edit }) => {

  return (
    <ul className='todo-list'>
      {tasks.map(t => {
        return <Task task={t} key={t.id} changeStatus={changeStatus} deleteTask={deleteTask} edit={edit} />
      })}
    </ul>
  )
}

export default TaskList;