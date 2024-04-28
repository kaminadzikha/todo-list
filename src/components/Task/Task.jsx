import styles from './Task.module.scss'

export const Task = () => {
  return (
    <div className={styles.task}>
      <div className={styles.textTask}>Текст задачи</div>
      <div className={styles.buttons}>
        <button className={styles.empty}>Выполнено</button>
        <button className={styles.delete}>Удалить</button>
      </div>
    </div>
  )
}