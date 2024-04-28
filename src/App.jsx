import { Header } from './components/Header'
import { TaskInputForm } from './components/TaskInputForm'
import { TasksList } from './components/TasksList'
import './App.css'

function App () {
  return (
    <div className="app">
      <Header/>
      <TaskInputForm/>
      <TasksList/>
    </div>
  )
}

export default App
