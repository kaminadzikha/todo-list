import { useMemo } from 'react'
import { useSelector } from 'react-redux'
import { Task } from '../Task'
import { EmptyListMessage } from '../EmptyListMessage/index.js'
import styles from './TasksList.module.scss'

export const TasksList = () => {
  const {tasks, foundTasks, status, error} = useSelector(state => state.tasks)

  const tasksList = useMemo(() => {
    if (foundTasks.length) {
      return foundTasks
    }
    return tasks
  }, [tasks, foundTasks])

  return (
    <div className={styles.tasksList}>
      {!tasksList&&<EmptyListMessage/>}
      {status==='loading'&&<div>Загрузка...</div>}
      {error&&<div>{error}</div>}
      {tasksList.map((task) =>
        <Task task={task} key={task.id}/>,
      )}
    </div>
  )
}