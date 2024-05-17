import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTask } from '../../store/todoSlice'
import styles from './TaskInputForm.module.scss'

export const TaskInputForm = () => {
  const [taskText, setTaskText] = useState('')

  const dispatch = useDispatch()

  const handleAddTodo = (e) => {
    e.preventDefault()
    const newTask = {
      text: taskText,
      id: Date.now(),
      complete: false
    }
    dispatch(addTask(newTask))
    setTaskText('')
  }

  const handleChangeTaskText = (e) => {
    setTaskText(e.target.value)
  }

  return (
    <form className={styles.form}>
      <input
        type="text"
        placeholder="Введите задачу"
        value={taskText}
        onChange={handleChangeTaskText}
      />
      <button
        type="submit"
        onClick={handleAddTodo}
        disabled={!taskText}>
        Добавить
      </button>
    </form>
  )
}