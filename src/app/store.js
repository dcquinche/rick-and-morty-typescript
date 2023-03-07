import { configureStore } from '@reduxjs/toolkit'
import charactersReducer from '../features/characters'
import episodesReducer from '../features/episodes'
import locationsReducer from '../features/locations'
import characterReducer from '../features/character'

const store = configureStore({
  reducer: {
    characters: charactersReducer,
    episodes: episodesReducer,
    locations: locationsReducer,
    character: characterReducer
  }
})

export default store
