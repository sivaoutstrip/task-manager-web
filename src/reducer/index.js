import { createSlice } from '@reduxjs/toolkit'

export const counterSlice = createSlice({
  name: 'modal',
  initialState: {
    status: false,
  },
  reducers: {
    openModal: (state) => { state.status = true },
    closeModal: (state) => { state.status = false },
  },
})

export const { openModal, closeModal } = counterSlice.actions
export default counterSlice.reducer
