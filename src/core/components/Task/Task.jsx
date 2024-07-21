import { useDispatch, useSelector } from 'react-redux'
import {deleteTask, doneTask, removeTask} from '../../store/todoSlice.js'
import styles from './Task.module.scss'

export const Task = ({task}) => {
  const dispatch = useDispatch()
  const tasks = useSelector(state => state.tasks.tasks)

  const completedStyledText = task.completed
    ? styles.completedTaskText
    : ''

  const handleDoneTodo = () => {
    const filteredTasks =  tasks.map(
      t => t.id !== task.id ? t : { ...task, completed: !task.completed })
    dispatch(doneTask(filteredTasks))
  }

  const handleRemoveTodo = () => {
    /*const filteredTasks = tasks.filter((t) => t.id !== task.id)*/
    dispatch(deleteTask({id: task.id}))
  }

  return (
    <div className={styles.task}>
      <div className={completedStyledText}>
        {task.title}
      </div>
      <div className={styles.buttons}>
        <button
          className={styles.empty}
          onClick={handleDoneTodo}>
          Выполнено
        </button>
        <button
          className={styles.delete}
          onClick={handleRemoveTodo}>
          Удалить
        </button>
      </div>
    </div>
  )
}