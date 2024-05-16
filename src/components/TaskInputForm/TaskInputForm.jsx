import styles from './TaskInputForm.module.scss'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTask } from '../../store/todoSlice'

export const TaskInputForm = () => {
  const [text, setText] = useState('')

  const dispatch = useDispatch()

  const addTodo = (e) => {
    e.preventDefault()
    dispatch(addTask(text))
    setText('')
  }

  const handleChangeTaskText = (e) => {
    setText(e.target.value)
  }

  return (
    <form className={styles.form}>
      <input
        type="text"
        className={styles.input}
        placeholder="Введите задачу"
        value={text}
        onChange={handleChangeTaskText}
      />
      <button
        type="submit"
        className={styles.button}
        onClick={addTodo}
        disabled={!text}>
        Добавить
      </button>
    </form>
  )
}