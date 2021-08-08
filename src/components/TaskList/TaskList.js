import React from 'react';
import './TaskList.css';
import Task from '../Task/Task';

const TaskList = (props) => {

  return (
    <ul className='todo-list'>
      {props.todos.map(todo => {
        return <Task todo={todo} key={todo.id} />
      })}
    </ul>
  )
}

export default TaskList;