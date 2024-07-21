import { useMemo, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { searchTask } from '../../store/todoSlice.js'

export const SearchTask = () => {
  const [searchText, setSearchText] = useState('')

  const dispatch = useDispatch()
  const tasks = useSelector(state => state.tasks.tasks)

  const foundTasks = useMemo(() => {
    return tasks.filter(
      task => task.title.toLowerCase().includes(searchText.toLowerCase()))
  }, [searchText, tasks])

  if (foundTasks) {
    dispatch(searchTask(foundTasks))
  } else {
    dispatch(searchTask())
  }

  const handleSearchTask = (e) => {
    setSearchText(e.target.value)
  }

  return (
    <div>
      <input
        type="text"
        placeholder={'Поиск...'}
        value={searchText}
        onChange={handleSearchTask}
      />
    </div>
  )
}