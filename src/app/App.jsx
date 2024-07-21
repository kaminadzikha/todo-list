import {useEffect, useState} from 'react'
import {Header} from '../core/components/Header/index.js'
import {TaskInputForm} from '../core/components/TaskInputForm/index.js'
import {TasksList} from '../core/components/TasksList/index.js'
import {ModalWindow} from '../core/components/ModalWindow/index.js'
import {TaskFilters} from '../core/components/TaskFilters/index.js'
import './App.css'
import {useDispatch} from "react-redux";
import {gettingTasks} from "../core/store/todoSlice.js";

function App() {
  const dispatch = useDispatch()
  const [modal, setModal] = useState(false)

  useEffect(
    () => {
      dispatch(gettingTasks())
    }, [dispatch])


  return (
    <div className="app">
      <ModalWindow visible={modal} setVisible={setModal}>
        <TaskInputForm setVisible={setModal}/>
      </ModalWindow>
      <Header/>
      <button onClick={() => setModal(true)}>Новая задача</button>
      <TaskFilters/>
      <TasksList/>
    </div>
  )
}

export default App