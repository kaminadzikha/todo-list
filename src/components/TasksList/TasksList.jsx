import { useMemo } from 'react'
import { useSelector } from 'react-redux'
import { Task } from '../Task'
import { EmptyListMessage } from '../EmptyListMessage/index.js'
import styles from './TasksList.module.scss'

export const TasksList = () => {
  const tasksList = useSelector(state => state.tasks.tasks)
  const foundTasks = useSelector(state => state.tasks.foundTasks)

  const tasks = useMemo(() => {
    if (foundTasks.length) {
      return foundTasks
    }
    return tasksList
  }, [tasksList, foundTasks])

  if (!tasks.length) {
    return <EmptyListMessage/>
  }

  return (
    <div className={styles.tasksList}>
      {tasks.map((task) =>
        <Task task={task} key={task.id}/>,
      )}
    </div>
  )
}