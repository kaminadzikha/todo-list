import React from 'react'
import { Sort } from '../Sort'
import { SearchTask } from '../SearchTask'
import styles from './TaskFilters.module.scss'

export const TaskFilters = () => {
  return (
    <div className={styles.filters}>
      <Sort/>
      <SearchTask/>
    </div>
  )
}