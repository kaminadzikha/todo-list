import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTask } from '../../store/todoSlice'

export const TaskInputForm = ({ setVisible }) => {
  const [taskText, setTaskText] = useState('')

  const dispatch = useDispatch()

  const handleAddTodo = (e) => {
    e.preventDefault()
    const newTask = {
      text: taskText,
      id: Date.now(),
      complete: false,
    }
    dispatch(addTask(newTask))
    setTaskText('')
    setVisible(false)
  }

  const handleChangeTaskText = (e) => {
    setTaskText(e.target.value)
  }

  return (
    <form className="form">
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