import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

const initialState = {
  characters: []
}

export const getAllCharacters = createAsyncThunk('characters/getAllCharacters', async () => {
  const response = await fetch('https://rickandmortyapi.com/api/character')
  const data = await response.json()
  return data.results
})

const charactersSlice = createSlice({
  name: 'characters',
  initialState,
  extraReducers: (builder) => {
    builder.addCase(getAllCharacters.fulfilled, (state, action) => {
      state.characters = action.payload
    })
  }
})

export default charactersSlice.reducer
