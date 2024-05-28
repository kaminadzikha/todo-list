import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  tasks: [
    { text: 'вв', id: '1', complete: false },
    { text: 'бб', id: '2', complete: false },
    { text: 'аа', id: '3', complete: false },
  ],
  foundTasks: []
}

const todoSlice = createSlice({
  name: 'tasks',
  initialState: initialState,
  reducers: {
    addTask: (state, action) => {
      state.tasks.push(action.payload)
    },
    removeTask: (state, action) => {
      state.tasks = action.payload
    },
    doneTask: (state, action) => {
      state.tasks = action.payload
    },
    sortTasks: (state, action) => {
      state.tasks = action.payload
    },
    searchTask: (state, action) => {
      state.foundTasks = action.payload
    }
  },
})

export const {
  addTask,
  removeTask,
  doneTask,
  sortTasks,
  searchTask
} = todoSlice.actions
export default todoSlice.reducer