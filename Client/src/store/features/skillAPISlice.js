import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getSkills = createAsyncThunk('Skills', async () => {
  const responce = await axios.get("http://localhost:3000/api/get/skills")
  return responce.data.allSkills
})

const skillSlice = createSlice({
  name: 'skills',

  initialState: {
    skills: [],
    isError: false
  },

  extraReducers: (builder) => {
    builder.addCase(getSkills.fulfilled, (state, action) => {
      state.skills = action.payload
      state.isError = false
    })
    builder.addCase(getSkills.rejected, (state) => {
      state.isError = true
      state.skills = []
    })
  }
})

export const { skills, isError } = skillSlice.actions
export default skillSlice.reducer