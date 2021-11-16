import React, { useState } from 'react';
import './global.css'
import NewTaskForm from './components/NewTaskForm/NewTaskForm';
import TaskList from './components/TaskList/TaskList';
import Footer from './components/Footer/Footer';

const App = () => {

  const [tasks, setTasks] = useState([
    { id: 1, status: '', description: 'Task 1' },
    { id: 2, status: '', description: 'Task 3' },
    { id: 3, status: '', description: 'Task 2' },
  ])

  const changeStatus = (task, status) => {
    setTasks(tasks.map(t => {
      if (t.id === task.id && t.status !== status) {
        return { ...t, status: status }
      }

      if (t.id === task.id && t.status === status) {
        return { ...t, status: '' }
      }


      return t

    }))
  };

  const deleteTask = (task) => {
    setTasks(tasks.filter(t => t.id !== task.id))
  }

  return (
    <section className="todoapp">
      <header className="header">
        <h1>todos</h1>
        <NewTaskForm />
      </header>
      <section className="main">
        <TaskList tasks={tasks} changeStatus={changeStatus} deleteTask={deleteTask} />
        <Footer />
      </section>
    </section>
  )
}

export default App;