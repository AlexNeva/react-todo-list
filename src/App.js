import React, { useState, useEffect } from 'react';
import './global.css'
import NewTaskForm from './components/NewTaskForm/NewTaskForm';
import TaskList from './components/TaskList/TaskList';
import Footer from './components/Footer/Footer';

const App = () => {

  const todos = [
    { id: 1, completed: false, editing: false, description: 'Task 1' },
    { id: 2, completed: true, editing: false, description: 'Task 2' },
    { id: 3, completed: false, editing: false, description: 'Task 3' },
  ]

  const [tasks, setTasks] = useState(todos);

  const [filtered, setFiltered] = useState(todos);

  useEffect(() => {
    setFiltered(tasks)
  }, [tasks])




  const changeStatus = (task) => {
    setTasks(tasks.map(t => {
      if (t.id === task.id) {
        return { ...t, completed: !task.completed }
      }

      return t

    }))
  };

  const deleteTask = (task) => {
    setTasks(tasks.filter(t => t.id !== task.id))
  }

  const addTask = (newTask) => {
    if (newTask.description.trim()) {
      setTasks([...tasks, newTask])
    }

  }

  const todoFilter = (status) => {
    if (status === 'All') {
      setFiltered(tasks);
    }
    if (status === 'Active') {
      const filtered = tasks.filter(task => !task.completed)
      setFiltered(filtered);
    }

    if (status === 'Completed') {
      const filtered = tasks.filter(task => task.completed)
      setFiltered(filtered);
    }
  }

  const editTask = (task) => {
    setTasks(tasks.map(t => {
      if (t.id === task.id) {
        return { ...t, editing: !task.editing }
      } else {
        return t
      }
    }))


  }

  const clearCompleted = () => {
    const newTasks = tasks.filter(task => !task.completed);

    setTasks(newTasks);

  }


  // const filter = (items, filter) => {
  //   switch (filter) {
  //     case 'all':
  //       return items;
  //     case 'active':
  //       return items.filter((item) => item.status === '');
  //     case "completed":
  //       return items.filter((item) => item.status === 'completed');
  //     default: return items;
  //   }
  // }

  return (
    <section className="todoapp">
      <header className="header">
        <h1>todos</h1>
        <NewTaskForm addTask={addTask} />
      </header>
      <section className="main">
        <TaskList tasks={filtered} changeStatus={changeStatus} deleteTask={deleteTask} edit={editTask} />
        <Footer tasks={tasks} filter={todoFilter} clear={clearCompleted} />
      </section>
    </section>
  )
}

export default App;