import React, { useState } from 'react';
import './TaskFilter.css';

function TaskFilter({ filter }) {
  const buttons = [
    { descr: 'All', status: 'All', selected: true },
    { descr: 'Active', status: 'Active', selected: false },
    { descr: 'Completed', status: 'Completed', selected: false },
  ];

  const [btns, setBtns] = useState(buttons);

  const changeActiveBtn = (button) => {
    setBtns(
      btns.map((btn) => {
        if (btn.status === button.status) {
          return { ...btn, selected: true };
        } else {
          return { ...btn, selected: false };
        }
      })
    );
  };

  return (
    <ul className="filters">
      {btns.map((button) => (
        <li key={button.descr}>
          <button
            className={button.selected ? 'selected' : ''}
            onClick={() => {
              filter(button.status);
              changeActiveBtn(button);
            }}
          >
            {button.descr}
          </button>
        </li>
      ))}
    </ul>
  );
}

export default TaskFilter;
