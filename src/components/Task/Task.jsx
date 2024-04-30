import styles from './Task.module.scss'

export const Task = (props) => {
  const completedStyledText = props.task.complete
    ? { textDecoration: 'line-through', color: 'gray' }
    : {}

  return (
    <div className={styles.task}>
      <div style={completedStyledText}>
        {props.task.value}
      </div>
      <div className={styles.buttons}>
        <button
          className={styles.empty}
          onClick={() => props.done(props.task)}>
          Выполнено
        </button>
        <button
          className={styles.delete}
          onClick={() => props.remove(props.task)}>
          Удалить
        </button>
      </div>
    </div>
  )
}