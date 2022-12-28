// import { createSlice } from '@reduxjs/toolkit';
// import { persistReducer } from 'redux-persist';
// import storage from 'redux-persist/lib/storage';

// const filterSlice = createSlice({
//   name: 'filter',
//   initialState: { filter: '', },
//   reducers: {
//     setFilter(state, action) {
//       state.filter = action.payload.toLowerCase();
//     },
//   },
// });

// const persistConfig = {
//   key: 'root',
//   storage,
//   blacklist: ['filter'],
// };

// export const filterReducer = persistReducer(persistConfig, filterSlice.reducer);

// export const { setFilter } = filterSlice.actions;

// // selectors

// export const getFilter = state => state.filter;
