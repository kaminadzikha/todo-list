import styles from './Task.module.scss'

export const Task = (props) => {
  const completedStyledText = props.task.complete
    ? styles.completedTaskText
    : ''

  const doneTask = () => {
    props.done(props.task)
  }

  const removeTask = () => {
    props.remove(props.task)
  }

  return (
    <div className={styles.task}>
      <div className={completedStyledText}>
        {props.task.value}
      </div>
      <div className={styles.buttons}>
        <button
          className={styles.empty}
          onClick={doneTask}>
          Выполнено
        </button>
        <button
          className={styles.delete}
          onClick={removeTask}>
          Удалить
        </button>
      </div>
    </div>
  )
}