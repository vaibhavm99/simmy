import { createStore } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web

// Initial state
const initialState = {
  user: null, // This will store your login data globally
};

// Reducer function to update the state
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_USER':
      return {
        ...state,
        user: {
          ...state.user, // Keep existing user data if there's any
          ...action.payload, // Set or update the user data from the signup page
        },
      };
    case 'SET_SURVEY':
      return {
        ...state,
        user: {
          ...state.user, // Keep existing user data
          ...action.payload, // Merge survey data (q1, q2, q3) into the user object
        },
      };
      case 'SET_USER_DATA':
      return {
        ...state,
        user: action.payload, // Directly set the user data from the backend
      };
    default:
      return state;
  }
};

// Persist configuration
const persistConfig = {
  key: 'root',
  storage, // Use localStorage to persist the state
};

// Create a persisted reducer
const persistedReducer = persistReducer(persistConfig, reducer);

// Create the Redux store with the persisted reducer
const store = createStore(persistedReducer);

// Create a persistor
export const persistor = persistStore(store);

export default store;