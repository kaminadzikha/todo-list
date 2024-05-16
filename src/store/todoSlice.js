import { createSlice } from '@reduxjs/toolkit'

const todoSlice = createSlice({
  name: 'tasks',
  initialState: {
    tasks: [],
  },
  reducers: {
    addTask: (state, action) => {
      state.tasks.push({
        text: action.payload,
        id: Date.now(),
        complete: false,
      })
    },
    removeTask: (state, action) => {
      state.tasks = state.tasks.filter(task => task.id !== action.payload.id)
    },
    doneTask: (state, action) => {
      const doneTodo = state.tasks.find(task => task.id === action.payload.id)
      doneTodo.complete = !doneTodo.complete;
    },
  },
})

export const { addTask, removeTask, doneTask } = todoSlice.actions
export default todoSlice.reducer