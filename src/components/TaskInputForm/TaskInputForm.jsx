import styles from './TaskInputForm.module.scss'

export const TaskInputForm = () => {
  return (
    <div className={styles.form}>
      <input type="text" className={styles.input} placeholder="Введите задачу"/>
      <button type="submit" className={styles.button}>Добавить</button>
    </div>
  )
}