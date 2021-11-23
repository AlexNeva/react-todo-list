import React, { useRef, useState } from 'react';
import PropTypes from 'prop-types';

const Task = ({ task, changeStatus, deleteTask, edit }) => {
  const [editingTask, setEditingTask] = useState(task);

  const editInput = useRef();

  const focusInput = () => {
    setTimeout(() => {
      editInput.current.focus();
    });
  };

  return (
    <li className={`${task.completed ? 'completed' : ''} ${task.editing ? 'editing' : ''}`}>
      <div className="view">
        <input
          id={`task-${task.id}`}
          checked={task.completed}
          className="toggle"
          type="checkbox"
          onChange={() => changeStatus(task)}
        />
        <label htmlFor={`task-${task.id}`}>
          <span className="description">{task.description}</span>
          <span className="created">created {task.createTime}</span>
        </label>
        <button
          type="button" aria-label="edit"
          className="icon icon-edit"
          onClick={() => {
            edit(task);
            focusInput();
          }}
        />
        <button type="button" aria-label="delete" className="icon icon-destroy" onClick={() => deleteTask(task)} />
      </div>
      <input
        onChange={(evt) => setEditingTask({ ...editingTask, description: evt.target.value })}
        ref={editInput}
        type="text"
        className="edit"
        value={editingTask.description}
        onBlur={() => edit(editingTask)}
      />
    </li>
  );
};

Task.defaultProps = {
  task: {},
  changeStatus: () => { },
  deleteTask: () => { },
  edit: () => { },
};

Task.propTypes = {
  task: PropTypes.objectOf(PropTypes.object),
  changeStatus: PropTypes.func,
  deleteTask: PropTypes.func,
  edit: PropTypes.func,
};

export default Task;
