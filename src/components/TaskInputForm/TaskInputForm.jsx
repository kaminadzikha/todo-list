import styles from './TaskInputForm.module.scss'
import { useState } from 'react'

export const TaskInputForm = ({ create }) => {
  const [task, setTask] = useState({ value: '' })

  const addNewTask = (e) => {
    e.preventDefault()
    create({ ...task, id: Date.now(), complete: false })
    setTask({ value: '' })
  }

  return (
    <form className={styles.form}>
      <input
        type="text"
        className={styles.input}
        placeholder="Введите задачу"
        value={task.value}
        onChange={e => setTask({ value: e.target.value })}
      />
      <button
        type="submit"
        className={styles.button}
        onClick={addNewTask}
        disabled={!task.value}>
        Добавить
      </button>
    </form>
  )
}