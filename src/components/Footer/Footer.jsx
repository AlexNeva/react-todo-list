import React from 'react';
import PropTypes from 'prop-types';
import './Footer.css';

import TaskFilter from '../TasksFilter/TaskFilter';

const Footer = ({ tasks, filter, clear }) => {
  const activeTasks = [...tasks].filter((task) => task.completed === false);
  return (
    <footer className="footer">
      <span className="todo-count">{activeTasks.length} items left</span>
      <TaskFilter filter={filter} />
      <button type="button" aria-label="clear completed" className="clear-completed" onClick={clear}>
        Clear completed
      </button>
    </footer>
  );
};

Footer.defaultProps = {
  // eslint-disable-next-line react/default-props-match-prop-types
  tasks: [],
  filter: () => { },
  clear: () => { },
};

Footer.propTypes = {
  // eslint-disable-next-line react/require-default-props
  tasks: PropTypes.arrayOf(PropTypes.object).isRequired,
  filter: PropTypes.func,
  clear: PropTypes.func,
};

export default Footer;
