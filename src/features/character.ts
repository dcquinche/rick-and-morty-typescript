import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

const initialState = {
  character: {}
}

export const getCharacterById = createAsyncThunk('characters/getCharacterById', async (id: number) => {
  const response = await fetch(`https://rickandmortyapi.com/api/character/${id}`)
  const data = await response.json()
  return data
})

const characterSlice = createSlice({
  name: 'character',
  initialState,
  extraReducers: (builder) => {
    builder.addCase(getCharacterById.fulfilled, (state, action) => {
      state.character = action.payload
    })
  },
})

export default characterSlice.reducer
