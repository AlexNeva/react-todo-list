import React from 'react';
import './global.css'
import NewTaskForm from './components/NewTaskForm/NewTaskForm';
import TaskList from './components/TaskList/TaskList';
import Footer from './components/Footer/Footer';

const App = () => {
  const todos = [
    { id: 1, state: 'completed', description: 'Completed task' },
    { id: 2, state: 'editing', description: 'Editing task' },
    { id: 3, state: '', description: 'Active task' },
  ];
  return (
    <section className="todoapp">
      <header className="header">
        <h1>todos</h1>
        <NewTaskForm />
      </header>
      <section className="main">
        <TaskList todos={todos} />
        <Footer />
      </section>
    </section>
  )
}

export default App;