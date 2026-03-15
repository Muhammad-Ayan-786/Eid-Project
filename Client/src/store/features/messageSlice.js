import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import confetti from 'canvas-confetti'

export const setMessageToDB = createAsyncThunk('Send Message', async (message) => {
  const responce = await axios.post('http://localhost:3000/api/message', {
    message: message
  })
  return responce.data
})

const messageSlice = createSlice({
  name: 'message',

  initialState: {
    message: '',
    toggleSendBox: false,
    isError: false
  },

  reducers: {
    setActive: (state, action) => {
      state.toggleSendBox = action.payload
    },
    runCanfetti: () => {
      confetti({
        particleCount: 50,
        spread: 60,
        origin: { y: 0.8 },
        colors: ['#fbbf24', '#d4af37', '#ffffff'],
      })
    }
  },

  extraReducers: (builder) => {
    builder.addCase(setMessageToDB.fulfilled, (state, action) => {
      state.message = action.payload
    })
    builder.addCase(setMessageToDB.rejected, (state) => {
      state.isError = true
    })
  }
})

export const {
  message,
  isError,
  toggleSendBox,
  setActive,
  runCanfetti,
} = messageSlice.actions

export default messageSlice.reducer