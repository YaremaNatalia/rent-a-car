import { createSlice } from '@reduxjs/toolkit';
import { fetchAdvertsThunk } from './operations';

const savedFavorites = JSON.parse(localStorage.getItem('favorites'));

const advertsInitialState = {
  items: [],
  isLoading: false,
  error: null,
  favorites: savedFavorites || [],
  page: 1,
  limit: 12,
};

const advertsSlice = createSlice({
  name: 'adverts',
  initialState: advertsInitialState,
  //   reducers: {
  //     changeFavorites(state, action) {
  //       const index = state.favorites.findIndex(
  //         advert => advert.id === action.payload.id
  //       );
  //       index >= 0
  //         ? state.favorites.splice(index, 1)
  //         : state.favorites.push(action.payload);
  //       localStorage.setItem('favorites', JSON.stringify(state.favorites));
  //     },
  //     incPage(state) {
  //       state.page = state.page + 1;
  //     },
  //   },
  extraReducers: builder => {
    builder
      .addCase(fetchAdvertsThunk.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchAdvertsThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items = action.payload;
      })
      .addCase(fetchAdvertsThunk.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const advertsReducer = advertsSlice.reducer;
