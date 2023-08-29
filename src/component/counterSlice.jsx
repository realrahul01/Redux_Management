import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: 2490701,
}

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    decrementBy10000: (state) => {
      state.value -= 10000
    },
    decrementBy5000: (state) => {
      state.value -= 5000
    },
  },
})

// Action creators are generated for each case reducer function
export const { decrementBy10000, decrementBy5000} = counterSlice.actions

export default counterSlice.reducer