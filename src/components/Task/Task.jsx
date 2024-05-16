import styles from './Task.module.scss'
import { useDispatch } from 'react-redux'
import { doneTask, removeTask } from '../../store/todoSlice.js'

export const Task = (props) => {
  const completedStyledText = props.task.complete
    ? styles.completedTaskText
    : ''

  const dispatch = useDispatch()

  const doneTodo = () => {
    dispatch(doneTask(props.task))
  }

  const removeTodo = () => {
    dispatch(removeTask(props.task))
  }

  return (
    <div className={styles.task}>
      <div className={completedStyledText}>
        {props.task.text}
      </div>
      <div className={styles.buttons}>
        <button
          className={styles.empty}
          onClick={doneTodo}>
          Выполнено
        </button>
        <button
          className={styles.delete}
          onClick={removeTodo}>
          Удалить
        </button>
      </div>
    </div>
  )
}