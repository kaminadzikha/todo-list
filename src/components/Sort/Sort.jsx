import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { sortTasks } from '../../store/todoSlice.js'

export const Sort = () => {
  const [isToggled, setIsToggled] = useState(true)

  const dispatch = useDispatch()
  const tasks = useSelector(state => state.tasks.tasks)

  const handleSortTasks = (e) => {
    setIsToggled(!isToggled)

    if (isToggled) {
      dispatch(sortTasks(
        [...tasks].sort((a, b) => a.text.localeCompare(b.text))))
    } else {
      dispatch(sortTasks(
        [...tasks].sort((a, b) => b.text.localeCompare(a.text))))
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