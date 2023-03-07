import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

const initialState = {
  locations: []
}

export const getAllLoctations = createAsyncThunk('characters/getAllLocations', async () => {
  const response = await fetch('https://rickandmortyapi.com/api/location')
  const data = await response.json()
  return data.results
})

const locationsSlice = createSlice({
  name: 'locations',
  initialState,
  extraReducers: (builder) => {
    builder.addCase(getAllLoctations.fulfilled, (state, action) => {
      state.locations = action.payload
    })
  }
})

export default locationsSlice.reducer
