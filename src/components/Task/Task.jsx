import React from 'react';

const Task = ({ task, changeStatus, deleteTask }) => {
  return (
    <li className={task.status}>
      <div className="view">
        <input className="toggle" type="checkbox" onChange={() => changeStatus(task, 'completed')} />
        <label>
          <span className="description">{task.description}</span>
          <span className="created">created 17 seconds ago</span>
        </label>
        <button className="icon icon-edit" onClick={() => changeStatus(task, 'editing')}></button>
        <button className="icon icon-destroy" onClick={() => deleteTask(task)}></button>
      </div>
      <input type="text" className="edit" value={task.description} />
    </li>
  );
};

export default Task;


