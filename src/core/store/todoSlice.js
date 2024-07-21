import axios from "axios";
import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'

export const gettingTasks = createAsyncThunk(
  'tasks/fetchingTasks',
  async (_, {rejectWithValue}) => {
    try {
      const responce = await axios.get('https://669c0e8e276e45187d3733f6.mockapi.io/todos');

      return responce.data;
    } catch (e) {
      return rejectWithValue(e.message);
    }
  }
);

export const deleteTask = createAsyncThunk(
  'tasks/deleteTask',
  async ({id}, {rejectWithValue, dispatch}) => {
    try {
      const responce = await axios.delete(`https://669c0e8e276e45187d3733f6.mockapi.io/todos/${id}`);

      dispatch(gettingTasks());

      return responce.data;

    }catch(e) {
      return rejectWithValue(e.message);
    }
  }
);

const initialState = {
  tasks: [],
  foundTasks: [],
  status: null,
  error: null,
}

const todoSlice = createSlice({
  name: 'tasks',
  initialState,
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
  extraReducers: (builder) => {
    builder
      .addCase(gettingTasks.pending, (state) => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(gettingTasks.fulfilled, (state, action) => {
        state.status = 'resolved';
        state.tasks = action.payload;
      })
      .addCase(gettingTasks.rejected, (state, action) => {
        state.status = 'rejected';
        state.error = action.payload;
      })
      .addCase(deleteTask.rejected, (state, action) => {
        state.status = 'rejected';
        state.error = action.payload;
      })
  }
})

export const {
  addTask,
  removeTask,
  doneTask,
  sortTasks,
  searchTask
} = todoSlice.actions
export default todoSlice.reducer