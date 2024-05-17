import React from 'react'
import { useSelector } from 'react-redux'
import { Header } from './components/Header'
import { TaskInputForm } from './components/TaskInputForm'
import { TasksList } from './components/TasksList'
import { EmptyListMessage } from './components/EmptyListMessage'
import './App.css'

function App () {

  const tasks = useSelector(state => state.tasks.tasks)

  return (
    <div className="app">
      <Header/>
      <TaskInputForm/>
      {!!tasks.length
        ? <TasksList/>
        : <EmptyListMessage/>
      }
    </div>
  )
}

export default App
