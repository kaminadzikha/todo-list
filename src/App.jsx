import Header from './components/Header/Header.jsx'
import TaskInputForm from './components/TaskInputForm/TaskInputForm.jsx'
import TasksList from './components/TasksList/TasksList.jsx'
import './App.css'

function App() {
  return (
    <div className="app">
        <Header/>
        <TaskInputForm/>
        <TasksList/>
    </div>
  )
}

export default App
