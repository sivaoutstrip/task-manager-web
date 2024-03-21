import { createSlice } from '@reduxjs/toolkit'

export const counterSlice = createSlice({
  name: 'modal',
  initialState: {
    status: false,
    tasks: [],
  },
  reducers: {
    openModal: (state) => { state.status = true },
    closeModal: (state) => { state.status = false },
    addTask: (state, action) => {
      const tasks = state.tasks;
      tasks.unshift(action.payload);
      state.tasks = tasks
    },
    setTasks: (state, action) => { state.tasks = action.payload }
  },
})

export const { openModal, closeModal, addTask, setTasks } = counterSlice.actions
export default counterSlice.reducer
