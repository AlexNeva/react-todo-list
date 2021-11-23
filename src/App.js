import React, { useState, useEffect } from 'react'
import { formatDistanceToNow } from 'date-fns'
import './global.css'
import NewTaskForm from './components/NewTaskForm/NewTaskForm'
import TaskList from './components/TaskList/TaskList'
import Footer from './components/Footer/Footer'

const App = function () {
  const todos = [
    {
      id: 1,
      completed: false,
      editing: false,
      description: 'Task 1',
      createTime: formatDistanceToNow(new Date(), { addSuffix: true, includeSeconds: true }),
    },
    {
      id: 2,
      completed: true,
      editing: false,
      description: 'Task 2',
      createTime: formatDistanceToNow(new Date(), { addSuffix: true, includeSeconds: true }),
    },
    {
      id: 3,
      completed: false,
      editing: false,
      description: 'Task 3',
      createTime: formatDistanceToNow(new Date(), { addSuffix: true, includeSeconds: true }),
    },
  ];

  const [tasks, setTasks] = useState(todos);

  const [filtered, setFiltered] = useState(todos);

  useEffect(() => {
    setFiltered(tasks);
  }, [tasks]);

  const changeStatus = (task) => {
    setTasks(
      tasks.map((t) => {
        if (t.id === task.id) {
          return { ...t, completed: !task.completed };
        }

        return t;
      })
    );
  };

  const deleteTask = (task) => {
    setTasks(tasks.filter((t) => t.id !== task.id));
  };

  const addTask = (newTask) => {
    if (newTask.description.trim()) {
      setTasks([...tasks, newTask]);
    }
  };

  const todoFilter = (status) => {
    if (status === 'All') {
      setFiltered(tasks);
    }
    if (status === 'Active') {
      const newTasks = tasks.filter((task) => !task.completed);
      setFiltered(newTasks);
    }

    if (status === 'Completed') {
      const newTasks = tasks.filter((task) => task.completed);
      setFiltered(newTasks);
    }
  };

  const editTask = (task) => {
    setTasks(
      tasks.map((t) => {
        if (t.id === task.id) {
          return { ...task, editing: !t.editing };
        }
        return t;
      })
    );
  };

  const changeTaskName = (task) => {
    setTasks(
      tasks.map((t) => {
        if (t.id === task.id) {
          return { ...t, description: task.description };
        }
        return t;
      })
    );
  };

  const clearCompleted = () => {
    const newTasks = tasks.filter((task) => !task.completed);

    setTasks(newTasks);
  };

  return (
    <section className="todoapp">
      <header className="header">
        <h1>todos</h1>
        <NewTaskForm addTask={addTask} />
      </header>
      <section className="main">
        <TaskList
          tasks={filtered}
          changeStatus={changeStatus}
          deleteTask={deleteTask}
          edit={editTask}
          changeName={changeTaskName}
        />
        <Footer tasks={tasks} filter={todoFilter} clear={clearCompleted} />
      </section>
    </section>
  );
};

export default App;
