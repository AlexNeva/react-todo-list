import React, { useRef } from 'react';

const Task = ({ task, changeStatus, deleteTask, edit }) => {

  const editInput = useRef();

  const focusInput = () => {

    setTimeout(() => {
      editInput.current.focus();
    })
  }


  return (
    <li className={`${task.completed ? 'completed' : ''} ${task.editing ? 'editing' : ''}`}>
      <div className="view">
        <input id={`task-${task.id}`} checked={task.completed} className="toggle" type="checkbox" onChange={() => changeStatus(task)} />
        <label htmlFor={`task-${task.id}`}>
          <span className="description">{task.description}</span>
          <span className="created">created 17 seconds ago</span>
        </label>
        <button className="icon icon-edit" onClick={() => { edit(task); focusInput() }}></button>
        <button className="icon icon-destroy" onClick={() => deleteTask(task)}></button>
      </div>
      <input ref={editInput} type="text" className="edit" value={task.description} onBlur={() => edit(task)} />
    </li>
  );
};

export default Task;


