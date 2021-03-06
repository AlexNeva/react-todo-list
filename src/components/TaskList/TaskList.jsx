import React from 'react';
import PropTypes from 'prop-types';
import './TaskList.css';
import Task from '../Task/Task';

const TaskList = ({ tasks, changeStatus, deleteTask, edit }) => (
  <ul className="todo-list">
    {tasks.map((tsk) => <Task task={tsk} key={tsk.id} changeStatus={changeStatus} deleteTask={deleteTask} edit={edit} />)}
  </ul>
);


TaskList.defaultProps = {
  tasks: [],
  changeStatus: () => { },
  deleteTask: () => { },
  edit: () => { },
};

TaskList.propTypes = {
  tasks: PropTypes.arrayOf(PropTypes.object),
  changeStatus: PropTypes.func,
  deleteTask: PropTypes.func,
  edit: PropTypes.func,
};

export default TaskList;
