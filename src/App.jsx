import React from 'react'
import { Header } from './components/Header'
import { TaskInputForm } from './components/TaskInputForm'
import { TasksList } from './components/TasksList'
import { EmptyListMessage } from './components/EmptyListMessage'
import './App.css'

function App () {
  const [tasks, setTasks] = React.useState([])

  const createTask = (newTask) => {
    setTasks([...tasks, newTask])
  }

  const removeTask = (task) => {
    setTasks(tasks.filter((t) => t.id !== task.id))
  }

  const doneTask = (task) => {
    setTasks(tasks.map(
      t => t.id !== task.id ? t : { ...task, complete: !task.complete }))
  }

  return (
    <div className="app">
      <Header/>
      <TaskInputForm create={createTask}/>
      {!!tasks.length
        ? <TasksList tasks={tasks} remove={removeTask} done={doneTask}/>
        : <EmptyListMessage/>
      }
    </div>
  )
}

export default App
