import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { sortTasks } from '../../store/todoSlice.js'

export const Sort = () => {
  const [isToggled, setIsToggled] = useState(true)

  const dispatch = useDispatch()
  const tasks = useSelector(state => state.tasks.tasks)

  const handleSortTasks = () => {
    setIsToggled(!isToggled)
    if (isToggled) {
      dispatch(sortTasks(
        [...tasks].sort((a, b) => a.title.localeCompare(b.title))))
    } else {
      dispatch(sortTasks(
        [...tasks].sort((a, b) => b.title.localeCompare(a.title))))
    }
  }

  return (
    <div>
      <button
        onClick={handleSortTasks}>
        {isToggled
          ? 'Отсортировать по алфавиту'
          : 'Отсортировать в обратном порядке'}
      </button>
    </div>
  )
}