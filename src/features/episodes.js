import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

const initialState = {
  episodes: []
}

export const getAllEpisodes = createAsyncThunk('episodes/getAllEpisodes', async () => {
  const response = await fetch('https://rickandmortyapi.com/api/episode')
  const data = await response.json()
  return data.results
})

const episodesSlice = createSlice({
  name: 'episodes',
  initialState,
  extraReducers: (builder) => {
    builder.addCase(getAllEpisodes.fulfilled, (state, action) => {
      state.episodes = action.payload
    })
  }
})

export default episodesSlice.reducer
