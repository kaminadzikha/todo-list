import { Task } from '../Task'
import styles from './TasksList.module.scss'

export const TasksList = ({ remove, done, tasks }) => {
  return (
    <div className={styles.tasksList}>
      {tasks.map((task) =>
        <Task remove={remove} done={done} task={task} key={task.id}/>
      )}
    </div>
  )
}