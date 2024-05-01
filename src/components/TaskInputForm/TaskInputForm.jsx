import styles from './TaskInputForm.module.scss'
import { useState } from 'react'

export const TaskInputForm = ({ create }) => {
  const [value, setValue] = useState('')

  const addNewTask = (e) => {
    e.preventDefault()
    create({ value, id: Date.now(), complete: false })
    setValue('')
  }

  const handleChangeTaskText = (e) => {
    setValue(e.target.value)
  }

  return (
    <form className={styles.form}>
      <input
        type="text"
        className={styles.input}
        placeholder="Введите задачу"
        value={value}
        onChange={handleChangeTaskText}
      />
      <button
        type="submit"
        className={styles.button}
        onClick={addNewTask}
        disabled={!value}>
        Добавить
      </button>
    </form>
  )
}