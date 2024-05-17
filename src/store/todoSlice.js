import { createSlice } from '@reduxjs/toolkit'

const todoSlice = createSlice({
  name: 'tasks',
  initialState: {
    tasks: [],
  },
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
  },
})

export const { addTask, removeTask, doneTask } = todoSlice.actions
export default todoSlice.reducer