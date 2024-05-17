import { useSelector } from 'react-redux'
import { Task } from '../Task'
import styles from './TasksList.module.scss'

export const TasksList = () => {
  const tasks = useSelector(state => state.tasks.tasks)

  return (
    <div className={styles.tasksList}>
      {tasks.map((task) =>
        <Task task={task} key={task.id}/>,
      )}
    </div>
  )
}