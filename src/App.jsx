import { useState } from 'react'
import { Header } from './components/Header'
import { TaskInputForm } from './components/TaskInputForm'
import { TasksList } from './components/TasksList'
import { TaskFilters } from './components/TaskFilters'
import { ModalWindow } from './components/ModalWindow'
import './App.css'

function App () {
  const [modal, setModal] = useState(false)

  return (
    <div className="app">
      <ModalWindow visible={modal} setVisible={setModal}>
        <TaskInputForm setVisible={setModal} />
      </ModalWindow>
      <Header/>
      <button onClick={() => setModal(true)}>Новая задача</button>
      <TaskFilters/>
      <TasksList/>
    </div>
  )
}

export default App