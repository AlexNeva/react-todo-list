import React from 'react';

const Task = ({todo}) => {
  return (
    <li className={todo.state}>
      <div className="view">
        <input className="toggle" type="checkbox"></input>
        <label>
          <span className="description">{todo.description}</span>
          <span className="created">created 17 seconds ago</span>
        </label>
        <button className="icon icon-edit"></button>
        <button className="icon icon-destroy"></button>
      </div>
      <input type="text" className="edit" value="Editing task"></input>
    </li>

  )
}
export default Task;