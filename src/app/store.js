import { configureStore } from '@reduxjs/toolkit'
import charactersReducer from '../features/characters'
import episodesReducer from '../features/episodes'
import locationsReducer from '../features/locations'

const store = configureStore({
  reducer: {
    characters: charactersReducer,
    episodes: episodesReducer,
    locations: locationsReducer,
  }
})

export default store
