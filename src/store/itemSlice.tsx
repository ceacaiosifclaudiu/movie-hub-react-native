import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ItemsState, Movie, Person } from '../types/types';

const initialState: ItemsState = {
  favoriteMovies: [],
  favoriteActors: [],
  isActorFavorite: false
};

const itemsSlice = createSlice({
  name: 'items',
  initialState,
  reducers: {
    addFavoriteActor: (state, action: PayloadAction<Person>) => {
      const actor = action.payload;
      const actorExists = state.favoriteActors.some(
        (favoriteActor) => favoriteActor.id === actor.id
      );
      if (!actorExists) {
        state.favoriteActors.push(actor);
      } else {
        state.favoriteActors = state.favoriteActors.filter(
          (actors) => actors.id !== actor.id
        );
      }
    },
    removeFavoriteActor: (state, action: PayloadAction<Person>) => {
      const actor = action.payload;
      const actorExists = state.favoriteActors.some(
        (favoriteActor) => favoriteActor.id === actor.id
      );
      if (!actorExists) {
        console.log("Actor is not on the list")
      } else {
        console.log("Actor already in list!")
      }
    },
    addFavoriteMovie: (state, action: PayloadAction<Movie>) => {
      const movie = action.payload;
      const movieExist = state.favoriteMovies.some(
        (favoriteMovies) => favoriteMovies.id === movie.id
      );
      if (!movieExist) {
        state.favoriteMovies.push(movie);
      } else {
        console.log("Movie already in list!")

      }
    },
    removeFavoriteMovie: (state, action: PayloadAction<Movie>) => {
      const movie = action.payload;
      const movieExist = state.favoriteMovies.some(
        favoriteMovies => favoriteMovies.id === movie.id
      )

      if (movieExist) {
        state.favoriteMovies = state.favoriteMovies.filter(
          movies => movies.id !== movie.id
        )
      } else {
        console.log("Movie is not on the list!")
      }
    },
    checkIsActorFavorite: (state, action: PayloadAction<Person>) => {
      const actor = action.payload;
      const isFavorite = state.favoriteActors.some((actors) => actors.id === actor.id);
      state.isActorFavorite = isFavorite;
    }
  },
});

export const { addFavoriteMovie, removeFavoriteActor, addFavoriteActor, removeFavoriteMovie, checkIsActorFavorite } = itemsSlice.actions;
export default itemsSlice.reducer;
