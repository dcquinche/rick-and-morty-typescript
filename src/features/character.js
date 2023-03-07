import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

const initialState = {
  character: {}
}

export const getCharacterById = createAsyncThunk('characters/getCharacterById', async (id) => {
  const response = await fetch(`https://rickandmortyapi.com/api/character/${id}`)
  const data = await response.json()
  return data
})

const characterSlice = createSlice({
  name: 'character',
  initialState,
  extraReducers: (builder) => {
    builder.addCase(getCharacterById.fulfilled, (state, action) => {
      // eslint-disable-next-line no-param-reassign
      state.character = action.payload
    })
  }
})

export default characterSlice.reducer
